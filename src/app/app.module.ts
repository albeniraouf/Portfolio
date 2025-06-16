import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ProfileModule } from './profile/profile.module';
import { StarfieldComponent } from './starfield/starfield.component';

@NgModule({
  declarations: [
    AppComponent,
    StarfieldComponent,
  ],
  imports: [
    BrowserModule,
    ProfileModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
