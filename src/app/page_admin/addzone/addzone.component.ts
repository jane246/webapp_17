import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Convert as zoneCvt, Zone } from '../../model/zone.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addzone',
  standalone: true,
  imports: [CommonModule,MatDialogModule,HttpClientModule,FormsModule],
  templateUrl: './addzone.component.html',
  styleUrl: './addzone.component.scss'
})
export class AddzoneComponent {
  zones: Array<Zone>;
  response: any;

  constructor(private data: DataService, private http: HttpClient, private dialogRef: MatDialogRef<AddzoneComponent>) {
    this.zones = data.zone;
    console.log(this.zones);
  }

  addNew(name_zone: string, num_booth: string, id_event: string,total_booth: string) {
    let jsonObj = {
      name_zone: name_zone,
      num_booth: num_booth,
      id_event: id_event,
      total_booth:total_booth
    };
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.data.apiEndpoint + "/admin/add_zone", jsonString, { observe: 'response' }).subscribe((response) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
