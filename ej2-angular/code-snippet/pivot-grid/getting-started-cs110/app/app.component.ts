

import { Component } from '@angular/core';
import { L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { IDataOptions, FieldListService, CalculatedFieldService, GroupingBarService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-container',
  providers: [FieldListService, CalculatedFieldService, GroupingBarService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width
  allowCalculatedField='true' showGroupingBar='true' locale='de-DE' showFieldList='true'></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    ngOnInit(): void {
        setCulture('de');
        setCurrencyCode('EUR');
        L10n.load({
            'de-DE': {
                'pivotview': {
                    'grandTotal': 'Gesamtsumme',
                    'total': 'Insgesamt',
                    'value': 'Wert',
                    'noValue': 'Kein Wert',
                    'row': 'Zeile',
                    'column': 'Spalte',
                    'collapse': 'Zusammenbruch',
                    'expand': 'Erweitern'
                },
                "pivotfieldlist": {
                    'fieldList': 'Feld Liste',
                    'dropRowPrompt': 'Drop Reihe hier',
                    'dropColPrompt': 'Drop column Hier',
                    'dropValPrompt': 'Drop wert hier',
                    'dropFilterPrompt': 'Drop Filter Hier',
                    'addPrompt': 'Feld hinzufügen',
                    'centerHeader': 'Ziehen Sie die Felder zwischen den Bereichen unten:',
                    'add': 'Hinzufügen',
                    'drag': 'Ziehen',
                    'filters': 'Filter',
                    'rows': 'Zeilen',
                    'columns': 'Spalten',
                    'values': 'Werte',
                    'error': 'Fehler',
                    'dropAction': 'Berechnetes Feld nicht in jeder anderen Region außer Wert Achse sein.',
                    'search': 'Suche',
                    'close': 'Schließen',
                    'cancel': 'Abbrechen',
                    'delete': 'Löschen',
                    'alert': 'Warnung',
                    'warning': 'Warnung',
                    'ok': 'OK',
                    'allFields': 'Alle Felder',
                    'noMatches': 'Keine Treffer'
                }
            }
        });
        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false,
                minimumSignificantDigits: 1, maximumSignificantDigits: 3, currency: 'EUR' }],
            filters: [],
            calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
        };
        this.width = "100%";
    }
 }



