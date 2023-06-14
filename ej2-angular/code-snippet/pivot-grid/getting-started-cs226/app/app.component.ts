

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, DisplayOption, PivotChartService, PivotViewComponent } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';
@Component({
    selector: 'app-container',
    providers: [PivotChartService],
    template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  [chartSettings]='chartSettings' [displayOption]='displayOption'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public pivotData?: IDataSet[];
    public dataSourceSettings?: IDataOptions;
    public chartSettings?: ChartSettings;
    public displayOption?: DisplayOption;
    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotViewComponent;
    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            drilledMembers: [{ name: 'Country', items: ['Germany'] }],
            columns: [{ name: 'Country' }, { name: 'Products' }],
            rows: [{ name: 'Year' }, { name: 'Quarter' }],
            formatSettings: [{ name: 'Amount', format: 'C' }],
            values: [{ name: 'Amount' }, { name: 'Sold' }]
        };
        this.displayOption = { view: 'Chart' } as DisplayOption;
        this.chartSettings = {
            columnHeader: 'Germany-Road Bikes',
            columnDelimiter: '-',
            chartSeries: { type: 'Doughnut' }
        } as ChartSettings;
    }
}


