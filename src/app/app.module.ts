import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  DatePipe,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { AppRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { ApiInterceptor } from "./shared/interceptors/api.interceptor";
import { AlertMessageComponent } from "./shared/components/alert-message/alert-message.component";
import { MatIconModule } from "@angular/material/icon";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AccessDeniedComponent } from "./access-denied/access-denied.component";

@NgModule({
  declarations: [
    AppComponent,
    AlertMessageComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot(AppRoutes, {
      // onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [],
  providers: [
    DatePipe,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
