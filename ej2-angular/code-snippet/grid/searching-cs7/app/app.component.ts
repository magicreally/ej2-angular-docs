


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, SearchSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #Grid [dataSource]='data' [toolbar]='toolbarOptions' [searchSettings]='searchOptions'(actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)" height='400' width='100%'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public values;
    public key = '';
    public refresh = false;
    public removeQuery = false;
    public valueAssign = false;
    public data: Object[];
    public toolbarOptions: ToolbarItems[];
    public searchOptions: SearchSettingsModel;
    @ViewChild('Grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.searchOptions = {
            fields: [
                'OrderID',
                'CustomerID',
                'EmployeeID',
                'ShipCity',
                'ShipCountry',
                'ShipName'
            ],
            operator: 'contains',
            key: '',
            ignoreCase: true,
        };
        this.toolbarOptions = ['Search'];
    }
    actionBegin(args:SearchEventArgs) {
        if (args.requestType == 'searching') {
            const keys = args.searchString.split(',');
            var flag = true;
            var predicate;
            if (keys.length > 1) {
                if (this.grid.searchSettings.key !== '') {
                    this.values = args.searchString;
                    keys.forEach((key) => {
                        this.grid.getColumns().forEach((col) => {
                            if (flag) {
                                predicate = new Predicate(col.field, 'contains', key, true);
                                flag = false;
                            }
                            else {
                                var predic = new Predicate(col.field, 'contains', key, true);
                                predicate = predicate.or(predic);
                            }
                        });
                    });
                    this.grid.query = new Query().where(predicate);
                    this.grid.searchSettings.key = '';
                    this.refresh = true;
                    this.valueAssign = true;
                    this.removeQuery = true;
                    this.grid.refresh();
                }
            }
        }
    }
    actionComplete(args:SearchEventArgs) {
        if (args.requestType === 'refresh' && this.valueAssign) {
            (
                document.getElementById(this.grid.element.id + '_searchbar') as any
            ).value = this.values;
            this.valueAssign = false;
        }
        else if (
            (document.getElementById(this.grid.element.id + '_searchbar') as any).value === '' && args.requestType === 'refresh' &&
            this.removeQuery) {
                this.grid.query = new Query();
                this.removeQuery = false;
                this.grid.refresh();
            }
    }
}



