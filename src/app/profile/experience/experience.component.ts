import { Component, OnInit } from '@angular/core';
import { compare } from 'src/app/utils/compare';
import { Experience } from '../profile.models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.experiences = this.profileService.profile.experiences.sort((a,b)=>compare(a.startDate.getTime(), b.startDate.getTime(), true));
  }
  getDuration(experience: Experience) {
    const start = experience.startDate;
    const end = experience?.endDate || new Date();
    const duration = new Date(end.getTime() - start.getTime())
    let str = '';
    const y = duration.getUTCFullYear() - 1970;
    const m = duration.getUTCMonth();
    const d = duration.getUTCDate() - 1;
    const year = y!==0? y===1? '1 Year' : `${y} Years` : '';
    const month= m!==0? m===1? '1 Month' : `${m} Months` : '';
    const days= d!==0? d===1? '1 Day' : `${d} Days` : '';
    str = [year, month, days].filter(i=>i!=='').join(', ')
    return str;
  }
}
