import { NgIconsModule } from '@ng-icons/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PipesModule } from '../pipes/pipes.module';
import {
  faBrandFacebook,
  faBrandGithub,
  faBrandInstagram,
  faBrandLinkedin,
} from '@ng-icons/font-awesome/brands';
import {
  faSolidBookOpen,
  faSolidCakeCandles,
  faSolidCircleInfo,
  faSolidEnvelope,
  faSolidLanguage,
  faSolidLaptopCode,
  faSolidLocationDot,
  faSolidMobile,
  faSolidPerson,
  faSolidSchool,
  faSolidSchoolFlag,
  faSolidStar,
} from '@ng-icons/font-awesome/solid';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [ProfileComponent, IntroComponent, AboutComponent, ExperienceComponent, SkillsComponent, EducationComponent, FooterComponent],
  exports: [ProfileComponent],
  imports: [
    CommonModule,
    PipesModule,
    UiModule,
    NgIconsModule.withIcons({
      facebook: faBrandFacebook,
      instagram: faBrandInstagram,
      linkedin: faBrandLinkedin,
      github: faBrandGithub,
      person: faSolidPerson,
      info: faSolidCircleInfo,
      cake: faSolidCakeCandles,
      email: faSolidEnvelope,
      phone: faSolidMobile,
      address: faSolidLocationDot,
      language: faSolidLanguage,
      laptop: faSolidLaptopCode,
      star: faSolidStar,
      book: faSolidBookOpen,
      school: faSolidSchool,
      university: faSolidSchoolFlag,
      
    }),
  ],
})
export class ProfileModule {}
