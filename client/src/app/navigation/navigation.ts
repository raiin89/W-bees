import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    },
    {
        id       : 'jobs',
        title    :  'Jobs',
        type     :  'group',
        children :  [
            {
                id      :   'my-jobs',
                title   :   'My Jobs',
                type    :   'item',
                icon    :   'job',
                url     :   '/jobs/my-jobs',
                badge    : {
                    title    : '23',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id      :   'add-new-job',
                title   :   'Add a new job',
                type    :   'item',
                icon    :   'job',
                url     :   '/jobs/add-job',
            }
        ]
    },
    {
        id       : 'bidders',
        title    : 'Bidders',
        type     : 'group',
        children : [
            {
                id       : 'near-by-bidders',
                title    : 'Near By Bidders',
                type     : 'item',
                icon     : 'location',
                url      : '/bidders/nearby',
            }
        ]
    },
    {
        id       : 'connections',
        title    : 'Connections',
        type     : 'group',
        children : [
            {
                id       : 'my-contacts',
                title    : 'My Contacts',
                type     : 'item',
                icon     : 'account_box',
                url      : 'connection/mycontacts',
            }
        ]
    },
    {
        id       : 'bids',
        title    : 'Bids',
        type     : 'group',
        children : [
            {
                id       : 'pending-bids',
                title    : 'Pending Bids',
                type     : 'item',
                icon     : 'email',
                url      : '/bids/pending',
            },
            {
                id       : 'approved-bids',
                title    : 'Approved bids',
                type     : 'item',
                icon     : 'email',
                url      : '/bids/approved',
            }
        ]
    }
];
