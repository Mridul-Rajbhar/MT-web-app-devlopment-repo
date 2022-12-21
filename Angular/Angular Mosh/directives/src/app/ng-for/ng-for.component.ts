import { Component } from '@angular/core';

type courseType = {id: number, name: string}

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  courses: courseType[] = [];
  // noCourses: string = "no courses exist";

  onAdd(){
    this.courses.push({
      id:4,
      name: 'course4'
    })
  };

  onRemove(course: courseType){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course: courseType){
    course.name = "updated";
  }

  loadCourses(){
      this.courses = [
        {id: 1, name: 'Course1'},
        {id: 2, name: 'Course2'},
        {id: 3, name: 'Course3'}
      ];
  }

  trackCourse(index: number, course: courseType){
    return course? course.id : undefined;
  }
}
