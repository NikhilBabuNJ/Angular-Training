
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-userinfo',
    // selector: '.app-userinfo', class selector
    // selector: '[app-userinfo]', attribute selector
    templateUrl: './user-info.component.html',
    // template: `<strong>
    // I am inline content of ts file
    // </strong>`
    styleUrls: ['./user-info.component.css'],
    encapsulation: ViewEncapsulation.None
    // styles: [
    //     `.user{
    //         text-decoration: underline;
    //         color: blue;
    //         border: 1px solid;
    //     }`
    // ],
    // providers: []
})

export class UserinfoComponent {

    // public userInfo = {
    //     userName: 'abc',
    //     age: 25
    // };
    public userName = 'abc';
    public userData: string;
    public userAge  = 25;
    isModalWindow = false;
    constructor() {
    }

    onManageuser(userData) {
        this.userData = userData;
        console.log('userData', this.userData);
    }

    getNativePlace(event) {
        console.log(event);
    }

    onModalToggle() {
        this.isModalWindow = !this.isModalWindow;
    }

    onModalClose(isModal) {
        this.isModalWindow = isModal;
    }
}
