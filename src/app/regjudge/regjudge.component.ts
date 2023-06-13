import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SityService } from '../services/sity.service';
@Component({
  selector: 'app-regjudge',
  templateUrl: './regjudge.component.html',
  styleUrls: ['./regjudge.component.css']
})
export class RegjudgeComponent {
  judgeRegister= {
    Judge_name: "",
    Judge_surname:"",
    email: "",
    company_name: "",
    password : "",
    passwordConfirm:"",
    
  }

  constructor(private _router:Router,private sityservice: SityService ){};

  register(){
    console.log(this.judgeRegister)
    this.sityservice.judgeRegister(this.judgeRegister).subscribe((respond)=>{
      console.log(respond)
    },(error)=>{
      console.log(error)
    })
  }

}
