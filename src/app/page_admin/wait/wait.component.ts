import { Component } from '@angular/core';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { HeaderComponent } from '../../component/admin/header/header.component';

@Component({
  selector: 'app-wait',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './wait.component.html',
  styleUrl: './wait.component.scss'
})
export class WaitComponent {

}
