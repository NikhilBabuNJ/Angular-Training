import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  userForm;
  constructor() {
    this.userForm =  new FormGroup({
      email: new FormControl('nikhil@abc.com', [Validators.email, Validators.required]),
      password: new FormControl('nikhil'),
    });
   }

  ngOnInit() {
  }

  onUserFormSubmit() {
    console.log('user form...', this.userForm);
  }
}
