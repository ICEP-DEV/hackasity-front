import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class SityService {

  constructor(private http: HttpClient) { }
  url = "https://drab-hen-uniform.cyclic.app/"
  //url = "http://localhost:3000/";

  getResults():Observable<any>{
    return this.http.get(this.url +'get_all_results')
  }

  getScores():Observable<any>{
    return this.http.get(this.url +'get_scores')
  }



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
  return this.http.post(this.url + 'register_judges', body, {
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
 getTeamsNames(id:Number) {
  // Make an HTTP request to retrieve group names from the backend
  return this.http.get(this.url +'teams/' + id);
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

 submitscore(data:any){
  return this.http.post(this.url +'submit_score', data, {
    observe: 'body'
  })
 }

 getAverage():Observable<any>{
  return this.http.get(this.url +'get_all_results')
 }
}
