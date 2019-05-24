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
  public student:any = '学生'
  public userinfo : object={
    username : 'zhangsan',
    age : 30
  }
  content='<h1>哈哈</h1>'
  public message:any //只定义属性,没有赋值

  //定义数组
  public arr:any[]=[1,2,3]

  public arr2:Array<any>=['a','b','c']

  public userList:any[] = [
    {
      username:'zhangsan',
      age:13
    },
    {
      username:'lisi',
      age:35
    },
    {
      username:'wangwu',
      age:21
    }
  ]

  public cars:any[] = [
    {
      cate:'宝马',
      lists : [
        {
          title:'宝马x1',
          price:'100000'
        },
        {
          title:'宝马x2',
          price:'100000'
        },
        {
          title:'宝马x3',
          price:'100000'
        }
      ]
    },
    {
      cate:'奔驰',
      lists : [
        {
          title:'奔驰x1',
          price:'100000'
        },
        {
          title:'奔驰x2',
          price:'100000'
        },
        {
          title:'奔驰x3',
          price:'100000'
        }
      ]
    },
    {
      cate:'法拉利',
      lists : [
        {
          title:'法拉利x1',
          price:'100000'
        },
        {
          title:'法拉利x2',
          price:'100000'
        },
        {
          title:'法拉利x3',
          price:'100000'
        }
      ]
    },
  ]

  constructor() {
    this.message = '给属性赋值,改变属性的值'  //this获取属性值
   }

  ngOnInit() {
  }

}
