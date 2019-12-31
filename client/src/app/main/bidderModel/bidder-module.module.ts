import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NearByJobsComponent } from './near-by-jobs/near-by-jobs.component';
import { SeekerApprovedJobsComponent } from './seeker-approved-jobs/seeker-approved-jobs.component';
import { SeekerPendingJobsComponent } from './seeker-pending-jobs/seeker-pending-jobs.component';
import { SeekerJobCardComponent } from '../common-components/seeker-job-card/seeker-job-card.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { MatIconModule, MatExpansionModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const bidderRoute: Routes = [
    // {
    //     path: '',
    //     component: NearByJobsComponent
    // },
    {
        path: 'near-by-jobs',
        component: NearByJobsComponent
    },
    {
        path: 'approved-bids',
        component: SeekerApprovedJobsComponent
    },
    {
        path: 'pending-bids',
        component: SeekerPendingJobsComponent
    },
    {
        path: 'job-details/:id',
        component: JobDetailsComponent
    }
];

@NgModule({
  declarations: [
      NearByJobsComponent,
      SeekerApprovedJobsComponent,
      SeekerPendingJobsComponent,
      SeekerJobCardComponent,
      JobDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bidderRoute),
    ReactiveFormsModule,
    // Mat modules
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class BidderModule { }
