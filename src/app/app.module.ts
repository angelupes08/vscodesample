import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from "./firstcomp";
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { counter1 } from "./counter1";
import { HelloName } from "./helloname";
import { FormsModule } from "@angular/forms";
import { PrintnameComponent } from './printname/printname.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { EmployeeComponent } from './employee/employee.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { LoginComponent } from './login/login.component';
import { GreetComponent } from './greet/greet.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    counter1,
    HelloName,
    PrintnameComponent,
    DirectivecompComponent,
    EmployeeComponent,
    GreetingsComponent,
    LoginComponent,
    GreetComponent,
    TodoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap:[FirstComponent]
  //bootstrap:[counter1]
})
export class AppModule { }
