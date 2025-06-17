import { Component, OnInit, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <app-starfield></app-starfield>
    <ng-icon
      name="eye"
      color="gray"
      (click)="hide.set(!hide())"
      class="fixed top-2 left-2"
    ></ng-icon>
    @if(!hide()){<profile></profile>}
  `,
})
export class AppComponent {
  title = 'portfolio';
  hide = signal(false);
}
