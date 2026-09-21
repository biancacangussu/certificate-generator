import { Component } from '@angular/core';
import { CertificateItem } from '../../_components/certificate-item/certificate-item';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CertificateItem, SecondaryButton, RouterLink],
  selector: 'app-certificates',
  styleUrl: './certificates.css',
  templateUrl: './certificates.html',
})
export class Certificates {}
