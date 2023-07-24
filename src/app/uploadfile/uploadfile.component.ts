import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {

  selectedFile: any;

  filename: any
  size: any
  date: any
  time: any
  format: any

  constructor(private _router:Router,private sityservice: SityService ){};
  ngOnInit() {
    this.filename=localStorage.getItem("Filename")
    this.format=localStorage.getItem("format")
    this.size=localStorage.getItem("size")

    this.time=localStorage.getItem("date")

  }
  uploadFile= {
    filename: "",
    size:"",
    date: "",
    time: "",
    format:"",
  }



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

    let formdata = new FormData()
    formdata.append("filename",this.selectedFile)
    this.size = Number (this.selectedFile?.size)/1000+"kb"
    var file={
      filename:this.selectedFile
    }

    localStorage.setItem("Filename",this.filename)
    localStorage.setItem("format",this.format)
    localStorage.setItem("size",this.size)
    localStorage.setItem("date",this.time)



    this.sityservice.uploadFile(formdata).subscribe((respond)=>{
      console.log(respond)
    },error=>{
      console.log(error)
    })
  }

  submit(){

  }


  selectedFiles: File | null = null;

  onFileSelecteds(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (this.selectedFile) {
      // Perform the upload logic here
      console.log('Uploading file:', this.selectedFile);
    } else {
      console.log('No file selected!');
    }
  }
  
 
}
