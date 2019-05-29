import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HttpComponent} from './components/http/http.component'
import {ToDoListComponent} from './components/to-do-list/to-do-list.component'
import {HomeComponent} from './components/home/home.component'
import {HeroComponent} from './components/hero/hero.component'
import {FormComponent} from './components/form/form.component'
import {NewsComponent} from './components/news/news.component'
import {HeaderComponent} from './components/header/header.component'
import {ListsDetailComponent} from './components/lists-detail/lists-detail.component'

const routes: Routes = [
  {
    path:'',
    // component:HomeComponent
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'http',
    component:HttpComponent
  },
  {
    path:'todo',
    component:ToDoListComponent
  },
  {
    path:'hero',
    component:HeroComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'lists',
    component:HeaderComponent,
    data:{isDone:true}, //在路由配置中传递数据
    children:[ //配置子路由
     {
      path:'list/:num', //配置动态路由
      component:ListsDetailComponent
     }
    ]
  },
  // {
  //   path:'list/:num',
  //   component:ListsDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
