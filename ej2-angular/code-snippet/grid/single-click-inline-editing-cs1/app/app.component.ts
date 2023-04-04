


import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, ToolbarItems, GridComponent } from '@syncfusion/ej2-angular-grids';
import { MouseEventArgs } from '@syncfusion/ej2-base';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' allowPaging='true' (load)='load($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 isPrimaryKey='true'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data: object[];
    public toolbar: ToolbarItems[];
    @ViewChild('grid')
    public grid: GridComponent;
    public editSettings: EditSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    load(args){
        this.grid.element.addEventListener('mouseup', (e: MouseEventArgs) => {
        if ((e.target as HTMLElement).classList.contains("e-rowcell")) {
            let index: number = parseInt((e.target as HTMLElement).getAttribute("Index"));
            let colindex: number = parseInt((e.target as HTMLElement).getAttribute("aria-colindex"));
            let field: string = this.grid.getColumns()[colindex].field;
            this.grid.editModule.editCell(index, field);
        };
        });
    }
}



