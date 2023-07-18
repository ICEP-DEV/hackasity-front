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


// 


@Component({
  selector: 'app-sponsorreport',
  templateUrl: './sponsorreport.component.html',
  styleUrls: ['./sponsorreport.component.css']
})
export class SponsorreportComponent implements OnInit{
  

  fileName= 'ExcelSheet.xlsx'
  displayedColumns: string[]=['name','surname','judge_name','judge_surname','company_name','group_name','points','time'];

   dataSource! :MatTableDataSource<any>;
  //  dataSource1! :MatTableDataSource<any>;
  // @ViewChild('paginator') paginator!: MatPaginator;
  // @ViewChild(MatSort) matSort!: MatSort;
  constructor(private _router:Router,private sityservice: SityService){};

  // set_object:any;
  // readData:any;

  //  ngOnInit(){
  //    this.sityservice.SponsorReport().subscribe((res:any)=>{
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.matSort
  //     console.log(res,"res==>");
   
  //    })
  //  }


  // filterData($event : any){
  //   this.dataSource.filter = $event.target.value;
  // }

  ngOnInit() {
    this.slot()
  }

  temp:any
table:any

  slot(){
    this.sityservice.SponsorReport().subscribe((respond) => {
      this.temp=respond
      this.table=this.temp.results
   
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
