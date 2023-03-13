import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReloadListComponent } from './list/reload-list.component';
import { ReloadEditComponent } from './edit/reload-edit.component';
import { ReloadViewComponent } from './view/reload-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'reloads', component: ReloadListComponent, title: 'My Reloads' },
      { path: 'reloads/view/:reloadId', component: ReloadViewComponent, title: 'View Reload' },
      // reloads/firearm/:firearmId
      { path: 'reloads/edit/:reloadId', component: ReloadEditComponent, title: 'Manage Reload' },
      { path: 'reloads/edit/:reloadId/:firearmId', component: ReloadEditComponent, title: 'Manage Reload' }
      // TODO: reloads/analysis/:reloadId
    ])
  ],
  exports: [RouterModule]
})
export class ReloadRoutingModule { }
