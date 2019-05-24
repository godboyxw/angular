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

  addUser(name:string){
    // this.contacts.push({name:this.name})
    console.log(name);
    // this.contacts.push({name:name})
    this.contacts.push({name})  //简写 对象的key value一样,都是name

    this.name = ''
  }
  constructor() { }

  ngOnInit() {

  }

}
