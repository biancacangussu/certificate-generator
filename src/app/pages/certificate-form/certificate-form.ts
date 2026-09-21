import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';

@Component({
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  selector: 'app-certificate-form',
  styleUrl: './certificate-form.css',
  templateUrl: './certificate-form.html',
})
export class CertificateForm {
  certificate: Certificate = {
    name: '',
    activities: []
  };
  activity: string = '';

  invalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  validForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0;
  }

  addActivity() {
    this.certificate.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.certificate.activities.splice(index, 1);
  }

  submit() {
    if (!this.validForm()) {
      return;
    }

    console.log(this.certificate);
  }
}
