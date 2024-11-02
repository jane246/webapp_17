import { Component } from '@angular/core';
import { FooterComponent } from '../../component/admin/footer/footer.component';
import { HeaderComponent } from '../../component/admin/header/header.component';

@Component({
  selector: 'app-paid',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './paid.component.html',
  styleUrl: './paid.component.scss'
})
export class PaidComponent {

}
