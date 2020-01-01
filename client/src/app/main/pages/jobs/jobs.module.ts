import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { AddNewJobComponent } from './add-new-job/add-new-job.component';
import { RouterModule, Routes } from '@angular/router';

// Material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule, MatDialogModule} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


const jobRoutes: Routes = [
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
        AddNewJobComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(jobRoutes),
        ReactiveFormsModule,

        // Material
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
    ]
})
export class JobsModule { }
