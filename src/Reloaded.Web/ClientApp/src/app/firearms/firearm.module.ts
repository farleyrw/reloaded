import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirearmRoutingModule } from './firearm-routing.module';
import { FirearmListComponent } from './list/firearm-list.component';
import { FirearmViewComponent } from './view/firearm-view.component';
import { FirearmEditComponent } from './edit/firearm-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FirearmListComponent,
    FirearmViewComponent,
    FirearmEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FirearmRoutingModule
  ]
})
export class FirearmModule { }
