

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-container',
    // specifies the template url path
    templateUrl: './app/template.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
     public localData: Object[] = [
         { id: 1, name: 'Steven Buchanan', eimg: '10', job: 'CEO', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'Laura Callahan', eimg: '2', job: 'Product Manager', hasChild: true },
        { id: 3, pid: 2, name: 'Andrew Fuller', eimg: '7', job: 'Team Lead', hasChild: true },
        { id: 4, pid: 3, name: 'Anne Dodsworth', eimg: '1', job: 'Developer' },
        { id: 5, pid: 1, name: 'Nancy Davolio', eimg: '4', job: 'Product Manager', hasChild: true },
        { id: 6, pid: 5, name: 'Michael Suyama', eimg: '9', job: 'Team Lead', hasChild: true },
        { id: 7, pid: 6, name: 'Robert King', eimg: '8', job: 'Developer ' },
        { id: 8, pid: 7, name: 'Margaret Peacock', eimg: '6', job: 'Developer' },
        { id: 9, pid: 1, name: 'Janet Leverling', eimg: '3', job: 'HR' },
    ];
    public field:Object ={ dataSource: this.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
    public cssClass:string = "custom";
}


