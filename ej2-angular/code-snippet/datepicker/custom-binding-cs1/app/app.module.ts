import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the DatePickerModule for the DatePicker component
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ParentComponent }  from './app.component';
import { ChildComponent }  from './child.component';

@NgModule({
  //declaration of ej2-angular-calendars module into NgModule
  imports:      [ BrowserModule, DatePickerModule ],
  declarations: [ ParentComponent,  ChildComponent ],
  bootstrap:    [ ParentComponent]
})
export class AppModule { }