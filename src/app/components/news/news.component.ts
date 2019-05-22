import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  title="我是一个新闻组件" //定义数据,属性  不用加var 前面省略了public
  public name = "news"
  username:string="张三"
  public student:any = 123
  
  constructor() { }

  ngOnInit() {
  }

}
