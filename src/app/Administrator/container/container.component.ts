import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  
  donnees: number[] = [80, 60, 40, 70, 90];
  employeurs: any[] = []; // Assurez-vous que cette propriété contient les données des employeurs

  constructor(private userservice: UserServiceService) {} // Injectez votre service ici

  ngOnInit(): void {
    this.userservice.getAllEmployeurs().subscribe((data: any[]) => {
      this.employeurs = data; // Chargez les données des employeurs depuis votre service
    });
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
