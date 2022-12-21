import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses=[
    {
      id: 101,
      name: "Angular Course",
      author: "Mridul Rajbhar",
      duration: 32,
      type:"premium",
      price:2000,
      ratings:5,
      images: "",
      description:"full course"
    },
    {
      id: 102,
      name: "C++ Course",
      author: "Mridul Rajbhar",
      duration: 22,
      type:"free",
      price:0,
      ratings:3,
      images: "",
      description:"full course"
    }
  ];

  getTotalCourses(){
    return this.courses.length;
  }

  getTotalFreeCourses(){
    return this.courses.filter(
      course => course.type === 'free'
    ).length;
  }

  getTotalPremiumCourses(){
    return this.courses.filter(
      course=> course.type === "premium"
    ).length;
  }

  courseCountRadioButton: string = "All";

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    //console.log(data);
  }


  searchText:string = "";
  onSearchTextEnteredEvent(searchValue:string){
    this.searchText = searchValue;
    //console.log(searchValue);
  }
}
