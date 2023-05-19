import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent {
  constructor(private _router:Router,private sityservice: SityService){};

  dropdown(event: any){
    console.log(event.target.value)
    this._router.navigate(['/'+event.target.value])
  }

  timeslot= {
    startTime: "", endTime:"", date: "", judgeid:"", adminid:""
  }
  // constructor(){}
  // ngOnInit(): void {
  //   console.log(12212)
  // }
  addSlot(){
    
       
  }

}
