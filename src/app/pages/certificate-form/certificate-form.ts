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
  activities: string[] = [];

  invalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  validForm() {
    return this.activities.length > 0 && this.name.length > 0;
  }

  addActivity() {
    this.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.activities.splice(index, 1);
  }
}
