import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Convert as EventCvt, Event } from '../../model/event.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addevent',
  standalone: true,
  imports: [CommonModule, MatDialogModule, HttpClientModule,FormsModule], // Add HttpClientModule here
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss'] // Fix styleUrl to styleUrls
})
export class AddeventComponent {
  events: Array<Event>;
  response: any;

  constructor(private data: DataService, private http: HttpClient, private dialogRef: MatDialogRef<AddeventComponent>) {
    this.events = data.events;
    console.log(this.events);
  }

  addNew(name_event: string, date_start: string, date_end: string) {
    let jsonObj = {
      name_event: name_event,
      date_start: date_start,
      date_end: date_end
    };
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.data.apiEndpoint + "/admin/event_add", jsonString, { observe: 'response' }).subscribe((response) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
