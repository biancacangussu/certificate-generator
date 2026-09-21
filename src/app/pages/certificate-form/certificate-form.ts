import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  selector: 'app-certificate-form',
  styleUrl: './certificate-form.css',
  templateUrl: './certificate-form.html',
})
export class CertificateForm {
  name: string = '';
  activity: string = '';
  activities: string[] = ['Angular', 'React'];

  invalidField(control: NgModel) {
    return control.invalid && control.touched;
  }
}
