

import { Component, ViewChild, OnInit } from '@angular/core';
import { RuleModel, QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { hardwareData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder class="row" width="70%" [dataSource]="data">
                <e-columns>
                  <e-column field="TaskID" label="Task ID" type="number"></e-column>
                  <e-column field="Name" label="Name" type="string"></e-column>
                  <e-column field="Category" label="Category" type="string"></e-column>
                  <e-column field="SerialNo" label="SerialNo" type="string"></e-column>
                  <e-column field="InvoiceNo" label="InvoiceNo" type="string"></e-column>
                  <e-column field="Status" label="Status" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>
              <button class="e-btn e-primary e-qb-button" (click)="setRules()" >Set Rules</button>`
})

export class AppComponent implements OnInit {
    public data: Object[];
    public importRules: RuleModel;
     @ViewChild('querybuilder')
    public qryBldrObj: QueryBuilderComponent;
    ngOnInit(): void {
        this.data = hardwareData;
        this.importRules = {
        'condition': 'or',
        'rules': [{
            'label': 'Category',
            'field': 'Category',
            'type': 'string',
            'operator': 'equal',
            'value': 'Laptop'
        },
        {
        'condition': 'and',
            'rules': [{
                'label': 'Status',
                'field': 'Status',
                'type': 'string',
                'operator': 'notequal',
                'value': 'Pending'
            },
            {
                'label': 'Task ID',
                'field': 'TaskID',
                'type': 'number',
                'operator': 'equal',
                'value': 5675
            }]
        }]
    };
    }
     setRules(): void {
        this.qryBldrObj.setRules(this.importRules);
    }
}



