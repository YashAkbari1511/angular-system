import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PAGINATION_MAX_SIZE, PAGE_SIZE_OPTIONS, INITIAL_PAGE_INDEX, INITIAL_PAGE_SIZE } from '../../constants/app.constants';

@Component({
  selector: 'wcg-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input() showTotalRecords: boolean = true;
  @Input() totalRecords: number = 0;
  @Input() showCurrentPageInfo: boolean = true;

  @Input() showBoundaryLinks: boolean = true;
  @Input() showPageSizeOptions: boolean = true;
  @Input() pageSize: number = PAGINATION_MAX_SIZE;
  @Input() pageSizeOptions: number[] = PAGE_SIZE_OPTIONS;
  @Input() recordsPerPage: number = INITIAL_PAGE_SIZE;
  activePage: number = INITIAL_PAGE_INDEX;

  @Output() paginationChanged: EventEmitter<Object> = new EventEmitter();
  pages: number[] = [];
  pageCount: number = 0;

  ngOnInit() {
    this.pageCount = this.getTotalPage();
    this.pages = this.getPageArray(this.activePage);
  }

  /**
   * Calculate number of pages based on the total records and records per page
   * @returns Calculate number of pages and returns it
   */
  getTotalPage(): number {
    return (this.totalRecords && this.recordsPerPage) ? Math.ceil(this.totalRecords / this.recordsPerPage) : 0;
  }

  /**
   * Get number of pages to be displayed for the pagination based on currentpage and pageSize
   * @param currentpage page number for which we need to show the pages for the pagination
   * @returns display pages array
   */
  getPageArray(currentpage: number = 1): number[] {
    let pageArray: number[] = [];
    let firstPage = 0;
    let lastPage = 0;
    if (currentpage <= this.pageSize) {
      firstPage = 1;
      lastPage = this.pageSize;
    } else {
      firstPage = currentpage - Math.ceil(this.pageSize / 2);
      lastPage = currentpage + Math.ceil(this.pageSize / 2) - 1;

      if (lastPage >= this.pageCount) {
        lastPage = this.pageCount;
      }
      let temppage = lastPage - firstPage;
      if (temppage < this.pageSize - 1) {
        firstPage = firstPage - (this.pageSize - temppage) + 1;
      }
    }
    if (firstPage <= 0) {
      firstPage = 1;
    }
    if (lastPage >= this.pageCount) {
      lastPage = this.pageCount;
    }

    for (let i = firstPage; i <= lastPage; i++) {
      pageArray.push(i);
    }
    return pageArray;
  }

  /**
   *  Set active page number and also emit the same to the parent component to refresh the data
   * @param pageNumber Set active page number
   */
  changePage(pageNumber: number): void {
    if (this.activePage != pageNumber) {
      this.activePage = pageNumber;
      this.emitPageData();
    }
  }

  /**
   * When user change the record per page option we need to calculate the total number of pages to support the pagination
   * @param event dropdown select pagesize value and return calculation for display total pages
   */
  changePageSize(event: any) {
    this.activePage = 1;
    this.pageCount = this.getTotalPage();
    this.emitPageData();
  }
  /**
   * Emits the data to the parent component to refresh the list
   */
  emitPageData() {
    this.pages = this.getPageArray(this.activePage);
    this.paginationChanged.emit({ 'activePage': this.activePage, 'recordsPerPage': this.recordsPerPage });
  }
}