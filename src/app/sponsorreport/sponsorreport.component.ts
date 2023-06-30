import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Data, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SityService } from '../services/sity.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sponsorreport',
  templateUrl: './sponsorreport.component.html',
  styleUrls: ['./sponsorreport.component.css']
})
export class SponsorreportComponent implements OnInit{
  
  id:any
  
  displayedColumns=['name','surname'];

   dataSource! :MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private _router:Router,private sityservice: SityService){};
  set_object:any;
  readData:any;
  ngOnInit(){
    this.sityservice.SponsorReport().subscribe((res:any)=>{
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.matSort
      console.log(res,"res==>");
    })
  }
  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }


}
