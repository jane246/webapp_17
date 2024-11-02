import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../component/general/header/header.component';
import { FooterComponent } from '../../component/general/footer/footer.component';
import { Convert as memberCvt, Member } from '../../model/member.model';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-view-member',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, HttpClientModule,AdminComponent],
  templateUrl: './view-member.component.html',
  styleUrl: './view-member.component.scss'
})
export class ViewMemberComponent {
  
}
