import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from './primary-button/primary-button';

@Component({
  imports: [Navbar, PrimaryButton],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('certificate-generator');
}
