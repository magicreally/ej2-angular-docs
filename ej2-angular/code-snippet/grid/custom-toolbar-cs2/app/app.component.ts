


import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { employeeData } from './datasource';
import { GroupSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='employeeData' height='200px' [allowGrouping]='true' [groupSettings]='groupOptions'
               [toolbar]='toolbar' (toolbarClick)='clickHandler($event)'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='FirstName' headerText='First Name' width=150></e-column>
                    <e-column field='Country' headerText='Country' width=150></e-column>
                    <e-column field='PostalCode' headerText='Postal Code' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public employeeData?: object[];
    public toolbar?: object[];
    public groupOptions?: GroupSettingsModel;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.employeeData = employeeData;
        this.toolbar = [{ text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
         { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse', id: 'collapseall', align: 'Right' }, { text: 'Search', align: 'Center'}];
        this.groupOptions = { columns: ['FirstName'] };
    }

    clickHandler(args: ClickEventArgs): void {
        if ((args as any).item.id === 'expandall') {
            (this.grid as any).groupModule.expandAll();
        }

        if ((args as any).item.id === 'collapseall') {
            (this.grid as any).groupModule.collapseAll();
        }
    }
}



