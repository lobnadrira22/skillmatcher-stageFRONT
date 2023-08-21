import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-traitement-candidat',
  templateUrl: './traitement-candidat.component.html',
  styleUrls: ['./traitement-candidat.component.css']
})
export class TraitementCandidatComponent implements OnInit{
  ngOnInit() {
    console.log('Life Cyle Hook with spontaneous response.');
  }
  tinyAlert() {
    Swal.fire('Hey there!');
  }
  successNotification() {
    Swal.fire('candidate accepted', 'ce candidat est accepté', 'success');
  }
  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'le candidat va être supprimé de la liste ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Le candidat a été supprimé avec succès.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Le candidat n\'a pas encore été supprimé.', 'error');
      }
    });
  }

}

