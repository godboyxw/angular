import { Component, OnInit } from '@angular/core';
import {toDoListData} from './to-do-list.data'
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.less']
})
export class ToDoListComponent implements OnInit {

  public task:string

  doingArr:toDoListData[] = []
  doneArr:toDoListData[] = []


  constructor() {
    // console.log(this.doingArr);
  }

  ngOnInit() {
  }

  addContent(){
    let arrItem = {
      checked:false,
      title:this.task
    }
    this.doingArr.push(arrItem)
    this.task = ''
    console.log(this.doingArr);
  }
  // changeCheckbox(){
  //   this.doingArr = this.doingArr.filter(item => {return item.checked === false})
  // }

  deleteItem(key){
    this.doingArr.splice(key,1)
  }

  finish(){
    let arr = []

    arr = this.doingArr.filter(item=>{
      return item.checked === true
    })
    console.log(arr);
    this.doneArr = [...arr,...this.doneArr]

    this.doingArr = this.doingArr.filter(item=>{
      return item.checked === false
    })

  }
}
