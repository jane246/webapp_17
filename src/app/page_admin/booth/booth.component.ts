import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/admin/header/header.component';
import { FooterComponent } from '../../component/admin/footer/footer.component';

@Component({
  selector: 'app-booth',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './booth.component.html',
  styleUrl: './booth.component.scss'
})
export class BoothComponent {

}
