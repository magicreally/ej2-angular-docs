

import { Component, OnInit } from '@angular/core';
import { DataManager,Query, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' [query]='query' parentIdMapping='ParentItem' idMapping='TaskID' height=265 [allowPaging]="true">
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: DataManager;
    public query?: Query;

    ngOnInit(): void {
        this.data = new DataManager({
                url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
                adaptor: new WebApiAdaptor, crossDomain: true
            });
        this.query = new Query().addParams('ej2treegrid', 'true');
}
}


