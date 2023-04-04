

import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-smithchart  #smithchart style='display: block;' id='container' height='350px'  [legendSettings] = 'legendSettings' >
    <e-seriesCollection>
        <e-series [dataSource]='seriesdata1' [marker]='marker' [tooltip]='tooltip' name='Transmission1' reactance='reactance' resistance='resistance'> </e-series>
        <e-series [marker]='marker' [tooltip]='tooltip' [points]='seriespoints' name ='Transmission2' reactance='reactance' resistance='resistance'> </e-series>
    </e-seriesCollection>
    </ejs-smithchart> <div>
                           <button id="togglebtn2" (click)='export()'>Export</button>
                       </div>`
})

export class AppComponent {
     @ViewChild('smithchart')
    public smithchart: SmithChart;
    public marker: object = {
        visible: true
    };
    public tooltip: object = {
        visible: true
    };
    public seriesdata1: object[] = [
                { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
            ];
    public seriespoints: object[] = [
                { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 },
            ];
           export() {
        this.smithchart.export('PNG', 'SmithChart');
        }
}


