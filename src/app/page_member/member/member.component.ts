import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../component/member/header/header.component';
import { FooterComponent } from '../../component/member/footer/footer.component';
import { LoginComponent as MemberLoginComponent } from '../../page_member/login/login.component';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MemberLoginComponent,RouterModule],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {

}
