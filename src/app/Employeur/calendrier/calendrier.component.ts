import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendrierService } from 'src/app/calendrier.service';
import { EventInput } from '@fullcalendar/core';
import tippy ,  { Instance } from 'tippy.js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit{
  Events: any[] = [];
  private tippyInstances: Instance[] = [];
  calendarEvents: EventInput[] = [];
  calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin], // Assurez-vous que dayGridPlugin est inclus ici
    initialView: 'dayGridMonth',
    weekends: true,
    events: this.calendarEvents,
    eventDidMount: this.onEventDidMount.bind(this), // Tooltip au survol de la souris
    eventClick: this.onEventClick.bind(this) // Affichage au clic sur l'événement
  };
  
  selectedEventInfo: any = {};
  newEventDate: string = '';
  newEventDescription: string = '';
  constructor(private calendrierService: CalendrierService) {}
 

  addEvent() {
    const newEvent = {
      dateEntretien: this.newEventDate,
      description: this.newEventDescription
    };
  
    this.calendrierService.addCalendrier(newEvent)
      .subscribe((res: any) => {
        // Rafraîchir les événements après l'ajout
        this.calendrierService.getAllCalendriers()
          .subscribe((res: any[]) => {
            this.Events = res;
            this.calendarEvents = res.map(event => ({
              title: event.description,
              start: event.dateEntretien
            }));
            this.calendarOptions.events = this.calendarEvents;
          });
  
        // Réinitialiser les valeurs du formulaire
        this.newEventDate = '';
        this.newEventDescription = '';
      });
    }

  ngOnInit() {
    this.calendrierService.getAllCalendriers().subscribe((res: any[]) => {
      this.calendarEvents = res.map(event => ({
        title: event.description,
        start: event.dateEntretien
      }));
      this.calendarOptions.events = this.calendarEvents;
    });
  }

  onEventDidMount(info: any) {
    const tooltip = tippy(info.el, {
      content: info.event.title + '<br>' + info.event.start
    })[0]; // Prenez la première instance du tableau retourné par tippy
  
    this.tippyInstances.push(tooltip); // Stockez l'instance pour la gestion ultérieure
  }

  // Afficher les détails de l'événement au clic
  onEventClick(info: any) {
    this.selectedEventInfo = info.event;
    console.log(this.selectedEventInfo);
   

    // Vous pouvez personnaliser l'affichage des détails de l'événement dans votre interface utilisateur ici
  }


  

  // ... Autres méthodes ...




}

  
    



