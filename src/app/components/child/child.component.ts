import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})

export class ChildComponent implements OnInit {
  @Input() userInfo:string //在子组件中通过@Input()定义其他组件引用时(即是父组件)传入的动态属性

  getChildData:string='父组件调用子组件方法'
  info:number=123

  @Output() private outer = new EventEmitter()  //实例化EventEmitter
  public data:string = '通过Output,EventEmitter,子组件向父组件传值'

  constructor() { }

  ngOnInit() {
    this.self()
  }

  getChildFun(){
    console.log('父组件调用子组件方法')
    // console.log(this.getChildData);
  }

  self(){
    this.outer.emit(this.data)  //引用实例化的EventEmitter,然后广播,广播的时候可以把子组件的值传给父组件
  }
}
