import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { TrainingRoutingModule } from "./training-routing.module";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { TemplateDrivenFormComponent } from "./forms/template-driven-form/template-driven-form.component";
import { TrackbyComponent } from "./trackby/trackby.component";
import { SingleContetProjectionComponent } from "./content-projection/single-contet-projection/single-contet-projection.component";
import { MultiContetProjectionComponent } from "./content-projection/multi-contet-projection/multi-contet-projection.component";
import { DataViewComponent } from "./content-projection/data-view/data-view.component";
import { ReactiveFormsComponent } from "./forms/reactive-forms/reactive-forms.component";
import { ParentComponent } from "./lifecycle-hooks/parent/parent.component";
import { ChildComponent } from "./lifecycle-hooks/child/child.component";
import { ChangeDetectionChildComponent } from "./change-detection/change-detection-child/change-detection-child.component";
import { ChangeDetectionComponent } from "./change-detection/change-detection.component";
import { AComponent } from "./lifecycle-hooks/a/a.component";
import { BComponent } from "./lifecycle-hooks/b/b.component";
import { CComponent } from "./lifecycle-hooks/c/c.component";
import { SyncAsyncCallBackComponent } from './observables/sync-async-call-back/sync-async-call-back.component';
import { ObservableSubjectBehaviourSubjectComponent } from './observables/observable-subject-behaviour-subject/observable-subject-behaviour-subject.component';
import { PromiseAsyncAwaitComponent } from './observables/promise-async-await/promise-async-await.component';
import { ListAsyncPipeComponent } from './observables/list-async-pipe/list-async-pipe.component';
import { TrackByComponent } from "./track-by/track-by.component";
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputParentComponent } from "./input-output/parent/parent.component";
import { InputOutputChildComponent } from "./input-output/child/child.component";
import { DynamicComponent } from './view-container-ref/dynamic/dynamic.component';
import { ContainerChildComponent } from './view-container-ref/container-child/container-child.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    LifecycleHooksComponent,
    TemplateDrivenFormComponent,
    TrackbyComponent,
    SingleContetProjectionComponent,
    MultiContetProjectionComponent,
    DataViewComponent,
    ReactiveFormsComponent,
    LifecycleHooksComponent,
    ParentComponent,
    ChildComponent,
    AComponent,
    BComponent,
    CComponent,
    ChangeDetectionComponent,
    ChangeDetectionChildComponent,
    SyncAsyncCallBackComponent,
    ObservableSubjectBehaviourSubjectComponent,
    PromiseAsyncAwaitComponent,
    ListAsyncPipeComponent,
    TrackByComponent,
    PipesComponent,
    DirectivesComponent,
    InputOutputParentComponent,
    InputOutputChildComponent,
    DynamicComponent,
    ContainerChildComponent,
    DataBindingComponent
  ],
  imports: [CommonModule, TrainingRoutingModule, SharedModule],
})
export class TrainingModule { }
