import { Component, OnInit ,ViewChild} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
 @ViewChild('child') child

  msg:string='我是父组件,引用了子组件,并给他定义的不确定属性传值'

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goRouter(){
    // this.router.navigate(['/form']) //跳转页面,未传值
    this.router.navigate(['/lists/list','100']) //跳转页面,url传值,即是/lists/list/100
  }

  getChildData(){
    this.child.getChildFun()
    console.log(this.child.getChildData);
    console.log(this.child.info); //123
  }
}
