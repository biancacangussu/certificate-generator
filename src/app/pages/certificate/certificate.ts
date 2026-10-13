import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate';
import { Certificate } from '../../interfaces/certificate';
import html2canvas from 'html2canvas';

@Component({
  imports: [SecondaryButton, RouterLink],
  selector: 'app-certificate',
  styleUrl: './certificate.css',
  templateUrl: './certificate.html',
})
export class CertificateComponent implements OnInit {
  id: string | null= '';
  certificate: Certificate | undefined;

  @ViewChild('certificateContainer') certificateElement!: ElementRef;

  constructor(private certificateService: CertificateService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificate = this.certificateService.certificates.find(item => item.id === this.id);
    });
  }

  downloadCertificate() {
    if (this.certificate == undefined) {
      return;
    }

    html2canvas(this.certificateElement.nativeElement, { scale: 2 }).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'certificate.png';
      link.click();
    });

  }
}
