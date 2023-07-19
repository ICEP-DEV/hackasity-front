import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  
  constructor(private _router:Router,private sityservice: SityService){};
  ngOnInit() {
    this.point()
  }

  temp:any
  table:any

  point(){
    this.sityservice.TeamPointsget().subscribe((respond) => {
      this.temp=respond
      this.table=this.temp.results
   
  })
  }

  addReport(){
    console.log(this.table)
    var data={}
    this.sityservice.TeamPointsPublish(data).subscribe((respond)=>{
     console.log(respond)
     Swal.fire("Thank You...", 'You sucessfully published report', 'success')
    },(error)=>{
      console.log(error)
   })
       
  }
}
