import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import { Feathers } from 'feather.service';
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
        private snakbar: SnakBarService,
        private feathers: Feathers
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
        });

    }

    submitforgotPasswordForm(data): void {
        this.feathers.create('authManagement', {
            action: 'sendResetPwd',
            value: {
                email: data.email,
            }
        }).then(res => {
            console.log(res);
            if (this.requestResult !== undefined){
                this.requestId = this.requestResult['id'];
                this.snakbar.success('You can reset your password.');
            }else{
                this.snakbar.error('Something is not right. Please verify your details.');
            }
        }, err => {
            this.snakbar.error(err.message);
        });
    }

}
