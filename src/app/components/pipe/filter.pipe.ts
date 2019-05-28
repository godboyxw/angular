import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], args?: any): any {
    return arr.filter((item,index,arr)=>{
      return !arr.includes(item,index + 1)
    })
  }

}
