import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as reserCvt, Reser } from '../../model/reser.model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, HttpClientModule,AdminComponent,MatTableModule,MatCardModule,FormsModule, MatDialogModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
  resers: Array<Reser>;
  selected: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.resers = dataService.resers
  }

  ngOnInit(): void {
    this.http.get<any[]>(this.dataService.apiEndpoint + '/admin/show_bookings_booth')
      .subscribe(data => {
        this.resers = reserCvt.toReser(JSON.stringify(data));
        console.log(this.resers);
      });
  }
}
