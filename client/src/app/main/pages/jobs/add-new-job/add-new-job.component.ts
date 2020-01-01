import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

import { Feathers } from 'feather.service';
import { SnakBarService } from '../../../../services/snak-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.scss'],
  animations   : fuseAnimations
})
export class AddNewJobComponent implements OnInit {

  jobsForm: FormGroup;
  userDetails: any;
  id: any;
  constructor(
      private formBuilder: FormBuilder,
      private snakbar: SnakBarService,
      private feathers: Feathers,
      private router: Router,
  ) { }

  ngOnInit(): void {
    this.jobsForm = this.formBuilder.group({
        title               :   ['', Validators.required],
        categoryId          :   ['', Validators.required],
        description         :   ['', Validators.required],
        price               :   ['', Validators.required]
    });

    if (localStorage.getItem('user-details')){
        this.userDetails = JSON.parse(localStorage.getItem('user-details'));
        this.id = this.userDetails.id;
    }
  }

  postNewJob = (job) => {
    this.feathers.create('jobs', {
        ...job
    })
    .then(res => {
        this.snakbar.success('You added a job succesfully.');
        this.router.navigate(['/jobs/my-jobs']);
        // this.jobsForm.reset();
    }, err => {
        console.log('err', err);
    });
  }

}
