import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from './list/result-list.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultViewComponent } from './view/result-view.component';
import { ResultEditComponent } from './edit/result-edit.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ResultListComponent,
    ResultViewComponent,
    ResultEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResultsRoutingModule,
    BrowserAnimationsModule,
    NgbDatepickerModule
  ]
})
export class ResultsModule { }
