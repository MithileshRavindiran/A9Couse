import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    'userName':new FormControl(
      '',
      [Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(10),
        UsernameValidators.cannotContainSpace],
        UsernameValidators.shouldBeUnique),
    'password': new FormControl(
      '',
      [Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(10), 
        Validators.pattern('banana')])

  });
  constructor() { }

  ngOnInit(): void {
  }

  onChange(userName) {
    console.log(userName);
  }

  onChangePassword(password) {
    console.log(password);
  }

  get userName() {
    return this.form.get('userName');
  }
  
  get password() {
    return this.form.get('password');
  }

  submitForm() {
    console.log(this.form);
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
