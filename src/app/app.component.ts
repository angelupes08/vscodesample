import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <!-- <hello-name></hello-name> -->
   <!--<app-printname></app-printname>-->
   <!--<app-directivecomp></app-directivecomp>-->
   <!--<app-employee></app-employee>-->
  <!--  <app-greetings></app-greetings>-->
  <!--<app-greet></app-greet>-->
  <!--<app-login></app-login>-->
  <!-- <app-todo></app-todo>-->
  <p>This is angular</p>
  <app-greetings></app-greetings>
  
  `,
  styles: ['p{font-weight:bold}']
})
export class AppComponent {
  title = 'MyFirstAngularApp';
}
