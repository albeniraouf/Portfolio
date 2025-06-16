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
export class StarfieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('starContainer') starContainer!: ElementRef<HTMLDivElement>;
  stars: { x: number; y: number; vx: number }[] = [];
  private isScrolling = false;
  private lastScrollTop = window.scrollY;
  private scrollTimeout: number | null = null;

  ngAfterViewInit() {
    this.initStars();
    this.setupScrollListener();
  }

  private initStars() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    for (let i = 0; i < 35; i++) {
      this.stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 10
      });
    }
  }

  private updateStars(scrollingDown: boolean) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const container = this.starContainer.nativeElement;

    container.querySelectorAll('.star').forEach((el: Element, i: number) => {
      const star = this.stars[i];
      const htmlEl = el as HTMLElement;
      if (scrollingDown) {
        star.y += star.vx;
        htmlEl.classList.remove('moving-up');
        htmlEl.classList.add('moving-down');
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
          star.vx = 10;
          htmlEl.style.animation = 'none';
          htmlEl.offsetHeight; // Trigger reflow
          htmlEl.style.animation = `moveDown ${100 / star.vx}s linear`;
        }
      } else {
        star.y -= star.vx;
        htmlEl.classList.remove('moving-down');
        htmlEl.classList.add('moving-up');
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
          star.vx = Math.ceil(Math.random() * 10);
          htmlEl.style.animation = 'none';
          htmlEl.offsetHeight; // Trigger reflow
          htmlEl.style.animation = `moveUp ${100 / star.vx}s linear`;
        }
      }
      htmlEl.style.left = `${star.x}px`;
      htmlEl.style.top = `${star.y}px`;
    });
  }

  private setupScrollListener() {
    window.addEventListener('scroll', () => {
      this.isScrolling = true;
      const currentScrollTop = window.scrollY;
      const scrollingDown = currentScrollTop > this.lastScrollTop;
      this.lastScrollTop = currentScrollTop;

      this.updateStars(scrollingDown);

      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      this.scrollTimeout = window.setTimeout(() => {
        this.isScrolling = false;
        this.starContainer.nativeElement.querySelectorAll('.star').forEach((el: Element) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.animation = 'none';
          htmlEl.classList.remove('moving-up', 'moving-down');
        });
      }, 100);
    });
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}