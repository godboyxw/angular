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
    console.log('params',this.route.params)//BehaviorSubject,是一个observe的对象
    console.log('paramMap',this.route.paramMap); //AnonymousSubject 

    // console.log(Params); Params仅表示类型
    // console.log(Router);Router函数
    // console.log(ActivatedRoute);ActivatedRoute函数

    this.route.params.subscribe((data:Params) => { //引用并打印出数据
      console.log(data); //{num: "2"}
      this.paramsData = data.num
    })

    console.log(this.route.snapshot.params.num); //4
    console.log(this.route.snapshot.params['num']) //4
  }

}
