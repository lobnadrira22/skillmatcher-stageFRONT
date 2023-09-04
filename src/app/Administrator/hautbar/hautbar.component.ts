import { Component } from '@angular/core';

@Component({
  selector: 'app-hautbar',
  templateUrl: './hautbar.component.html',
  styleUrls: ['./hautbar.component.css']
})
export class HautbarComponent {
  toggle() {
    const element = document.body as HTMLBodyElement
    element.classList.toggle('toggle-sidebar')
  }
}
