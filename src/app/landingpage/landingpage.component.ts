import { Component } from '@angular/core';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  onSubmit() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const selectedRole = document.querySelector('input[name="role"]:checked') as HTMLInputElement;
  
    if (username && password && selectedRole) {
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Selected Role:', selectedRole.value);
    }}
  }
