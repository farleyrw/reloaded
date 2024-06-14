import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FirearmModule } from './firearms/firearm.module';
import { ResultsModule } from './results/results.module';
import { ReloadModule } from './reloads/reload.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({ declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        FirearmModule,
        ReloadModule,
        ResultsModule,
        AppRoutingModule,
        NgbModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

/*
  TODO:
  create core module
    create error handler
  create shared module
*/
