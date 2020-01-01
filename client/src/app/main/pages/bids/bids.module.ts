import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingBidsComponent } from './pending-bids/pending-bids.component';
import { ApprovedBidsComponent } from './approved-bids/approved-bids.component';
import { Routes, RouterModule } from '@angular/router';
import { BidsOnJobComponent } from './bids-on-job/bids-on-job.component';

const bidsRoute: Routes = [
    {
        path: 'approved',
        component: ApprovedBidsComponent
    },
    {
        path: 'pending',
        component: PendingBidsComponent
    },
    {
        path: 'bids-on-job/:id',
        component: BidsOnJobComponent
    },
];

@NgModule({
    declarations: [
        PendingBidsComponent,
        ApprovedBidsComponent,
        BidsOnJobComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(bidsRoute)
    ]
})
export class BidsModule { }
