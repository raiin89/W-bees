import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearByBiddersComponent } from './near-by-bidders/near-by-bidders.component';
import { Routes, RouterModule } from '@angular/router';

const biddersRoute: Routes = [
    {
        path: 'nearby',
        component: NearByBiddersComponent
    }
];

@NgModule({
  declarations: [NearByBiddersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(biddersRoute)
  ]
})
export class BiddersModule { }
