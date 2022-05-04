import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
