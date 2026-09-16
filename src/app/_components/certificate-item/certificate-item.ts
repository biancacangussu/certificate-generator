import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  imports: [SecondaryButton],
  selector: 'app-certificate-item',
  styleUrl: './certificate-item.css',
  templateUrl: './certificate-item.html',
})
export class CertificateItem {}
