import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, OnChanges, ContentChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManageUsersComponent implements OnInit, OnChanges {

  userName: string;
  isSubmitBtn: boolean;
  @Input('userInformation') userInfo: string;
  @Output() mangeUser = new EventEmitter<string>();

  @ViewChild('username', { static: false }) username;

  @ContentChild('childContent', { static: true }) childContent;

  @Input() userAge;

  @Output() userNativePlace = new EventEmitter<string>();

  public fruits;
  constructor(private activatedRoute: ActivatedRoute) {
    this.userName = 'abc';

    // setTimeout(function() {
    //   this.isSubmitBtn = true;
    // }, 4000);

    // setTimeout(() => {
    //   this.isSubmitBtn = true;
    // }, 4000);

    // setTimeout(() => {
    //   this.isSubmitBtn = false;
    // }, 8000);
    this.fruits = [{color: 'yellow', name: 'banana', price: 5},
                    {color: 'red', name: 'apple' , price: 20},
                    {color: 'green' , name : 'grapes' , price: 30}];
  }
  ngOnInit() {
    console.log('with view child', this.username);
    console.log('content child....', this.childContent);
    this.activatedRoute.params.subscribe((params) => {
      console.log('params', params);
    });

    this.activatedRoute.queryParams.subscribe((queryParm) => {
      console.log('query params', queryParm);
    });

    this.activatedRoute.fragment.subscribe((fragmnt) => {
      console.log('fragments...', fragmnt);
    });
  }

  ngOnChanges(simpleChanges) {
    console.log('ng on changes...');
  }

  getUserFullName() {
    return this.userName + 'xyz';
  }

  onToggle(eventData) {
    this.isSubmitBtn = !this.isSubmitBtn;
    console.log('event data', eventData);
    this.mangeUser.emit('childcomponent data into parent');
    console.log('with view child', this.username);
    this.userNativePlace.emit('user age from child..');
  }

  onUserNameChange() {
    // console.log('userNamechange', this.userName);
    console.log('with view child', this.username);
  }
}
