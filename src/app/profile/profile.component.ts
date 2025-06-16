import { Component } from '@angular/core';
import { profile as _profile } from './profile.data';
@Component({
  selector: 'profile',
  standalone: false,
  template: `
    <div class="max-w-5xl mx-auto bg-transparent lg:bg-[#fff4] lg:my-8 p-6 rounded-lg shadow-md">
      <app-intro [about]="profile.about"></app-intro>
      <app-about [about]="profile.about"></app-about>
      <app-experience [experiences]="profile.experiences"></app-experience>
      <app-skills [skills]="profile.skills"></app-skills>
      <app-education [educations]="profile.educations"></app-education>
      <app-certs [certs]="profile.certifications"></app-certs>
    </div>
    <app-footer [accounts]="profile.about.accounts"></app-footer>
  `,
})
export class ProfileComponent {
  profile = _profile;
}
