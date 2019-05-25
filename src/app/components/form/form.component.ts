import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})

export class FormComponent implements OnInit {

  // username:string=''

  public peopleInfo:any={ //一系列数据,定义在一个对象里面
    username : '',
    gender:'1',
    cityList:['武汉','上海','北京'], //可选列表
    city:'北京',  //获取的值,select下拉框默认的值
    hobby:[
      {
        title:'吃饭',
        checked:false
      },
      {
        title:'睡觉',
        checked:false
      },
      {
        title:'敲代码',
        checked:true
      }
    ],
    mark : '输入病情...'
  }

  constructor() { }

  ngOnInit() {
  }

  doSubmit(){
    //1.原生js里面DOM操作节点
    // console.log(document.getElementById('username').value); //可以获取到,但不推荐
    //ts里面报错: 类型HTMLElement上不存在属性value,解决办法,定义DOM对象时指定数据类型
    let inputDom:any = document.getElementById('username')
    console.log(inputDom.value); //定义成object也会报错,any可以

    // 2.angular里面利用指令进行双向数据绑定(需要引入模块,推荐)
    console.log(this.peopleInfo.username)

    console.log(this.peopleInfo.gender); //获取到对应的value值

    console.log(this.peopleInfo.city);//用双向数据绑定,即可获取select下拉框的value值

    console.log(this.peopleInfo)
  }

  cityChange(){
    console.log(this.peopleInfo.city); //用事件也可以触发select下拉框的事件,而不是点击按钮
  }

}
