import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([
      
    ])
  });
  constructor() { }

  ngOnInit(): void {
  }

  addTopic(topic:  HTMLInputElement)  {
    console.log('hello');
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  }

}
