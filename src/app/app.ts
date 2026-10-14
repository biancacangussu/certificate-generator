import { Component, OnInit } from '@angular/core';
import { CertificateService } from './_services/certificate';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { BaseUI } from './_components/base-ui/base-ui';

@Component({
  imports: [Navbar, BaseUI, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  constructor(private certificateService: CertificateService) {}

  ngOnInit() {
    const certificates = localStorage.getItem('certificates');
    this.certificateService.certificates = certificates ? JSON.parse(certificates) : [];
  }
}
