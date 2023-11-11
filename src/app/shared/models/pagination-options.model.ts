import { DEFAULT_SORT_FIELD, DEFAULT_SORT_ORDER, INITIAL_PAGE_INDEX, INITIAL_PAGE_SIZE, PAGE_SIZE_OPTIONS, PAGINATION_MAX_SIZE } from "../constants/app.constants";

export class PaginationOptions {
    constructor(
        public fetchingData: boolean = true,
        public showPagination: boolean = true,
        public showTotalRecords: boolean = true,
        public showBoundaryLinks: boolean = true,
        public showPageSizeOptions: boolean = true,
        public pageSizeOptions: number[] = PAGE_SIZE_OPTIONS,
        public pageSize: number = PAGINATION_MAX_SIZE,
        public showCurrentPageInfo: boolean = true,
        public notDataMessage = 'Data Not Found!',
        public page: number = INITIAL_PAGE_INDEX,
        public limit: number = INITIAL_PAGE_SIZE,
        public sortField: string = DEFAULT_SORT_FIELD,
        public sortOrder: string = DEFAULT_SORT_ORDER,
        public totalRecord: number = 0,
    ) { }
}