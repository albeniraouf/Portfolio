import { Component, OnInit } from '@angular/core';
import { About } from '../profile.models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  about: About;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.about = this.profileService.profile.about
  }

}
