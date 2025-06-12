import { Component, ViewChild ,ElementRef} from '@angular/core';
import { Data } from '../../models/data.model';
import { NgFor } from '@angular/common';
import { Collapse } from 'bootstrap';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('navbarCollapseRef') navbarCollapse!: ElementRef;
  navbarData = Data.navbar;

  constructor() {
  }
  toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
closeMenu() {
  if (window.innerWidth < 992) {
    const bsCollapse = Collapse.getInstance(this.navbarCollapse.nativeElement) ||
    new Collapse(this.navbarCollapse.nativeElement, { toggle: false });
    bsCollapse.hide();
  }
}
@HostListener('document:click', ['$event'])
onClickOutside(event: MouseEvent) {
  const targetElement = event.target as HTMLElement;

  if (
    this.navbarCollapse &&
    !this.navbarCollapse.nativeElement.contains(targetElement) &&
    !targetElement.classList.contains('navbar-toggler')
  ) {
    const collapse = Collapse.getInstance(this.navbarCollapse.nativeElement);
    if (collapse && window.innerWidth < 992) {
      collapse.hide();
    }
  }
}


}
