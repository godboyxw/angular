import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  url:string='https://www.baidu.com/img/bd_logo1.png'

  public list:any[] =[
    {
      title:1
    },
    {
      title:2
    },
    {
      title:3
    },
  ]

  public flag:boolean=true

  public day:any=new Date().getDay()

  public style:string='pink'

  jsonObject: Object = {name: 'xiaoming', age: '35', family: {parent: 'vincent', mother: 'bella'}};

  birthday = new Date(2018, 2, 25);

  sliceArr :any[] = [1,2,3,4,5,6,7]

  sex:string = 'male'

  contacts:Array<any> = [
    {name:'张三'},
    {name:'李四'}
  ]

  public name:string=''
  today:any=new Date()
  title:string='改变前的数据'

  value:string='这是默认值'


  constructor() {
    console.log(this.today) //Sat May 25 2019 09:59:24 GMT+0800 (中国标准时间)
  }

  addUser(name:string){
    // this.contacts.push({name:this.name})
    console.log(name);
    // this.contacts.push({name:name})
    this.contacts.push({name})  //简写 对象的key value一样,都是name

    this.name = ''
  }

  ngOnInit() {

  }

  run(){
    console.log('run')
  }

  getData(){
    console.log(this.title)
  }

  setData(){
    this.title="改变后的数据"
  }

  keyDown(e){
    // console.log('keyDown')
    console.log(e);
    console.log(e.keyCode);
    if(e.keyCode ===13){
      console.log('按下enter键了');
    }else{
      console.log(e.target.value);
      //e.target 获取当前对象
      //e.target.value  获取当前对象的值
    }
  }

  keyUp(e){
    // console.log('keyDown')
    console.log(e);
    console.log(e.keyCode);
    if(e.keyCode ===13){
      console.log('按下enter键了');
    }else{
      console.log(e.target.value);
      //e.target 获取当前对象
      //e.target.value  获取当前对象的值
    }
  }

  getEventDom(e){
    console.log(e.target); //<button _ngcontent-rsj-c1="">执行事件,获取事件对象</button>
    var dom:any = e.target
    dom.style.color='red'
  }

  changeValue(){
    this.value = '这是改变后的值'
    console.log(this.value);
  }
}
