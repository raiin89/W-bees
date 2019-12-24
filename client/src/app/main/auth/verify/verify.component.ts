import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import client from 'feather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class VerifyComponent implements OnInit {

  token: any;
  constructor(
    private _fuseConfigService: FuseConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this._fuseConfigService.config = {
        layout: {
            navbar   : {
                hidden: true
            },
            toolbar  : {
                hidden: true
            },
            footer   : {
                hidden: true
            },
            sidepanel: {
                hidden: true
            }
        }
    };

    this.activatedRoute.queryParams.subscribe(params => {
        this.token = params['token'];
        console.log('token', this.token); // Print the parameter to the console.
    });
   }

  ngOnInit(): void {
  }

}
