import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {

  selectedFile: File | undefined;

 

  constructor(private _router:Router,private sityservice: SityService ){};

  uploadFile= {
    filename: "",
    size:"",
    date: "",
    time: "",
    format:"",
  }

  filename: any
  size: any
  date: any
  time: any
  format: any

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    const name :string= "";
    //this.uploadFile.filename=
    this.filename = this.selectedFile?.name.substring(0,this.selectedFile.name.lastIndexOf(".")).toString()
    this.format = this.selectedFile?.name.substring(this.selectedFile.name.lastIndexOf(".")).toString()

    var date= new Date()
    var dd= date.getDate()
    var mm= date.getMonth()+1
    var yyyy=date.getFullYear()
    this.time=dd+"/"+mm+"/"+yyyy

    this.size = Number (this.selectedFile?.size)/1000+"kb"
    var file={
      filename:this.selectedFile
    }

    console.log(this.selectedFile)

    
    this.sityservice.uploadFile(this.selectedFile?.name).subscribe((respond)=>{
      console.log(respond)
    },error=>{
      console.log(error)
    })
  }

  submit(){

  }
  
 
}
