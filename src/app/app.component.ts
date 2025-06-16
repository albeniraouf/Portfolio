import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: false,
  template: `<app-starfield></app-starfield><profile></profile>`,
})
export class AppComponent  {
  title = 'portfolio';
}
