import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as nopaidCvt, Notpaid } from '../../model/notpaid.model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nopaid',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, HttpClientModule,AdminComponent,MatTableModule,MatCardModule,FormsModule, MatDialogModule],
  templateUrl: './nopaid.component.html',
  styleUrl: './nopaid.component.scss'
})
export class NopaidComponent {
  nopaids: Array<Notpaid>;
  selected: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.nopaids = dataService.nopaids
  }

  ngOnInit(): void {
    this.http.get<any[]>(this.dataService.apiEndpoint + '/admin/show_unpaid_users')
      .subscribe(data => {
        this.nopaids = nopaidCvt.toNotpaid(JSON.stringify(data));
        console.log(this.nopaids);
      });
  }
}
