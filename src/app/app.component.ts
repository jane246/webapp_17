import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatButtonModule} from '@angular/material/button';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BlackadamComponent } from './page/blackadam/blackadam.component';
import { BlackpantherComponent } from './page/blackpanther/blackpanther.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    // MatToolbarModule,
    // MatButtonModule,
    // MatMenuModule,
    // MatIconModule,
    HeaderComponent,
    FooterComponent,
    BlackadamComponent,
    BlackpantherComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-component';
}
