import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  greetings=["Hello","Hi","Namaste","Salaam","Bonjour"];


  constructor() { }
  Name:string="";
  value:string="";
  show(){
    this.value=this.greetings[Math.floor(Math.random()*this.greetings.length)];
  }

  ngOnInit(): void {
  }

}
