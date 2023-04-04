

import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { L10n } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component
    template: `<ejs-dropdownlist id='ddlelement' #samples [dataSource]='data' [query]='query' [fields]='fields' [placeholder]='text' [locale]='locale'></ejs-dropdownlist>`
})
export class AppComponent implements onInit {
    constructor() {
    }
    //set the placeholder text in french to DropDownList input
    public text: string = "Sélectionnez un élément";
    // bind remotedata to showcase actionFailureTemplate in offline
    public data: DataManager = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    // map appropriate column
    public fields: Object = { text: 'ContactName', value: 'CustomerID' },
    // take 0 item to showcase noRecordsTemplate property
    public query: Query = new Query().select(['ContactName', 'CustomerID']).take(0);
    //set culture to DropDownList component
    public locale: string = 'fr-BE';
    ngOnInit(): void {
        L10n.load({
            'fr-BE': {
            'dropdowns': {
                    'noRecordsTemplate': "Aucun enregistrement trouvé",
                    'actionFailureTemplate': "Modèle d'échec d'action"
                }
            }
        });
    }
}


