import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { Routes, RouterModule } from '@angular/router';

const connectionRoute: Routes = [
    {
        path: 'mycontacts',
        component: MyContactsComponent
    }
];

@NgModule({
  declarations: [MyContactsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(connectionRoute)
  ]
})
export class ConnectionsModule { }
