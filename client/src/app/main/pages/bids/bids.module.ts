import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingBidsComponent } from './pending-bids/pending-bids.component';
import { ApprovedBidsComponent } from './approved-bids/approved-bids.component';
import { Routes, RouterModule } from '@angular/router';

const bidsRoute: Routes = [
    {
        path: 'approved',
        component: ApprovedBidsComponent
    },
    {
        path: 'pending',
        component: PendingBidsComponent
    }
];

@NgModule({
  declarations: [PendingBidsComponent, ApprovedBidsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(bidsRoute)
  ]
})
export class BidsModule { }
