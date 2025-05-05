import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  template: `
<div [id]="id" class="max-w-5xl mx-auto my-8 p-6 bg-[#fffc] rounded-lg shadow-md">
  <ng-content></ng-content>
</div>
  `,
})
export class CardComponent {
  @Input () id!: string;
}
