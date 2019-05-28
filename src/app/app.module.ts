import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SexReformPipe } from './components/pipe/sex-reform.pipe';
import { SelectFilterPipe } from './components/pipe/select-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestPipe } from './components/pipe/test.pipe';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';
import { FormComponent } from './components/form/form.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { HttpComponent } from './components/http/http.component';
import { ListsDetailComponent } from './components/lists-detail/lists-detail.component';
import { ChildComponent } from './components/child/child.component';
import { FilterPipe } from './components/pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    SexReformPipe,
    SelectFilterPipe,
    TestPipe,
    FormComponent,
    ToDoListComponent,
    HttpComponent,
    ListsDetailComponent,
    ChildComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // HttpClientInMemoryWebApiModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
