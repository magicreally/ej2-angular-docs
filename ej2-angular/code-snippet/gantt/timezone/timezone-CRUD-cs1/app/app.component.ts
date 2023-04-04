

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" #gantt [dataSource]="data" [taskFields]="taskSettings" [dayWorkingTime]="dayWorkingTime" (actionComplete)="actionComplete()" [timelineSettings]="timelineSettings" timezone="America/New_York" durationUnit="Hour" dateFormat="hh:mm a" height="450px" [includeWeekend]="true">`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    public ganttObj: GanttComponent;
    public data: object[];
    public taskSettings: object;
    public timelineSettings: object;
    public timezoneValue: string = 'UTC';
    public dayWorkingTime: object[];
    public editSettings: object;
    public ngOnInit(): void {
        this.data = [
          {
            taskID: 1,
            taskName: 'Project Schedule',
            startDate: new Date('02/04/2019 08:00'),
            endDate: new Date('03/10/2019')
          },
          {
            taskID: 2,
            taskName: 'Planning',
            startDate: new Date('02/04/2019 08:00'),
            endDate: new Date('02/10/2019'),
            parentID: 1
          },
          {
            taskID: 3,
            taskName: 'Plan timeline',
            startDate: new Date('02/04/2019 08:00'),
            endDate: new Date('02/10/2019'),
            duration: 6,
            progress: '60',
            parentID: 2
          },
          {
            taskID: 4,
            taskName: 'Plan budget',
            startDate: new Date('02/04/2019 08:00'),
            endDate: new Date('02/10/2019'),
            duration: 6,
            progress: '90',
            parentID: 2
          },
          {
            taskID: 5,
            taskName: 'Allocate resources',
            startDate: new Date('02/04/2019 08:00'),
            endDate: new Date('02/10/2019'),
            duration: 6,
            progress: '75',
            parentID: 2
          },
          {
            taskID: 6,
            taskName: 'Planning complete',
            startDate: new Date('02/06/2019 08:00'),
            endDate: new Date('02/10/2019'),
            duration: 0,
            predecessor: '3FS,4FS,5FS',
            parentID: 2
          },
          {
            taskID: 7,
            taskName: 'Design',
            startDate: new Date('02/13/2019 08:00'),
            endDate: new Date('02/17/2019 08:00'),
            parentID: 1
          },
          {
            taskID: 8,
            taskName: 'Software Specification',
            startDate: new Date('02/13/2019 08:00'),
            endDate: new Date('02/15/2019'),
            duration: 3,
            progress: '60',
            predecessor: '6FS',
            parentID: 7
          },
          {
            taskID: 9,
            taskName: 'Develop prototype',
            startDate: new Date('02/13/2019 08:00'),
            endDate: new Date('02/15/2019'),
            duration: 3,
            progress: '100',
            predecessor: '6FS',
            parentID: 7
          },
          {
            taskID: 10,
            taskName: 'Get approval from customer',
            startDate: new Date('02/16/2019 08:00'),
            endDate: new Date('02/17/2019 08:00'),
            duration: 2,
            progress: '100',
            predecessor: '9FS',
            parentID: 7
          },
          {
            taskID: 11,
            taskName: 'Design complete',
            startDate: new Date('02/17/2019 08:00'),
            endDate: new Date('02/17/2019 08:00'),
            duration: 0,
            predecessor: '10FS',
            parentID: 7
          }
        ];
        this.taskSettings = {
            id: 'taskID',
            name: 'taskName',
            startDate: 'startDate',
            duration: 'duration',
            progress: 'progress',
            dependency: 'predecessor',
            parentID: 'parentID'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.timelineSettings = {
            timelineUnitSize: 65,
            topTier: {
                unit: 'Day',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Hour',
                format: 'hh:mm a'
            }
        };
        this.dayWorkingTime = [{ from: 0, to: 24 }];
    }
    actionComplete(args: any) {
      if(args.action == "TaskbarEditing") {
        console.log(args.data.ganttProperties.endDate);
      }
    }
}


