import { Service } from '@angular/core';
import { Certificate } from '../interfaces/certificate';

@Service()
export class CertificateService {

  certificates: Certificate[] = [];

  addCertificate(certificate: Certificate) {
    this.certificates.push({ ...certificate });
    console.log(this.certificates);
  }
}
