import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { LoginComponent } from './main/auth/login/login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './main/auth/register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { ForgotPasswordComponent } from './main/auth/forgot-password/forgot-password.component';
import { VerifyComponent } from './main/auth/verify/verify.component';
import { ResetComponent } from './main/auth/reset/reset.component';
import { Feathers } from 'feather.service';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        redirectTo: ''
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'verify',
        component: VerifyComponent
    },
    {
        path: 'reset',
        component: ResetComponent
    },
    {
        path:  'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'bidders',
        loadChildren: './main/pages/bidders/bidders.module#BiddersModule'
    },
    {
        path: 'bids',
        loadChildren: './main/pages/bids/bids.module#BidsModule'
    },
    {
        path: 'connection',
        loadChildren: './main/pages/connections/connections.module#ConnectionsModule'
    },
    {
        path: 'jobs',
        // redirectTo: 'jobs'
        loadChildren: './main/pages/jobs/jobs.module#JobsModule'
    },
    {
        path: 'dashboard',
        redirectTo: 'sample'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        VerifyComponent,
        ResetComponent
        ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatSelectModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,

        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        Feathers
    ]
})
export class AppModule {
}
