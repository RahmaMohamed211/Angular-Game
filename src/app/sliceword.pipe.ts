import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceword'
})
export class SlicewordPipe implements PipeTransform {

  transform(short_description:string):string {

    return     short_description.split("").slice(0,25).join("");
  }

}
