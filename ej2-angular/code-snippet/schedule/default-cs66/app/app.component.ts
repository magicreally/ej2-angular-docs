

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, MonthService, AgendaService, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { fifaEventsData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, MonthService, AgendaService, TimelineViewsService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" > <e-views> <e-view option="Day"></e-view> <e-view option="Week"></e-view> <e-view option="TimelineWeek"></e-view> <e-view option="Month"></e-view> <e-view option="Agenda"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    public eventSettings: EventSettingsModel = {
        dataSource: [{
            Id: 1,
            Subject: 'Paris',
            StartTime: new Date(2018, 1, 15, 9, 0),
            EndTime: new Date(2018, 1, 15, 10, 0)
        }]
    };
    public selectedDate: Date = new Date(2018, 1, 15);
}


