import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResultEditComponent } from './edit/result-edit.component';
import { ResultListComponent } from './list/result-list.component';
import { ResultViewComponent } from './view/result-view.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'results', component: ResultListComponent, title: 'All Results' },
      { path: 'results/view/:resultId', component: ResultViewComponent, title: 'Reload Results' },
      { path: 'results/edit/:resultId', component: ResultEditComponent, title: 'Manage Result' }
      // results for reload
      // result for result instance
      // TODO: results/analysis/:resultsId
    ])
  ],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
