import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Convert as zoneCvt, Zone } from '../../model/zone.model';
import { CommonModule } from '@angular/common';
import { BoothComponent } from '../booth/booth.component';
import { HeaderComponent } from '../../component/general/header/header.component';
import { FooterComponent } from '../../component/general/footer/footer.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [MatCardModule,HttpClientModule,CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './zone.component.html',
  styleUrl: './zone.component.scss'
})
export class ZoneComponent {
  zones = Array<Zone>(); // กำหนดค่าเริ่มต้นเป็นวัตถุว่าง
  selected: any;
  zone: any;

  constructor(private dataService: DataService, private http: HttpClient, private dialog: MatDialog) {
    this.http.get(this.dataService.apiEndpoint + '/general/show_zone').subscribe((data: any) => {
      this.zones = zoneCvt.toZone(JSON.stringify(data));
      console.log(this.zones);
    });
  }
  booth(zone: Zone): void {
    console.log(zone)
    console.log("Element clicked.")
    this.selected = zone; // เก็บ zone ที่เลือก
    this.dataService.selected = this.selected; // เก็บค่า selected ใน DataService
    this.dialog.open(BoothComponent, {
      data: { zone: this.selected }, // ส่งข้อมูล zone เข้าไปใน dialog
      minWidth: '300px',
    });
  }
}
