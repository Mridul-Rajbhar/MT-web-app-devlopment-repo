import { SquarePipe } from './Pipes/sqr.pipe';
import { LogService } from './Service/log.service';
import { IncrementService } from 'src/app/Service/increment.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncrementOneComponent } from './UIComponent/increment-one/increment-one.component';
import { IncrementTwoComponent } from './UIComponent/increment-two/increment-two.component';
import { ExponentialPipe } from './Pipes/exponential.pipe';
import { StringLengthPipe } from './Pipes/string-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IncrementOneComponent,
    IncrementTwoComponent,
    SquarePipe,
    ExponentialPipe,
    StringLengthPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [IncrementService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor(){
  console.log("Root Module loaded ...");
}

}
