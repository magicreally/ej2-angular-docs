import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, LineSeriesService, TmaIndicatorService, DateTimeService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartAllModule, StockChartAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ CandleSeriesService, LineSeriesService, TmaIndicatorService, DateTimeService]
})
export class AppModule { }