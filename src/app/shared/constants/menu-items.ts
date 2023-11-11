export interface Breadcrumb {
  pageTitle: string;
  linkList: BreadcrumbItems[];
}

export interface BreadcrumbItems {
  label: string;
  link: string;
}

export interface Menu {
  displayName: string;
  iconName: string;
  route?: string;
  panelName?: string;
  children?: Menu[];
}

/**
 * DEFINES THE MENU ITEMS TO BE DISPLAYED IN THE LEFT SIDE PANEL
 */
export const MENUITEMS: Menu[] = [
  {
    displayName: "Dashboard",
    iconName: "av_timer",
    route: "/dashboard",
  },
  {
    displayName: "Users",
    iconName: "supervisor_account",
    panelName: "users",
    children: [
      {
        displayName: "User List",
        iconName: "supervisor_account",
        route: "/users/list",
      },
      {
        displayName: "User Data",
        iconName: "supervisor_account",
        route: "/users/data",
      },
    ],
  },
  {
    displayName: "Training",
    iconName: "model_training",
    panelName: "training",
    children: [
      {
        displayName: "Lifecycle Hooks",
        iconName: "pedal_bike",
        route: "/training/lifecycle-hooks",
      },
      {
        displayName: "Data Bindings",
        iconName: "lan",
        route: "/training/data-bindings",
      },
      {
        displayName: "Pipes",
        iconName: "filter_alt",
        route: "/training/pipes",
      },
      {
        displayName: "Directives",
        iconName: "code",
        route: "/training/directives",
      },
      {
        displayName: "Reactive Forms",
        iconName: "view_compact",
        route: "/training/reactive-forms",
      },
      {
        displayName: "Template Driven Forms",
        iconName: "view_compact",
        route: "/training/template-driven-forms",
      },
      {
        displayName: "Sync Async CallBack",
        iconName: "view_compact",
        route: "/training/observable-sync-async-call-back",
      },
      {
        displayName: "Observable Subject BehaviourSubject",
        iconName: "view_compact",
        route: "/training/observable-subject-behaviourSubject",
      },
      {
        displayName: "Promise-Async-Await",
        iconName: "handshake",
        route: "/training/promise-async-await",
      },
      {
        displayName: "List using Async Pipe",
        iconName: "handshake",
        route: "/training/list-async-pipe",
      },
      // {
      //   displayName: "Track By",
      //   iconName: "published_with_changes",
      //   route: "/training/trackby",
      // },
      {
        displayName: 'Input - Output',
        iconName: 'featured_video',
        route: '/training/input-output'
      },
      {
        displayName: 'ViewContainerRef',
        iconName: 'widgets',
        route: '/training/view-container-ref'
      },
      {
        displayName: "Single-Slot Content Projection",
        iconName: "view_module",
        route: "/training/content-projection/single-slot",
      },
      {
        displayName: "Multi-Slot Content Projection",
        iconName: "view_module",
        route: "/training/content-projection/multi-slot",
      },
      {
        displayName: "Change Detection",
        iconName: "Detective",
        route: "/training/change-detection",
      },
      {
        displayName: "Track By",
        iconName: "track_changes",
        route: "/training/track-by",
      },
    ],
  },
];
