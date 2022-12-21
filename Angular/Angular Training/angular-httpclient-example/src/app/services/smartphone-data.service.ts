
import { Injectable } from '@angular/core';

import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Smartphone } from '../smartphone';

@Injectable({
  providedIn: "root"
})
export class SmartphoneDataService {

  http: HttpClient;
  localUrl: string = "http://localhost:3000/phones"


  constructor(http: HttpClient) { 
    this.http = http;
    console.log("Data service object instantiated");
  }


  public getSmartphone(): Observable<HttpResponse<Smartphone[]>>{
    return this.http.get<Smartphone[]>(
      this.localUrl,
      {observe: 'response'}
    );
  }

  public getSmartPhoneByID(id: any){
    return this.http.get<Smartphone>(this.localUrl+"/"+id)
  }

  
}
