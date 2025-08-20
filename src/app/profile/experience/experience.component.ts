import { AfterViewInit, Component, Input } from '@angular/core';
import { Experience } from '../profile.models';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements AfterViewInit {
  @Input() experiences!: Experience[];

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#experience', {
      opacity: 0,
      x: 100,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.experience-header',
        start: 'top 90%',
        toggleActions: 'play none none reset',
      },
    });
    gsap.from('.experience-header', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.experience-header',
        start: 'top 90%',
        toggleActions: 'play none none reset',
      },
    });
    gsap.utils.toArray('.experience-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        opacity: 0,
        x: 50 * Math.pow(-1,index),
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      });
    });
  }
}
