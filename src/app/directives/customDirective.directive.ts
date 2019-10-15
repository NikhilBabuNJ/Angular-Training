

import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
    selector: '[appColor]'
})

export class CustomColorDirective {

    @HostBinding('style.backgroundColor') backgroundColor;

    @HostListener('mouseover')
    onMouserHover($event) {
        this.backgroundColor = 'green';
    }

    @HostListener('mouseout')
    onMouserOut($event) {
        this.backgroundColor = 'red';
    }

    constructor() {
        setTimeout(() => {
            this.backgroundColor = 'blue';
        }, 3000);
    }
}
