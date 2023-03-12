import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from './list/result-list.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultViewComponent } from './view/result-view.component';

@NgModule({
  declarations: [
    ResultListComponent,
    ResultViewComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
