import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AsidebarComponent } from './candidat/asidebar/asidebar.component';
import { ProfilComponent } from './candidat/profil/profil.component';
import { NavbarComponent } from './candidat/navbar/navbar.component';
import { AccueilComponent } from './candidat/accueil/accueil.component';
import { OffreEmploiComponent } from './candidat/offre-emploi/offre-emploi.component';
import { ConseilComponent } from './conseil/conseil.component';

import { CandidatureComponent } from './candidat/candidature/candidature.component';
import { TopbarComponent } from './Employeur/topbar/topbar.component';
import { LeftsideComponent } from './Employeur/leftside/leftside.component';
import { GestionoffreComponent } from './Employeur/gestionoffre/gestionoffre.component';
import { BodyComponent } from './Employeur/body/body.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { CalendrierComponent } from './Employeur/calendrier/calendrier.component';
import { TraitementCandidatComponent } from './Employeur/traitement-candidat/traitement-candidat.component';
import { ModifierOfferComponent } from './Employeur/modifier-offer/modifier-offer.component';
import { HautbarComponent } from './Administrator/hautbar/hautbar.component';
import { DashboardComponent } from './Administrator/dashboard/dashboard.component';
import { ContainerComponent } from './Administrator/container/container.component';
import { GestionUsersComponent } from './Administrator/gestion-users/gestion-users.component';
import { WelcomepageComponent } from './candidat/welcomepage/welcomepage.component';
import { BottomComponent } from './candidat/bottom/bottom.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    AsidebarComponent,
    ProfilComponent,
    NavbarComponent,
    AccueilComponent,
    OffreEmploiComponent,
    ConseilComponent,
 
    CandidatureComponent,
      TopbarComponent,
      LeftsideComponent,
      GestionoffreComponent,
      BodyComponent,
      CalendrierComponent,
      TraitementCandidatComponent,
      ModifierOfferComponent,
      HautbarComponent,
      DashboardComponent,
      ContainerComponent,
      GestionUsersComponent,
      WelcomepageComponent,
      BottomComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
