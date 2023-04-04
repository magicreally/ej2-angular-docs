

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { CommandModel, CommandClickEventArgs, GridComponent, Column, IRow, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { closest } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' (commandClick)='commandClick($event)' height='310px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                    <e-column headerText='Commands' width=140 [commands]='commands'></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public commands: CommandModel[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true };
        this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat' } }];
    }

    commandClick(args: CommandClickEventArgs): void {
        alert(JSON.stringify(args.rowData));
    }
}



