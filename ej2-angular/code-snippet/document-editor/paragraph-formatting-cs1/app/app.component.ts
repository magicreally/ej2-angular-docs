

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService, EditorHistoryService, SfdtExportService, ContextMenuService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
    selector: 'app-container',
    styleUrls: ['styles.css'],
    //specifies the template string for the Document Editor component
    template: `<div>
    <div>
        <ejs-toolbar (clicked)='toolbarButtonClick($event)'>
            <e-items>
                <e-item prefixIcon='e-de-ctnr-alignleft e-icons' id='AlignLeft' tooltipText='Align Left'></e-item>
                <e-item prefixIcon='e-de-ctnr-aligncenter e-icons' id='AlignCenter' tooltipText='AlignCenter'></e-item>
                <e-item prefixIcon='e-de-ctnr-alignright e-icons' id='AlignRight' tooltipText='AlignRight'></e-item>
                <e-item prefixIcon='e-de-ctnr-justify e-icons' id='Justify' tooltipText='Justify'></e-item>
                <e-item prefixIcon='e-de-ctnr-increaseindent e-icons' id='IncreaseIndent' tooltipText='Increase Indent'></e-item>
                <e-item prefixIcon='e-de-ctnr-decreaseindent e-icons' id='DecreaseIndent' tooltipText='Decrease Indent'></e-item>
                <e-item type='Separator'></e-item>
                <e-item prefixIcon='e-de-ctnr-clearall e-icons' id='ClearFormat' tooltipText='ClearFormatting'></e-item>
                <e-item type='Separator'></e-item>
                <e-item prefixIcon='e-de-e-paragraph-mark e-icons' id='ShowParagraphMark' tooltipText='Show the hidden characters like spaces, tab, paragraph marks, and breaks.(Ctrl + *)'></e-item>
            </e-items>
        </ejs-toolbar>
      </div>
      <ejs-documenteditor #document_editor (selectionChange)='onSelectionChange()' [enableSelection]='true' [isReadOnly]='false' [enableEditor]=true [enableEditorHistory]=true [enableSfdtExport]=true [enableContextMenu]=true height="330px" style="display:block"></ejs-documenteditor>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    providers: [EditorService, SelectionService, EditorHistoryService, SfdtExportService, ContextMenuService]
})
export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public toolbarButtonClick(arg: any) {
        switch (arg.item.id) {
            case 'AlignLeft':
                //Toggle the Left alignment for selected or current paragraph
                this.documentEditor.editor.toggleTextAlignment('Left');
                break;
            case 'AlignRight':
                //Toggle the Right alignment for selected or current paragraph
                this.documentEditor.editor.toggleTextAlignment('Right');
                break;
            case 'AlignCenter':
                //Toggle the Center alignment for selected or current paragraph
                this.documentEditor.editor.toggleTextAlignment('Center');
                break;
            case 'Justify':
                //Toggle the Justify alignment for selected or current paragraph
                this.documentEditor.editor.toggleTextAlignment('Justify');
                break;
            case 'IncreaseIndent':
                //Increase the left indent of selected or current paragraph
                this.documentEditor.editor.increaseIndent();
                break;
            case 'DecreaseIndent':
                //Decrease the left indent of selected or current paragraph
                this.documentEditor.editor.decreaseIndent();
                break;
            case 'ClearFormat':
                //Clear formatting for selected paragraph or content.
                this.documentEditor.editor.clearFormatting();
                break;
            case 'ShowParagraphMark':
                //Show or hide the hidden characters like spaces, tab, paragraph marks, and breaks.
                this.documentEditor.documentEditorSettings.showHiddenMarks = !this.documentEditor.documentEditorSettings.showHiddenMarks;
                break;
        }
    }

    // Selection change to retrieve formatting
    public onSelectionChange() {
        if (this.documentEditor.selection) {
            var paragraphFormat = this.documentEditor.selection.paragraphFormat;
            var toggleBtnId = ['AlignLeft', 'AlignCenter', 'AlignRight', 'Justify', 'ShowParagraphMark'];
            //Remove toggle state.
            for (var i = 0; i < toggleBtnId.length; i++) {
                let toggleBtn: HTMLElement = document.getElementById(toggleBtnId[i]);
                toggleBtn.classList.remove('e-btn-toggle');
            }
            //Add toggle state based on selection paragraph format.
            if (paragraphFormat.textAlignment === 'Left') {
                document.getElementById('AlignLeft').classList.add('e-btn-toggle');
            } else if (paragraphFormat.textAlignment === 'Right') {
                document.getElementById('AlignRight').classList.add('e-btn-toggle');
            } else if (paragraphFormat.textAlignment === 'Center') {
                document.getElementById('AlignCenter').classList.add('e-btn-toggle');
            } else {
                document.getElementById('Justify').classList.add('e-btn-toggle');
            }
            if(this.documentEditor.documentEditorSettings.showHiddenMarks) {
                document.getElementById('ShowParagraphMark').classList.add('e-btn-toggle');
            }
            // #endregion
        }
    }
}


