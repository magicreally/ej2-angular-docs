

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                     isPrimaryKey='true' [validationRules]='orderIDRules' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [allowEditing]= 'false'
                     [validationRules]='customerIDRules' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit'
                     width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderIDRules?: object;
    public customerIDRules?: object;

    ngOnInit(): void {
        this.data = data;
        (this as any).editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        (this as any).orderIDRules = { required: true };
        (this as any).customerIDRules = { required: true, minLength: 3 };
    }
}



