


import { Component, OnInit, ViewChild } from '@angular/core';
import { data, base64AlgeriaFont } from './datasource';
import { GridComponent, ToolbarItems, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px'
             [allowPaging]='true' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            const pdfExportProperties: PdfExportProperties = {
                theme: {
                    header: { font: new PdfTrueTypeFont(base64AlgeriaFont, 12) },
                    caption: { font: new PdfTrueTypeFont(base64AlgeriaFont, 10) },
                    record: { font: new PdfTrueTypeFont(base64AlgeriaFont, 9) }
                }
            };
            this.grid.pdfExport(pdfExportProperties);
        }
    }
}



