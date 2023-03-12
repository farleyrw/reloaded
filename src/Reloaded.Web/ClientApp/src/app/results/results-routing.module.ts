import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResultListComponent } from './list/result-list.component';
import { ResultViewComponent } from './view/result-view.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'results', component: ResultListComponent, title: 'All Results' },
      { path: 'results/view/:resultId', component: ResultViewComponent, title: 'Reload Results' }
      // results for reload
      // result for result instance
      // TODO: results/analysis/:resultsId
    ])
  ],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
