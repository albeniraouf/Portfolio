import { AfterViewInit, Component, Input } from '@angular/core';
import { About } from '../profile.models';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

@Component({
  selector: 'app-intro',
  standalone: false,
  templateUrl: './intro.component.html',
})
export class IntroComponent implements AfterViewInit {
  @Input() about!: About;


  ngAfterViewInit(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.intro-image', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.intro-image',
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });
    gsap.from('.intro-name', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.intro-name',
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });
    gsap.from('.intro-job', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.intro-job',
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });
    gsap.from('.intro-links a', {
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(2.7)',
      scrollTrigger: {
        trigger: '.intro-links',
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });

  }

}
