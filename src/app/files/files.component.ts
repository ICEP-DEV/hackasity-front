import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    console.log(this.adminRegister)
    this.sityservice.adminRegister(this.adminRegister).subscribe((respond)=>{
      console.log(respond)
    },(error)=>{
      console.log(error)
    })
  }

}
 