import { Validators,FormBuilder, FormGroup, } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CandidatserviceService } from '../candidatservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  forminput!: FormGroup;
  formData: any;

  constructor(private fb: FormBuilder, private autoService: AutoService, private router: Router,private candidatserv:CandidatserviceService) {}

  ngOnInit(): void {
    this.forminput = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required],
    });
  }

   onLogin(): void {
    if (this.forminput.valid) {
      const formData = this.forminput.value;

      this.autoService.loginCandidat(formData).subscribe(
        (response: any) => {
          this.candidatserv.setUserFullName(formData.prenom);
          // Vérifiez le message de la réponse
          if (response.message === 'Vous êtes connecté') {
          
            // Authentification réussie, affichez une fenêtre modale de succès
            // Utilisez une bibliothèque comme SweetAlert pour cela
            Swal.fire('Succès', 'Vous êtes connecté', 'success');
            // Redirigez ensuite vers une autre page
            this.router.navigateByUrl('/accueil/welcomepage');
          } else {
            // Authentification échouée, affichez une fenêtre modale d'erreur
            Swal.fire('Erreur', 'Échec de la connexion', 'error');
          }
        },
        (error) => {
          console.error('Échec de la connexion:', error);
        }
      );
    }
  } 

 /*  onLogin(): void {
    if (this.forminput.valid) {
      const formData = this.forminput.value;
      const userType = formData.userType; // Récupérer le type d'utilisateur sélectionné
      
      if (userType === 'candidat') {
        this.autoService.loginCandidat(formData).subscribe(
          (response: any) => {
            // Gérer la réponse pour le candidat
          },
          (error) => {
            console.error('Échec de la connexion candidat:', error);
          }
        );
      } else if (userType === 'employeur') {
        this.autoService.loginEmployeur(formData.email, formData.mdp).subscribe(
          (response: any) => {
            // Gérer la réponse pour l'employeur
          },
          (error) => {
            console.error('Échec de la connexion employeur:', error);
          }
        );
      } else if (userType === 'admin') {
        this.autoService.loginAdmin(formData.email, formData.mdp).subscribe(
          (response: any) => {
            // Gérer la réponse pour l'admin
          },
          (error) => {
            console.error('Échec de la connexion admin:', error);
          }
        );
      }
    }
  } */
  
}