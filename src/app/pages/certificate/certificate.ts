import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate';
import { Certificate } from '../../interfaces/certificate';

@Component({
  imports: [SecondaryButton, RouterLink],
  selector: 'app-certificate',
  styleUrl: './certificate.css',
  templateUrl: './certificate.html',
})
export class CertificateComponent implements OnInit {
  id: string | null= '';
  certificate: Certificate | undefined;

  constructor(private certificateService: CertificateService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificate = this.certificateService.certificates.find(item => item.id === this.id);
      console.log(this.certificate);
    });
  }
}
