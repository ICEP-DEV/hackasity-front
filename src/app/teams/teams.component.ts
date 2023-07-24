import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoRecordingService } from './video-recording.services';

type RecordingState = 'NONE' | 'RECORDING' | 'RECORDED';
@Component({
  selector: 'app-root',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class AppComponent {
  title = 'Hack-si-ty_recording-demo'; 
   
  videoBlobUrl: any = null;
  @ViewChild('videoElement') videoElement: any;
   video: any;
   state:RecordingState = 'NONE';

  constructor(
    private videoRecordingService: VideoRecordingService,
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer
    ){
      this.videoRecordingService.getMediaStream().subscribe((data) => {
        this.video.srcObject = data;
        this.ref.detectChanges();
       // console.log('data: ', data);
      });
        this.videoRecordingService.getBlob().subscribe((data) =>{
        console.log('data: ', data);
        this.videoBlobUrl = this.sanitizer.bypassSecurityTrustUrl(data);
        this.video.srcObject = null;
        this.ref.detectChanges();
       });
    }

    ngAfterViewInit():void{
      this.video = this.videoElement.nativeElement;
    }

  startRecording(){
    this.videoRecordingService.startRecording();
    this.state = 'RECORDING';
  }
  stopRecording(){
    this.videoRecordingService.stopRecording();
    this.state = 'RECORDED';
  }
  clearRecording(){
    this.videoRecordingService.clearRecording();
    this.video.srcObject = null;
    this.videoBlobUrl = null;
    this.state = 'NONE';

  }
  downloadRecording(){
    this.videoRecordingService.downloadRecording();
    
  }

}
