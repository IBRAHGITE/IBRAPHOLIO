import { Component } from '@angular/core';
import { Data } from '../../models/data.model';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbarData = Data.navbar;

  constructor() {
  }
  toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

}
