import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { BehaviorSubject } from 'rxjs';
import { ClockService } from './services/clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Raouf Albeni';
  dark = new BehaviorSubject(true);

  constructor(clockService: ClockService, meta: Meta) {
    clockService.time.subscribe((time) => {
      const curHr = time.getHours();
      if (curHr < 6 || curHr >= 18) this.dark.next(true);
      else this.dark.next(false);
    });
    meta.addTags([
      { name: 'og:title', content: `Raouf Albeni's Portfolio` },
      { name: 'og:image', content: 'https://albeniraouf.github.io/Portfolio/assets/bitmojies/hi.png' },
      { name: 'og:url', content: 'https://albeniraouf.github.io/Portfolio' },
      { name: 'og:type', content: 'website' },
    ]);
  }
  ngOnInit() {}
}
