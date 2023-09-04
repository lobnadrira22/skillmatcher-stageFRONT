import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { CandidatserviceService } from 'src/app/candidatservice.service';
import { OffreEmploiService } from 'src/app/offre-emploi.service';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css']
})
export class OffreEmploiComponent implements OnInit {
  offres: any[] = []; // Cette variable stockera les offres
 
  filteredOffres: any[] = []; // Offres filtrées
  searchKeyword: string = '';
  formData: any;
  

  constructor(private offreEmploiService: OffreEmploiService,
    private formBuilder: FormBuilder,
    private candidatService: CandidatserviceService, ) {
    
    }

  ngOnInit() {
    // Récupérer la liste des offres depuis le service
    this.offreEmploiService.getAllOffres().subscribe((res: any[]) => {
      this.offres = res;
      this.filteredOffres = res;
    });
  }
  filterByDomain(domain: string) {
    const selectedDomain = domain.toLowerCase();

    // Filtrer les offres en fonction du domaine sélectionné
    this.filteredOffres = this.offres.filter(offre => {
      const lowerCaseDescription = offre.description.toLowerCase();
      return lowerCaseDescription.includes(selectedDomain);
    });
  }

  search() {
    const searchKeyword = this.searchKeyword.toLowerCase(); // Convert to lowercase

    // Filtrer les offres en fonction du mot-clé de recherche
    this.filteredOffres = this.offres.filter(offre => {
      const lowerCaseNom = offre.nom.toLowerCase();
      const lowerCaseDescription = offre.description.toLowerCase();
      return lowerCaseNom.includes(searchKeyword) || lowerCaseDescription.includes(searchKeyword);
    });
  }

 /*  submitPostulationForm(postulationForm: NgForm) {
    if (postulationForm.valid) {
      const formData = new FormData();
      formData.append('CV', postulationForm.value.CV);
      formData.append('lettremotivation', postulationForm.value.lettremotivation);


      // For debugging, log the formData to see if it's correctly constructed
      console.log(formData);

      this.candidatService.postuler(formData).subscribe(
        (response) => {
          console.log('Postulation réussie', response);
          // Reset the form or take any other desired action upon successful postulation
        },
        (error) => {
          console.error('Erreur lors de la postulation', error);
        }
      );
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  } */
  
  
  

}
