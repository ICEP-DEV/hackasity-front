import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  constructor(private _router:Router,private sityservice: SityService ){};

  

}
