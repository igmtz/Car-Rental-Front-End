import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { RentalPageComponent } from './rental-page/rental-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { CodePageComponent } from './code-page/code-page.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RentalPageComponent,
    ConfirmationPageComponent,
    InformationPageComponent,
    CodePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
