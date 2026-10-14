import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate';
import { Certificate } from '../../interfaces/certificate';
import { DatePipe } from '@angular/common';
import html2canvas from 'html2canvas';

@Component({
  imports: [SecondaryButton, RouterLink, DatePipe],
  selector: 'app-certificate',
  styleUrl: './certificate.css',
  templateUrl: './certificate.html',
})
export class CertificateDetail implements OnInit {
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
      link.download = `certificate-${this.fileName(this.certificate!.name)}.png`;
      link.click();
    });

  }

  private fileName(name: string) {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
}
