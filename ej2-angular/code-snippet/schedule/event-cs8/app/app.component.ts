

import { Component, ViewChild } from '@angular/core';
import { scheduleData } from './datasource';
import {
    EventSettingsModel, DayService, WeekService, WorkWeekService,
    MonthService, AgendaService, View, EventRenderedArgs, ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' #scheduleObj height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" (eventRendered)="applyCategoryColor($event)"></ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };
    applyCategoryColor(args: EventRenderedArgs): void {
        let categoryColor: string = args.data.CategoryColor as string;
        if (!args.element || !categoryColor) {
            return;
        }
        if (this.scheduleObj.currentView === 'Agenda') {
            (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
        } else {
            args.element.style.backgroundColor = categoryColor;
        }
    }
}


