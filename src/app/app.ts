import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { CertificateItem } from './_components/certificate-item/certificate-item';
import { BaseUI } from './_components/base-ui/base-ui';
import { Certificates } from './pages/certificates/certificates';
import { CertificateForm } from './pages/certificate-form/certificate-form';

@Component({
  imports: [Navbar, BaseUI, CertificateForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('certificate-generator');
}
