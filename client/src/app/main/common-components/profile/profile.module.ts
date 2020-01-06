import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { FuseSharedModule } from '@fuse/shared.module';

import { ProfileService } from 'app/main/common-components/profile/profile.service';
import { ProfileComponent } from 'app/main/common-components/profile/profile.component';
import { ProfileTimelineComponent } from 'app/main/common-components/profile/tabs/timeline/timeline.component';
import { ProfileAboutComponent } from 'app/main/common-components/profile/tabs/about/about.component';
import { ProfilePhotosVideosComponent } from 'app/main/common-components/profile/tabs/photos-videos/photos-videos.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


const routes = [
    {
        path     : 'myprofile',
        component: ProfileComponent
    },
    // {
    //     path     : 'profile',
    //     component: ProfileComponent,
    //     resolve  : {
    //         profile: ProfileService
    //     }
    // }
];

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileTimelineComponent,
        ProfileAboutComponent,
        ProfilePhotosVideosComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatTabsModule,
        MatInputModule,

        FuseSharedModule
    ],
    providers   : [
        ProfileService
    ]
})
export class ProfileModule
{
}
