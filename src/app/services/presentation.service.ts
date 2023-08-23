import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  constructor(private _http:HttpClient) { }


  // CONNECTION
  apiUrl = 'http://localhost:3000/upload/files';

  getPresentaion():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  submitPresentation(data:any):Observable<any>{
    return this._http.post(`${this.apiUrl}`, data);
  }

}
