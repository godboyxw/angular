import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectFilter',
  pure :false
})
export class SelectFilterPipe implements PipeTransform {

  transform(allContacts: any[], prefix: string): Array<any>{
    return allContacts.filter(item => item.name.match('^' + prefix))
  }
}
