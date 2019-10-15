

import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
    selector: '[appColor]'
})

export class CustomColorDirective {

// i added the new line for git commit

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
