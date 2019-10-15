import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('userForm', {static: true})userForm;
  constructor() { }

  ngOnInit() {
  }

  onUserFormSubmit(formData) {
    console.log('form details', formData);
    console.log('form details with reference',  this.userForm);
  }
}
