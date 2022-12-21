import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  items:string[] = ["nutrella hazelnut", "sugar coated fennel seeds"];
  checked:number = 0;  

  constructor(){

  }

  addItem(newItem:HTMLInputElement){
    if(newItem.value != "")
    {
      this.items.push(newItem.value);
      newItem.value = "";
    }
  }

  countItems(f: NgForm){
    let count=0;
    this.items.forEach(element => {
      if(f.value[element] == true)
        count++;
    });
    this.checked = count;
  }

  hideCheckItems(f: NgForm){
    this.items.forEach(element=>{
      if(f.value[element]){
      // console.log(f.);
      }
    })
  }
  
}
