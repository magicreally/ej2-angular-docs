import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource'

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (dataBound)="dataBound($event)">
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    dataBound(args: any) {
        for (const cols of (this.grid as any).columns) {
            if (cols.field === 'OrderID') {
                cols.width = 120;
            }
            if (cols.field === 'OrderDate') {
                cols.type = 'date';
                cols.format = 'yMd';
            }
            if (cols.field === 'Freight') {
                cols.format = 'P2';
            }
        }
        (this.grid as GridComponent).refreshColumns();
    }
}



