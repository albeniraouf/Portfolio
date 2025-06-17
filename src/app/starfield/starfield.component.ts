import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-starfield',
  template: `
    <div #starContainer class="star-container">
      <canvas #trailCanvas class="trail-canvas"></canvas>
    </div>
  `,
  styles: [
    `
      .star-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        overflow: hidden;
      }
      .trail-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `,
  ],
  standalone: false,
})
export class StarfieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('starContainer') starContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('trailCanvas') trailCanvas!: ElementRef<HTMLCanvasElement>;
  stars: { x: number; y: number; vx:number; vy: number }[] = [];
  meteors: { x: number; y: number; vx: number; vy: number }[] = [];
  private animationFrameId: number | null = null;
  private meteorSpawnTimer: any = null;
  private ctx!: CanvasRenderingContext2D;

  ngAfterViewInit() {
    this.initCanvas();
    this.initStars();
    this.initMeteorSpawn();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.meteorSpawnTimer !== null) {
      clearInterval(this.meteorSpawnTimer);
    }
  }

  private initCanvas() {
    const canvas = this.trailCanvas.nativeElement;
    canvas.width = window.outerWidth;
    canvas.height = window.outerHeight;
    this.ctx = canvas.getContext('2d')!;
  }

  private initStars() {
    const width = window.outerWidth;
    const height = window.innerHeight;
    for (let i = 0; i < 150; i++) {
      this.stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0.5,
        vy: -0.1,
      });
    }
    
  }

  private initMeteorSpawn() {
    this.meteorSpawnTimer = setInterval(() => {
      const width = window.outerWidth;
      const height = window.innerHeight;
      this.meteors.push({
        x: (Math.random() * width) / 3,
        y: (Math.random() * height) / 3,
        vx: Math.random() * 1 + 0.5,
        vy: Math.random() * 1 + 0.5,
      });

      if (this.meteors.length > 10) {
        this.meteors.shift();
      }
    }, 5000);
  }

  private draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = 'white';
    this.stars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, 1, 0, Math.PI * 2);
      ctx.fill();
    });

    this.meteors.forEach((meteor) => {
      const tailLength = 20;
      const gradient = ctx.createLinearGradient(
        meteor.x,
        meteor.y,
        meteor.x - meteor.vx * tailLength,
        meteor.y - meteor.vy * tailLength
      );
      gradient.addColorStop(0, 'rgba(255, 165, 0, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');

      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(
        meteor.x - meteor.vx * tailLength,
        meteor.y - meteor.vy * tailLength
      );
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    this.meteors.forEach((meteor) => {
      ctx.beginPath();
      ctx.arc(meteor.x, meteor.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'orange';
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255, 165, 0, 0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }

  private animate() {
    const width = window.outerWidth;
    const height = window.outerHeight;
    this.stars = this.stars.map((star) => {
      let newY = star.y + star.vy;
      let newX = star.x + star.vx;

      if (newY < 0) {
        newY = height;
      }
      if (newX > width) {
        newX = 0;
      }

      return {
        ...star,
        x: newX,
        y: newY,
      };
    });

    this.meteors = this.meteors.map((meteor) => {
      let newX = meteor.x + meteor.vx;
      let newY = meteor.y + meteor.vy;

      if (newX < 0 || newY > height) {
        newX = width;
        newY = 0;
      }

      return {
        ...meteor,
        x: newX,
        y: newY,
      };
    });

    this.draw();

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}
