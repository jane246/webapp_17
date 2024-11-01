import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../component/member/header/header.component';
import { FooterComponent } from '../../component/member/footer/footer.component';
import { LoginComponent as MemberLoginComponent } from '../../page_member/login/login.component';
import { Convert as memberCvt, Member } from '../../model/member.model';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MemberLoginComponent,RouterModule],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {
  constructor() {
    let rawUser: any = sessionStorage.getItem('user');
    if (rawUser != null) {
      let user: any =  memberCvt.toMember(rawUser)
      console.log(user.id_member);
    }
  }
}