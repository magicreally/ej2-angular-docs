

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='300'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column headerText='Order Status'width='200'>
                            <ng-template #template let-data>
                                <div>
                                    <ejs-dropdownlist [value]='data.OrderStatus' width="100" [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' >
                                    </ejs-dropdownlist>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public dropData?: string[];

    ngOnInit(): void {
        this.data = data;
        this.dropData = ['Order Placed', 'Processing', 'Delivered'];
    }
}



