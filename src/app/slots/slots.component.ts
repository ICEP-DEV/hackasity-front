import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent {

  timeslot= {
    startTime: "", endTime:"", date: "", judgeid:"1", adminid:"1"
  }
  constructor(private sityservice: SityService){}
  ngOnInit(): void {
    console.log(12212)
  }
  addSlot(){
    
       
  }

}
