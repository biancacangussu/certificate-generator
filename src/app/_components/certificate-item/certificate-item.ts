import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  imports: [SecondaryButton],
  selector: 'app-certificate-item',
  styleUrl: './certificate-item.css',
  templateUrl: './certificate-item.html',
})
export class CertificateItem {
  @Input() name: string = '';
  @Input() issuedDate: string = '';
  @Input() id: string = '';

  constructor(private router: Router) {}

  redirectToCertificate(){
    this.router.navigate(['/certificate', this.id]);
  }
}
