import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
import { Router } from '@angular/router';
import swal from "sweetalert2";

@Component({
  selector: 'app-hackerslots',
  templateUrl: './hackerslots.component.html',
  styleUrls: ['./hackerslots.component.css']
})
export class HackerslotsComponent {

//   timeslot=["00:00 AM","01:00 AM","02:00 AM","03:00 AM", "04:00 AM","05:00 AM", "06:00 AM","07:00 AM",
//   "08:00 AM","09:00 AM","10:00 AM","11:00 AM", "12:00 AM", "13:00 PM","14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM",
//   "18:00 PM", "19:00 PM", "20:00 PM","21:00 PM","22:00 PM","23:00 PM"
// ]

// timeslotE=["00:00 AM","01:00 AM","02:00 AM","03:00 AM", "04:00 AM","05:00 AM", "06:00 AM","07:00 AM",
//   "08:00 AM","09:00 AM","10:00 AM","11:00 AM", "12:00 AM", "13:00 PM","14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM",
//   "18:00 PM", "19:00 PM", "20:00 PM","21:00 PM","22:00 PM","23:00 PM"
// ]
  constructor(private _router:Router,private sityservice: SityService){};

  dropdown(event: any){
    console.log(event.target.value)
    this._router.navigate(['/'+event.target.value])
  }
  selectedName:any;
  temp : any;
  slot= {
    group_name:"",
    start_time: "", end_time:"", date: "",  length:"1",Admin_id:""
  }
  ngOnInit(){
    this. getGroups()
  

  }

  getGroups(){
    this.sityservice.getGroupNames().subscribe((respond)=>{
    this.temp = respond
    this.selectedName= this.temp.results
    console.log(this.selectedName)
   })
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
    adminId: any
  addSlot(){
    swal.fire("You Assigned sucessfully")
    console.log(this.adminId= localStorage.getItem("adminID"))
    this.slot.Admin_id = this.adminId
    console.log(this.slot)
    
    this.sityservice.hackerSlot(this.slot).subscribe((respond)=>{
      console.log(respond)
    },(error)=>{
      console.log(error)
    })
       
  }
}
