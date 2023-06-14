

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
                    <e-column field='ShipCity' headerText='Ship City' [visible]='false' width=100></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



