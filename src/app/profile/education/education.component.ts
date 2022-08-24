import { Component, OnInit } from '@angular/core';
import { Education } from '../profile.models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.educations = this.profileService.profile.educations;
  }
}
