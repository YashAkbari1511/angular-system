import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MultiContetProjectionComponent } from "./content-projection/multi-contet-projection/multi-contet-projection.component";
import { SingleContetProjectionComponent } from "./content-projection/single-contet-projection/single-contet-projection.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { TemplateDrivenFormComponent } from "./forms/template-driven-form/template-driven-form.component";
import { TrackbyComponent } from "./trackby/trackby.component";
import { ReactiveFormsComponent } from "./forms/reactive-forms/reactive-forms.component";
import { ChangeDetectionComponent } from "./change-detection/change-detection.component";
import { TrackByComponent } from "./track-by/track-by.component";
import { ObservableSubjectBehaviourSubjectComponent } from "./observables/observable-subject-behaviour-subject/observable-subject-behaviour-subject.component";
import { SyncAsyncCallBackComponent } from "./observables/sync-async-call-back/sync-async-call-back.component";
import { PromiseAsyncAwaitComponent } from "./observables/promise-async-await/promise-async-await.component";
import { ListAsyncPipeComponent } from "./observables/list-async-pipe/list-async-pipe.component";
import { PipesComponent } from "./pipes/pipes.component";
import { DirectivesComponent } from "./directives/directives.component";
import { InputOutputParentComponent } from "./input-output/parent/parent.component";
import { DynamicComponent } from "./view-container-ref/dynamic/dynamic.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "lifecycle-hooks",
    pathMatch: "full",
  },
  {
    path: "lifecycle-hooks",
    component: LifecycleHooksComponent,
  },
  {
    path: 'data-bindings',
    component: DataBindingComponent
  },
  {
    path: "pipes",
    component: PipesComponent,
  },
  {
    path: "directives",
    component: DirectivesComponent,
  },
  {
    path: "reactive-forms",
    component: ReactiveFormsComponent,
  },
  {
    path: "template-driven-forms",
    component: TemplateDrivenFormComponent,
  },
  { path: "observable-sync-async-call-back", component: SyncAsyncCallBackComponent },
  { path: "observable-subject-behaviourSubject", component: ObservableSubjectBehaviourSubjectComponent },
  { path: "promise-async-await", component: PromiseAsyncAwaitComponent },
  { path: "list-async-pipe", component: ListAsyncPipeComponent },

  // { path: "trackby", component: TrackbyComponent },
  { path: "change-detection", component: ChangeDetectionComponent },
  { path: "track-by", component: TrackByComponent },
  { path: 'input-output', component: InputOutputParentComponent },
  { path: 'view-container-ref', component: DynamicComponent },
  {
    path: "content-projection",
    children: [
      {
        path: "",
        redirectTo: "single-slot",
        pathMatch: "full",
      },
      {
        path: "single-slot",
        component: SingleContetProjectionComponent,
      },
      {
        path: "multi-slot",
        component: MultiContetProjectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule { }
