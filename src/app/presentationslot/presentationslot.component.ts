import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SityService } from '../services/sity.service';

@Component({
  selector: 'app-presentationslot',
  templateUrl: './presentationslot.component.html',
  styleUrls: ['./presentationslot.component.css']
})
export class PresentationslotComponent {

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
