import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
// ********************************************************************
import { PresentationService } from '../services/presentation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {

  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Replace with your Node.js API URL
      const apiUrl = 'http://localhost:3000/upload';

      this.http.post(apiUrl, formData).subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
          // You can handle success here
        },
        (error) => {
          console.error('File upload failed:', error);
          // You can handle errors here
        }
      );
    }
  }

}
