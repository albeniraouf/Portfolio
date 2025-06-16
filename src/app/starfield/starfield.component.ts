import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-starfield',
  template: `
    <div #starContainer class="star-container">
      <div *ngFor="let star of stars" class="star" [style.left.px]="star.x" [style.top.px]="star.y"></div>
    </div>
  `,
  styles: [`
    .star-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      overflow: hidden;
    }
    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      transform: translateY(0);
    }
    .star.moving-down::after {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      width: 2px;
      height: 20px;
      background: white;
      z-index: -1;
    }
    .star.moving-up::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 2px;
      height: 20px;
      background: white;
      z-index: -1;
    }
    @keyframes moveDown {
      to { transform: translateY(100vh); }
    }
    @keyframes moveUp {
      to { transform: translateY(-100vh); }
    }
  `],
  standalone: false
})
export class StarfieldComponent implements AfterViewInit {
  @ViewChild('starContainer') starContainer!: ElementRef<HTMLDivElement>;
  stars: { x: number; y: number; vx: number }[] = [];

  ngAfterViewInit() {
    this.initStars();
  }

  private initStars() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    for (let i = 0; i < 150; i++) {
      this.stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 10
      });
    }
  }


}