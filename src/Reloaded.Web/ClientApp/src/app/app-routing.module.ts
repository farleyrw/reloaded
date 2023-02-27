import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirearmListComponent } from './firearms/list/firearm-list.component';
import { ReloadListComponent } from './reloads/list/reload-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', title: 'Home' },
      { path: 'firearms', component: FirearmListComponent, title: 'My Firearms' },
      { path: 'reloads', component: ReloadListComponent, title: 'My Reloads' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
