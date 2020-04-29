import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }


  getCourses() {
    return ["Course1", "Course 2", "Course 3"]
  }
}
