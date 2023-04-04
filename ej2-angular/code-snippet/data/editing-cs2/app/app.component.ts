

import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.template.html',
    styles: [`
            .e-table {
                border: solid 1px #e0e0e0;
                border-collapse: collapse;
                font-family: Roboto;
            }

            .e-table td, .e-table th {
                border-style: solid;
                border-width: 1px 0 0;
                border-color: #e0e0e0;
                display: table-cell;
                font-size: 14px;
                line-height: 20px;
                overflow: hidden;
                padding: 8px 21px;
                vertical-align: middle;
                white-space: nowrap;
                width: auto;
            }
            .e-form {
                display: block;
                padding-bottom: 10px;
            }
            .e-form input {
                width: 15%;
            }
    `]
})
export class AppComponent implements OnInit {

    public items: object[];
    public edit: { OrderID: string, CustomerID: string, EmployeeID: string };
    public dm: DataManager;
    public text: string;
    public show = true;
    public ngOnInit(): void {
      this.text = 'Update';
      this.edit = { OrderID: null, CustomerID: null, EmployeeID: null };
      this.dm = new DataManager(data.slice(0, 5));
      this.dm.executeQuery(new Query())
        .then((e: ReturnOption) => this.items = e.result as object[]).catch((e) => true);
    }

    public insert(): void {
        this.dm.update('OrderID', {
          OrderID: this.edit.OrderID,
          CustomerID: this.edit.CustomerID,
          EmployeeID: this.edit.EmployeeID
        });
        this.dm.executeQuery(new Query())
        .then((e: ReturnOption) => this.items = e.result as object[]).catch((e) => true);
    }
}



