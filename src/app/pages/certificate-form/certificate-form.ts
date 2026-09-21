import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  selector: 'app-certificate-form',
  styleUrl: './certificate-form.css',
  templateUrl: './certificate-form.html',
})
export class CertificateForm {
  name: string = '';
  activity: string = '';
  activities: string[] = ['Angular', 'React'];
}
