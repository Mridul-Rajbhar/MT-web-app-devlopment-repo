import { AppComponent } from './app.component';
import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { TestsEventsComponent } from './tests-events/tests-events.component';
import { TestForLoopComponent } from './test-for-loop/test-for-loop.component';

@NgModule({
    declarations: [AppComponent, TestsEventsComponent, TestForLoopComponent],
    bootstrap:[AppComponent],
    imports: [BrowserModule]
})
export class AppModule{
    constructor(){
        console.log("Root Module is loaded at runtime.");
    }
}