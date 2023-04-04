


import { Component, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button ejs-button cssClass="e-danger" #alertButton (click)="alertBtnClick()">Alert</button>`
})

export class AppComponent implements OnInit {
    public alertBtnClick = (): void => {
    DialogUtility.alert({
      title: 'Low Battery',
      content: '10% of battery remaining',
      width : '250px',
      position: { X: 'center', Y: 'center' }
    });
  };
}



