import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  imageUrl: string = "/assets/images/happy.jpg";
  buttonStatus:string = "sad";
  userInput: string = "";

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

}
