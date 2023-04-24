import { Component } from '@angular/core';
import {SityService }from '../services/sity.service'
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent {

  
  constructor(private sityservice: SityService){}

  addSlot(){

  }

}
