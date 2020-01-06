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
                title    : 'Overview',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/dashboard',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
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
                icon    :   'work',
                url     :   '/jobs/my-jobs',
                // badge    : {
                //     title    : '23',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            },
            {
                id      :   'add-new-job',
                title   :   'Add a new job',
                type    :   'item',
                icon    :   'assignment',
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
                icon     : 'near_me',
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
                icon     : 'contacts',
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

export const navigationSeeker: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications Seeker',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Overview',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/dashboard',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            }
        ]
    },
    // {
    //     id       : 'jobs',
    //     title    :  'Jobs',
    //     type     :  'group',
    //     children :  [
    //         {
    //             id      :   'my-jobs',
    //             title   :   'My Jobs',
    //             type    :   'item',
    //             icon    :   'work',
    //             url     :   '/jobs/my-jobs',
    //             badge    : {
    //                 title    : '23',
    //                 bg       : '#F44336',
    //                 fg       : '#FFFFFF'
    //             }
    //         },
    //         {
    //             id      :   'add-new-job',
    //             title   :   'Add a new job',
    //             type    :   'item',
    //             icon    :   'assignment',
    //             url     :   '/jobs/add-job',
    //         }
    //     ]
    // },
    {
        id       : 'jobs',
        title    : 'Jobs',
        type     : 'group',
        children : [
            {
                id       : 'near-by-jobs',
                title    : 'Near By Jobs',
                type     : 'item',
                icon     : 'near_me',
                url      : '/bidder/near-by-jobs',
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
                icon     : 'contacts',
                url      : 'connection/mycontacts',
            }
        ]
    },
    {
        id       : 'my-bids',
        title    : 'My Bids',
        type     : 'group',
        children : [
            {
                id       : 'pending-bids',
                title    : 'Pending Bids',
                type     : 'item',
                icon     : 'email',
                url      : '/bidder/pending-bids',
            },
            {
                id       : 'approved-bids',
                title    : 'Approved bids',
                type     : 'item',
                icon     : 'email',
                url      : '/bidder/approved-bids',
            }
        ]
    }
];
