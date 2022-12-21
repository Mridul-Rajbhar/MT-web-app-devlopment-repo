import { CourseService } from './../service/course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  
  courses: {id:number, name: string}[];
  constructor(private _service: CourseService){
    this.courses = this._service.courses;
  }
}
