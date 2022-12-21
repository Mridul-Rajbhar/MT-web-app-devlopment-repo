import { Component } from '@angular/core';

type nameMsg = {
  name: string,
  message: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  contacts: nameMsg[]=[
    {name:"Mridul", message:"Hi"},
    {name:"Sham", message:"Hi my name is sham"},
    {name:"Mridul", message:"Hi"},
  ];
}
