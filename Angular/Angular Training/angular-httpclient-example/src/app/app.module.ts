import { SmartphoneDataService } from './services/smartphone-data.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SmartphoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SmartphoneDataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("Root module is loaded");
  }
}
