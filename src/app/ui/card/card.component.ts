import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  template: `
    <div
      [id]="id"
      class="max-w-5xl mx-auto md:my-8 my-{{ my }}  p-6 rounded-lg shadow-md"
      style="background-color: #{{ bg }}"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  @Input() id!: string;
  @Input() bg: string = 'fffc';
  @Input() my: number = 8;
}
