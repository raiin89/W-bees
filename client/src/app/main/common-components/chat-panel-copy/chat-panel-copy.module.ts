import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FuseSharedModule } from '@fuse/shared.module';

// import { ChatPanelComponent } from 'app/layout/components/chat-panel/chat-panel.component';
import { ChatPanelService } from 'app/main/common-components/chat-panel-copy/chat-panel-copy.service';
import { ChatPanelCopyComponent } from 'app/main/common-components/chat-panel-copy/chat-panel-copy.component';

@NgModule({
    declarations: [
        // ChatPanelComponent,
        ChatPanelCopyComponent
    ],
    providers   : [
        ChatPanelService
    ],
    imports     : [
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        MatTooltipModule,
        MatRippleModule,

        FuseSharedModule
    ],
    exports     : [
        // ChatPanelComponent,
        ChatPanelCopyComponent
    ]
})
export class ChatPanelCopyModule
{
}
