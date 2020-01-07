import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Feathers } from 'feather.service';
import { environment } from 'environments/environment';
import { SnakBarService } from 'app/services/snak-bar.service';

@Component({
    selector: 'app-near-by-bidders',
    templateUrl: './near-by-bidders.component.html',
    styleUrls: ['./near-by-bidders.component.scss'],
    animations: fuseAnimations
})
export class NearByBiddersComponent implements OnInit {

    API = environment.API;

    bidders: any;
    location: any;
    userDetails: any;
    connected = false;

    constructor(
        private feather: Feathers,
        private snakbar: SnakBarService
    ) { }

    ngOnInit(): void {
        if (localStorage.getItem('user-details') !== undefined){
            this.userDetails = JSON.parse(localStorage.getItem('user-details'));
            this.location = this.userDetails.location.coordinates;
        }
        this.getBiddersList();
    }

    getBiddersList = () => {
        const request = {
            userRoleId: 2,
            lat: this.location[0],
            long: this.location[1]
        };
        this.feather.find('users', {
            query: request
        })
        .then(res => {
            this.bidders = res;
            console.log('res bidders ', res);
        }, err => {
            console.log('bidders err', err);
        });
    }

    connectToBidder = ($id) => {
        const roomId = this.userDetails.id + '_' + $id;
        console.log('ID', roomId);
        this.feather.create('conversations', {
            roomId,
            senderId: this.userDetails.id,
            receiverId: $id
        })
        .then(res => {
            console.log('res', res);
            if (res.roomId){
                this.snakbar.success('Your connection is established successfully.');
                // this.connected = true;
            }
        }, err => {
            console.log('err', err);
            this.snakbar.success(err.message);
        });
    }
}
