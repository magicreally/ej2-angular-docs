import { Component, OnInit, ViewChild } from '@angular/core';
import { data, customerData } from './datasource';
import { DetailRowService, ToolbarService, GridComponent, ToolbarItems, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';

type carType = { CustomerID: string, CustomerName: string, ContactName: string };

@Component({
    selector: 'app-root',
    template: `<ejs-grid #mastergrid id="mastergrid" [dataSource]='masterdata' [selectedRowIndex]="1" [toolbar]='toolbar' (rowSelected)="onRowSelected($event)" (beforePrint)="beforePrint($event)">
        <e-columns>
            <e-column field='ContactName' headerText='Customer Name' width='150'></e-column>
            <e-column field='CompanyName' headerText='Company Name' width='150'></e-column>
            <e-column field='Address' headerText='Address' width='150'></e-column>
            <e-column field='Country' headerText='Country' width='130'></e-column>
        </e-columns>
    </ejs-grid>

    <div class='e-statustext'>Showing orders of Customer: <b id="key"></b></div>
    
    <ejs-grid #detailgrid id="detailgrid" [dataSource]='data' [allowSelection]='false'>
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

    public names: string[] = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
    public toolbar: ToolbarItems[];

    @ViewChild('mastergrid') public mastergrid: GridComponent;
    @ViewChild('detailgrid') public detailgrid: GridComponent;

    public masterdata: Object[];

    ngOnInit(): void {
        this.masterdata = customerData.filter((e: carType) => this.names.indexOf(e.CustomerID) !== -1);
        this.toolbar = ['Print'];
    }
    public onRowSelected(args: RowSelectEventArgs): void {
        let selectedRecord: carType = args.data as carType;
        this.detailgrid.dataSource = data.filter((record: carType) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
        document.getElementById('key').innerHTML = selectedRecord.ContactName;
    }
    public beforePrint(args): void {
        let customEle = document.createElement('div');
        customEle.innerHTML = document.getElementsByClassName('e-statustext')[0].innerHTML + this.detailgrid.element.innerHTML;
        customEle.appendChild(document.createElement('br'));
        args.element.append(customEle);
    }
}