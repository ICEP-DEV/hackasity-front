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
 
 adminRegister (body: any){
  return this.http.post(this.url + 'secondary/admin/register', body, {
    observe: 'body'
  })
 }

 hackerlogin (body: any){
  return this.http.post(this.url + 'hacker/login', body, {
    observe: 'body'
  })
 }
 
 hackerRegister (body: any){
  return this.http.post(this.url + 'hacker/register', body, {
    observe: 'body'
  })
 }
 judgelogin (body: any){
  return this.http.post(this.url + 'judges/login', body, {
    observe: 'body'
  })
 }
 
 judgeRegister (body: any){
  return this.http.post(this.url + 'judges/register', body, {
    observe: 'body'
  })
 }

  uploadFile (body: any){
  return this.http.post(this.url + 'upload/files', body, {
    observe: 'body'
  })
 }
 
}
