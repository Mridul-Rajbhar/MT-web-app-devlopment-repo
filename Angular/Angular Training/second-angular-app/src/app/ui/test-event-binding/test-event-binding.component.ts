import { Component } from '@angular/core';

@Component({
  selector: 'app-test-event-binding',
  templateUrl: './test-event-binding.component.html',
  styleUrls: ['./test-event-binding.component.css']
})
export class TestEventBindingComponent {
  imageUrl: string = "/assets/images/happy.jpg";
  buttonStatus:string = "sad";
  userInput: string = "";
  userInputEvent: string = "";

  buttonHandler(){
    
    let imageLocation = "/assets/images/";
    let myState:string = this.imageUrl.substring(15, this.imageUrl.length);

    if(myState == "happy.jpg"){
      this.imageUrl = imageLocation +  "sad.jpg";
      this.buttonStatus = "happy";
    }
    else
    {
      this.imageUrl = imageLocation + "happy.jpg"
      this.buttonStatus = "sad";
    }
  }

  showInput(userValue: string){
    this.userInput = userValue;
  }

  showInputEvent(e: any){
    // console.log(e);
    console.log(e.target.value);
    this.userInputEvent = e.target.value;
  }

  updateHeader(header: string){
    console.log(header);
  }

}
