import { Component } from '@angular/core';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { HeaderComponent } from '../../component/admin/header/header.component';

@Component({
  selector: 'app-nopaid',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './nopaid.component.html',
  styleUrl: './nopaid.component.scss'
})
export class NopaidComponent {

}
