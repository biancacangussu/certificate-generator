import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  ngOnInit(): void {
    this.message();
  }

  message() {
    console.log('Hello from Navbar component');
  }
}
