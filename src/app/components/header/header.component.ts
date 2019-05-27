import {Component, OnInit, ViewChild}from '@angular/core';
import {Router,ActivatedRoute, Params}from '@angular/router'

@Component( {
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.less']
})

export class HeaderComponent implements OnInit {
 @ViewChild('child')child

  msg:string = '我是父组件,引用了子组件,并给他定义的不确定属性传值'

  private listsId:number

  constructor(private routeInfo:ActivatedRoute,private router:Router) {}

  ngOnInit() {
    console.log(this.routeInfo.snapshot.queryParams.id); //22
    console.log(this.routeInfo.snapshot.queryParams['id']); //22

    console.log(this.routeInfo.queryParams);
    this.routeInfo.queryParams.subscribe((params:Params) => { //通过queryParams来获取查询字符串的对象数据
      this.listsId=params['id']
      console.log(params)
      console.log(this.listsId);
    })

    //接收在在路由配置中,传递的数据
    console.log(this.routeInfo.data);
    this.routeInfo.data.subscribe((data:Params) => {
      console.log(data['isDone']); //true
    })
  }

  goRouter() {
    // this.router.navigate(['/form']) //跳转页面,未传值
    this.router.navigate(['/lists/list', '100'])//跳转页面,url传值,即是/lists/list/100
}

  getChildData() {
    this.child.getChildFun()
    console.log(this.child.getChildData);
    console.log(this.child.info); //123
}

  getData(data) {
    console.log(data); //通过Output,EventEmitter,子组件向父组件传值
}
}
