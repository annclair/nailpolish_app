import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { NailpolishDetailComponent } from './nailpolish-detail/nailpolish-detail.component';
import { NailpolishComponent } from './nailpolish/nailpolish.component';
import { NailpolishService } from './nailpolish.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NailpolishDetailComponent,
    NailpolishComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    NailpolishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
