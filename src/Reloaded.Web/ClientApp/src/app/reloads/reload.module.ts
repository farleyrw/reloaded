import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadEditComponent } from './edit/reload-edit.component';
import { ReloadListComponent } from './list/reload-list.component';
import { ReloadRoutingModule } from './reload-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReloadEditComponent,
    ReloadListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReloadRoutingModule
  ]
})
export class ReloadModule { }
