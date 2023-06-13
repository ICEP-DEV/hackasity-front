import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-judgeslotdisplay',
  templateUrl: './judgeslotdisplay.component.html',
  styleUrls: ['./judgeslotdisplay.component.css']
})
export class JudgeslotdisplayComponent {

  constructor(private _router:Router,private sityservice: SityService){};
  ngOnInit() {
    this.judgeslot()
  }

  temp:any
table:any

  judgeslot(){
    this.sityservice.judgeSlotget().subscribe((respond) => {
      this.temp=respond
      this.table=this.temp.results
   
  })
  }

}
