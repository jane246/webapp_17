import { Routes } from '@angular/router';
import {MemberComponent } from './page_member/member/member.component';
import { AdminComponent } from './page_admin/admin/admin.component';
import { GeneralComponent } from './page_general/general/general.component';
import { MainComponent } from './page/main/main.component';
import { NotfountComponent } from './page/notfount/notfount.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'page_member/member', component: MemberComponent },
    { path: 'page_admin/admin', component: AdminComponent },
    { path: 'page_general/general', component: GeneralComponent },
    { path: '**', component: NotfountComponent }
];
