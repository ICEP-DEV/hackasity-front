import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SityService {

  constructor(private http: HttpClient) { }
//  url = "https://doubtful-puce-coat.cyclic.app/"
  url = "http://localhost:3000/";

  judges(body: any) {
    return this.http.post(this.url + 'judges', body, {
      observe: 'body'
    })
  }
 adminlogin (body: any){
  return this.http.post(this.url + 'admin/login', body, {
    observe: 'body'
  })
 }
 
 adminRegister (body: any){
  return this.http.post(this.url + 'admin/registration', body, {
    observe: 'body'
  })
 }

 hackerlogin (body: any){
  return this.http.post(this.url + 'hacker/login', body, {
    observe: 'body'
  })
 }
 
 hackerRegister (body: any){
  return this.http.post(this.url + 'hacker/registration', body, {
    observe: 'body'
  })
 }
 judgelogin (body: any){
  return this.http.post(this.url + 'judge/login', body, {
    observe: 'body'
  })
 }
 
 judgeRegister (body: any){
  return this.http.post(this.url + 'judge/registration', body, {
    observe: 'body'
  })
 }

  uploadFile (body: any){
  return this.http.post(this.url + 'upload/files', body, {
    observe: 'body'
  })
 }
 
 hackerSlot (body: any){
  return this.http.post(this.url + 'hacker/slot', body, {
    observe: 'body'
  })
 }

 judgeSlot (body: any){
  return this.http.post(this.url +'judge/slot', body, {
    observe: 'body'
  })
 }

 judgeSlotget(){
  return this.http.get(this.url +'judge/slot')
 }

 hackerSlotget(){
  return this.http.get(this.url +'hacker/slot')
 }

 TeamPointsget(){
  return this.http.get(this.url +'publishing')
 }

 PublishedResults(){
  return this.http.get(this.url +'published')
 }

 TeamPointsPublish(publish:any){
  return this.http.put(this.url +'publishing/update', publish)
 }

 teamPoints (body: any){
  return this.http.post(this.url +'team/points', body, {
    observe: 'body'
  })
 }
 getTeamsNames() {
  // Make an HTTP request to retrieve group names from the backend
  return this.http.get(this.url +'team/names');
}
SponsorReport(){
  return this.http.get(this.url +'report')
}

 getJudgeNames(){

  return this.http.get(this.url +'judge/judges')
 }
 getGroupNames(){

  return this.http.get(this.url +'team/names')
 }
}
