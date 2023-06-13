import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatson',
  templateUrl: './whatson.component.html',
  styleUrls: ['./whatson.component.css']
})
export class WhatsonComponent {
  @Input() name: any;
}
