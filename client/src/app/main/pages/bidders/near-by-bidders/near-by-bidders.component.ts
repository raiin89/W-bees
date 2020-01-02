import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Feathers } from 'feather.service';

@Component({
    selector: 'app-near-by-bidders',
    templateUrl: './near-by-bidders.component.html',
    styleUrls: ['./near-by-bidders.component.scss'],
    animations: fuseAnimations
})
export class NearByBiddersComponent implements OnInit {

    bidders: any;
    location: any;
    constructor(
        private feather: Feathers
    ) { }

    ngOnInit(): void {
        if (localStorage.getItem('user-details') !== undefined){
            this.location = JSON.parse(localStorage.getItem('user-details')).location.coordinates;
            console.log('location', this.location);
        }
        this.getBiddersList();
    }

    getBiddersList = () => {
        const request = {
            userRoleId: 2,
            lat: this.location[0],
            long: this.location[1]
        };
        console.log('request: ', request);
        this.feather.find('users', {
            query: request
        })
        .then(res => {
            this.bidders = res;
            console.log('bidders', res);
        }, err => {
            console.log('bidders err', err);
        });
    }
}
