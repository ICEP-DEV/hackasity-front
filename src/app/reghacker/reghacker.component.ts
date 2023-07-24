import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router } from '@angular/router';
import swal from "sweetalert2"


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
    email: "",
    group_name : "",
    password:"",
    passwordConfirm:"",
    group_id:"",
    Admin_id:""

  }

  constructor(private _router:Router,private sityservice: SityService ){};

  adminId:any;

  register(){

    console.log(this.adminId= localStorage.getItem("adminID"))
    this.hackerRegister.Admin_id = this.adminId
    
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    console.log(this.hackerRegister.password)
    if (!this.hackerRegister.password.match(decimal)) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'password is not strong!',
        footer: '<label>To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit </br>and one special character</label>'
      })
      return
    }

    if (this.hackerRegister.stu_name == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name is required!',
      })
      return
      
    }
    if (this.hackerRegister.stu_surname == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Surname is required!',
      })
      return
    }
    if (this.hackerRegister.email == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is required!',
      })
      return
    }
    if (this.hackerRegister.password == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password is required!',
      })
      return
    }
    if (this.hackerRegister.passwordConfirm == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password confirmation is required!',
      })
      return
    }
  console.log(this.hackerRegister)
  this.sityservice.hackerRegister(this.hackerRegister).subscribe((respond)=>{
    console.log(respond)
    swal.fire("Thank You...", 'You registered sucessfully', 'success')
  },(error)=>{
    console.log(error)
  })
}
}
