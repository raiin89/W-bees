import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feathers } from 'feather.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-bids-on-job',
    templateUrl: './bids-on-job.component.html',
    styleUrls: ['./bids-on-job.component.scss'],
    animations: fuseAnimations
})
export class BidsOnJobComponent implements OnInit {

    jobId: any;
    bidsList: any;
    constructor(
        private _Activatedroute: ActivatedRoute,
        private router: Router,
        private feather: Feathers
    ) { }

    ngOnInit(): void {
        this.jobId = this._Activatedroute.snapshot.paramMap.get('id');
        console.log('jobId', this.jobId);
        this.getBidsOnJob();
    }

    getBidsOnJob = () => {
        this.feather.find('bids', {
            query: {
                jobId: this.jobId
            }
        }).then(res => {
            console.log('res', res);
            this.bidsList = res;
        }, err => {
            console.log('err', err);
        });
    }

    acceptBid = (bidId: any) => {
        console.log('acceptBid BidId', bidId);
        this.feather.patch('bids', {
            id: bidId,
            updates: {
                status: 'accepted'
            }
        })
        .then(res => {
            console.log('res', res);
            this.getBidsOnJob();
        }, err => {
            console.log('err', err);
        });
    }

    declineBid = (bidId: any) => {
        console.log('declineBid BidId', bidId);
        this.feather.patch('bids', {
            id: bidId,
            updates: {
                status: 'declined'
            }
        })
        .then(res => {
            console.log('res', res);
            this.getBidsOnJob();
        }, err => {
            console.log('err', err);
        });
    }

}
