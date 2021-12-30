import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BikeComponent } from './bike/bike.component';
import { HeaderComponent } from './header/header.component';
import { ReadingComponent } from './reading/reading.component';
import { CrochetComponent } from './crochet/crochet.component';
import { CodingComponent } from './coding/coding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikeComponent,
    HeaderComponent,
    ReadingComponent,
    CrochetComponent,
    CodingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
