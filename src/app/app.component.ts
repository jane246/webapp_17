import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/admin/header/header.component';
import { FooterComponent } from './component/admin/footer/footer.component';
import { LoginComponent as MemberLoginComponent } from './page_member/login/login.component';
import { LoginComponent as AdminLoginComponent } from './page_admin/login/login.component';
import { ZoneComponent as GeneralZoneComponent } from './page_general/zone/zone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MemberLoginComponent,
    AdminLoginComponent,
    GeneralZoneComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-component';
}
