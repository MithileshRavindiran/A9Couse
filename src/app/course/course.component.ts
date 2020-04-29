import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title="List of Course";
  imageUrl="http://lorempixel.com/400/200";
  Colspan=2;
  isActive = false;
  courses;
  courseDetails= {
    title: "The Complete Angular course",
    rating: 4,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 9, 12)
  }
  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  email =  "me@example.com";
  constructor(courseService: CourseService) { 
    this.courses=courseService.getCourses();
  }

  ngOnInit(): void {
  }
  onDivClick($event) {
  console.log("Div was clicked", $event);
}

onKeyUpEnter() {
  console.log("Input was entered", this.email);
}

onKeyUpEnterName(value) {
  console.log("Input was entered", value);
}
  onClick($event) {
    this.isActive = !this.isActive;
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }


}
