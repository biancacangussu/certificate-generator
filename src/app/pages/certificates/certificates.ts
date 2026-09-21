import { Component } from '@angular/core';
import { CertificateItem } from '../../_components/certificate-item/certificate-item';

@Component({
  imports: [CertificateItem],
  selector: 'app-certificates',
  styleUrl: './certificates.css',
  templateUrl: './certificates.html',
})
export class Certificates {}
