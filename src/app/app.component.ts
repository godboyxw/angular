import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'AngularDemo1111111111';
  num:number
  routes:any=[
    {
      path:'home',
      title:'首页'
    },
    {
      path:'http',
      title:'http请求'
    },
    {
      path:'todo',
      title:'to-do-list'
    },
    {
      path:'hero',
      title:'hero'
    },
    {
      path:'form',
      title:'form表单'
    },
    {
      path:'news',
      title:'news'
    },
    {
      path:'lists',
      title:'lists'
    }
  ]

  clickRouter(key:number){
    this.num=key
  }
}
