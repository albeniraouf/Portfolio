import { Component, OnInit } from '@angular/core';
import { About } from '../profile.models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  about: About;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.about = this.profileService.profile.about
  }
}
