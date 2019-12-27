import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import feathers from '@feathersjs/feathers';
// import { Feathers } from 'feather.service';
// const feathers = require('@feathersjs/feathers');
// const app = feathers();
import { Router, ActivatedRoute } from '@angular/router';
import { SnakBarService } from '../../../services/snak-bar.service';
import { FormGroup, Validators, FormBuilder, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ResetComponent implements OnInit {
  private _feathers = feathers();

  token: any;
  newPasswordForm: FormGroup;
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snakBar: SnakBarService,
    // private feathers: Feathers
  ) {
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

        this.activatedRoute.queryParams.subscribe(params => {
            this.token = params['token'];
            console.log('token', this.token); // Print the parameter to the console.
        });
   }

  ngOnInit(): void {
    this.newPasswordForm = this._formBuilder.group({
        newPassword: ['', Validators.required],
        confirmPassword: ['', [Validators.required, confirmPasswordValidator]]
    });
  }

  setNewPassword = (newPass) => {
    console.log('pass', newPass);
    this._feathers.service('authManagement').create({
        action: 'resetPwdLong',
        value: {
            token: this.token,
            password: newPass.newPassword
        }
    })
    .then(res => {
        this.snakBar.success('Your password is changed successfully.');
        setTimeout(() => { this.router.navigate(['/login']); }, 2000);
    }, err => {
        this.snakBar.error(err.message);
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

