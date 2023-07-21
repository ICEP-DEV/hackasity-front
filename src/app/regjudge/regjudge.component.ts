import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SityService } from '../services/sity.service';
import swal from "sweetalert2"
@Component({
  selector: 'app-regjudge',
  templateUrl: './regjudge.component.html',
  styleUrls: ['./regjudge.component.css']
})
export class RegjudgeComponent {
  judgeRegister= {
    judge_name: "",
    judge_surname:"",
    email: "",
    company_name: "",
    password : "",
    passwordConfirm:"",
    Admin_id:"",
    judge_id:"",
    
  }

  constructor(private _router:Router,private sityservice: SityService ){};
   adminId: any;
  register(){
    
    console.log(this.adminId= localStorage.getItem("adminID"))
    this.judgeRegister.Admin_id = this.adminId

    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    console.log(this.judgeRegister.password)
    if (!this.judgeRegister.password.match(decimal)) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'password is not strong!',
        footer: '<label>To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit </br>and one special character</label>'
      })
      return
    }

    if (this.judgeRegister.judge_name == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name is required!',
      })
      return
      
    }
    if (this.judgeRegister.judge_surname == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Surname is required!',
      })
      return
    }
    if (this.judgeRegister.email == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is required!',
      })
      return
    }
    if (this.judgeRegister.password == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password is required!',
      })
      return
    }
    if (this.judgeRegister.passwordConfirm == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password confirmation is required!',
      })
      return
    }
  console.log(this.judgeRegister)
  this.sityservice.judgeRegister(this.judgeRegister).subscribe((respond)=>{
    console.log(respond)
    swal.fire("Thank You...", 'You registered sucessfully', 'success')
  },(error)=>{
    console.log(error)
  })
}
   


}
