import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { CertificateItem } from '../../_components/certificate-item/certificate-item';

@Component({
  imports: [CertificateItem],
  selector: 'app-certificates',
  styleUrl: './certificates.css',
  templateUrl: './certificates.html',
})
export class Certificates {}
