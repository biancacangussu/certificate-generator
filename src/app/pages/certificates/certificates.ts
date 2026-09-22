import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../../_services/certificate';
import { CertificateItem } from '../../_components/certificate-item/certificate-item';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';
import { Certificate } from '../../interfaces/certificate';

@Component({
  imports: [CertificateItem, SecondaryButton, RouterLink],
  selector: 'app-certificates',
  styleUrl: './certificates.css',
  templateUrl: './certificates.html',
})
export class Certificates implements OnInit {

  certificates: Certificate[] = [];

  constructor(private certificateService: CertificateService) {}

  ngOnInit() {
    this.certificates = this.certificateService.certificates;
    console.log(this.certificates);
  }
}
