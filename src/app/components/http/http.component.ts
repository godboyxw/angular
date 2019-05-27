import {Component, OnInit }from '@angular/core';
import {HttpClient,HttpParams, HttpHeaders }from '@angular/common/http';
const headers =new HttpHeaders().set("Content-type","application/json; charset=UTF-8");

@Component( {
  selector:'app-http',
  templateUrl:'./http.component.html',
  styleUrls:['./http.component.less']
  })

  export class HttpComponent implements OnInit {
  getUrl:string = 'http://192.168.1.11:8990/map/styles/list'
  postUrl:string = 'http://192.168.1.11:8990/map/styles/update'

  public dataArr:any[]=[]

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.getRequest()
    this.postRequest()
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
}
