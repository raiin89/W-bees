import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Feathers } from 'feather.service';
import { SnakBarService } from '../../../services/snak-bar.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
  animations   : fuseAnimations
})
export class JobDetailsComponent implements OnInit {

//   order: Order;
  bidForm: FormGroup;
  jobId: any;
  jobDetails: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _Activatedroute: ActivatedRoute,
    private feather: Feathers,
    private snakbar: SnakBarService,
    private router: Router
  ) {
   }

  ngOnInit(): void {
    this.bidForm = this._formBuilder.group({
        description     : ['', Validators.required],
        price           : ['', Validators.required]
    });
    this.jobId = this._Activatedroute.snapshot.paramMap.get('id');
    this.getJobDetails();
  }

  getJobDetails(): void {
    this.feather.get('jobs', this.jobId).then(res => {
        this.jobDetails = res;
    }, err => {
        console.log('err', err);
    });
  }

  submitBid = (bidForms) => {

    bidForms.jobId = this.jobDetails.id;
    this.feather.create('bids', {
      ...bidForms
    }).then(res => {
      this.snakbar.success('You added a job succesfully.');
      this.router.navigate(['/bidder/near-by-jobs']);
    }, err => {
        console.log('err', err);
        this.snakbar.error(err.message);
    });

  }

}
