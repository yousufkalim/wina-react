import BrowseOffers from '../../../../containers/Dashboard/Company/AnnoncesView/BrowseOffers';
import OverviewOfOffers from '../../../../containers/Dashboard/Company/AnnoncesView/OverviewOfOffers';
import RDV from '../../../../containers/Dashboard/Company/CoachingView/RDV';
import Offers from '../../../../containers/Dashboard/Company/CoachingView/Offres';

const SideBarRoutes = [
  {
    path: '/dashboard/presentationcompany',
    name: 'Dashboard',
    // icon: DashboardIconSvg,
    key: '1',
    element: BrowseOffers,
    child: [
      {
        path: '/dashboard/presentationcompany',
        name: ' Parcourir les offres',
        // icon: <LoginIcon />,
        element: BrowseOffers,
        key: '2'
      },
      {
        path: '/dashboard/teams',
        name: '  ue générale des offres',
        // icon: <LoginIcon />,
        element: OverviewOfOffers,
        key: '3'
      }
      //   {
      //     path: '/dashboard/recruitment',
      //     name: 'Recruitment',
      //     icon: <LoginIcon />,
      //     element: PresentationCompany,
      //     key: '4',
      //   },
    ]
  }

  //   {
  //     path: '/offer/publish-an-offer',
  //     name: 'Offer',
  //     //  icon: OffersIconSvg,
  //     element: RDV,
  //     key: '5',
  //     child: [
  //       {
  //         path: '/offer/publish-an-offer',
  //         name: 'Publish an offer',
  //         //  icon: <LoginIcon />,
  //         element: RDV,
  //         key: '6'
  //       },
  //       {
  //         path: '/offer/manage-my-offers',
  //         name: 'Manage my offers',
  //         //    icon: <LoginIcon />,
  //         element: Offers,
  //         key: '7'
  //       }
  //     ]
  //   }
  //   {
  //     path: '/interviews',
  //     name: 'Interviews',
  //     icon: InterviewIconSvg,
  //     element: Interviews,
  //     key: '8',
  //     child: [
  //       {
  //         path: '/interviews',
  //         name: 'Interviews',
  //         icon: <LoginIcon />,
  //         element: Interviews,
  //         key: '9',
  //       },
  //     ],
  //   },
  //   {
  //     path: '/managesubscription',
  //     name: 'Manage Subscription',
  //     icon: ManageSubscriptionsSvg,
  //     element: ManageSubscription,
  //     key: '10',
  //     child: [
  //       {
  //         path: '/managesubscription',
  //         name: 'Manage subscription',
  //         icon: ManageSubscriptionsSvg,
  //         element: ManageSubscription,
  //         key: '11',
  //       },
  //       {
  //         path: '/renewmysubscription',
  //         name: 'Renew my subscription',
  //         icon: <LoginIcon />,
  //         element: RenewMySubscription,
  //         key: '12',
  //       },
  //       {
  //         path: '/updatemypaymentmethod',
  //         name: 'Update my payment method',
  //         icon: <LoginIcon />,
  //         element: UpdateMyPaymentMethod,
  //         key: '13',
  //       },
  //     ],
  //   },
];

//Getting all routes
const RoutesObj = {
  SideBarRoutes
};

export default RoutesObj;
