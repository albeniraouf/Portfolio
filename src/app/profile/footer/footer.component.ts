import { AfterViewInit, Component, Input } from '@angular/core';
import { Account } from '../profile.models';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"
@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
})
export class FooterComponent implements AfterViewInit{
  @Input() accounts!: Account[];
  get year(){
    return new Date().getFullYear()
  }

  ngAfterViewInit(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.footer', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 100%',
        toggleActions: 'play none none reset',
      },
    });
  }
}
