import { AfterViewInit, Component, Input } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements AfterViewInit{
  @Input() skills!: string[];

  ngAfterViewInit(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.skills-header', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skills-header',
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });
    gsap.utils.toArray('.skills-column > div > div').forEach((column: any) => {
      gsap.from(column, {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: column,
          start: 'top 90%',
          toggleActions: 'play none none reset'
        }
      });
    });


  }
}
