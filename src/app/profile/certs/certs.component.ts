import { Component, Input } from '@angular/core';
import { Certificate } from '../profile.models';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap"
@Component({
  selector: 'app-certs',
  standalone: false,
  templateUrl: './certs.component.html'
})
export class CertsComponent {
  @Input() certs!: Certificate[]

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.certificate-header', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.certificate-header',
        start: 'top 90%',
        toggleActions: 'play none none reset',
      },
    });
    gsap.utils.toArray('.certificate-card').forEach((card: any) => {
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
