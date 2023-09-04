import { Component, OnInit } from '@angular/core';
import { OffreEmploiService } from 'src/app/offre-emploi.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  offres: any[] = []; // Array to store retrieved job offers

  constructor(
    private offreEmploiService: OffreEmploiService  // Inject your service
  
  ) {}
  ngOnInit(): void {
    this.getOffres();
  }

  private getOffres() {
    this.offreEmploiService.getAllOffres().subscribe(
      (data: any) => {
        this.offres = data; // Store the retrieved offers in the offres array
      },
      (error) => {
        console.error(error);
        // You can display an error message here using Swal or other methods
      }
    );
  }
}