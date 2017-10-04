import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NailpolishDetailComponent } from './nailpolish-detail/nailpolish-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NailpolishDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
