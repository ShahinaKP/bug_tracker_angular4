import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './components/login/login.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { CalendarComponent }   from './components/calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: 'bug_tracker_angular4/dist/login', pathMatch: 'full' },
  { path: 'bug_tracker_angular4/distlogin',  component: LoginComponent },
  { path: 'bug_tracker_angular4/dist/dashboard',  component: DashboardComponent },
  { path: 'bug_tracker_angular4/dist/calendar',  component: CalendarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}