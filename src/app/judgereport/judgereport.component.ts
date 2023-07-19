import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-judgereport',
  templateUrl: './judgereport.component.html',
  styleUrls: ['./judgereport.component.css']
})
export class JudgereportComponent {
  constructor(private _router:Router,private sityservice: SityService){};

  points= {
    group_name:"",
    points:""
  }
  

  ngOnInit() {
    this.point()
  }

  temp:any
  table:any

  point(){
    this.sityservice.TeamPointsget().subscribe((respond) => {
      this.temp=respond
      this.table=this.temp.results
      console.log(this.table)
   
  })
  }
}
