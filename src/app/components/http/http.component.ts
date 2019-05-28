import {Component, OnInit, HostBinding }from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import axios from 'axios'
import {HttpClient,HttpParams, HttpHeaders }from '@angular/common/http';
const headers =new HttpHeaders().set("Content-type","application/json; charset=UTF-8");

@Component( {
  selector:'app-http',
  templateUrl:'./http.component.html',
  styleUrls:['./http.component.less'],
  animations: [
    trigger('openClose', [
      //状态1
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      //状态2
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      //从1过渡到2
      transition('open => closed', [
        animate('1s 0.5s ease-in-out')
      ]),
      //从2过渡到1
      transition('closed => open', [
        animate('0.5s 1s linear')
      ]),
    ]),
  ]
})
export class HttpComponent implements OnInit {
  getUrl:string = 'http://192.168.1.11:8990/map/styles/list'
  postUrl:string = 'http://192.168.1.11:8990/map/styles/update'

  public dataArr:any[]=[]

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.getRequest()
    this.postRequest()
    axios.get(this.getUrl).then(res=>{
      console.log('res',res); //res {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
    })
  }

  getRequest() {
    this.http.get(this.getUrl)
      .subscribe((data:any) =>  {
      console.log(data);
      this.dataArr = data.data
      console.log(this.dataArr);
    })
  }

  postRequest(){
    let data = {
      "name":"angularHttpTest2",
      "data":"angularHttpTest"
    }
    this.http.post(this.postUrl,data,{headers})
    .subscribe((val :any) => {
        console.log("Post call successful value returned in body", val);
    },(error:any) => {
        console.log("Post call in error", error);
    },()=>{
        console.log("The Post observable is now completed.");
    })
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
