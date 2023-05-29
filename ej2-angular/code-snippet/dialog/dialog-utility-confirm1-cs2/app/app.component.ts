


import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button class="e-control e-btn" id="targetButton" (click)="onOpenDialog($event)">Open Confirm Dialog</button>`
})

export class AppComponent implements OnInit {
    public onOpenDialog = function(event: any): void {
        DialogUtility.confirm({
        title: ' Confirmation Dialog',
        content: "This is a Confirmation Dialog!",
        okButton: {  text: 'OK', click: this.okClick.bind(this) },
        cancelButton: {  text: 'Cancel', click: this.cancelClick.bind(this) },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
    }
    private okClick(): void {
        alert('you clicked OK button');
    }

    private cancelClick(): void {
        alert('you clicked Cancel button');
    }
}



