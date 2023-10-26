import { Component } from '@angular/core';

import {Router} from '@angular/router'
import { SityService } from 'src/app/services/sity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginPage = {
    email: "",
    password: "",
  }
  role = ""
  sucess: any

  constructor(private sityservice: SityService, private router: Router) {

  }

  button() {
    if (this.loginPage.password == "" || this.loginPage.email == "" || this.role == "") {
      return alert("Field must be filled")
    }

    if (this.role=="hacker"){
      this.sityservice.hackerlogin(this.loginPage).subscribe((respond: any) => {
        console.log(respond)
        this.sucess = respond
        if (this.sucess.success == false) {
          return alert(this.sucess.message)
        }
        else{
          //return alert(this.sucess.message)
  
          return this.router.navigate(["/whatson"])
        }
  
      }, (error: any) => {
        console.log(error)
      })

    }

    else if (this.role=="admin"){
      this.sityservice.adminlogin(this.loginPage).subscribe((respond: any) => {
        console.log(respond)
        this.sucess = respond
        if (this.sucess.success == false) {
          return alert(this.sucess.message)
        }
        else{
          //return alert(this.sucess.message)
          localStorage.setItem("adminID",this.sucess.results[0].Admin_id.toString())
          return this.router.navigate(["/admindash"])
        }
  
      }, (error: any) => {
        console.log(error)
      })
    }
    else if (this.role=="judges"){
      this.sityservice.judgelogin(this.loginPage).subscribe((respond) => {
        console.log(respond)
        this.sucess = respond
        if (this.sucess.success == false) {
          return // alert(this.sucess.message)
        }
        else{
          //return alert(this.sucess.message)
          localStorage.setItem("judgeId",this.sucess.results[0].judge_id.toString())

          
           return this.router.navigate(["/judgedash"])
        }
  
      }, (error) => {
        console.log(error)
      })
    }
    else{
      
    }

  }




  onSubmit() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const selectedRole = document.querySelector('input[name="role"]:checked') as HTMLInputElement;

    if (email && password && selectedRole) {
      console.log('email:', email);
      console.log('Password:', password);
      console.log('Selected Role:', selectedRole.value);
    }
  }

}
