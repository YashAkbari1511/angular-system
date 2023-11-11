import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserManagePanelComponent } from './components/user-manage-panel/user-manage-panel.component';
import { UserManageModalComponent } from './components/user-manage-modal/user-manage-modal.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserManageModalComponent,
    UserManagePanelComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
