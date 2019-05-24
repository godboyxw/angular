import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexReform',
  pure: true
})

export class SexReformPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    switch (value){ //switch和括号之间有一个空格
      case 'male' : return '男'
      case 'female' : return '女'
      default : return '不男不女或者雌雄同体'
    }
  }
}

