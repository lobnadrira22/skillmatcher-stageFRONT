import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { OffreEmploiService } from 'src/app/offre-emploi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestionoffre',
  templateUrl: './gestionoffre.component.html',
  styleUrls: ['./gestionoffre.component.css']
})
export class GestionoffreComponent implements OnInit {
  offreForm!: FormGroup;
  offres: any[] = []; // Array to store retrieved job offers
  selectedCategory: string = '';
  imageFile: File | null = null;
  selectedOffer: any | null = null;
  //offreId: number | undefined;



  constructor(
    private offreEmploiService: OffreEmploiService,
    private formBuilder: FormBuilder,
    private router:Router
   
    
  ) {}
  
  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.imageFile = file;
  }
  
  
  


  ngOnInit(): void {
    this.offreForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      dateexpiration: ['', Validators.required],
      selectedCategory: [''],
      image: [null]
      
    });

   
        
      
  
  
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

  createOffre() {
    if (this.offreForm.invalid) {
      console.log('Form is invalid.');
      return;
    }
    this.selectedCategory = this.offreForm.get('selectedCategory')?.value;
    const offreData = {
      nom: this.offreForm.get('nom')?.value,
      description: this.offreForm.get('description')?.value,
      dateexpiration: this.offreForm.get('dateexpiration')?.value,
      categorieoffre: this.selectedCategory
    };
  
    this.offreEmploiService.createOffre(offreData).subscribe(
      (response) => {
        console.log('Offre created successfully:', response);
        this.getOffres();
        this.clearForm(); // Clear the form after successful creation
      },
      (error) => {
        console.error('Error creating offre:', error);
      }
    );
  }

  private clearForm() {
    this.offreForm.reset(); // Reset the form fields
    this.selectedCategory = ''; // Clear selected category
  }
  

  viewOfferDetails(offreId: number) {
    this.offreEmploiService.getOffreById(offreId).subscribe(
      (offre: any) => {
        this.selectedOffer = offre; // Assign the fetched offer details to selectedOffer
        this.selectedCategory = offre.categorieoffre; // Update the selectedCategory
      },
      (error) => {
        console.error('Error fetching offre details:', error);
      }
    );
  }
  
  gotomodifieroffer(id: number){
  this.router.navigate(['/body/modifier-offer',id])
  }



  
  confirmDelete(offreId: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Suppression d'une offre d'emploi !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your service method to delete the offer by ID
        this.offreEmploiService.deleteOffre(offreId).subscribe(
          () => {
            Swal.fire('Supprimé!', 'L\'offre a été supprimée.', 'success');
            this.getOffres(); // Refresh the list of offers after deletion
          },
          (error) => {
            console.error('Error deleting offre:', error);
          }
        );
      }
    });
  }
  

  
}