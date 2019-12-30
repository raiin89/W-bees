import { Component, OnInit } from '@angular/core';
import { Feathers } from 'feather.service';
import { SnakBarService } from '../../../services/snak-bar.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-near-by-jobs',
    templateUrl: './near-by-jobs.component.html',
    styleUrls: ['./near-by-jobs.component.scss']
})
export class NearByJobsComponent implements OnInit {

    nearByJobs: any = [];

    constructor(
        private feathers: Feathers
    ) { }

    ngOnInit(): void {
        this.getNearByJobs();
    }

    getNearByJobs = () => {
        this.feathers.find('jobs', {
            query: { status: 'open' }
        }).then(res => {
            this.nearByJobs = res;
        }, err => {
            console.log('err', err);
        });
    }

}
