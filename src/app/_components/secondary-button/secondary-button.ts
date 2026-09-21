import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-secondary-button',
  styleUrl: './secondary-button.css',
  templateUrl: './secondary-button.html',
})
export class SecondaryButton {
  @Input() textButton: string = '';
  @Input() phClass: string = '';
  @Input() disabled: boolean = false;
}
