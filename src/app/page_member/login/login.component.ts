import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { LoginComponent as MemberLoginComponent } from '../../page_member/login/login.component';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as member} from '../../model/member.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MemberLoginComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  member=Array<member>();
  constructor(private dataService:DataService, private http:HttpClient){
    http.get(dataService.apiEndpoint+'/member').subscribe((data:any)=>{
      this.member=member.toMember(JSON.stringify(data));
      console.log(this.member);
    })
  }
}
