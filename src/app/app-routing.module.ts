import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuardService} from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo : 'data', pathMatch: 'full'},
  { path: 'data', component: LoginComponent },
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



