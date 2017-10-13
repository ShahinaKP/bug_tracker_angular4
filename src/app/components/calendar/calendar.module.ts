import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from './demo-utils/module';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    DemoUtilsModule
  ],
  declarations: [
    CalendarComponent
  ]
})
export class MyCalendarModule {}