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
    studentNo: "",
    stu_name:"",
    stu_surname: "",
    studentEmail: "",
    groupName : "",
    studentPassword:"",
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
