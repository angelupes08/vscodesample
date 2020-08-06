import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-printname',
  template: `
    <form (ngSubmit)='show()'>
        UserName: <input [(ngModel)]=user.username name='uname'/>
        User Address: <input [(ngModel)]=user.useraddress name='uadd'/>
        User Age: <input [(ngModel)]=user.userage name='uage'/>
        <button type='submit'>submit</button>
        <!--<img src='{{imagePath}}'/>-->
        <img [src]='imagePath'/>
    </form>
  `,
  styles: [
  ]
})
export class PrintnameComponent implements OnInit {

  imagePath='assets/img.png';


  user=new User();

  constructor() { 
    console.log('constructor called');
  }

  

  ngOnInit(): void {
    console.log('On init method called.');
    console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);
  }
  
  show(){
    console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);

  }

}
