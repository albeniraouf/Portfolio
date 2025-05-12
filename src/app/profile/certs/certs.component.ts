import { Component, Input, AfterViewInit } from '@angular/core';
import { Certificate } from '../profile.models';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-certs',
  standalone: false,
  templateUrl: './certs.component.html',
})
export class CertsComponent implements AfterViewInit {
  @Input() certs!: Certificate[];
  showModal: boolean = false;
  selectedImage: string = '';

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

    gsap.utils.toArray('.certification-card').forEach((card: any) => {
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

    gsap.set('.modal-overlay', { opacity: 0, display: 'none' });
    gsap.set('.modal-content', { scale: 0.8, opacity: 0 });
  }

  openModal(image: string) {
    this.selectedImage = image;
    this.showModal = true;

    gsap.to('.modal-overlay', {
      opacity: 1,
      display: 'block',
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to('.modal-content', {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
        });
      },
    });
  }

  closeModal() {
    gsap.to('.modal-content', {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to('.modal-overlay', {
          opacity: 0,
          display: 'none',
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            this.showModal = false;
            this.selectedImage = '';
          },
        });
      },
    });
  }
}
