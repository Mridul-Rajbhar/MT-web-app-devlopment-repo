import { DemoComponent } from './demo/demo.component';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view-child';
  
  dobInput:string;

  @ViewChild('dobInput') dateOfBirth : ElementRef ;
  @ViewChild('ageInput') age: ElementRef;
  @ViewChild(DemoComponent, {static:true}) demo:DemoComponent;

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    this.age.nativeElement.value = currentYear - birthYear;

    console.log(this.dobInput);
  }
}
