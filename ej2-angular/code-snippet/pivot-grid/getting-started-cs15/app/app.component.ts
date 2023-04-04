

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, CalculatedFieldService, PivotView,
    FieldListService, PivotActionFailureEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  providers: [FieldListService, CalculatedFieldService],
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showFieldList='true' allowCalculatedField='true' (actionFailure)='actionFailure($event)' width=width></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings: IDataOptions;
  public button: Button;
  public width: string;

    @ViewChild('pivotview',{static: false})
    public pivotGridObj: PivotView;

    actionFailure(args: PivotActionFailureEventArgs): void {
        if (args.actionName == 'Open calculated field dialog') {
            // Triggers when the current UI action fails to achieve the desired result.
        }
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Amount', type: 'CalculatedField' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Total', format: 'C2' }],
            filters: [],
            calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
        };
        this.width = '100%';
    }
}



