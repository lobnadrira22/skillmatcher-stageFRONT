import { CandidatserviceService } from './../candidatservice.service';
import { AutoService } from './../auto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  forminput: FormGroup;
  emailErrorMessage: string = '';


  constructor(private fb: FormBuilder, private autoservice: AutoService,private router: Router, private candidatserv:CandidatserviceService) {
    this.forminput = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.forminput.valid) {
      const formData = this.forminput.value;

      this.autoservice.registerCandidat(formData).subscribe(
        response => {
          console.log('Registration successful!', response);
          this.candidatserv.setUserFullName(formData.prenom);
          Swal.fire({

            icon: 'success',
            title: 'Inscription réussie !',
            text: 'Votre inscription a été enregistrée avec succès.',
          }).then(() => {
            // Redirect to the '/accueil' route
            this.router.navigate(['/accueil/welcomepage']);
          });
        },
        error => {
          if (error.error === "Cet email est déjà utilisé") {
            this.emailErrorMessage = "Cet email est déjà utilisé";
          } else {
            console.error('Registration failed!', error);
            // Handle registration error here
          }
        }
      );
    }
  }

  onLogin(): void {
    if (this.forminput.valid) {
      const formData = this.forminput.value;

      this.autoservice.loginCandidat(formData).subscribe(
        (response: any) => {
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


}
