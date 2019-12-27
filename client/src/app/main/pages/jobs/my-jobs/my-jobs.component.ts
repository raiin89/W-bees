import { Component, OnInit } from '@angular/core';
import { Feathers } from 'feather.service';
import { SnakBarService } from '../../../../services/snak-bar.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss']
})
export class MyJobsComponent implements OnInit {

  myJobs: any;

  constructor(
    private snakbar: SnakBarService,
    private feathers: Feathers
  ) { }

  ngOnInit(): void {
      this.getMyJobs();
  }

  getMyJobs = () => {
    this.feathers.find('jobs', {
        query: {createdBy: 1}
    })
    .then(res => {
        this.myJobs = res;
    }, err => {
        console.log('err', err);
    });
  }
}
