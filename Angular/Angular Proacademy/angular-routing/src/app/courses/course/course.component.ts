import { CourseService } from './../../service/course.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  course: {id: number, name: string};
  private _courseId: string;
  editMode: boolean = false;

  constructor(private _activatedRoute: ActivatedRoute,private _service: CourseService){
    
  }

  ngOnInit(){
    // this._courseId = this._activatedRoute.snapshot.paramMap.get('id');
    // this.courses = this._service.courses.filter(ele => ele.id.toString() == this._courseId);

    this._activatedRoute.paramMap.subscribe(
      (response)=>{
        this._courseId = response.get('id');
        this.course = this._service.courses.filter(ele=>ele.id.toString()==this._courseId)[0];
      }
    )
  }

  editButton(){
    this.editMode = !this.editMode;
  }
}
