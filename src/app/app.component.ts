import { Component, OnInit, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <app-starfield></app-starfield>
    @if(!hide()){<profile></profile>}
    <ng-icon
      name="eye"
      color="gray"
      (click)="hide.set(!hide())"
      class="fixed"
      [ngClass]="{'top-2 left-2 text-md': !hide(),'top-[49%] left-[49%] text-5xl': hide(),}"
      style="transition: top 0.5s ease-in-out,left 0.5s ease-in-out,font-size 0.5s ease-in-out;"
    ></ng-icon>
  `,
})
export class AppComponent {
  title = 'portfolio';
  hide = signal(false);
}
