import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, FormArray } from '@angular/forms';
import { Subject, from } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Feathers } from 'feather.service';
// const feathers = require('@feathersjs/feathers');
// const app = feathers();
import { Router } from '@angular/router';

import { SnakBarService } from '../../../services/snak-bar.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerForm: FormGroup;
    location: any = {
        type: 'Point'
    };
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private snakBarService: SnakBarService,
        private feathers: Feathers
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.registerForm = this._formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            zipcode: ['', Validators.required],
            role: ['', Validators.required],
            lat: ['', Validators.required],
            long: ['', Validators.required],
            password: ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.registerForm.get('passwordConfirm').updateValueAndValidity();
            });

        // this.getCurrentPosition();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    getCurrentPosition = () => {
        if (navigator.geolocation) {
            console.log('Enter in navigator.geolocation');
            navigator.geolocation.getCurrentPosition(position => {
                this.location.coordinates = [
                    position.coords.latitude,
                    position.coords.longitude
                ];
                // this.location.coordinates = [
                //     28.7041,
                //     77.1025
                // ];
                console.log('pos', this.location);
            });
        } else {
            console.log('Navigator.geolocation not working');
            this.location.coordinates = [0, 0];
            console.log('else pos', this.location);
        }
    }

    async submitRegisterForm(registerFormData): Promise<any> {
        registerFormData.location = this.location;
        const newForm = {
            username: registerFormData.username,
            email: registerFormData.email,
            zipcode: registerFormData.zipcode,
            role: registerFormData.role,
            location: {
                type: 'Point',
                coordinates: [Number(registerFormData.lat), Number(registerFormData.long)]
            },
            password: registerFormData.password,
            passwordConfirm: registerFormData.passwordConfirm
        };
        console.log('registerForm', newForm);
        this.feathers.create('users', {
            ...newForm
        }).then(res => {
            this.snakBarService.success('Congratulations!!!, Your account verification email is sent to the email address you provided.');
            // setTimeout(() => { this.router.navigate(['/login']); }, 2000);
        }, err => {
            this.snakBarService.error(err.message);
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

    if (!control.parent || !control) {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return null;
    }

    if (passwordConfirm.value === '') {
        return null;
    }

    if (password.value === passwordConfirm.value) {
        return null;
    }

    return { passwordsNotMatching: true };
};
