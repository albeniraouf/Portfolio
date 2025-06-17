import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ProfileModule } from './profile/profile.module';
import { StarfieldComponent } from './starfield/starfield.component';
import { NgIconsModule } from '@ng-icons/core';
import { faSolidEye } from '@ng-icons/font-awesome/solid';

@NgModule({
  declarations: [
    AppComponent,
    StarfieldComponent,
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    NgIconsModule.withIcons({
          eye: faSolidEye,
        }),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
