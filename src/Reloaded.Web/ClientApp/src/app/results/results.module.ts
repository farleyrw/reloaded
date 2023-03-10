import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from './list/result-list.component';
import { ResultsRoutingModule } from './results-routing.module';

@NgModule({
  declarations: [
    ResultListComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
