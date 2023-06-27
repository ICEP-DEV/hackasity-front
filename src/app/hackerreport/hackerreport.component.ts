import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hackerreport',
  templateUrl: './hackerreport.component.html',
  styleUrls: ['./hackerreport.component.css']
})
export class HackerreportComponent {
  constructor(private _router:Router,private sityservice: SityService ){};

  ngOnInit() {
    this.slot()
  }

  temp:any
table:any

  slot(){
    this.sityservice.PublishedResults().subscribe((respond) => {
      this.temp=respond
      this.table=this.temp.results
   
  })
  }

}
