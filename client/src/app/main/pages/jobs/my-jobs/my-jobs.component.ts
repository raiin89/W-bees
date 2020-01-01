import { Component, OnInit } from '@angular/core';
import { Feathers } from 'feather.service';
import { SnakBarService } from '../../../../services/snak-bar.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss'],
  animations: fuseAnimations
})
export class MyJobsComponent implements OnInit {

  myJobs: any;
  userId: any;

  constructor(
    private snakbar: SnakBarService,
    private feathers: Feathers
  ) { }

  ngOnInit(): void {
      this.userId = JSON.parse(localStorage.getItem('user-details')).id;
      this.getMyJobs();

  }

  getMyJobs = () => {
    this.feathers.find('jobs', {
        query: {createdBy: this.userId}
    })
    .then(res => {
        this.myJobs = res;
        console.log('res', res);
    }, err => {
        console.log('err', err);
    });
  }
}
