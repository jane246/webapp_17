import { Routes } from '@angular/router';
import {MemberComponent } from './page_member/member/member.component';
import { AdminComponent } from './page_admin/admin/admin.component';
import { GeneralComponent } from './page_general/general/general.component';
import { ZoneComponent as ZoneGeneralComponent} from './page_general/zone/zone.component';
import { MainComponent } from './page/main/main.component';
import { NotfountComponent } from './page/notfount/notfount.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'page_member/member', component: MemberComponent },
    { path: 'page_admin/admin', component: AdminComponent },
    { path: 'page_general/general', component: GeneralComponent},
    { path: 'page_general/zone', component: ZoneGeneralComponent},
    { path: '**', component: NotfountComponent }
];
