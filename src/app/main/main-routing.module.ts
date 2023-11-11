import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccessDeniedComponent } from "../access-denied/access-denied.component";
import { FullComponent } from "../layouts/full.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";

// import { ChangeDetectionComponent } from "../training/change-detection/change-detection.component";
// import { LifecycleHooksComponent } from "../training/lifecycle-hooks/lifecycle-hooks.component";
// import { TrackByComponent } from "../training/track-by/track-by.component";

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
      {
        path: "users",
        loadChildren: () =>
          import("../users/users.module").then((m) => m.UsersModule),
      },
      {
        path: "training",
        loadChildren: () =>
          import("../training/training.module").then((m) => m.TrainingModule),
      },
      // {
      //   path: "training",
      //   children: [
      //     {
      //       path: "lifecycle-hooks",
      //       component: LifecycleHooksComponent,
      //     },
      //     { path: "change-detection", component: ChangeDetectionComponent },
      //     { path: "track-by", component: TrackByComponent },
      //   ],
      // },
      {
        path: "403",
        component: AccessDeniedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
