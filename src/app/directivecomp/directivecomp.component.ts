import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecomp',
  template: `

    <input type="radio" name="rb" (click)='assign(true)'/> Valid
    <input type="radio" name="rb" (click)='assign(false)'/> Invalid
    <div *ngIf='isValid'>
      <b>You are valid</b>
    </div>

    <div *ngIf='!isValid'>
      <b>You are invalid</b>
    </div>

    <div *ngFor='let c of cities'>
        <p>{{c}}</p>

    </div>
  `,
  styles: [
  ]
})
export class DirectivecompComponent implements OnInit {

  isValid:boolean=false;

  constructor() { }

  assign(k){
    this.isValid=k;
  }

  ngOnInit(): void {
  }
  cities:any[]=["Mumbai","Gujarat","Pune","Delhi"];




}
