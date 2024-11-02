import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { Convert as memberCvt, Member } from '../../model/member.model';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { MatDialog } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-member',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HttpClientModule,AdminComponent,HttpClientModule,MatTableModule,MatCardModule,CommonModule],
  templateUrl: './view-member.component.html',
  styleUrl: './view-member.component.scss'
})
export class ViewMemberComponent{
  members: Member[] = [];

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.dataService.apiEndpoint + '/data/member')
      .subscribe(data => {
        // แปลง array ของ JSON object เป็น array ของ Member objects
        this.members = data.map(item => memberCvt.toMember(JSON.stringify(item)));
        console.log(this.members);
      });
  }
}
