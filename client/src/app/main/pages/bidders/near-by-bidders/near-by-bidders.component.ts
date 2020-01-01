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

    constructor(
        private feather: Feathers
    ) { }

    ngOnInit(): void {
    }

    getBiddersList = () => {
        this.feather.find('users',{
            query: {
                userRoleId: 2
            }
        })
        .then(res => {
            this.bidders = res;
            console.log('bidders', res);
        }, err => {
            console.log('bidders err', err);
        });
    }
}
