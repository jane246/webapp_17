import { Routes } from '@angular/router';
import {MemberComponent } from './page_member/member/member.component';
import { AdminComponent } from './page_admin/admin/admin.component';
import { GeneralComponent } from './page_general/general/general.component';
import { ZoneComponent as ZoneGeneralComponent} from './page_general/zone/zone.component';
import { MainComponent } from './page/main/main.component';
import { NotfountComponent } from './page/notfount/notfount.component';
import { BoothComponent as BoothGeneralComponent } from './page_general/booth/booth.component';
import { LoginComponent as LoginMemberComponent } from './page_member/login/login.component';
import { LoginComponent as LoginAdminComponent } from './page_admin/login/login.component';
import { ViewMemberComponent } from './page_admin/view-member/view-member.component';
import { CreateMemberComponent} from './page_general/create-member/create-member.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'page_member/member', component: MemberComponent },
    { path: 'page_member/login', component: LoginMemberComponent },

    { path: 'page_admin/admin', component: AdminComponent },
    { path: 'page_admin/login', component: LoginAdminComponent },
    { path: 'page_admin/view-member', component: ViewMemberComponent },

    { path: 'page_general/general', component: GeneralComponent},
    { path: 'page_general/zone', component: ZoneGeneralComponent},
    { path: 'page_general/booth', component: BoothGeneralComponent},
    { path: '**', component: NotfountComponent }
];
