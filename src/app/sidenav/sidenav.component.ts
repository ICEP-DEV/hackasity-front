import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  
  constructor(private _router: Router) { }

  navigateToReport(){
    this._router.navigate(['/report'])
  }
  navigateToFiles(){
    this._router.navigate(['/files'])
  }

  navigateTimeSlot(){
    this._router.navigate(['/timeslots'])
  }
  navigateToWhatsOn(){
    this._router.navigate(['/whatson'])
  }

  navigateToRegisterUsers(){
    this._router.navigate(['/registerusers'])
  }

}
