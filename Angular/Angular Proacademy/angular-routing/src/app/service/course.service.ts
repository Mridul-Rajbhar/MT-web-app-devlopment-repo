import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses = [
    {id: 1, name: 'C++'},
    {id: 2, name: 'Java'},
    {id: 3, name: 'JS'},
  ];
}
