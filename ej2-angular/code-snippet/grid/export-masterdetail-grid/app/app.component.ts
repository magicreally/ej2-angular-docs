import { Component, OnInit, ViewChild } from '@angular/core';
import { data, customerData } from './datasource';
import { ExcelExportProperties, GridComponent, ToolbarItems, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';

type carType = { CustomerID: string, CustomerName: string, ContactName: string };

@Component({
    selector: 'app-root',
    template: `<ejs-grid #mastergrid id="mastergrid" [dataSource]='masterdata' [selectedRowIndex]="1" [toolbar]='toolbar' [allowExcelExport]="true" (rowSelected)="onRowSelected($event)" (toolbarClick)="toolbarClick($event)">
        <e-columns>
            <e-column field='ContactName' headerText='Customer Name' width='150'></e-column>
            <e-column field='CompanyName' headerText='Company Name' width='150'></e-column>
            <e-column field='Address' headerText='Address' width='150'></e-column>
            <e-column field='Country' headerText='Country' width='130'></e-column>
        </e-columns>
    </ejs-grid>

    <div class='e-statustext'>Showing orders of Customer: <b id="key"></b></div>
    
    <ejs-grid #detailgrid id="detailgrid" [allowExcelExport]='true' [dataSource]='data' [allowSelection]='false'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='100'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' width='100' type='number'></e-column>
            <e-column field='ShipName' headerText="Ship Name" width='150'></e-column>
            <e-column field='ShipCountry' headerText="Ship Country" width='150'></e-column>
            <e-column field='ShipAddress' headerText="Ship Address" width='150'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public names?: string[] = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
    public toolbar?: ToolbarItems[];

    @ViewChild('mastergrid') public mastergrid?: GridComponent;
    @ViewChild('detailgrid') public detailgrid?: GridComponent;

    public masterdata?: Object[];
    public data?: any;

    ngOnInit(): void {
        this.masterdata = customerData.filter((e: carType | any) => (this as any).names.indexOf(e.CustomerID) !== -1);
        this.toolbar = ['ExcelExport'];
    }
    public onRowSelected(args: RowSelectEventArgs): void {
        let selectedRecord: carType = (args as any).data as carType;
        (this.detailgrid as any).dataSource = data.filter((record: carType | any) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
        (document.getElementById('key') as any).innerHTML = selectedRecord.ContactName;
    }
    public toolbarClick(args: any): void {
        if ((args as any).item.id === 'mastergrid_excelexport') {
            const appendExcelExportProperties: ExcelExportProperties = {
                multipleExport: { type: 'AppendToSheet', blankRows: 2 },
            };
            const firstGridExport: Promise<any> = (this.mastergrid as any).excelExport(appendExcelExportProperties, true);
            firstGridExport.then((fData: any) => {
                (this.detailgrid as any).excelExport(appendExcelExportProperties, false, fData);
            });
        }
    }
}