import { Component } from '@angular/core';
import { SityService } from '../services/sity.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import swal from "sweetalert2";

import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jscoreboard',
  templateUrl: './jscoreboard.component.html',
  styleUrls: ['./jscoreboard.component.css']
})
export class JscoreboardComponent {

  impactScore = 0
  noverlity = 0
  usefulness = 0
  tech = 0
  Safety = 0
  Feasib = 0
  comment = ""
  gettotalScore = {
    impactScore: 0,
    noverlity: 0,
    usefulness: 0,
    tech: 0,
    Safety: 0,
    Feasib: 0,

  }
  totalPoints = 0;

  selectedGroup: any;

  constructor(private _router: Router, private sityservice: SityService) { };

  onHacker(judge: string) {
    this._router.navigate(['/' + judge])
  }

  judgeId: any
  ngOnInit() {
    this.judgeId = localStorage.getItem("judgeId")

    this.getGroupNames(this.judgeId)
    console.log(545454)
  }
  temp: any


  getGroupNames(id: Number) {
    this.sityservice.getTeamsNames(id).subscribe((respond) => {
      this.temp = respond
      this.selectedGroup = this.temp.results
      console.log(this.selectedGroup)
    })
  }
  team_id = 0
  getTeamId(event: any) {
    console.log(event.target.value)
    this.team_id = event.target.value
  }

  score = {
    group_name: "",
    points: "",
    points_id: "",
    team_id: "",
    judge_id: "",
    value: ""
  }

  getImactScore(impact: any) {
    this.gettotalScore.impactScore = Number(impact.target.value)
    if (this.gettotalScore.impactScore > 100) {
      alert("enter numb less than 100")
      this.impactScore = 0
      return
    }
    this.totalPoints = this.gettotalScore.impactScore * (0.25)
      + this.gettotalScore.noverlity * (0.15) + this.gettotalScore.usefulness * (0.20) +
      this.gettotalScore.tech * (0.15) + this.gettotalScore.Safety * (0.10) + this.gettotalScore.Feasib * (0.15)
  }

  getNovScore(novelity: any) {
    this.gettotalScore.noverlity = Number(novelity.target.value)
    if (this.gettotalScore.noverlity > 100) {
      alert("enter numb less than 100")
      this.noverlity = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore * (0.25)
      + this.gettotalScore.noverlity * (0.15) + this.gettotalScore.usefulness * (0.20) +
      this.gettotalScore.tech * (0.15) + this.gettotalScore.Safety * (0.10) + this.gettotalScore.Feasib * (0.15)
  }
  getTechScore(techP: any) {
    this.gettotalScore.tech = Number(techP.target.value)
    if (this.gettotalScore.tech > 100) {
      alert("enter numb less than 100")
      this.tech = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore * (0.25)
      + this.gettotalScore.noverlity * (0.15) + this.gettotalScore.usefulness * (0.20) +
      this.gettotalScore.tech * (0.15) + this.gettotalScore.Safety * (0.10) + this.gettotalScore.Feasib * (0.15)
  }
  getFeasibilityScore(fea: any) {
    this.gettotalScore.Feasib = Number(fea.target.value)
    if (this.gettotalScore.Feasib > 100) {
      alert("enter numb less than 100")
      this.Feasib = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore * (0.25)
      + this.gettotalScore.noverlity * (0.15) + this.gettotalScore.usefulness * (0.20) +
      this.gettotalScore.tech * (0.15) + this.gettotalScore.Safety * (0.10) + this.gettotalScore.Feasib * (0.15)
  }
  getUsefulnesScore(usefulnes: any) {
    this.gettotalScore.usefulness = Number(usefulnes.target.value)
    if (this.gettotalScore.usefulness > 100) {
      alert("enter numb less than 100")
      this.usefulness = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore * (0.25)
      + this.gettotalScore.noverlity * (0.15) + this.gettotalScore.usefulness * (0.20) +
      this.gettotalScore.tech * (0.15) + this.gettotalScore.Safety * (0.10) + this.gettotalScore.Feasib * (0.15)
  }
  getSafetyScore(safety: any) {
    this.gettotalScore.Safety = Number(safety.target.value)
    if (this.gettotalScore.Safety > 100) {
      alert("enter numb less than 100")
      this.Safety = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore * (0.25)
      + this.gettotalScore.noverlity * (0.15) + this.gettotalScore.usefulness * (0.20) +
      this.gettotalScore.tech * (0.15) + this.gettotalScore.Safety * (0.10) + this.gettotalScore.Feasib * (0.15)
  }


  // Process the query or navigate to the Submit Query page
  judgeID: any;
  groupPoints() {
    const points = (document.getElementById('finalScore') as HTMLInputElement).value;
    this.judgeID = localStorage.getItem("judgeId")

    // Create the data object to be sent in the POST request
    this.score.points = this.totalPoints.toString()
    var data = {
      novality: this.gettotalScore.noverlity,
      usefulness: this.gettotalScore.usefulness,
      feasibility: this.gettotalScore.Feasib,
      technical_proficiency: this.gettotalScore.tech,
      impact: this.gettotalScore.impactScore,
      safety: this.gettotalScore.Safety,
      team_id: this.team_id,
      judge_id: this.judgeID,
      comment: this.comment,
    }

    // Make a POST request to the API endpoint with the evaluation data
    this.sityservice.submitscore(data).subscribe((respond) => {
      console.log(respond)
      swal.fire("Thank You...", 'Score Recorded!', 'success')

    },
      err => {
        console.log(err)
      })
    /*fetch('http://localhost:3000/team/points', {
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
      });*/
  }


  scoreSubmit() {
    console.log(this.score.value);
  }

  getAvgScore(novelity: any) {
    this.gettotalScore.noverlity = Number(novelity.target.value)
    if (this.gettotalScore.noverlity > 100) {
      alert("enter numb less than 100")
      this.noverlity = 0
      return

    }
    this.totalPoints = this.gettotalScore.impactScore * (0.25)
      + this.gettotalScore.noverlity * (0.15) + this.gettotalScore.usefulness * (0.20) +
      this.gettotalScore.tech * (0.15) + this.gettotalScore.Safety * (0.10) + this.gettotalScore.Feasib * (0.15)
  }
}