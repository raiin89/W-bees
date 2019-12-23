import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import client from 'feather.service';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.scss']
})
export class AddNewJobComponent implements OnInit {

  jobsForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
  ) {
    // this._fuseConfigService.config = {
    //     layout: {
    //         navbar   : {
    //             hidden: true
    //         },
    //         toolbar  : {
    //             hidden: true
    //         },
    //         footer   : {
    //             hidden: true
    //         },
    //         sidepanel: {
    //             hidden: true
    //         }
    //     }
    // };
  }

  ngOnInit(): void {
    this.jobsForm = this.formBuilder.group({
        title               : ['', Validators.required],
        description         : ['', Validators.required],
        price               : ['', Validators.required],
        categoryId          : ['', Validators.required]
    });
  }

  postNewJob = (job) => {
    console.log('job', job);
  }

}
