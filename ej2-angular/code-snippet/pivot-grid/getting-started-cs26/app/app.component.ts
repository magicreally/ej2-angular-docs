

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { DataManager, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings: IDataOptions;
  public data: DataManager;
  public width: string;

    ngOnInit(): void {

        this.data= new DataManager({
          url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/',
          adaptor: new ODataAdaptor,
          crossDomain: true
        }).executeQuery(new Query().take(8)).then((e: ReturnOption) => {
          this.dataSourceSettings = {
            dataSource: this.data,
            expandAll: true,
            filters: [],
            columns: [{ name: 'OrderDate'}, { name: 'ShipCity' }],
            rows: [{ name: 'OrderID' }, { name: 'CustomerID' }],
            values: [{ name: 'Freight' }]
          }
        });

        this.width = '100%';
    }
}



