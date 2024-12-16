import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint='https://wag17.bowlab.net';
  // apiEndpoint='http://localhost';
  selected: any;
  zone: any;
  events: any;
  booths: any;
  resers:any;
  nopaids:any;
  paids:any;
  waits:any;
  // selectedEvent: import("d:/temp/angular-lab/webapp_17/src/app/model/event.model").Event;
  constructor() { }
}

