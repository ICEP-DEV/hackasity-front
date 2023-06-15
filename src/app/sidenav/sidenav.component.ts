import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  
  constructor(private _router: Router) { }

  navigateToWhatsOn(){
    this._router.navigate(['/whatson'])
  }

  navigateToScoreboard(){
    this._router.navigate(['/scoreboard'])
  }

  navigateSlot(){
    this._router.navigate(['/jslot'])
  }

  navigateToFiles(){
    this._router.navigate(['/files'])
  }

  navigateToLanding(){
    this._router.navigate(['/landingpage'])
  }

}
