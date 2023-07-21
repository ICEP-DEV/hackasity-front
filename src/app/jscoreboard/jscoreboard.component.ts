import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import swal from "sweetalert2";

@Component({
  selector: 'app-jscoreboard',
  templateUrl: './jscoreboard.component.html',
  styleUrls: ['./jscoreboard.component.css']
})
export class JscoreboardComponent {

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

   selectedGroup: any;
 
  constructor(private _router:Router,private sityservice: SityService ){};

  onHacker(judge : string){
    this._router.navigate(['/'+judge])
  }

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
    points: "",
    points_id:"",
    group_id:"",
    judge_id:"",
  }

  getImactScore(impact:any){
   this.gettotalScore.impactScore = Number(impact.target.value)
   if(this.gettotalScore.impactScore >100){
    alert("enter numb less than 100")
    this.impactScore = 0
    return
   }
   this.totalPoints = this.gettotalScore.impactScore*(0.25)
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }

  getNovScore(novelity:any){
    this.gettotalScore.noverlity = Number(novelity.target.value)
    if(this.gettotalScore.noverlity > 100 ){
      alert("enter numb less than 100")
      this.noverlity = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore*(0.25)
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
  getTechScore(techP:any){
    this.gettotalScore.tech = Number(techP.target.value)
    if(this.gettotalScore.tech > 100){
      alert("enter numb less than 100")
      this.tech = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore*(0.25)
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
  getFeasibilityScore(fea:any){
    this.gettotalScore.Feasib = Number(fea.target.value)
    if(this.gettotalScore.Feasib > 100){
      alert("enter numb less than 100")
      this.Feasib= 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore*(0.25)
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
  getUsefulnesScore(usefulnes:any){
    this.gettotalScore.usefulness = Number(usefulnes.target.value)
    if(this.gettotalScore.usefulness > 100){
      alert("enter numb less than 100")
      this.usefulness = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore*(0.25)
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
  getSafetyScore(safety:any){
    this.gettotalScore.Safety = Number(safety.target.value)
    if(this.gettotalScore.Safety > 100){
      alert("enter numb less than 100")
      this.Safety = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore*(0.25)
    +  this.gettotalScore.noverlity*(0.15) + this.gettotalScore.usefulness*(0.20) + 
   this.gettotalScore.tech*(0.15) + this.gettotalScore.Safety*(0.10) + this.gettotalScore.Feasib*(0.15)
  }
     

  // Process the query or navigate to the Submit Query page
  judgeID:any;
  groupPoints(){
    const points = (document.getElementById('finalScore') as HTMLInputElement).value;
    console.log(points);
    this.judgeID = localStorage.getItem("judgeId")
    this.score.judge_id = this.judgeID

  // Create the data object to be sent in the POST request

  this.score.points =this.totalPoints.toString()
  console.log(this.score)

  // Make a POST request to the API endpoint with the evaluation data
  fetch('http://localhost:3000/team/points', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.score)
  })
    .then(response => response.json())
    .then(result => {
      // Handle the response from the server
      console.log(result);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
    swal.fire("Thank You...", 'Score Recorded!', 'success')
}

}