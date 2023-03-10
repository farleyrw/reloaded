import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', title: 'Home' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
      // reloads/results/:reloadId
      // reloads/results/edit/:reloadResultId
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
