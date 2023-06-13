import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jscoreboard',
  templateUrl: './jscoreboard.component.html',
  styleUrls: ['./jscoreboard.component.css']
})
export class JscoreboardComponent {
   //Scoring Percentages
   techPer = 0.15
   impactPerc = 0.25
   novelityPer = 0.15
   feabPer = 0.15
   usefulnesPer = 0.20
   safePerc = 0.10

   impactScore = 0
   noverlity=0
   usefulness=0
   tech =0
   Safety =0
   Feasib = 0
   
   gettotalScore = {
    impactScore : 0,
    noverlity:0,
    usefulness:0,
    tech: 0,
    Safety:0,
    Feasib: 0
   }
   totalPoints = 0;

   groupNames: string[] = [];
   selectedGroup: any;
 
  constructor(private _router:Router,private sityservice: SityService ){};

  ngOnInit(){
    this.getGroupNames()

  }
       temp:any
  

  getGroupNames(){
      this.sityservice.getTeamsNames().subscribe((respond)=>{
      this.temp = respond
      this.selectedGroup= this.temp.results
      console.log(this.selectedGroup)
     })
  }

  score={
    group_name:"",
    points:""
  }
     


  getImactScore(impact:any){
   this.gettotalScore.impactScore = Number(impact.target.value)
   this.totalPoints = this.gettotalScore.impactScore* this.impactPerc
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }

  getNovScore(novelity:any){
    this.gettotalScore.noverlity = Number(novelity.target.value)
    this.totalPoints = this.gettotalScore.impactScore* this.impactPerc
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
  getTechScore(techP:any){
    this.gettotalScore.tech = Number(techP.target.value)
    this.totalPoints = this.gettotalScore.impactScore* this.impactPerc
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
  getFeasibilityScore(fea:any){
    this.gettotalScore.Feasib = Number(fea.target.value)
    this.totalPoints = this.gettotalScore.impactScore* this.impactPerc
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
  getUsefulnesScore(usefulnes:any){
    this.gettotalScore.usefulness = Number(usefulnes.target.value)
    this.totalPoints = this.gettotalScore.impactScore* this.impactPerc
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
  getSafetyScore(safety:any){
    this.gettotalScore.Safety = Number(safety.target.value)
    this.totalPoints = this.gettotalScore.impactScore* this.impactPerc
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
     

  addPoints(){
    console.log(this.score)


    this.sityservice.teamPoints(this.score).subscribe((respond)=>{console.log(respond)},
    (error)=>{
      console.log(error)
    }
    )

  }
 

}
