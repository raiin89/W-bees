import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Feathers } from 'feather.service';
// const feathers = require('@feathersjs/feathers');
// const app = feathers();
import { Router } from '@angular/router';

import { SnakBarService } from '../../../services/snak-bar.service';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LoginComponent implements OnInit
{
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
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
        this.feathers.reAuthenticate()
        .then(res => {
            this.router.navigate(['/dashboard']);
        }).catch(err => {
        });
    }

    submitLoginForm(loginData): void {

        this.feathers.authenticate({
            strategy: 'local',
            ...loginData
        }).then(res => {
            localStorage.setItem('user-details', JSON.stringify(res.user));
            this.router.navigate(['/dashboard']);
            this.snakbar.success('You logged in successfully.');
        }, err => {
            this.snakbar.error(err.message);
        });
    }
}
