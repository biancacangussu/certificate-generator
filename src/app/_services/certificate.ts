import { Service } from '@angular/core';
import { Certificate } from '../interfaces/certificate';

@Service()
export class CertificateService {

  certificates: Certificate[] = [];

  addCertificate(certificate: Certificate) {
    this.certificates.unshift({ ...certificate });
    localStorage.setItem('certificates', JSON.stringify(this.certificates));
  }

  removeCertificate(id: string) {
    this.certificates = this.certificates.filter(certificate => certificate.id !== id);
    localStorage.setItem('certificates', JSON.stringify(this.certificates));
  }
}
