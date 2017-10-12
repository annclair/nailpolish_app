import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { NailpolishDetailComponent } from './nailpolish-detail/nailpolish-detail.component';
import { NailpolishComponent } from './nailpolish/nailpolish.component';
import { NailpolishService } from './nailpolish.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NailpolishAddComponent } from './nailpolish-add/nailpolish-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NailpolishDetailComponent,
    NailpolishComponent,
    DashboardComponent,
    NailpolishAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    NailpolishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }