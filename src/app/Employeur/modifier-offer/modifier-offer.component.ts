import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreEmploiService } from 'src/app/offre-emploi.service';

@Component({
  selector: 'app-modifier-offer',
  templateUrl: './modifier-offer.component.html',
  styleUrls: ['./modifier-offer.component.css']
})

export class ModifierOfferComponent implements OnInit{
  
  offreId!:number;
  forminput!: FormGroup;
  
  constructor(private activateroute: ActivatedRoute,
    private fb:FormBuilder,
    private offreser: OffreEmploiService,
    private router: Router,){

  }
  ngOnInit(): void {
    this.activateroute.params.subscribe(params =>{
      this.offreId= +params['id'];
      this.loadOffreDetails();
    });
      
    this.forminput = this.fb.group({
      nom:['',Validators.required],
      description:['',Validators.required],
      dateexpiration:['',Validators.required],
      selectedCategory:[''],
      image:[null],
    });
  }

   

  loadOffreDetails() {
    this.offreser.getOffreById(this.offreId).subscribe(
      (offr) => {
        // Populate form controls with offre details
        this.forminput.patchValue({
          nom: offr.nom,
          description: offr.description,
          dateexpiration: offr.dateexpiration,
          selectedCategory:offr.selectedCategory,
          image:offr.image
        });
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de l\'offre', error);
      }
    );
  }
  
    updateOffre() {
      const updatedOffreData = this.forminput.value;
      this.offreser.updateOffre(this.offreId, updatedOffreData).subscribe(
        (updatedOffre) => {
          console.log('Offre mise à jour avec succès', updatedOffre);
          this.router.navigate(['/body/gestionoffre']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'offre', error);
        }
      );
    

}
  }
