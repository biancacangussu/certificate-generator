import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-primary-button',
  styleUrl: './primary-button.css',
  templateUrl: './primary-button.html',
})
export class PrimaryButton {
  @Input() textButton: string = '';
  @Input() disabled: boolean = false;
}
