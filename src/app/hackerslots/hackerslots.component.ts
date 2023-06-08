import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-hackerslots',
  templateUrl: './hackerslots.component.html',
  styleUrls: ['./hackerslots.component.css']
})
export class HackerslotsComponent {

  constructor(private _router:Router,private sityservice: SityService){};

  dropdown(event: any){
    console.log(event.target.value)
    this._router.navigate(['/'+event.target.value])
  }

  slot= {
    hackerid:"1",adminid:"1",startime:"",length:"",endtime:"",date:""
  }

  addSlot(){
    console.log(this.slot)
    this.sityservice.hackerSlot(this.slot).subscribe((respond)=>{
      console.log(respond)
    },(error)=>{
      console.log(error)
    })
       
  }
}
