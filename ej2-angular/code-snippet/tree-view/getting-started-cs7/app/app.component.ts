

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    // specifies the template string for the TreeView component with Drag and Drop
    template: `<div id='treeparent'><ejs-treeview id='treeelement' [fields]='field' [allowMultiSelection]='allowMultiSelection' [allowDragAndDrop]='allowDragAndDrop'></ejs-treeview></div>`
})
export class AppComponent {
    @ViewChild('samples')
    constructor() {
    }
    // defined the array of data
    public productTeam: Object[] = [
        {
        id: 1, name: 'ASP.NET MVC Team', expanded: true,
        child: [
            { id: 2, pid: 1, name: 'Smith' },
            { id: 3, pid: 1, name: 'Johnson', isSelected: true },
            { id: 4, pid: 1, name: 'Anderson', isSelected: true },
        ]
        },
        {
            id: 5, name: 'Windows Team',
            child: [
                { id: 6, pid: 5, name: 'Clark' },
                { id: 7, pid: 5, name: 'Wright' },
                { id: 8, pid: 5, name: 'Lopez' },
            ]
        },
        {
            id: 9, name: 'Web Team',
            child: [
                { id: 11, pid: 9, name: 'Joshua' },
                { id: 12, pid: 9, name: 'Matthew' },
                { id: 13, pid: 9, name: 'David' },
            ]
        },
        {
            id: 14, name: 'Build Team',
            child: [
                { id: 15, pid: 14, name: 'Ryan' },
                { id: 16, pid: 14, name: 'Justin' },
                { id: 17, pid: 14, name: 'Robert' },
            ]
        },
        {
            id: 18, name: 'WPF Team',
            child: [
                { id: 19, pid: 18, name: 'Brown' },
                { id: 20, pid: 18, name: 'Johnson' },
                { id: 21, pid: 18, name: 'Miller' },
            ]
        }
    ];
    // maps the appropriate column to fields property
    public field: Object = { dataSource: this.productTeam, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild', selected: 'isSelected' };
    // set the Multi Selection option to TreeView
    public allowMultiSelection: boolean = true;
    public allowDragAndDrop : boolean = true;
}


