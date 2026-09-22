import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  imports: [RouterLink, RouterLinkActive, NgClass, CommonModule],
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
