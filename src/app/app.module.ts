import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SubnavComponent } from './subnav/subnav.component';
import { TimeslotsComponent } from './timeslots/timeslots.component';
import { SlotsComponent } from './slots/slots.component';
import { ReguserComponent } from './reguser/reguser.component';
import { HttpClientModule } from '@angular/common/http';
import {SityService } from './services/sity.service';
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
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ****************************************************************************
import { PresentationService } from './services/presentation.service';
import { CountdownComponent } from './COMPONENTS/countdown/countdown.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { ClientsComponent } from './COMPONENTS/clients/clients.component';
import { AboutComponent } from './COMPONENTS/about/about.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ActivityComponent } from './activity/activity.component';
import { ResultsComponent } from './results/results.component';
import { JudgedashComponent } from './judgedash/judgedash.component';
import { ActivityjudgeComponent } from './activityjudge/activityjudge.component';
import { PresentationslotComponent } from './presentationslot/presentationslot.component';


 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    SubnavComponent,
    TimeslotsComponent,
    SlotsComponent,
    ReguserComponent,
    ReportComponent,
    FilesComponent,
    ReghackerComponent,
    RegjudgeComponent,
    LandingpageComponent,
    WhatsonComponent,
    SubnavslotsComponent,
    HackerslotsComponent,
    NotificationsComponent,
    SidenavhackerComponent,
    UploadfileComponent,
    // TeamsComponent,
    HackertimeslotComponent,
    RecordingComponent,
    JscoreboardComponent,
    JudgesidenavComponent,
    JudgeslotdisplayComponent,
    JudgereportComponent,
    HackerreportComponent,
    SponsorreportComponent,
    RecordingComponent,
    CountdownComponent,
    LoginComponent,
    ClientsComponent,
    AboutComponent,
    AdmindashComponent,
    ActivityComponent,
    ResultsComponent,
    JudgedashComponent,
    ActivityjudgeComponent,
    PresentationslotComponent,
    
    
],

  imports: [
    FormsModule, 
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
    MatTableExporterModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [SityService, PresentationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
