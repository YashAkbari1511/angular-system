import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "./pipes/pipes.module";
import { DemoMaterialModule } from "../demo-material-module";
import { RouteChangeLoaderComponent } from "./components/loader/route-change-loader.component";
import { SpinnerLoaderComponent } from "./components/loader/spinner-loader.component";
import { ApiProgressLoaderComponent } from "./components/loader/api-progress-loader.component";
import { CustomtableComponent } from "./components/customtable/customtable.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { PortalModule } from "@angular/cdk/portal";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ImageLoaderDirective } from "./directives/image-loader.directive";
import { ConfirmationDialogComponent } from "./components/confirmation-dialog/confirmation-dialog.component";
import { ConfirmMessageDialogComponent } from "./components/confirmation-dialog/confirm-message-dialog.component";
import { ConfirmationDialogService } from "./components/confirmation-dialog/confirmation-dialog.service";
import { ModalService } from "./services/modal.service";
import { SidePanelComponent } from "./components/side-panel/side-panel.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { ScriptService } from "./services/script-loader/script.service";
import { DestroyListenerDirective } from "./directives/destroy-listener.directive";
import { ButtonClickCountDirective } from './directives/button-click-count.directive';
import { DfDdMmmYyyyDirective, DfMmYyyyDirective } from "./functions/date-functions";
import { EmployeeService } from "./services/employee.service";
import { NgApexchartsModule } from "ng-apexcharts";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    PipesModule,
    NgSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    PortalModule,
    MatDatepickerModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    NgApexchartsModule
  ],
  declarations: [
    CustomtableComponent,
    RouteChangeLoaderComponent,
    SpinnerLoaderComponent,
    ApiProgressLoaderComponent,
    ImageLoaderDirective,
    DestroyListenerDirective,
    ConfirmationDialogComponent,
    ConfirmMessageDialogComponent,
    SidePanelComponent,
    PaginationComponent,
    DfMmYyyyDirective,
    DfDdMmmYyyyDirective,
    ButtonClickCountDirective,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    CustomtableComponent,
    RouteChangeLoaderComponent,
    SpinnerLoaderComponent,
    ApiProgressLoaderComponent,
    NgSelectModule,
    DemoMaterialModule,
    ImageLoaderDirective,
    DestroyListenerDirective,
    MatCheckboxModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    SidePanelComponent,
    PaginationComponent,
    DfMmYyyyDirective,
    DfDdMmmYyyyDirective,
    ButtonClickCountDirective,
    NgApexchartsModule
  ],
  providers: [DatePipe, ConfirmationDialogService, ModalService, ScriptService, EmployeeService],
})
export class SharedModule { }
