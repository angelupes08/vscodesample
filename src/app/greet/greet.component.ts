import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  template: `
  <input type="text" [(ngModel)]=nm/>
  <button type="submit" (click)='show()'>submit</button>
  <div *ngIf='valid'>
  <span>{{values}}</span> <span>{{nm}}</span>
  </div>
  <div *ngIf='!valid'>
  <span> </span> 
  </div>
  `,
  styles: []
})
export class GreetComponent implements OnInit {

  constructor() { }
  nm:string="";
  valid=false;
  c:any;
  greetings:any[]=["Hello","Hi","Namaste","Salaam","BellaCiao"];
  values:string="";
  show(){
   
   this.values=this.greetings[Math.floor(Math.random()*this.greetings.length)];
   this.valid=true;
 }

  ngOnInit(): void {
  }

}
