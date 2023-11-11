import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DebugPipe } from "./debug.pipe";
import { FileSizePipe } from "./file-size.pipe";
import { InitialsPipe } from "./initials.pipe";
import { LoginUserDetailsPipe } from "./login-user-details.pipe";
import { SearchFilterPipe } from "./search-filter.pipe";
import { ArrayToStringPipe } from "./array-to-string.pipe";
import { DateFormatPipe } from "./date-format.pipe";
import { DataTypePipe } from "./data-type.pipe";
import { TimeAgoPipe } from "./time-ago.pipe";
import { PhoneNumberPipe } from "./phone-number.pipe";
import { SanitizerPipe } from "./sanitizer.pipe";
import { StringToJsonPipe } from "./string-to-json.pipe";
import { NameInitialsPipe } from "./name-initials.pipe";
import { StatusDataPipe } from "./status-data.pipe";

const pipes: any = [
  ArrayToStringPipe,
  DataTypePipe,
  DateFormatPipe,
  DebugPipe,
  FileSizePipe,
  InitialsPipe,
  LoginUserDetailsPipe,
  NameInitialsPipe,
  PhoneNumberPipe,
  SanitizerPipe,
  SearchFilterPipe,
  StatusDataPipe,
  StringToJsonPipe,
  TimeAgoPipe,
];

@NgModule({
    declarations: pipes,
    imports: [
        CommonModule,
    ],
    exports: pipes,
})

export class PipesModule { }
