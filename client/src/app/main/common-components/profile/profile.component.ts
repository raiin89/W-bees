import { Component, ViewEncapsulation, OnInit, OnChanges } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Feathers } from 'feather.service';
import { SnakBarService } from 'app/services/snak-bar.service';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'environments/environment';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProfileComponent implements OnChanges, OnInit {

    API = environment.API;
    AuthToken = '';

    profileImageSrc = 'assets/images/avatars/profile.jpg';
    profileOne: FormGroup;
    profileTwo: FormGroup;
    userDetails: any;
    username: string;
    role: string;
    email: string;
    editProfile = false;
    imagePath = '';
    /**
     * Constructor
     */
    constructor(
        private formBuilder: FormBuilder,
        private feathers: Feathers,
        private snakbar: SnakBarService,
        private router: Router
    ) {
    }

    ngOnChanges(): void {
    }
    ngOnInit(): void {
        if (localStorage.getItem('user-details')) {
            this.userDetails = JSON.parse(localStorage.getItem('user-details'));
            this.username = this.userDetails.username;
            this.role = this.userDetails.role;
            this.email = this.userDetails.email;

            if (this.userDetails.profilePic === null){
                this.profileImageSrc = 'assets/images/avatars/profile.jpg';
            }else{
                this.profileImageSrc = this.API + this.userDetails.profilePic;
            }

            console.log('user-details toolbar', this.userDetails);
        }

        if (localStorage.getItem('feathers-jwt')){
            this.AuthToken = localStorage.getItem('feathers-jwt');
        }

        this.profileOne = this.formBuilder.group({ username: [this.username, Validators.required] });
        this.profileTwo = this.formBuilder.group({ email: [this.email, Validators.required] });
    }

    handleProfileUpdate = () => {
        console.log('update', this.profileOne.value);
        if (this.editProfile) {
            // this.editProfile = !this.editProfile;
            this.feathers.patch('users', {
                id: this.userDetails.id,
                updates: {
                    username: this.profileOne.value.username,
                    email: this.profileTwo.value.email
                }
            })
            .then(res => {
                console.log('res handleProfile', res);
                this.editProfile = !this.editProfile;
                localStorage.setItem('user-details', JSON.stringify(res));
                this.snakbar.success('Your profile is updated successfully');
                window.location.reload();
            }, err => {
                console.log('profile update err', err);
            });
        } else {
            this.editProfile = !this.editProfile;
            console.log('update', this.editProfile);
        }
    }

    uploadFile = ($event) => {
        if ($event.target.files.length === 0) {
            return;
        }else{
            const file = $event.target.files[0];
            const fd = new FormData();

            fd.append('file', file);

            axios.post(this.API + '/media', fd, {
                headers: { Authorization: 'Bearer ' + this.AuthToken }
            })
            .then(resp => {
                this.imagePath = resp.data.url;
                this.uploadProfilePic();
            }, err => {
                console.log('err', err);
            });
        }
    }

    uploadProfilePic = () => {
        this.feathers.patch('users', {
            id: this.userDetails.id,
            updates: {
                profilePic: this.imagePath
            }
        })
        .then(res => {
            localStorage.setItem('user-details', JSON.stringify(res));
            window.location.reload();
        }, err => {
            console.log('res', err);
        });
    }
}
