import { Component, OnInit } from '@angular/core';
// import {Heroes} from './mock-heroes'
import { Hero } from './hero';
import {HeroServiceService} from './hero-service.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {
  // Heroes = Heroes
  Heroes:Hero[]=[]

  constructor(HeroServiceService:HeroServiceService) {
    this.Heroes = HeroServiceService.getHeroes()
  }

  ngOnInit() {
  }

}

//所依赖的数据(目前是mock,后期从接口获取)不是直接导入到组件中,因为不利于维护
//而是建一个服务,服务里面的类返回这些数据,在将服务注入到组件的构造器中(作为构造函数的形参)
//在构造器中对定义的类的属性进行重新赋值

