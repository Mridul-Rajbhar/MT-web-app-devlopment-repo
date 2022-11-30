import { Component } from '@angular/core';

@Component({
  selector: 'app-tests-events',
  templateUrl: './tests-events.component.html',
  styleUrls: ['./tests-events.component.css']
})
export class TestsEventsComponent {
  constructor(){
    console.log("Test Events Component Works");
  }
}
