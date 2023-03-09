import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirearmListComponent } from './firearms/list/firearm-list.component';
import { ReloadListComponent } from './reloads/list/reload-list.component';
import { FirearmViewComponent } from './firearms/view/firearm-view.component';
import { FirearmEditComponent } from './firearms/edit/firearm-edit.component';
import { ReloadEditComponent } from './reloads/edit/reload-edit.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', title: 'Home' },
      { path: 'firearms', component: FirearmListComponent, title: 'My Firearms' },
      { path: 'firearms/:firearmId', component: FirearmViewComponent, title: 'My Firearm' },
      { path: 'firearms/edit/:firearmId', component: FirearmEditComponent, title: 'Manage Firearm' },
      { path: 'reloads', component: ReloadListComponent, title: 'My Reloads' },
      // reloads/firearm/:firearmId
      { path: 'reloads/edit/:reloadId', component: ReloadEditComponent, title: 'Manage Reload' },
      { path: 'reloads/edit/:reloadId/:firearmId', component: ReloadEditComponent, title: 'Manage Reload' }
      // reloads/results/:reloadId
      // reloads/results/edit/:reloadResultId
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
