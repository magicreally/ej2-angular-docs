

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { DetailRowService, GridModel, GridComponent, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='pData' height='265px' [allowExcelExport]='true' [childGrid]='childGrid'
               [toolbar]='["ExcelExport"]' (toolbarClick)="toolbarClick($event)" (beforeExcelExport)="beforeExcelExport($event)">
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>
                `,
    providers: [DetailRowService]
})
export class AppComponent implements OnInit {

    public pData: object[];
    @ViewChild('grid') public grid: GridComponent;
    public childGrid: GridModel = {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    };
    ngOnInit(): void {
        this.pData = employeeData;
    }

    beforeExcelExport(args) {
        args.isChild = true;
    }
    
    toolbarClick(args: ClickEventArgs) {
        if (args.item.id === 'Grid_excelexport') {
            const exportProperties: ExcelExportProperties = {
                hierarchyExportMode: 'Expanded'
            };
            this.grid.excelExport(exportProperties);
        }
    }

}



