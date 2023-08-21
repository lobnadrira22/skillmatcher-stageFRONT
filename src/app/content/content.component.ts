import { OffreEmploiService } from './../offre-emploi.service';
import { Component,OnInit } from '@angular/core';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
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


  postulerClicked(): void {
    Swal.fire({
      icon: 'info',
      title: 'Inscription requise',
      html: 'Veuillez vous <a href="/register">inscrire</a> avant de postuler sur ce poste.',
    });
  }
}