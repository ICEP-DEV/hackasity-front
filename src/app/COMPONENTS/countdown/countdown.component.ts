import { Component } from '@angular/core';

//import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})


export class CountdownComponent {
  /*
  config: CountdownConfig = {
    leftTime: 60,
    format: 'HH:mm:ss',
    prettyText: (text) => {
      return text
        .split(':')
        .map((v) => `<span class="item">${v}</span>`)
        .join('');
    },
  };

  handleEvent(e: CountdownEvent) {
    console.log('Actions', e);
  }
*/
}
