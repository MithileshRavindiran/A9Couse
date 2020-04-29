import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  courses: any;
  viewMode = "map";
  constructor() { }

  ngOnInit(): void {
    this.courses=[
      {id: 1, name: 'course1'},
      {id:2, name:'course2'},
      {id:3, name:'course3'}
    ];
  }


  removeCourse(course) {
    console.log(course.id);
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  addCourse() {
    this.courses.push({id :4, name:'course4'});
  }

}
