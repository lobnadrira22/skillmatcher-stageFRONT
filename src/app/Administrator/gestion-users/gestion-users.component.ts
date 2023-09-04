import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from './../../user-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {
  employeurs: any[] = []; 
  userForm!: FormGroup;
  emailErrorMessage: string | undefined;
  employeurDetails: any = {};

  
  constructor(private userservice: UserServiceService,private formBuilder: FormBuilder,private router: Router) {}
  ngOnInit(): void {
    this.userservice.getAllEmployeurs().subscribe(data => {
      this.employeurs = data;
    });
    // Initialisez le formulaire
    this.userForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      nomentreprise: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    });  
  }

  ajouterEmployeur() {
    if (this.userForm.invalid) {
      console.log('Form is invalid.');
      return;
    }
  
    const nouvelEmployeur = this.userForm.value;
  
    // Encrypt the password using bcrypt
    const saltRounds = 10; // Number of salt rounds
    const hashedPassword = bcrypt.hashSync(nouvelEmployeur.mdp, saltRounds);
    nouvelEmployeur.mdp = hashedPassword; // Replace password with hashed password
  
    this.userservice.ajouterEmployeur(nouvelEmployeur).subscribe(
      (response) => {
        console.log('Employeur ajouté avec succès :', response);
        this.clearForm();
       
        Swal.fire({
          icon: 'success',
          title: 'Employeur Added Successfully',
          showConfirmButton: false,
          timer: 1500 // Show for 1.5 seconds
      
        });
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'employeur :', error);
      }
    );
  }

  private clearForm() {
    this.userForm.reset();
  }

 
  supprimerEmployeur(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer ces données!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userservice.supprimerEmployeur(id).subscribe(
          () => {
            Swal.fire('Supprimé!', 'L\'employeur a été supprimé.', 'success');
            this.employeurs = this.employeurs.filter(emp => emp.idEmployeur !== id);
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'employeur :', error);
          }
        );
      }
    });
  }
  
  viewEmployeurDetails(Id: number) {
    this.userservice.getEmployeurById(Id).subscribe(
        (employeur: any) => {
            this.employeurDetails = employeur; // Mettez à jour les détails de l'employeur
        },
        (error) => {
            console.error('Erreur lors de la récupération des détails de l\'employeur :', error);
        }
    );
}
countEntreprisesParNom() {
  const entreprisesMap = new Map<string, number>();
  for (const employeur of this.employeurs) {
    const nomEntreprise = employeur.nomentreprise;
    if (entreprisesMap.has(nomEntreprise)) {
      entreprisesMap.set(nomEntreprise, entreprisesMap.get(nomEntreprise)! + 1);
    } else {
      entreprisesMap.set(nomEntreprise, 1);
    }
  }
  return Array.from(entreprisesMap.entries());
}



}
  


