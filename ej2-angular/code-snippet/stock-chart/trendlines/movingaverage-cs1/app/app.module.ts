import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartAllModule, RangeNavigatorAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import {  ScatterSeriesService, LineSeriesService, DateTimeService, TrendlinesService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        StockChartAllModule, RangeNavigatorAllModule, ChartAllModule, BrowserModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [  ScatterSeriesService, LineSeriesService, DateTimeService, TrendlinesService]
})
export class AppModule { }