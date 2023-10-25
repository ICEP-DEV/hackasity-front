import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Data, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SityService } from '../services/sity.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableExporterModule } from 'mat-table-exporter';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  fileName= 'ExcelSheet.xlsx'
  displayedColumns: string[]=['group_id','group_name','points'];
  dataSource! :MatTableDataSource<any>;
  constructor(private _router:Router,private sityservice: SityService){};
  ngOnInit() {
    this.point()
  }

  temp:any
  table:any

  point(){
    this.sityservice.TeamPointsget().subscribe((respond) => {
      this.temp=respond
      this.table=this.temp.results
   
  })
  }

  addReport(){
    console.log(this.table)
    var data={}
    this.sityservice.TeamPointsPublish(data).subscribe((respond)=>{
     console.log(respond)
    },(error)=>{
      console.log(error)
   })
       
  }
  exportexcel():void{
    let element = document.getElementById('excel-table')

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element)

    const wb: XLSX.WorkBook =XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    XLSX.writeFile(wb, this.fileName)
  }


}
