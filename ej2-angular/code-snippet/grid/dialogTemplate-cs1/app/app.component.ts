

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { DialogEditEventArgs, SaveEventArgs, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: `app/template-driven.html`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public orderData: object;
    @ViewChild('orderForm') public orderForm: FormGroup;
    public shipCityDistinctData: object[];
    public shipCountryDistinctData: object[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true );
    }

    actionBegin(args: SaveEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);;
        }
        if (args.requestType === 'save') {
            if (this.orderForm.valid) {
                args.data = this.orderData;
            } else {
                args.cancel = true;
            }
        }
    }

    actionComplete(args: DialogEditEventArgs): void {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            args.form.ej2_instances[0].rules = {};
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('CustomerID') as HTMLInputElement).focus();
            }
        }
    }
}

export interface IOrderModel {
    OrderID?: number;
    CustomerID?: string;
    ShipCity?: string;
    OrderDate?: Date;
    Freight?: number;
    ShipCountry?: string;
    ShipAddress?: string;
}



