import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Card } from 'primeng/card';
import { BehaviorSubject } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';
import { compareBy } from 'src/app/utils/compare';
import { ProfileService } from 'src/app/services/profile.service';
import {
  faBirthdayCake,
  faEnvelope,
  faGraduationCap,
  faIdCard,
  faLanguage,
  faLaptop,
  faMap,
  faMobilePhone,
  faPaperPlane,
  faPhone,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Profile from '../profile.models';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // Main Components
  @ViewChild('about') about: Card;
  @ViewChild('experience') experience: Card;
  @ViewChild('education') education: Card;
  @ViewChild('skills') skills: Card;
  @ViewChild('contact') contact: Card;

  // Profile
  private _profile: Profile;
  public get profile(): Profile {
    return this._profile;
  }
  public set profile(value: Profile) {
    value.skills = value.skills.sort();
    value.educations = value.educations.sort((s1, s2) =>
      compareBy(s1, s2, 'startDate', true)
    );
    value.experiences = value.experiences.sort((s1, s2) =>
      compareBy(s1, s2, 'startDate', true)
    );
    this._profile = value;
  }

  // Navbar
  navbarItems: MenuItem[] = [];

  //theme
  dark = new BehaviorSubject(true);

  // faIcons
  faGraduationCap = faGraduationCap;
  faLaptop = faLaptop;
  faIdCard = faIdCard;
  faUser = faUser;
  faTrophy = faTrophy;
  faPhone = faPhone;
  faMobilePhone = faMobilePhone;
  faEnvelope = faEnvelope;
  faBirthdayCake = faBirthdayCake;
  faMap = faMap;
  faLanguage = faLanguage;
  faPaperPlane = faPaperPlane;

  constructor(
    private profileService: ProfileService,
    clockService: ClockService
  ) {
    clockService.time.subscribe((time) => {
      const curHr = time.getHours();
      if (curHr < 6 || curHr >= 18) this.dark.next(true);
      else this.dark.next(false);
    });
  }

  ngOnInit(): void {
    this.profile = this.profileService.profile;
    this.navbarItems = [
      {
        icon: 'pi pi-info-circle',
        label: 'About',
        command: () => this.scrollToCard(this.about),
      },
      {
        icon: 'pi pi-briefcase',
        label: 'Experience',
        command: () => this.scrollToCard(this.experience),
      },
      {
        icon: 'pi pi-bolt',
        label: 'Skills',
        command: () => this.scrollToCard(this.skills),
      },
      {
        icon: 'pi pi-book',
        label: 'Education',
        command: () => this.scrollToCard(this.education),
      },
      {
        icon: 'pi pi-phone',
        label: 'Contact Me',
        command: () => this.scrollToCard(this.contact),
      },
    ];
  }

  scrollToCard(card: Card) {
    this.scroll(card.getBlockableElement());
  }
  scroll(element: HTMLElement) {
    element.scrollIntoView();
  }

  // Contact Form
  model: any = {};
  async onSubmit() {
    const data = {
      name: this.model.name,
      subject: this.model.subject,
      replyto: this.model.email,
      message: this.model.message,
    };
    await this.profileService.contactUs(data);
    this.model = {};
  }
}
