import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [SecondaryButton, RouterLink],
  selector: 'app-certificate-item',
  styleUrl: './certificate-item.css',
  templateUrl: './certificate-item.html',
})
export class CertificateItem {
  id: string = '1';
}
