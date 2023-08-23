import { Component } from '@angular/core';
// ********************************************************************
import { PresentationService } from '../services/presentation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {

  constructor(private service:PresentationService){}

  //variables
  readData:any;

  ngOnInit(): void{
    this.service.getPresentaion().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }

  userForm = new FormGroup({
    'filename':new FormControl('', Validators.required)
  });

  userSubmit(){
    console.log(this.userForm.value);
  }

}
