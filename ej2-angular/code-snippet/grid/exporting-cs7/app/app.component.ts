


import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-root',
    template: `<p><b>First Grid:</b></p>
    <ejs-grid #grid1 id='FirstGrid' [dataSource]='fData' [toolbar]='toolbarOptions' [allowPdfExport]='true'
        (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>
                <p><b>Second Grid:</b></p>
                <ejs-grid #grid2 id='SecondGrid' [dataSource]='sData' [allowPdfExport]='true'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                    <e-column field='LastName' headerText='Last Name' width=150></e-column>
                    <e-column field='City' headerText='City' width=150></e-column>
                </e-columns>
                </ejs-grid>
                `
})
export class AppComponent implements OnInit {

    public fData: object[];
    public sData: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid1') public fGrid: GridComponent;
    @ViewChild('grid2') public sGrid: GridComponent;

    ngOnInit(): void {
        this.fData = data.slice(0, 5);
        this.sData = employeeData.slice(0, 5);
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick = (args: ClickEventArgs) => {
        if (args.item.id === 'FirstGrid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const firstGridPdfExport: Promise<object> = this.fGrid.pdfExport({}, true);
            firstGridPdfExport.then((pdfData: object) => {
                this.sGrid.pdfExport({}, false, pdfData);
            });
        }
    }
}




