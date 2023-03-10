import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReloadListComponent } from './list/reload-list.component';
import { ReloadEditComponent } from './edit/reload-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'reloads', component: ReloadListComponent, title: 'My Reloads' },
      // reloads/firearm/:firearmId
      { path: 'reloads/edit/:reloadId', component: ReloadEditComponent, title: 'Manage Reload' },
      { path: 'reloads/edit/:reloadId/:firearmId', component: ReloadEditComponent, title: 'Manage Reload' }
    ])
  ],
  exports: [RouterModule]
})
export class ReloadRoutingModule { }
