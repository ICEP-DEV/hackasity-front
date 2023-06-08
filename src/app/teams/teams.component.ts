import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;
  private stream!: MediaStream;

  startScreenSharing() {
    navigator.mediaDevices.getDisplayMedia({ video: true, audio: false })
      .then((stream: MediaStream) => {
        const video = this.videoElement.nativeElement;
        this.stream = stream;
        video.srcObject = this.stream;
        video.play();
      })
      .catch((error) => {
        console.error('Error accessing screen capture:', error);
      });
  }

  stopScreenSharing() {
    const video = this.videoElement.nativeElement;
    const tracks = this.stream.getTracks();
    
    tracks.forEach(track => track.stop());
    video.srcObject = null;
  }
  
}
