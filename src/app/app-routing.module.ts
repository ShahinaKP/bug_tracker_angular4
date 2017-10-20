import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './components/login/login.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { CalendarComponent }   from './components/calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'prefix' },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'calendar',  component: CalendarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}