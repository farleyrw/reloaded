import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirearmListComponent } from './list/firearm-list.component';
import { FirearmViewComponent } from './view/firearm-view.component';
import { FirearmEditComponent } from './edit/firearm-edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'firearms', component: FirearmListComponent, title: 'My Firearms' },
      { path: 'firearms/:firearmId', component: FirearmViewComponent, title: 'My Firearm' },
      { path: 'firearms/edit/:firearmId', component: FirearmEditComponent, title: 'Manage Firearm' }
    ])
  ]
})
export class FirearmRoutingModule { }
