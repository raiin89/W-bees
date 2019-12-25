import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

import { Feathers } from 'feather.service';
import { SnakBarService } from '../../../../services/snak-bar.service';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.scss'],
  animations   : fuseAnimations
})
export class AddNewJobComponent implements OnInit {

  jobsForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private snakbar: SnakBarService,
      private feathers: Feathers
  ) { }

  ngOnInit(): void {
    this.jobsForm = this.formBuilder.group({
        title               :   ['', Validators.required],
        categoryId          :   ['', Validators.required],
        description         :   ['', Validators.required],
        price               :   ['', Validators.required]
    });
  }

  postNewJob = (job) => {
    console.log('job', job);
    this.snakbar.success('You will able to post job soon.');
    // client.service('jobs').create({
    //     ...job
    // })
    // .then(res => {
    //     console.log('response of create job', job);
    // }, err => {
    //     console.log('err', err);
    // });
  }

}
