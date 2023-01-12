

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-chart id="charts" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings' (loaded)='onChartLoaded($event)'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold' ></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='silver' name='Silver'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='bronze' name='Bronze' ></e-series>
        </e-series-collection>
    </ejs-chart>`
})

// declare the series colors
let colors: string[] = ['#00BDAE', '#404041', '#357CD2'];

export class AppComponent implements OnInit {
    public primaryXAxis: Object;
    public chartData: Object[];
    public title: string;
    public primaryYAxis: Object;
    public legendSettings: Object;
    ngOnInit(): void {
        this.chartData = [
                { country: "USA", gold: 50, silver: 70, bronze: 45 },
                { country: "China", gold: 40, silver: 60, bronze: 55 },
                { country: "Japan", gold: 70, silver: 60, bronze: 50 },
                { country: "Australia", gold: 60, silver: 56, bronze: 40 },
                { country: "France", gold: 50, silver: 45, bronze: 35 },
                { country: "Germany", gold: 40, silver: 30, bronze: 22 },
                { country: "Italy", gold: 40, silver: 35, bronze: 37 },
                { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
        ];
        this.primaryXAxis = {
           valueType: 'Category',
           title: 'Countries'
        };
        this.primaryYAxis = {
           minimum: 0, maximum: 80,
           interval: 20, title: 'Medals',
        };
        this.legendSettings = { visible: true, position: 'Top' };
        this.title = 'Olympic Medals';
    }
    public onChartLoaded(args: ILoadedEventArgs): void {
        let chart: HTMLElement = document.querySelector('.e-chart');;
        let legendTextCol: any = chart.querySelectorAll('[id*="chart_legend_text_"]');
        for (let i = 0; i < legendTextCol.length; i++) {
            //set the color to legend label
            legendTextCol[i].setAttribute('fill', colors[i]);
        }
    }
    }
}


