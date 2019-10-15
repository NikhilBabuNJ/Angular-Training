


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toUpperCase'
})

export class UpperCasePipe implements PipeTransform {
    transform(value: any) {
       return value.toUpperCase();
    }
}

