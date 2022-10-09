import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ChipModule } from 'primeng/chip';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    CardModule,
    TimelineModule,
    ChipModule,
    ProgressBarModule,
    FontAwesomeModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ButtonModule,
    DividerModule,
    MenubarModule,
    MenubarModule,
    PipesModule,
  ],
})
export class ProfileModule {}
