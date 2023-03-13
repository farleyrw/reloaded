import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadEditComponent } from './edit/reload-edit.component';
import { ReloadListComponent } from './list/reload-list.component';
import { ReloadRoutingModule } from './reload-routing.module';
import { FormsModule } from '@angular/forms';
import { ReloadViewComponent } from './view/reload-view.component';

@NgModule({
  declarations: [
    ReloadEditComponent,
    ReloadListComponent,
    ReloadViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReloadRoutingModule
  ]
})
export class ReloadModule { }
