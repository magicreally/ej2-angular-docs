

import { Component, OnInit } from '@angular/core';
import { IDataOptions, GroupingBarService, FieldListService, PivotActionCompleteEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-container',
  providers: [GroupingBarService, FieldListService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showGroupingBar='true' (actionComplete)='actionComplete($event)'   showFieldList='true' width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width: string;
    public dataSourceSettings: IDataOptions;

    actionComplete(args: PivotActionCompleteEventArgs): void {
        if (args.actionName == 'Field aggregated') {
            // Triggers when the aggregation type is applied.
        }
    }

    ngOnInit(): void {

        this.width = "100%";

        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' , showFilterIcon: false }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
}



