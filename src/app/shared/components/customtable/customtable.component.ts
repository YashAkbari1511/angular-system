import { DataSource } from '@angular/cdk/collections';
import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChild } from '@angular/core';
import { MatColumnDef, MatHeaderRowDef, MatNoDataRow, MatRowDef, MatTable } from '@angular/material/table';
import { PaginationOptions } from '../../models/pagination-options.model';

@Component({
  selector: 'wcg-customtable',
  templateUrl: './customtable.component.html',
  styles: [`
    table {
      width: 100%;
    }
    .page-loader {
      position: relative;
      width: 100%;
      height: 70px;
    }
  `],
})
export class CustomtableComponent<T> implements AfterContentInit {
  @ContentChildren(MatHeaderRowDef) headerRowDefs!: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs!: QueryList<MatRowDef<T>>;
  @ContentChildren(MatColumnDef) columnDefs!: QueryList<MatColumnDef>;
  @ContentChild(MatNoDataRow) noDataRow!: MatNoDataRow;
  @ViewChild(MatTable, { static: true }) table!: MatTable<T>;

  @Input() displayedCustomSide!: any[];
  @Input() displayedColumnsHeader!: any;
  @Input() displayedColumns!: any;
  @Input() dataSource!: DataSource<T>;
  @Input() paginationData!: PaginationOptions;
  @Output() changeTableData = new EventEmitter<object>();

  filterDetails: any = {};

  ngAfterContentInit() {
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    this.table.setNoDataRow(this.noDataRow);
    this.filterDetails['page'] = this.paginationData.page;
    this.filterDetails['limit'] = this.paginationData.limit;
    this.filterDetails['sortField'] = this.paginationData.sortField;
    this.filterDetails['sortOrder'] = this.paginationData.sortOrder;
  }

  /**
   * change the sorting data and notify to parent component by emiting new data
   * @param event get active column name and direction(asc or desc)
   */
  changeSorting(event: any) {
    this.filterDetails.sortField = event?.active || this.paginationData.sortField;
    this.filterDetails.sortOrder = event?.direction || this.paginationData.sortOrder;
    this.emitPageData();
  }

  /**
   * change the pagination data and notify to parent component by emiting new data
   * @param event get page details (pageindex,records per page)
   */
  paginationChange(event: any) {
    this.filterDetails.page = event?.activePage || this.paginationData.page;
    this.filterDetails.limit = event?.recordsPerPage || this.paginationData.limit;
    this.emitPageData();
  }

  /**
   * notify to parent component by emiting new data
   */
  emitPageData() {
    this.changeTableData.emit(this.filterDetails);
  }
}
