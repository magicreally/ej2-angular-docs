

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService, SfdtExportService, TextExportService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div style="width:100%;"><button ejs-button (click)="saveAsTxt()" >Save</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableEditor]=true [enableTextExport]=true> </ejs-documenteditor></div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [EditorService, SelectionService, SfdtExportService, TextExportService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public saveAsTxt(): void {
        //Downlod the document as txt file.
        this.documentEditor.save('sample', 'Txt');
    }

}


