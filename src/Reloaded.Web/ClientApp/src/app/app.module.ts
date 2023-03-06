import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { FirearmListComponent } from './firearms/list/firearm-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ReloadListComponent } from './reloads/list/reload-list.component';
import { FirearmViewComponent } from './firearms/view/firearm-view.component';
import { FirearmEditComponent } from './firearms/edit/firearm-edit.component';
import { ReloadEditComponent } from './reloads/edit/reload-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FirearmListComponent,
    ReloadListComponent,
    FirearmViewComponent,
    FirearmEditComponent,
    ReloadEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
