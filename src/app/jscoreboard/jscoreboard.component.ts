import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jscoreboard',
  templateUrl: './jscoreboard.component.html',
  styleUrls: ['./jscoreboard.component.css']
})
export class JscoreboardComponent {

  constructor(private _router:Router,private sityservice: SityService ){};

}
