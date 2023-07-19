import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-judgesidenav',
  templateUrl: './judgesidenav.component.html',
  styleUrls: ['./judgesidenav.component.css']
})
export class JudgesidenavComponent {

  constructor(private _router:Router,private sityservice: SityService ){};


  navigateToWhatsOn(){
    this._router.navigate(['/notifications'])
  }
  navigateToJudgeScoreboard(){
    this._router.navigate(['/scoreboard'])
  }

  navigateToJudgeSlot(){
    this._router.navigate(['/slotdisplay'])
  }
  navigateToJudgeReport(){
    this._router.navigate(['/jreport'])
  }
  navigateTolandingPage(){
    this._router.navigate(['/landingPage'])
  }
}
