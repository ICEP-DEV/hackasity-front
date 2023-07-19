import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-hackertimeslot',
  templateUrl: './hackertimeslot.component.html',
  styleUrls: ['./hackertimeslot.component.css']
})
export class HackertimeslotComponent {

  constructor(private _router:Router,private sityservice: SityService){};
  ngOnInit() {
    this.slot()
  }

  temp:any
table:any

  slot(){
    this.sityservice.hackerSlotget().subscribe((respond) => {
      this.temp=respond
      this.table=this.temp.results
   
  })
  }

}
