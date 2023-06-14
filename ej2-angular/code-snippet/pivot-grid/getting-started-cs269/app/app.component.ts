

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Grid } from '@syncfusion/ej2-angular-grids';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  [gridSettings]='gridSettings' (enginePopulated)='enginePopulated($event)' width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: GridSettings;
    public columnGrandTotalIndex?: number;
    public rowGrandTotalIndex?: number;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    queryCell(args: any): void {
        (this.pivotGridObj?.renderModule as any).rowCellBoundEvent(args);
        //triggers for every cell
    }

    enginePopulated(args: any): void {
       (this.pivotGridObj?.grid as Grid).queryCellInfo = this.queryCell.bind(this);
    }

    ngOnInit(): void {

        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };

        this.gridSettings = {
            columnWidth: 140,
        } as GridSettings;
    }
}



