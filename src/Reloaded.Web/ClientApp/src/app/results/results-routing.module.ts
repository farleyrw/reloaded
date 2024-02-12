import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResultEditComponent } from './edit/result-edit.component';
import { ResultListComponent } from './list/result-list.component';
import { ResultViewComponent } from './view/result-view.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'results', component: ResultListComponent, title: 'All Results' },
      // TODO: for reload
      { path: 'results/view/:reloadResultId', component: ResultViewComponent, title: 'Reload Results' },
      { path: 'results/edit/:resultId', component: ResultEditComponent, title: 'Manage Result' }
      // TODO: results/analysis/:resultsId
    ])
  ],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
