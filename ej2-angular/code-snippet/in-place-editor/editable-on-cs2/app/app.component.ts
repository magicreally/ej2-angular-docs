

import { Component, OnInit, ViewChild } from '@angular/core';
import { InPlaceEditorComponent, EditableType } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { L10n } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
    <table class="table-section">
        <tr>
            <td> EditableOn: </td>
            <td>
                <ejs-dropdownlist #dropDown (change)="onChange($event)" id='dropDown' width="auto" [dataSource]='editableOnData' value='Click' placeholder="Select edit type">
                </ejs-dropdownlist>
            </td>
        </tr>
        <tr>
            <td  class="sample-td"> Enter your name: </td>
            <td  class="sample-td">
                <ejs-inplaceeditor #element id="element" mode="Inline" value="Andrew" locale="fr-BE" [model]="model"></ejs-inplaceeditor>
            </td>
        </tr>
    </table>
</div>
    `
})

export class AppComponent implements OnInit {
  @ViewChild('element') editObj: InPlaceEditorComponent;
  public model: object = { placeholder: 'Enter some text' };
  public editableOnData: string[] = ['Click', 'DblClick', 'EditIconClick'];
  public onChange(e: ChangeEventArgs): void {
    let editType: EditableType = e.itemData.value as EditableType;
    this.editObj.editableOn = editType;
    this.editObj.dataBind();
  }
  ngOnInit(): void {
    L10n.load({
      'fr-BE': {
          'inplace-editor': {
              'save': 'enregistrer',
              'cancel': 'Annuler',
              'loadingText': 'Chargement...',
              'editIcon': 'Cliquez pour éditer',
              'editAreaClick': 'Cliquez pour éditer',
              'editAreaDoubleClick': 'Double-cliquez pour éditer'
          }
      }
    });
  }
}



