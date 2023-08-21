import { AccueilComponent } from './candidat/accueil/accueil.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './candidat/profil/profil.component';
import { OffreEmploiComponent } from './candidat/offre-emploi/offre-emploi.component';
import { ConseilComponent } from './conseil/conseil.component';
import { CandidatureComponent } from './candidat/candidature/candidature.component';
import { BodyComponent } from './Employeur/body/body.component';
import { GestionoffreComponent } from './Employeur/gestionoffre/gestionoffre.component';
import { CalendrierComponent } from './Employeur/calendrier/calendrier.component';
import { TraitementCandidatComponent } from './Employeur/traitement-candidat/traitement-candidat.component';
import { ModifierOfferComponent } from './Employeur/modifier-offer/modifier-offer.component';






const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  { path: "content", component: ContentComponent },
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"conseil",component:ConseilComponent},
  {
    path: "accueil",
    component: AccueilComponent,
    children: [
      { path: "profil", component: ProfilComponent },
      { path: "offreemploi", component: OffreEmploiComponent },
      {path: "candidature", component:CandidatureComponent}
    
  ]
}, 
{path:"body",component:BodyComponent,
children:[
  {path:"gestionoffre",component:GestionoffreComponent},
  {path:"calendrier",component:CalendrierComponent},
  {path:"traitement",component:TraitementCandidatComponent},
  {path: 'body/gestionoffre/modifier-offre/:id',component:ModifierOfferComponent}
]
}
 

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
