import { Component,Output, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor(){

  }

  ngOnInit(){

  }
  @Input('total') all:number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  // It is storing the value selected by the user.
  selectedRadioButtonValue: string  = "All";

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  OnRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }

}
