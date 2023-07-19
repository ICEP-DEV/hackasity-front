import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent {
  constructor(private _router:Router,){};

  dropdown(event: any){
    console.log(event.target.value)
    this._router.navigate(['/'+event.target.value])
  }
}
