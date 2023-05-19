import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subnavslots',
  templateUrl: './subnavslots.component.html',
  styleUrls: ['./subnavslots.component.css']
})
export class SubnavslotsComponent {
  constructor(private _router:Router,){};

  dropdownn(event: any){
    console.log(event.target.value)
    this._router.navigate(['/'+event.target.value])
  }
}
