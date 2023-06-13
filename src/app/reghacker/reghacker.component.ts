import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reghacker',
  templateUrl: './reghacker.component.html',
  styleUrls: ['./reghacker.component.css']
})
export class ReghackerComponent {

  hackerRegister= {
    stu_no: "",
    stu_name:"",
    stu_surname: "",
    stu_email: "",
    group_name : "",
    stu_password:"",
    passwordConfirm:"",

  }

  constructor(private _router:Router,private sityservice: SityService ){};

  register(){
    console.log(this.hackerRegister)
    this.sityservice.hackerRegister(this.hackerRegister).subscribe((respond)=>{
      console.log(respond)
    },(error)=>{
      console.log(error)
    })
  }
}
