import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})

export class SlotsComponent {

//   timeslot=["00:00 AM","01:00 AM","02:00 AM","03:00 AM", "04:00 AM","05:00 AM", "06:00 AM","07:00 AM",
//   "08:00 AM","09:00 AM","09:01 AM","10:00 AM","11:00 AM", "12:00 AM", "13:00 PM","14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM",
//   "18:00 PM", "19:00 PM", "20:00 PM","21:00 PM","22:00 PM","23:00 PM"
// ]

// timeslotE=["1 Minut","01:00 AM","02:00 AM","03:00 AM", "04:00 AM","05:00 AM", "06:00 AM","07:00 AM",
//   "08:00 AM","09:00 AM","10:00 AM","11:00 AM", "12:00 AM", "13:00 PM","14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM",
//   "18:00 PM", "19:00 PM", "20:00 PM","21:00 PM","22:00 PM","23:00 PM"
// ]
  constructor(private _router:Router,private sityservice: SityService){};

  dropdown(event: any){
    console.log(event.target.value)
    this._router.navigate(['/'+event.target.value])
  }

  slot= {
    Judge_name:"",
    start_time: "", end_time:"", date: "", Judge_id:"1", length:"1"
  }

  onChangeStartTime(event:any){
    console.log(event.target.value)
    this.slot.start_time=event.target.value
  }

  onChangeendTime(event:any){
    console.log(event.target.value)
    this.slot.end_time=event.target.value
  }
  onChangeDate(event:any){
    console.log(event.target.value)
    this.slot.date=event.target.value
  }

  addSlot(){
    console.log(this.slot)
    
    this.sityservice.judgeSlot(this.slot).subscribe((respond)=>{
      console.log(respond)
    },(error)=>{
      console.log(error)
    })
       
  }

}
