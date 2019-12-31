import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute } from '@angular/router';
import { Feathers } from 'feather.service';

const orderStatuses = [
    {
        id   : 1,
        name : 'Awaiting check payment',
        color: 'blue-500'
    },
    {
        id   : 2,
        name : 'Payment accepted',
        color: 'green-500'
    },
    {
        id   : 3,
        name : 'Preparing the order',
        color: 'orange-500'
    },
    {
        id   : 4,
        name : 'Shipped',
        color: 'purple-500'
    },
    {
        id   : 5,
        name : 'Delivered',
        color: 'green-800'
    },
    {
        id   : 6,
        name : 'Canceled',
        color: 'pink-500'
    },
];

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
  animations   : fuseAnimations
})
export class JobDetailsComponent implements OnInit {

//   order: Order;
  orderStatuses: any;
  bidForm: FormGroup;
  jobId: any;
  jobDetails: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _Activatedroute: ActivatedRoute,
    private feather: Feathers
  ) {
    this.orderStatuses = orderStatuses;
   }

  ngOnInit(): void {
    this.bidForm = this._formBuilder.group({
        description     : [''],
        price           : [''],
    });
    this.jobId = this._Activatedroute.snapshot.paramMap.get('id');
    console.log('Job details job id', this.jobId);
    this.getJobDetails();
  }

  getJobDetails(): void {
    this.feather.get('jobs', this.jobId).then(res => {
        this.jobDetails = res;
        console.log('JobDetails', this.jobDetails);
    }, err => {
        console.log('err', err);
    });
  }

  submitBid = (bidForms) => {
      console.log('bid data', bidForms);
    //   this.feather.create
  }
  createBidForm(): FormGroup
  {
      return this._formBuilder.group({
          description     : [''],
          price           : [''],
      });
  }

}
