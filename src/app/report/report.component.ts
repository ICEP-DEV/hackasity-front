import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  constructor(private _router:Router){}
  teams: any[]= [
    {name: 'Team A', matches: 7,wins: 3,losses: 2, points: 9},
    {name: 'Team B', matches: 4,wins: 2,losses: 2, points: 6},
    {name: 'Team C', matches: 5,wins: 4,losses: 1, points: 12},
    {name: 'Team D', matches: 5,wins: 4,losses: 1, points: 12},
  ];

  
}
