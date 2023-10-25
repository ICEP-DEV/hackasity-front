import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SubnavComponent } from './subnav/subnav.component';
import { TimeslotsComponent } from './timeslots/timeslots.component';
import { SlotsComponent } from './slots/slots.component';
import { ReguserComponent } from './reguser/reguser.component';
import { ReportComponent } from './report/report.component';
import { FilesComponent } from './files/files.component';
import { ReghackerComponent } from './reghacker/reghacker.component';
import { RegjudgeComponent } from './regjudge/regjudge.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { WhatsonComponent } from './whatson/whatson.component';
import { SubnavslotsComponent } from './subnavslots/subnavslots.component';
import { HackerslotsComponent } from './hackerslots/hackerslots.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SidenavhackerComponent } from './sidenavhacker/sidenavhacker.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
// import { TeamsComponent } from './teams/teams.component';
import { HackertimeslotComponent } from './hackertimeslot/hackertimeslot.component';
import { RecordingComponent } from './recording/recording.component';
import { JscoreboardComponent } from './jscoreboard/jscoreboard.component';
import { JudgesidenavComponent } from './judgesidenav/judgesidenav.component';
import { JudgeslotdisplayComponent } from './judgeslotdisplay/judgeslotdisplay.component';
import { JudgereportComponent } from './judgereport/judgereport.component';
import { HackerreportComponent } from './hackerreport/hackerreport.component';
import { SponsorreportComponent } from './sponsorreport/sponsorreport.component';
import { CountdownComponent } from './COMPONENTS/countdown/countdown.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ActivityComponent } from './activity/activity.component';
import { JudgedashComponent } from './judgedash/judgedash.component';
import { ActivityjudgeComponent } from './activityjudge/activityjudge.component';



const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'report', component: ReportComponent},
  {path: 'files', component: FilesComponent},
  {path: 'whatson', component: WhatsonComponent},
  {path: 'registerusers', component:ReguserComponent},
  {path: 'timeslots', component:SlotsComponent},
  {path: 'hacker', component:ReghackerComponent},
  {path: 'judge', component:RegjudgeComponent},
  {path: 'hackerslots', component:HackerslotsComponent},
  {path: 'slots', component:SlotsComponent},
  {path: 'notifications', component:NotificationsComponent},
  {path:'sidenavhakers', component:SidenavhackerComponent},
  {path:'uploadfile', component:UploadfileComponent},
  // {path:'teams', component:TeamsComponent},
  {path:'hackertimeslot', component:HackertimeslotComponent},
  {path:'scoreboard', component:JscoreboardComponent},
  {path:'slotdisplay', component:JudgeslotdisplayComponent},
  {path:'jreport', component:JudgereportComponent},
  {path:'hackerreport', component:HackerreportComponent},
  {path:'sponsorreport', component:SponsorreportComponent},
  {path: 'recording', component:RecordingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'countdown', component:CountdownComponent},
  {path: 'judgesidenav', component:JudgesidenavComponent},
  {path: 'subnavslots', component:SubnavslotsComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'sidenav', component:SidenavComponent},
  {path: 'subnav', component:SubnavComponent},
  {path: 'timeslots', component:TimeslotsComponent},
  {path: 'admindash', component:AdmindashComponent},
  {path: 'activity', component:ActivityComponent},
  {path: 'judgedash', component:JudgedashComponent},
  {path: 'activityjudge', component:ActivityjudgeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
