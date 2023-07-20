import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})

export class SlotsComponent {

  // constructor(private _router:Router,){};

  dropdownn(event: any){
    console.log(event.target.value)
    this._router.navigate(['/'+event.target.value])
  }
  constructor(private _router:Router,private sityservice: SityService){};

  dropdown(event: any){
    console.log(event.target.value)
    this._router.navigate(['/'+event.target.value])
  }
  selectedName: any;
  temp:any;

  slot= {
    judge_name:"",
    start_time: "", end_time:"", date: "", judge_id:"", length:"1"
  }
   
  ngOnInit(){
    this.getNames()
  

  }

  getNames(){
    this.sityservice.getJudgeNames().subscribe((respond)=>{
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

  addSlot(){
    console.log(this.slot)
    
    this.sityservice.judgeSlot(this.slot).subscribe((respond)=>{
      console.log(respond)
    },(error)=>{
      console.log(error)
    })
       
  }

}
