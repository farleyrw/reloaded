import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from './list/result-list.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultViewComponent } from './view/result-view.component';
import { ResultEditComponent } from './edit/result-edit.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CalendarModule
  ]
})
export class ResultsModule { }
