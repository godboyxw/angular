import {Injectable }from '@angular/core';
import {Heroes}from './mock-heroes';
import {HttpClient, HttpHeaders }from '@angular/common/http';
import {Observable, of }from 'rxjs';
import {MessageService }from './message.service';

@Injectable( {//@Injectable() 是每个 Angular 服务定义中的基本要素。
  providedIn:'root'
})

export class HeroServiceService {

  getHeroes() {//该类的其余部分导出了一个 getHeroes 方法，它会返回像以前一样的模拟数据
  return Heroes;
  }


}
 