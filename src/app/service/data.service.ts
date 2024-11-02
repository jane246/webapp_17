import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint='https://wag17.bowlab.net';
  selected: any;
  zone: any;
  events: any;
  // selectedEvent: import("d:/temp/angular-lab/webapp_17/src/app/model/event.model").Event;
  constructor() { }
}

