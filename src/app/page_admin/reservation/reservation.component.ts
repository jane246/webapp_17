import { Component } from '@angular/core';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { HeaderComponent } from '../../component/admin/header/header.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {

}
