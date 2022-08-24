import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: any = {};

  emails: string[];
  phones: string[];

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.emails = this.profileService.profile.emails;
    this.phones = this.profileService.profile.phones;
  }

  async onSubmit() {
    const data = { name: this.model.name, subject: this.model.subject, replyto: this.model.email, message: this.model.message };
    return await this.profileService.contactUs(data);
  }
}
