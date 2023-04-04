

import { Component, ViewChild } from '@angular/core';
import {
    IDataOptions, PivotView, FieldListService, CalculatedFieldService, NumberFormattingService,
    ToolbarService, ConditionalFormattingService, ToolbarItems, DisplayOption, IDataSet, PivotActionBeginEventArgs
} from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-container',
  providers: [CalculatedFieldService, ToolbarService, ConditionalFormattingService, FieldListService, NumberFormattingService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings allowExcelExport='true' allowNumberFormatting='true' allowConditionalFormatting='true' allowPdfExport='true' showToolbar='true' allowCalculatedField='true' showFieldList='true' width='100%' [displayOption]='displayOption' height='350' (actionBegin)='actionBegin($event)' [toolbar]='toolbarOptions'></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    public toolbarOptions: ToolbarItems[];
    public displayOption: DisplayOption;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;

    actionBegin(args: PivotActionBeginEventArgs): void {
        if (args.actionName == 'Add new report' || args.actionName == 'Save current report') {
            args.cancel = true;
        }
    }

    ngOnInit(): void {
        this.displayOption = { view: 'Both' } as DisplayOption;

        this.toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
            'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'] as ToolbarItems[];
        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
 }



