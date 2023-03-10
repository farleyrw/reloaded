import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResultListComponent } from './list/result-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'results/list', component: ResultListComponent, pathMatch: 'full', title: 'Home' },
    ])
  ],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
