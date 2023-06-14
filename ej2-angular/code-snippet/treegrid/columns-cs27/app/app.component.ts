

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `
     <button  ejs-button cssClass="btn btn-default" content="Print" (click)="onClicked()"></button>  
    <ejs-treegrid [dataSource]='data' height='265' #treegrid [treeColumnIndex]='1'  childMapping='subtasks'>
        <e-columns>
            <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
            <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
            <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
    </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
    }
    onClicked(): void {
        (this.treeGridObj as TreeGridComponent).print();
    }

}



