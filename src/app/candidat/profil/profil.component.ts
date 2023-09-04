import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidatserviceService } from 'src/app/candidatservice.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profileForm!: FormGroup; 
  nom: string = '';
  prenom: string = ''; 
  domaine: string ='';
  email: string='';
  candidatId: number = 11;
  constructor(private candidatService: CandidatserviceService,private fb: FormBuilder){}

  ngOnInit() {
    this.profileForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      cin: [''],
      numtel: [''],
      domaine: ['']
    });

    //this.fetchProfileData();
  }
 /*  updateProfile() {
    // Get the updated profile data from the form
    const updatedProfileData = {
      fullName: this.profileForm.value.fullName,
      prenom: this.profileForm.value.prenom,
      adresse: this.profileForm.value.adresse,
      cin: this.profileForm.value.cin,
      numtel: this.profileForm.value.numtel,
      domaine: this.profileForm.value.domaine,
      // ... Other form fields
    };

    // Call the service to update the profile
    this.candidatService.updateProfile(updatedProfileData).subscribe(
      updatedCandidat => {
        console.log('Profile updated successfully:', updatedCandidat);
        // You can perform any success-related actions here
      },
      error => {
        console.error('Failed to update profile:', error);
        // Handle the error
      }
    );
  } */


  /* private fetchProfileData() {
    this.candidatService.getCandidatById(this.candidatId).subscribe(
      candidatData => {
        this.profileForm.patchValue({
          nom: candidatData.nom,
          prenom: candidatData.prenom,
          email: candidatData.email,
          cin: candidatData.cin,
          numtel: candidatData.numtel,
          domaine: candidatData.domaine
        });
      },
      error => {
        console.error('Error fetching candidat data', error);
      }
    );
  } */

}
