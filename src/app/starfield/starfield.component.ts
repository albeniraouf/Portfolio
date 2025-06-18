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
      <canvas #starsCanvas class="stars-canvas"></canvas>
      <canvas #milkyWayCanvas class="milky-way-canvas"></canvas>
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
      .stars-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .milky-way-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
    `,
  ],
  standalone: false,
})
export class StarfieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('starContainer') starContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('starsCanvas') starsCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('milkyWayCanvas') milkyWayCanvas!: ElementRef<HTMLCanvasElement>;
  stars: { x: number; y: number; vx: number; vy: number }[] = [];
  meteors: { x: number; y: number; vx: number; vy: number }[] = [];
  private animationFrameId: number | null = null;
  private meteorSpawnTimer: any = null;
  private ctx!: CanvasRenderingContext2D;
  private mwCtx!: CanvasRenderingContext2D;

  ngAfterViewInit() {
    this.initCanvas();
    this.drawMilkyWay();
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
    const canvas = this.starsCanvas.nativeElement;
    canvas.width = window.outerWidth;
    canvas.height = window.outerHeight;
    this.ctx = canvas.getContext('2d')!;
    const canvas2 = this.milkyWayCanvas.nativeElement;
    canvas2.width = window.outerWidth;
    canvas2.height = window.outerHeight;
    this.mwCtx = canvas2.getContext('2d')!;
  }

  private initStars() {
    const width = window.outerWidth;
    const height = window.outerHeight;
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
      const height = window.outerHeight;
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

  private drawMilkyWay() {
    const mwCtx = this.mwCtx;

    const mwClusterCount = 300; 
    let mwClusterStarCount = 1500; 
    let mwClusterSize = 120; 
    let mwClusterSizeR = 80; 
    const mwClusterLayers = 10; 
    const mwHueMin = 150; 
    const mwHueMax = 300; 
    const mwWhiteProportionMin = 50; 
    const mwWhiteProportionMax = 65; 
    const outerHeight = window.outerHeight;
    const outerWidth = window.outerWidth;
    if(outerHeight>outerWidth){
      mwClusterSize = 60
      mwClusterStarCount = 750; 
      mwClusterSizeR = 40
    }
    
    function MilkyWayX() {
      return Math.floor(Math.random() * outerWidth);
    }

    
    function MilkyWayYFromX(xPos: number) {
      const mwAngle = 0.6; 
      let offset = (outerWidth / 2 - xPos) * mwAngle;

      return (
        Math.floor(
          Math.pow(Math.random(), 1.5) *
            outerHeight *
            0.6 *
            (Math.random() - 0.5) +
            outerHeight / 2 +
            (Math.random() - 0.5) * 100
        ) + offset
      );
    }

    
    for (let i = 0; i < mwClusterCount; i++) {
      let xPos = MilkyWayX();
      let yPos = MilkyWayYFromX(xPos);
      
      let distToCenter =
        (1 - Math.abs(xPos - outerWidth / 2) / (outerWidth / 2)) *
        (1 - Math.abs(yPos - outerHeight / 2) / (outerHeight / 2));
      let size = mwClusterSize + Math.random() * mwClusterSizeR;
      
      let hue =
        mwHueMin +
        Math.floor(
          (Math.random() * 0.5 + distToCenter * 0.5) * (mwHueMax - mwHueMin)
        );
      let baseWhiteProportion =
        mwWhiteProportionMin +
        Math.random() * (mwWhiteProportionMax - mwWhiteProportionMin);
      let starsPerLayer = Math.floor(mwClusterStarCount / mwClusterLayers);
      for (let layer = 1; layer < mwClusterLayers; layer++) {
        let layerRadius = (size * layer) / mwClusterLayers;
        for (let i = 1; i < starsPerLayer; i++) {
          let posX = xPos + 2 * layerRadius * (Math.random() - 0.5);
          let posY =
            yPos +
            2 *
              Math.sqrt(Math.pow(layerRadius, 2) - Math.pow(xPos - posX, 2)) *
              (Math.random() - 0.5);
          let size = 0.05 + Math.random() * 0.15;
          let alpha = 0.3 + Math.random() * 0.4;
          let whitePercentage =
            baseWhiteProportion +
            15 +
            15 * distToCenter +
            Math.floor(Math.random() * 10);
          mwCtx.beginPath();
          mwCtx.arc(posX, posY, size, 0, Math.PI * 2, false);
          mwCtx.fillStyle =
            'hsla(' + hue + ',100%,' + whitePercentage + '%,' + alpha + ')'; 
          mwCtx.fill();
        }
      }
      
      let gradient = mwCtx.createRadialGradient(
        xPos,
        yPos,
        0,
        xPos,
        yPos,
        size
      );
      gradient.addColorStop(
        0,
        'hsla(' + hue + ',100%,' + baseWhiteProportion + '%,0.002)'
      ); 
      gradient.addColorStop(
        0.25,
        'hsla(' +
          hue +
          ',100%,' +
          (baseWhiteProportion + 30) +
          '%,' +
          (0.01 + 0.01 * distToCenter) +
          ')'
      ); 
      gradient.addColorStop(
        0.4,
        'hsla(' + hue + ',100%,' + (baseWhiteProportion + 15) + '%,0.005)'
      ); 
      gradient.addColorStop(1, 'rgba(0,0,0,0)'); 
      mwCtx.beginPath();
      mwCtx.arc(xPos, yPos, size, 0, Math.PI * 2, false);
      mwCtx.fillStyle = gradient;
      mwCtx.fill();
    }
  }
  private draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);

    gradient.addColorStop(0, 'rgba(15, 25, 25, 1)');
    gradient.addColorStop(0.15, 'rgba(15, 40, 40, 1)');
    gradient.addColorStop(0.4, 'rgba(15, 50, 50, 1)');
    gradient.addColorStop(0.85, 'rgba(15, 40, 40, 1)');
    gradient.addColorStop(1, 'rgba(15, 25, 25, 1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

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
