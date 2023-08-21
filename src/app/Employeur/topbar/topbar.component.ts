import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  toggle() {
    const element = document.body as HTMLBodyElement
    element.classList.toggle('toggle-sidebar')
  }

}
