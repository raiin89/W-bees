import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import client from 'feather.service';
import { Router } from '@angular/router';

import { SnakBarService } from '../../../services/snak-bar.service';

@Component({
    selector     : 'forgot-password',
    templateUrl  : './forgot-password.component.html',
    styleUrls    : ['./forgot-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ForgotPasswordComponent implements OnInit
{
    forgotPasswordForm: FormGroup;
    newPasswordForm: FormGroup;
    openResetForm = false;
    requestResult = {};
    requestId: any;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private snakbar: SnakBarService
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            securityQuestion    :   ['', Validators.required],
            securityAnswer      :   ['', Validators.required]
        });

        this.newPasswordForm = this._formBuilder.group({
            newPassword: ['', Validators.required],
            confirmPassword: ['', [Validators.required, confirmPasswordValidator]]
        });
    }

    submitforgotPasswordForm(data): void {
        client.service('users').find({
            query: {
                email: data.email,
                securityQuestion: data.securityQuestion,
                securityAnswer: data.securityAnswer
            }
        }).then(res => {
            this.requestResult = res[0];
            if (this.requestResult !== undefined){
                this.requestId = this.requestResult['id'];
                this.openResetForm = true;
                this.snakbar.success('You can reset your password.');
            }else{
                this.snakbar.error('Something is not right. Please verify your details.');
            }
        }, err => {
            this.snakbar.error(err.message);
        });
    }

    setNewPassword(newPass): void {

        client.service('users').patch(this.requestId, {
            password: newPass.password
        }).then(res => {
            this.openResetForm = true;
            this.snakbar.success('Your password is changed successfully.');
            setTimeout(() => { this.router.navigate(['/login']); }, 2000);
        }, err => {
            this.snakbar.error(err.message);
        });

    }
}


/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if ( !control.parent || !control )
    {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return null;
    }

    if ( passwordConfirm.value === '' )
    {
        return null;
    }

    if ( password.value === passwordConfirm.value )
    {
        return null;
    }

    return {passwordsNotMatching: true};
};
