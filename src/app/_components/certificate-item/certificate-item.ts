import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  imports: [SecondaryButton],
  selector: 'app-certificate-item',
  styleUrl: './certificate-item.css',
  templateUrl: './certificate-item.html',
})
export class CertificateItem {
  id: string = '1';

  constructor(private router: Router) {}

  redirectToCertificate(){
    this.router.navigate(['/certificate', this.id]);
  }
}
