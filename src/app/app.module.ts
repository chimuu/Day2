import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HelloComponent } from './hello/hello.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { MyJokesComponent } from './my-jokes/my-jokes.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JokesService } from './jokes.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HelloComponent,
    OrderItemComponent,
    MyJokesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
