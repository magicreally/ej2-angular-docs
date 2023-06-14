

import { Component, OnInit } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { cascadeData } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' [edit]='countryParams' width=150></e-column>
                    <e-column field='ShipState' headerText='Ship State' editType= 'dropdownedit' [edit]='stateParams' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public countryParams?: IEditCell;
    public stateParams?: IEditCell;

    public countryElem?: HTMLElement;
    public countryObj?: DropDownList;

    public stateElem?: HTMLElement;
    public stateObj?: DropDownList;

    public country: { [key: string]: Object }[] = [
        { countryName: 'United States', countryId: '1' },
        { countryName: 'Australia', countryId: '2' }
    ];
    public state: { [key: string]: Object }[] = [
        { stateName: 'New York', countryId: '1', stateId: '101' },
        { stateName: 'Virginia ', countryId: '1', stateId: '102' },
        { stateName: 'Washington', countryId: '1', stateId: '103' },
        { stateName: 'Queensland', countryId: '2', stateId: '104' },
        { stateName: 'Tasmania ', countryId: '2', stateId: '105' },
        { stateName: 'Victoria', countryId: '2', stateId: '106' }
    ];

    ngOnInit(): void {
        this.data = cascadeData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.countryParams = {
            create:()=>{
            this.countryElem = document.createElement('input');
                return this.countryElem;
            },
            read:()=>{
                return (this.countryObj as any).text;
            },
            destroy:()=>{
                (this.countryObj as any).destroy();
            },
            write:()=>{
                this.countryObj = new DropDownList({
                dataSource: this.country,
                fields: { value: 'countryId', text: 'countryName' },
                change: () => {
                (this.stateObj as any).enabled = true;
                let tempQuery: Query = new Query().where('countryId', 'equal', (this.countryObj as any).value);
                (this.stateObj as any).query = tempQuery;
                (this.stateObj as any).text = null;
                (this.stateObj as any).dataBind();
            },
            placeholder: 'Select a country',
            floatLabelType: 'Never'
            });
            this.countryObj.appendTo(this.countryElem);
        }};
        this.stateParams = {
            create:()=>{
                this.stateElem = document.createElement('input');
                return this.stateElem;
            },
            read:()=>{
                return (this.stateObj as any).text;
            },
            destroy:()=>{
                (this.stateObj as any).destroy();
            },
            write:()=>{
                this.stateObj = new DropDownList({
                dataSource: this.state,
                fields: { value: 'stateId', text: 'stateName' },
                enabled: false,
                placeholder: 'Select a state',
                floatLabelType: 'Never'
            });
            this.stateObj.appendTo(this.stateElem);
        }}
    }
}


