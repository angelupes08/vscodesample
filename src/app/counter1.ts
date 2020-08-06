import { Component,OnInit } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <button (click)='show()'> Click</button>
    <p>
    Number of clicks is {{counter}}
    </p>
    `,
    styles: ['p{font-weight:bold;font-size:40;font-family:arial}']
})
export class counter1 implements OnInit{
    counter: number=101;

    show(){
        this.counter++;
    }
    constructor(){

    }

    
    ngOnInit(): void{

    }
}
