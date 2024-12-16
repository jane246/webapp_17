import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as waitCvt, Wait } from '../../model/wait.model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wait',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, HttpClientModule,AdminComponent,MatTableModule,MatCardModule,FormsModule, MatDialogModule],
  templateUrl: './wait.component.html',
  styleUrl: './wait.component.scss'
})
export class WaitComponent {
  waits: Array<Wait>;
  selected: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.waits = dataService.waits
  }

  ngOnInit(): void {
    this.http.get<any[]>(this.dataService.apiEndpoint + '/admin/show_pending_booth')
      .subscribe(data => {
        this.waits = waitCvt.toWait(JSON.stringify(data));
        console.log(this.waits);
      });
  }
}
