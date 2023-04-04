


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { Gantt, Toolbar, PdfExport, Selection, PdfQueryTimelineCellInfoEventArgs } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { editingData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [toolbar]="toolbar" (pdfQueryCellInfo)="pdfQueryCellInfo($event)"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data: object[];
    public taskSettings: object;
    public toolbar: ToolbarItem[];
    @ViewChild('gantt', {static: true})
    public ganttChart: GanttComponent;
    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.columns =  [
            { field: 'TaskID', headerText:  'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText:  'Task Name', width: '150', visible: false },
            { field: 'StartDate', headerText:  'StartDate', width: '150' },
            { field: 'Duration', headerText:  'Duration', width: '150' },
            { field: 'Progress', headerText:  'Progress', width: '150' }
        ];
        this.toolbar =  ['PdfExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_pdfexport') {
            this.ganttChart.pdfExport();
        }
};

    public pdfQueryCellInfo(args): void {
    if(args.column.field == 'Progress'){
        if(args.value < 50) {
            args.style = {backgroundColor: '#F08080'};
        } else {
            args.style = {backgroundColor: '#A569BD'};
        }
    }
};
}



