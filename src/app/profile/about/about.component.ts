import { Component, OnInit } from '@angular/core';
import { About } from '../profile.models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  phones: string[];
  emails: string[];
  about: About;

  constructor(
    private profileService: ProfileService,
  ){ }

  ngOnInit(): void {
    this.phones = this.profileService.profile.phones;
    this.emails = this.profileService.profile.emails;
    this.about = this.profileService.profile.about;

  }

}
