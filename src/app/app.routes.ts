import { Routes } from '@angular/router';
import { MovieComponent } from './page/movie/movie.component';
import { BlackadamComponent } from './page/blackadam/blackadam.component';
import { BlackpantherComponent } from './page/blackpanther/blackpanther.component';
import { MainComponent } from './page/main/main.component';
import { NotfountComponent } from './page/notfount/notfount.component';


export const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'movie',component:MovieComponent,children:[
        {path:'blackadam',component:BlackadamComponent},
        {path:'blackpanther',component:BlackpantherComponent}
    ]},
    {path:'**',component:NotfountComponent}
];
