import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SmartphoneDataService } from './../services/smartphone-data.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  smartPhone: SmartphoneDataService;
  posts: {}[];

  constructor(smartPhone: SmartphoneDataService){
    this.smartPhone = smartPhone;
    console.log("post comments constructor");
  }

  ngOnInit():void{
    console.log("ngOnInit() method");
    // this.smartPhone.getPosts()
    //   .subscribe(
    //     (data: any)=>{
    //       console.log(data);
    //       this.posts = data;
    //     },
    //     (error: HttpErrorResponse)=>{console.log(error);},
    //     ()=>{console.log("complete signal");}
    // );
    
  }
}
