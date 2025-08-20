import { AfterViewInit, Component, Input } from '@angular/core';
import { About } from '../profile.models';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
})
export class AboutComponent implements AfterViewInit {
  @Input() about!: About;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#about', {
      opacity: 0,
      x: -100,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-header',
        start: 'top 90%',
        toggleActions: 'play none none reset',
      },
    });
    gsap.from('.about-header', {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-header',
        start: 'top 90%',
        toggleActions: 'play none none reset',
      },
    });
    gsap.from('.about-info', {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-info',
        start: 'top 90%',
        toggleActions: 'play none none reset',
      },
    });
  }
}
