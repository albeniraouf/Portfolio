import { Component } from '@angular/core';
import { profile as _profile } from './profile.data';
@Component({
  selector: 'profile',
  standalone: false,
  template: `
    <app-intro [about]="profile.about"></app-intro>
    <app-about [about]="profile.about"></app-about>
    <app-experience [experiences]="profile.experiences"></app-experience>
    <app-skills [skills]="profile.skills"></app-skills>
    <app-education [educations]="profile.educations"></app-education>
    <app-certs [certs]="profile.certifications"></app-certs>
    <app-footer [accounts]="profile.about.accounts"></app-footer>
  `,
})
export class ProfileComponent  {
  profile = _profile;

}
