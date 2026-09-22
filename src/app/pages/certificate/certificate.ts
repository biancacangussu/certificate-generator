import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate';

@Component({
  imports: [SecondaryButton, RouterLink],
  selector: 'app-certificate',
  styleUrl: './certificate.css',
  templateUrl: './certificate.html',
})
export class Certificate implements OnInit {
  constructor(private certificateService: CertificateService) {}

  ngOnInit() {
    console.log(this.certificateService.certificates);
  }
}
