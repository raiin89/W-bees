import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import client from 'feather.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router
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
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        // client.service('users')
        //     .find().then(r => {
        //         console.log(r);
        //     })
        this.loginForm = this._formBuilder.group({
            email: ['test@gmail.com', [Validators.required, Validators.email]],
            password: ['password', Validators.required]
        });
    }

    submit() {
        client.authenticate({
            strategy: 'local',
            ...this.loginForm.value
        }).then(res => {
            localStorage.setItem('feather-jwt', res.access_token);
            localStorage.setItem('user-details', JSON.stringify(res.user));
            this.router.navigate(['/dashboard']);
        }, err => {
            console.log('Invalid credentials', err);
        });
    }
}
