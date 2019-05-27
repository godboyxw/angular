import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})

export class ChildComponent implements OnInit {
  @Input() userInfo:string //在子组件中通过@Input()定义其他组件引用时(即是父组件)传入的动态属性
  getChildData:string='父组件调用子组件方法'

  info:number=123
  
  constructor() { }

  ngOnInit() {
  }

  getChildFun(){
    console.log('父组件调用子组件方法')
    // console.log(this.getChildData);
  }
}
