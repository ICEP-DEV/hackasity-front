import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SityService} from '../services/sity.service'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {
  adminRegister= {

    name:"",
    surname: "",
    email: "",
    password : "",
    passwordConfirm:""
  }
  constructor(private _router:Router,private sityservice: SityService ){};


  onHacker(hacker : string){
    this._router.navigate(['/'+hacker])
  }

 

  register(){
    
      var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      console.log(this.adminRegister.password)
      if (!this.adminRegister.password.match(decimal)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'password is not strong!',
          footer: '<label>To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit </br>and one special character</label>'
        })
        return
      }
  
      if (this.adminRegister.name == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Name is required!',
        })
        return
        
      }
      if (this.adminRegister.surname == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Surname is required!',
        })
        return
      }
      if (this.adminRegister.email == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email is required!',
        })
        return
      }
      if (this.adminRegister.password == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password is required!',
        })
        return
      }
      if (this.adminRegister.passwordConfirm == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password confirmation is required!',
        })
        return
      }
    console.log(this.adminRegister)
    this.sityservice.adminRegister(this.adminRegister).subscribe((respond)=>{
      console.log(respond)
      Swal.fire("Thank You...", 'You scored sucessfully', 'success')
    },(error)=>{
      console.log(error)
    })
  }

}
 