

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DashboardLayoutComponent } from '@syncfusion/ej2-angular-layouts';

@Component({
    selector: 'app-root',
    styleUrls: ['app/default-style.css'],
    templateUrl: 'app/app.template.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('defaultLayout') dashboardLayout: DashboardLayoutComponent;
    public cellSpacing: number[] = [10, 10];
    public columns: number = 5;
    public panels: any = [
    {'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, content:'<div class="content">0</div>'},
    {'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, content:'<div class="content">1</div>'},
    {'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, content:'<div class="content">2</div>'},
    {'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, content:'<div class="content">3</div>'},
    {'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, content:'<div class="content">4</div>'},
    {'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, content:'<div class="content">5</div>'},
    {'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, content:'<div class="content">6</div>'},
    ];

    //Dashboard Layout's created event function
    onCreated(args: any) {
       // movePanel("id", row, col)
        this.dashboardLayout.movePanel("layout_0", 1, 0);

    }
    //Dashboard Layout's change event function
    onChange(args: any) {
        console.log("Change event triggered");
    }

}


