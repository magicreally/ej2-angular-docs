


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { RowDataBoundEventArgs, EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { MouseEventArgs } from '@syncfusion/ej2-base';

@Component({

    selector: 'app-root',
    template: `<ejs-grid id="grid" [dataSource]='data' (rowDataBound)='rowDataBound($event)' [editSettings]='editSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
                </e-columns>
               </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
    rowDataBound(args: RowDataBoundEventArgs) {
        let gridElement = document.getElementById('grid').ej2_instances[0];
        args.row.addEventListener('mouseover', function(e) {
        console.log(gridElement.getRowInfo(e.target))
    })
    }
}



