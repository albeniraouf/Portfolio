import { AfterViewInit, Component, Input } from '@angular/core';
import { Education } from '../profile.models';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"
@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
})
export class EducationComponent implements AfterViewInit {
  @Input() educations!: Education[]

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.education-header', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.education-header',
        start: 'top 90%',
        toggleActions: 'play none none reset',
      },
    });
    gsap.utils.toArray('.education-card').forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        scale: 0.9,
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
