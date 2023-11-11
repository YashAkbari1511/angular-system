import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { SharedModule } from "../shared/shared.module";
import { FullComponent } from "../layouts/full.component";
import { HeaderComponent } from "../layouts/header/header.component";
import { BreadcrumbComponent } from "../layouts/breadcrumb/breadcrumb.component";
import { SidebarComponent } from "../layouts/sidebar/sidebar.component";
import { SettingsComponent } from "./settings/settings.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SalesOverviewComponent } from "./sales-overview/sales-overview.component";
import { OurVisiterComponent } from "./our-visiter/our-visiter.component";
import { ProfileComponent } from "./profile/profile.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ActivityTimelineComponent } from "./activity-timeline/activity-timeline.component";

@NgModule({
  declarations: [
    FullComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SidebarComponent,
    DashboardComponent,
    SalesOverviewComponent,
    OurVisiterComponent,
    ProfileComponent,
    ContactsComponent,
    ActivityTimelineComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
