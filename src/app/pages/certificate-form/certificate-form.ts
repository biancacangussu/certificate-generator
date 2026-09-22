import { Component, ViewChild } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';
import { CertificateService } from '../../_services/certificate';

@Component({
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  selector: 'app-certificate-form',
  styleUrl: './certificate-form.css',
  templateUrl: './certificate-form.html',
})
export class CertificateForm {
  constructor(private certificateService: CertificateService) {}
  @ViewChild('form') form!: NgForm;

  certificate: Certificate = {
    id: '',
    name: '',
    activities: [],
    issuedDate: '',
  };
  activity: string = '';

  invalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  validForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0;
  }

  addActivity() {
    if (this.activity.trim().length === 0) {
      return;
    }
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
    this.certificate.id = uuidv4();
    this.certificate.issuedDate = this.setDate();
    this.certificateService.addCertificate(this.certificate);

    this.certificate = this.cleanForm();
    this.form.resetForm();
  }

  setDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const formatDate = `${year}-${month}-${day}`;
    return formatDate;
  }

  cleanForm(): Certificate {
    return {
      id: '',
      name: '',
      activities: [],
      issuedDate: '',
    };
  }
}
