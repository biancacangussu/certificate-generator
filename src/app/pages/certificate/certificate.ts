import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [SecondaryButton, RouterLink],
  selector: 'app-certificate',
  styleUrl: './certificate.css',
  templateUrl: './certificate.html',
})
export class Certificate {}
