import { HttpResponse } from '@angular/common/http';
import { SmartphoneDataService } from './../services/smartphone-data.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Smartphone } from '../smartphone';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent {
  smartphones: Smartphone[] = [];

  service: SmartphoneDataService;
  constructor(service: SmartphoneDataService){
    this.service = service;
  }
  
  ngOnInit():void{
    this.getSmartPhonesFromService();
    this.getSmartPhoneByIdFromService("P0001");
    // console.log(this.smartphones);
  }

  getSmartPhonesFromService(){
    this.service.getSmartphone().subscribe(
      (data: HttpResponse<Smartphone[]>)=>{
        // console.log(data.body);
        for(const d of data.body){
          this.smartphones.push({
            id: d.id,
            name: d.name,
            desc: d.desc,
            price: d.price,
            updated: d.updated
          });
        }
      })
  }

  getSmartPhoneByIdFromService(id: any){
    this.service.getSmartPhoneByID(id)
    .subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }

}
