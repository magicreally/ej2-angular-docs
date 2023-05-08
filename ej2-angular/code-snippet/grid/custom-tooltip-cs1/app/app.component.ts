

import { Component, OnInit, ViewChild } from '@angular/core';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `  <ejs-tooltip #tooltip target=".e-rowcell" (beforeRender)="beforeRender($event)">
                    <ejs-grid #grid [dataSource]='data' [height]='315'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                        </e-columns>
                    </ejs-grid></ejs-tooltip>`
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('tooltip', null)
    public tooltip: TooltipComponent;
    ngOnInit(): void {
        this.data = data;
    }
    beforeRender(args): void {
    if (args.target.classList.contains('e-rowcell')) {
        // event triggered before render the tooltip on target element.
        this.tooltip.content = args.target.innerText;
    }
  }
}




