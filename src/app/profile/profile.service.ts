import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Profile from './profile.models';
import { profile } from './profile.data';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // baseUrl = environment.baseUrl;

  public profile: Profile = profile;
  constructor(
    private http: HttpClient
  ) { }

  async contactUs(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return await firstValueFrom(this.http.post('https://formspree.io/f/maykyrve', data, { 'headers': headers }));
  }

}