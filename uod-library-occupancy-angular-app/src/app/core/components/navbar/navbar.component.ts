import { Component, HostListener } from '@angular/core';
import mdbCollapse from "mdb-angular-ui-kit"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // You might want to adjust this value based on your design breakpoints
  private mobileWidthThreshold: number = 990

  isMobile(): boolean {
    return window.innerWidth <= this.mobileWidthThreshold;
  }

  toggleNavbarCollapse(navCollapse: any) {
    if (this.isMobile()) {
      navCollapse.toggle();
    }
  }
}
