import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint='https://wag17.bowlab.net';
  constructor() { }
}
