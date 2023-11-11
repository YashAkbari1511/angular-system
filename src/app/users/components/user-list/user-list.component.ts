import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { displayedColumnArray } from './user-list.data';
import { DEFAULT_IMAGES } from 'src/app/shared/constants/app.constants';
import { CommonService } from 'src/app/shared/services/common.service';
import { ConfirmationDialogService } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserManageModalComponent } from '../user-manage-modal/user-manage-modal.component';
import { PaginationOptions } from 'src/app/shared/models/pagination-options.model';
import { AlertMessageService } from 'src/app/shared/components/alert-message/alert-message.service';
import { map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'wcg-user-list',
  templateUrl: './user-list.component.html',
  styles: [`
  /* ::ng-deep .-content {background-color: 'red' !important;} */
  ::ng-deep .active>.page-link,.page-link.active {background-color: #5cb7ff !important;border-color:#5cb7ff !important}
  ::ng-deep .mat-mdc-table .mdc-data-table__header-row {height : 50px !important}
  .custome-mat{min-height: 30px !important; font-size: 14px !important;}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit, OnDestroy {
  subscriptions$: Subscription[] = [];
  userList$ = new Observable();

  //===== START: TABLE - LIST, FILTER AND PAGINATION =====//
  paginationData: PaginationOptions = new PaginationOptions();
  displayedColumnsHeader = displayedColumnArray
    .filter((column) => !column.isMergedHeader)
    .map((column) => column.field);
  displayedColumns = displayedColumnArray
    .filter((column) => !column.isMergedData)
    .map((column) => column.field);
  displayedComponentsSide = displayedColumnArray.filter((column) => column.isComponentsSide);
  displayedCustomSide = displayedColumnArray.filter((column) => !column.isComponentsSide);
  searchText: string = '';
  searchTimeout: any = null;
  tableFilterDetails: any = {
    page: this.paginationData.page,
    limit: this.paginationData.limit,
    sortField: this.paginationData.sortField,
    sortOrder: this.paginationData.sortOrder,
  };
  //===== END: TABLE - LIST, FILTER AND PAGINATION =====//

  defaultProfile: string = DEFAULT_IMAGES.USER;
  selectedUserId: string = '';
  isUserPanelOpen: boolean = false;

  constructor(
    private cd: ChangeDetectorRef,
    private commonService: CommonService,
    private userService: UserService,
    private confirmationDialogService: ConfirmationDialogService,
    private modalService: ModalService,
    private alertMessageService: AlertMessageService
  ) { }
  ngOnInit() {
    // this.tableFilterDetails.page = this.paginationData.page = 1;
    // this.tableFilterDetails.limit = this.paginationData.limit = 2;
    // this.paginationData.pageSizeOptions = [1, 2, 3, 4, 5, 6, 10, 15];
    this.setBreadCrumb();
    this.getUserList();
  }
  ngOnDestroy(): void {
    // Removes all the subscriptions to avoid memory leak issue
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Set breadCrumbData in CommonService
   */
  setBreadCrumb() {
    this.commonService.breadCrumbData$.next({
      pageTitle: 'User List',
      linkList: [
        { label: 'Dashboard', link: '/dashboard' },
        { label: 'User List', link: '' }
      ]
    });
  }

  /**
   * get a list of users based on the selected filter data
   * @param filterDetails pass filterdetails
   */
  getUserList(filterDetails: any = null) {
    this.paginationData.fetchingData = true;
    if (filterDetails) {
      this.tableFilterDetails = filterDetails || {};
    }
    this.tableFilterDetails['search'] = this.searchText;

    this.userList$ = this.userService.read(this.tableFilterDetails).pipe(
      map((data: any) => data),
      tap((data: any) => {
        this.paginationData.totalRecord = data?.data?.totalRecord | 0;
        this.paginationData.fetchingData = false;
      })
    );
  }

  /**
   * Get the user list according to changed pagination data
   * @param event get click column field value and direction(asc or desc)
   */
  changeSorting(event: any) {
    this.tableFilterDetails.sortField = event?.active || this.paginationData.sortField;
    this.tableFilterDetails.sortOrder = event?.direction || this.paginationData.sortOrder;
    this.getUserList();
  }

  /**
   * Reset the pagination data and get new user list
   */
  resetPagination() {
    this.tableFilterDetails.sortOrder = this.paginationData.sortOrder;
    this.tableFilterDetails.sortField = this.paginationData.sortField;
    this.tableFilterDetails.page = this.paginationData.page;
    this.getUserList();
  }

  /**
   * when user type something in the searchbox, reset the pagination data and get new user list
   * @param event get searchbox text
   */
  onKeySearch(event: any) {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      if (event.keyCode != 13) {  // enter key
        this.resetPagination();
      }
    }, 300);
  }

  /**
   * After taking the confirmation from the user delete the selected record and fetch new list
   * @param record which needs to be deleted
   */
  async deleteRecord(record: any) {
    if (record?._id) {
      const subscribeDeleteConfirm = this.confirmationDialogService.confirmationBox().subscribe({
        next: (data: any) => {
          if (data === true) {
            const subscribeDeleteRecord = this.userService.delete(record._id).subscribe({
              next: (response: any) => {
                if (response) {
                  this.getUserList();
                  const subscribeSuccessConfirm = this.confirmationDialogService.confirmationSuccessBox(response.message).subscribe();
                  this.subscriptions$.push(subscribeSuccessConfirm);
                }
              },
              error: (err: any) => {
                this.alertMessageService.error('ERROR', 'There was some issue while processing your request.');
                this.cd.markForCheck();
              }
            });
            this.subscriptions$.push(subscribeDeleteRecord);
          } else {
            this.confirmationDialogService.confirmationCancelBox();
          }
        },
        error: (err: any) => {
          this.confirmationDialogService.confirmationCancelBox();
        },
      });
      this.subscriptions$.push(subscribeDeleteConfirm);
    } else {
      this.alertMessageService.error('', 'Please select valid user to delete');
      this.cd.markForCheck();
    }
  }

  /**
   * After confirmation from the user, change user status of selected user and fetch new list
   * @param userId get userid
   * @param userStatus get user status(active/inactive)
   */
  async updateStatus(userId: string, userStatus: string) {
    if (userId) {
      const subscribeUpdateConfirm = this.confirmationDialogService.confirmationBox("Are you sure, you want to change the status of this user?", "Update", "error_outline").subscribe({
        next: (response: any) => {
          if (response === true) {
            const subscribeStatusChange = this.userService.changeUserStatus(userId, { isActive: !userStatus }).subscribe({
              next: (response: any) => {
                if (response) {
                  this.getUserList();
                  const subscribeSuccessBox = this.confirmationDialogService.confirmationSuccessBox(response.message, "Updated").subscribe()
                  this.subscriptions$.push(subscribeSuccessBox);
                }
              },
              error: (err: any) => {
                this.alertMessageService.error('ERROR', 'There was some issue while processing your request.');
                this.cd.markForCheck();
              }
            });
            this.subscriptions$.push(subscribeStatusChange);
          }
          else {
            this.confirmationDialogService.confirmationCancelBox();
          }
        },
        error: (err: any) => {
          this.confirmationDialogService.confirmationCancelBox();
        },
      });
      this.subscriptions$.push(subscribeUpdateConfirm);
    } else {
      this.alertMessageService.error(' ', 'Please select valid user to update the status');
      this.cd.markForCheck();
    }
  }

  //=== START: Manage User - Modal ===//
  /**
   * This will open the modal and display the data accordingly.. If user save the data then only refresh the list
   * @param userId get userid
   */
  openModal(userId: string = '') {
    let data = {
      userId: userId,
    }
    const subscribeUserModal = this.modalService.openModal(UserManageModalComponent, data).subscribe({
      next: (response: any) => {
        if (response === true) {
          this.getUserList();
        }
      }
    });
    this.subscriptions$.push(subscribeUserModal);
  }

  //=== Start: Manage User - Side Panel ===//
  /**
   * This will open the panel and display the data accordingly..
   * @param userId get userId
   */
  openPanel(userId: string = '') {
    this.selectedUserId = userId;
    this.isUserPanelOpen = true;
  }
  /**
   *   It will be called when user close the panel.. If user save the data then only refresh the list
   * @param event get panel true false value
   */
  closePanel(event: boolean = false) {
    this.isUserPanelOpen = false;
    this.selectedUserId = '';
    if (event === true) {
      this.getUserList();
    }
  }
  //=== END: Manage User - Side Panel ===//
}