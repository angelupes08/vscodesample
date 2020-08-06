import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    userName:string;
    userPass:string;
    valid=false;
    firstWord:number;
    
    info:string[]=["Sagar","Ayush","Ankur","Stuti","Komal","Saransh","Krishna","Astitva","Utkarsh"];
    pass:string[]=["Sagar@123","Ayush@123","Ankur@123","Stuti@123","Komal@123","Saransh@123","Krishna@123","Astitva@123","Utkarsh@123"];
    checkLogin(){
        console.log('check called');
        var a=this.info.indexOf(this.userName);
        if(a!=-1 || this.pass[a]!=this.userPass){
            this.valid=true;
            //this.firstWord=Math.round(Math.random()*5);
        }
        else{
            this.valid=false;
        }
    }

}
