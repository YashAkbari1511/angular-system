import { Directive } from "@angular/core"
import { MAT_DATE_FORMATS } from "@angular/material/core"

export const getMonthAndYear = (normlizedMonth: any, datepicker: any) => {
    var tempDate = JSON.stringify(normlizedMonth).replace("\"", '').split("-")
    var month = parseInt(tempDate[1])
    var year = month == 12 ? parseInt(tempDate[0]) + 1 : parseInt(tempDate[0])
    var year = month == 12 ? parseInt(tempDate[0]) + 1 : parseInt(tempDate[0])
    month = month == 12 ? 1 : month + 1;
    datepicker.close();

    return { year, month };
}

export const DF_dd_MM_yyyy = {
    parse: {
        dateInput: { month: 'long', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'DF_dd_MM_yyyy',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

export const DF_dd_MMM_yyyy = {
    parse: {
        dateInput: { month: 'long', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'DF_dd_MMM_yyyy',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'short' },
    }
};
@Directive({
    selector: '[wcgDfDdMmmYyyy]',
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: DF_dd_MMM_yyyy },
    ],
})
export class DfDdMmmYyyyDirective {
}

export const DF_MM_yyyy = {
    parse: {
        dateInput: { month: 'long', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'DF_MM_yyyy',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
@Directive({
    selector: '[wcgDfMmYyyy]',
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: DF_MM_yyyy },
    ],
})
export class DfMmYyyyDirective {
}
