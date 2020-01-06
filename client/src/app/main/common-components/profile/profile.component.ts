import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Feathers } from 'feather.service';
import { SnakBarService } from 'app/services/snak-bar.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProfileComponent implements OnInit {
    profileOne: FormGroup;
    profileTwo: FormGroup;
    userDetails: any;
    username: string;
    role: string;
    email: string;
    editProfile = false;
    /**
     * Constructor
     */
    constructor(
        private formBuilder: FormBuilder,
        private feathers: Feathers,
        private snakbar: SnakBarService
    ) {
    }

    ngOnInit(): void {
        if (localStorage.getItem('user-details')) {
            this.userDetails = JSON.parse(localStorage.getItem('user-details'));
            this.username = this.userDetails.username;
            this.role = this.userDetails.role;
            this.email = this.userDetails.email;

            console.log('user-details toolbar', this.userDetails);
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
            }, err => {
                console.log('profile update err', err);
            });
        } else {
            this.editProfile = !this.editProfile;
            console.log('update', this.editProfile);
        }
    }

    uploadProfilePic = () => {
        console.log('upload profile pic');
        this.snakbar.success('Functionality not implemented yet.');
    }
}
