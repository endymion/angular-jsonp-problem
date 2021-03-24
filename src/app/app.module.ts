import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  HttpClientModule,
  HttpClientJsonpModule
} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FooterService } from './footer/footer.service'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [ FooterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
