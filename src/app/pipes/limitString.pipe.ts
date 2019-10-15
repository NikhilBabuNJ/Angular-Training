


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitStringValues'
})

export class LimitStringPipe implements PipeTransform {
    transform(value: any, startIndex, endIndex) {
        return value.substring(startIndex, endIndex);
    //    return value.substr(0, 10);
    }
}

