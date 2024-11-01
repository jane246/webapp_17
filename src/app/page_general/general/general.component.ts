import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../component/general/header/header.component';
import { FooterComponent } from '../../component/general/footer/footer.component';
import { ZoneComponent } from '../zone/zone.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ZoneComponent,RouterModule],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {

}