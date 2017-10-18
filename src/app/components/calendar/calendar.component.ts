import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
  Injectable,
  OnInit
} from '@angular/core';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { CalendarEvent, CalendarMonthViewDay, CalendarEventAction } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss', '../../../../node_modules/angular-calendar/dist/css/angular-calendar.css']
})


export class CalendarComponent implements OnInit {
  constructor(private modal: NgbModal) {}

  titleEditorEnabled: boolean;
  editableTitle:String = 'Testing';
  ngOnInit() {
    this.titleEditorEnabled = false;
     
  }
  view: string = 'month';
  viewDate: Date = new Date();

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: this.colors.red,
      actions: this.actions
    }
  ];  

  clickedDate;

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (day.date.getDate() % 2 === 1 && day.inMonth) {
        day.cssClass = 'odd-cell';
      }
    });
  }
 

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  // Edit Event    
  titleEnableEditor() {
    this.titleEditorEnabled = true;
  };
  
  disableEditor() {
    this.titleEditorEnabled = false;
  };
  
  save() {
    this.disableEditor();
  };
}
