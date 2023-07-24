import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidenavhacker',
  templateUrl: './sidenavhacker.component.html',
  styleUrls: ['./sidenavhacker.component.css']
})
export class SidenavhackerComponent {

  constructor(private _router:Router,private sityservice: SityService ){};


  
  navigateToUploadFiles(){
    this._router.navigate(['/uploadfile'])
  }

  navigateToTeams(){
    this._router.navigate(['/recording'])
  }
  navigateToWhatonH(){
    this._router.navigate(['/whatson'])
  }
  navigateToHackerTimeSlot(){
    this._router.navigate(['/hackertimeslot'])
  }
 
  navigateToHackerReport(){
    this._router.navigate(['/hackerreport'])
  }
 
}
