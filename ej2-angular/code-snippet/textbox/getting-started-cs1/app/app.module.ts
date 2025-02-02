import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        Input
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }