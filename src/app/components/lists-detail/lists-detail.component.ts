import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-lists-detail',
  templateUrl: './lists-detail.component.html',
  styleUrls: ['./lists-detail.component.less']
})
export class ListsDetailComponent implements OnInit {

  paramsData:any=''

  constructor(private route:ActivatedRoute) { } //实例化模块

  ngOnInit() {
    console.log(this.route.params)//是一个observe的对象

    // console.log(Params); Params仅表示类型
    // console.log(Router);Router函数
    // console.log(ActivatedRoute);ActivatedRoute函数

    this.route.params.subscribe(data => { //引用并打印出数据
      console.log(data); //{num: "2"}
      this.paramsData = data.num
    })
  }

}
