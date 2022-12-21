import { Component } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.css']
})
export class ShowNameComponent {
  showName = true;

  toggleShowName(){
    this.showName = false;
  }

}
