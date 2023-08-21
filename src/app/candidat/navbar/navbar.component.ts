import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggle() {
    const element = document.body as HTMLBodyElement
    element.classList.toggle('toggle-sidebar')
  }

}
