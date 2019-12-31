import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'seeker-job-card',
    templateUrl: './seeker-job-card.component.html',
    styleUrls: ['./seeker-job-card.component.scss'],
    animations: fuseAnimations
})
export class SeekerJobCardComponent implements OnInit {

    @Input() jobs: any;
    @Output() changeData = new EventEmitter();
    //   changeJobs() {
    //     // emitting changeName custom event
    //     this.changeJobs.emit();
    //   }

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChange(changes: SimpleChange): void {
        console.log('Jobs Data', this.jobs);

    }

    getJobID = (job) => {
        console.log('Job ID', job);
    }
}
