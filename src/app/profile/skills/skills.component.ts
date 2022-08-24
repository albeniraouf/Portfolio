import { Component, OnInit } from '@angular/core';
import { Skill } from '../profile.models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.skills = this.profileService.profile.skills.sort((a,b)=>a.percentage<b.percentage? 1 : a.percentage>b.percentage? -1 : 0)
  }
}
