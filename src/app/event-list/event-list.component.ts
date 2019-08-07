import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList;
  
  constructor(service: EventsService) {
    
    this.eventList = service.getEvents();
  }

  ngOnInit() {

  }

}
