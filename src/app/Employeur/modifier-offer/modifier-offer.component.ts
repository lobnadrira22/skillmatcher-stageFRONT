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
  
  id!:number;
  forminput!: FormGroup;
  offre: any={};
  
  constructor(private activateroute: ActivatedRoute,
    private fb:FormBuilder,
    private offreser: OffreEmploiService,
    private router: Router,){

  }
  ngOnInit(): void {
    this.activateroute.params.subscribe(
      (param)=>{
        this.id=param['id']
      }
    )
    this.forminput = this.fb.group({
      'nom': ['', Validators.required],
      'description': ['', Validators.required],
      'dateexpiration': ['', Validators.required],
      'categorieoffre': [''],
      'image': [null]
    });
this.offreser.getOffreById(this.id).subscribe(
  (offre:any)=> {
    this.forminput.controls['nom'].setValue(offre.nom)
    this.forminput.controls['description'].setValue(offre.description)
    this.forminput.controls['dateexpiration'].setValue(offre.dateexpiration)
    this.forminput.controls['categorieoffre'].setValue(offre.categorieoffre)
    this.forminput.controls['image'].setValue(offre.image)

  }
)
    
  }

  
  
    updateOffre() {
      const offre = this.offre;
      offre.nom=this.forminput.controls['nom'].value
      offre.categorieoffre = this.forminput.controls['categorieoffre'].value
      offre.description=this.forminput.controls['description'].value
      offre.dateexpiration=this.forminput.controls['dateexpiration'].value
      offre.image=this.forminput.controls['image'].value
      this.offreser.updateOffre(this.id,offre).subscribe(
        (off)=>{
          console.log(off.nom)
        }
      )
    

}
  }
