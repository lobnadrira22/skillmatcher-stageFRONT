import { CandidatserviceService } from './../../candidatservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userFullName: string='';

  constructor(private Candidatservice: CandidatserviceService) {
    this.Candidatservice.userFullName$.subscribe(userFullName => {
      this.userFullName = userFullName;
    });
  }
  toggle() {
    const element = document.body as HTMLBodyElement
    element.classList.toggle('toggle-sidebar')
  }

}
