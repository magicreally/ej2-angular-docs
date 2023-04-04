

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DataManager, Query, JsonAdaptor } from '@syncfusion/ej2-data';
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
    `]
})
export class AppComponent implements OnInit {

    public items: object[];

    public ngOnInit(): void {
        this.items = new DataManager({ json: data, adaptor: new JsonAdaptor() }).executeLocal(new Query().take(8));
    }
}



