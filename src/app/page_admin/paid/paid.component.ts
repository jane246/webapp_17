import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as paidCvt, Paid } from '../../model/paid.model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paid',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, HttpClientModule,AdminComponent,MatTableModule,MatCardModule,FormsModule, MatDialogModule],
  templateUrl: './paid.component.html',
  styleUrl: './paid.component.scss'
})
export class PaidComponent {
  paids: Array<Paid>;
  selected: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.paids = dataService.paids
  }

  ngOnInit(): void {
    this.http.get<any[]>(this.dataService.apiEndpoint + '/admin/show_paid_users')
      .subscribe(data => {
        this.paids = paidCvt.toPaid(JSON.stringify(data));
        console.log(this.paids);
      });
  }
}
