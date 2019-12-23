import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { AddNewJobComponent } from './add-new-job/add-new-job.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

const jobRoutes: Routes = [
    // {
    //     path        : 'jobs',
    //     component   : MyJobsComponent
    // },
    {
        path        : 'my-jobs',
        component   : MyJobsComponent
    },
    {
        path        : 'add-job',
        component   : AddNewJobComponent
    }

];

@NgModule({
    declarations: [
        MyJobsComponent,
        AddNewJobComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(jobRoutes),
        ReactiveFormsModule,

        // Material
        MatSelectModule,
        MatIconModule
    ]
})
export class JobsModule { }
