import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Convert, Zone } from '../../model/zone.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [MatCardModule,HttpClientModule,CommonModule],
  templateUrl: './zone.component.html',
  styleUrl: './zone.component.scss'
})
export class ZoneComponent {
  zones = Array<Zone>(); // กำหนดค่าเริ่มต้นเป็นวัตถุว่าง

  constructor(private dataService: DataService, private http: HttpClient) {
    this.http.get(this.dataService.apiEndpoint + '/general/show_zone').subscribe((data: any) => {
      this.zones = Convert.toZone(JSON.stringify(data));
      console.log(this.zones);
    });
  }
}

