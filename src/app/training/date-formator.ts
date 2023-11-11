import { Injectable } from "@angular/core";
import { formatDate } from "@angular/common";
import { NativeDateAdapter } from "@angular/material/core";

const tz = "Asia/Calcutta";
@Injectable({
    providedIn: 'root'
})
export class DateFormatorAdapter extends NativeDateAdapter {
    format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'DF_MM_yyyy') {
            return formatDate(date, 'MM/yyyy', this.locale, tz);
        } else if (displayFormat === 'DF_dd_MMM_yyyy') {
            return formatDate(date, 'dd-MMM-yyyy', this.locale, tz);
        } else {
            return formatDate(date, 'dd-MM-yyyy', this.locale, tz);
        }
    }
}