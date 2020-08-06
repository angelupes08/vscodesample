import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
  <label class="c">TODO</label>
  <input class="c1" type="text" [(ngModel)]=nm /><br>
  
  <p class="mybtn">
  <button class="mybtn" (click)='show()'>Submit</button>
  </p>
  <div *ngFor='let v of values'>
  {{v}}
  </div>
  `,
  styles: [ `
  .mybtn{text-align : center; font-size : 20px;}
  .c{padding : 50px;}
  `
  ]
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'Angular';
  nm:any;
  values:string[]=[""];
  show(){
    this.values.push(this.nm);
    console.log(this.values.length);
  }

}
