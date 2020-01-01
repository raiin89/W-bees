import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearByBiddersComponent } from './near-by-bidders/near-by-bidders.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FuseWidgetModule } from '@fuse/components';

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
    RouterModule.forChild(biddersRoute),

    // Mat modules
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,

    // Fuse modules
    FuseWidgetModule
  ]
})
export class BiddersModule { }
