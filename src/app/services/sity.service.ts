import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SityService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/";

  judges(body: any) {
    return this.http.post(this.url + 'judges', body, {
      observe: 'body'
    })
  }
 adminlogin (body: any){
  return this.http.post(this.url + 'secondary/admin/login', body, {
    observe: 'body'
  })
 }
}
