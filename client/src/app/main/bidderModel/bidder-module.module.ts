import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NearByJobsComponent } from './near-by-jobs/near-by-jobs.component';
import { SeekerApprovedJobsComponent } from './seeker-approved-jobs/seeker-approved-jobs.component';
import { SeekerPendingJobsComponent } from './seeker-pending-jobs/seeker-pending-jobs.component';
import { SeekerJobCardComponent } from '../common-components/seeker-job-card/seeker-job-card.component';

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
    }
];

@NgModule({
  declarations: [
      NearByJobsComponent,
      SeekerApprovedJobsComponent,
      SeekerPendingJobsComponent,
      SeekerJobCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bidderRoute)
  ]
})
export class BidderModule { }
