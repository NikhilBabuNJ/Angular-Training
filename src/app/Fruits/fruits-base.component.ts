


import { Component } from '@angular/core';

@Component({
    selector: 'app-fruit',
    templateUrl: './fruits-base.component.html',
    styles: [`
    a {
        font-size: 18px;
        padding: 20px;
    }
    .active{
        color:black;
        text-decoration: underline
    }
    `]
})

export class FruitBaseComponent {

}

