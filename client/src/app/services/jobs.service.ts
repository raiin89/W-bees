import { Injectable } from '@angular/core';
import { Feathers } from 'feather.service';

@Injectable({
    providedIn: 'root'
})
export class JobsService {

    constructor(private feathers: Feathers) { }

    getNearByJobs = () => {
        this.feathers.find('jobs', {
            query: { status: 'open' }
        }).then(res => {
        }, err => {
            console.log('err', err);
        });
    }
}
