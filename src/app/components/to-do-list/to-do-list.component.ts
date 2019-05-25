import { Component, OnInit } from '@angular/core';
import {toDoListData} from './to-do-list.data'
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.less']
})
export class ToDoListComponent implements OnInit {

  public task:string
  search:string
  searchArr : any[] = []

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

  searchValue(){
    this.searchArr.push(this.search)
     console.log(new Set(this.searchArr));
    this.searchArr = Array.from(new Set(this.searchArr)) //利用Set独一无二的数据对象进行数组的去重
    console.log(this.searchArr);
    this.search = ''
  }

  deleteListItem(key){
    this.searchArr.splice(key,1)
  }
}
