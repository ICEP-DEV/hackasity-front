import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SityService } from '../services/sity.service';
@Component({
  selector: 'app-regjudge',
  templateUrl: './regjudge.component.html',
  styleUrls: ['./regjudge.component.css']
})
export class RegjudgeComponent {
  alert:boolean =false

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

  register(){
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    console.log(this.judgeRegister.password)
    if (!this.judgeRegister.password.match(decimal)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'password is not strong!',
        footer: '<label>To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit </br>and one special character</label>'
      })
      return
    }
    

    if (this.judgeRegister.judge_name == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Judge name is required!',
      })
      return
      
    }
    if (this.judgeRegister.judge_surname == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Judge surname is required!',
      })
      return
    }
    if (this.judgeRegister.email == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Judge email is required!',
      })
      return
    }
    if (this.judgeRegister.company_name == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Company name is required!',
      })
      return
    }
    if (this.judgeRegister.password == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password is required!',
      })
      return
    }
    if (this.judgeRegister.passwordConfirm == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password confirmation is required!',
      })
      return
    }
    console.log(this.judgeRegister)
    this.sityservice.judgeRegister(this.judgeRegister).subscribe((respond)=>{
      console.log(respond)
      Swal.fire("Thank You...", 'You registered sucessfully', 'success')
    },(error)=>{
      console.log(error)
    })

}

}
