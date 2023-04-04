

import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: `
    <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
    <div #container class='root-container'></div>
    <ejs-dialog id='dialog' #ejDialog allowDragging='true' enableResize='true' [resizeHandles]='resizeHandleDirection' header='Dialog' content='This is a Dialog with resize enabled'
    [target]='targetElement' width='250px' [buttons]='buttons'> </ejs-dialog>`
})

export class AppComponent implements OnInit {
  @ViewChild('ejDialog') ejDialog: DialogComponent;
  // Create element reference for dialog target element.
  @ViewChild('container', { read: ElementRef }) container: ElementRef;
  // The Dialog shows within the target element.
  public targetElement: HTMLElement;
  // This will resize the dialog in all the directions.
  public resizeHandleDirection: ResizeDirections[] = ['All'];

  // To get all element of the dialog component after component get initialized.
  ngOnInit() {
    this.initilaizeTarget();
  }

  // Initialize the Dialog component's target element.
  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
    this.resizeHandleDirection = ['All'];
  }
  // Hide the Dialog when click the footer button.
  public hideDialog: EmitType<object> = () => {
    this.ejDialog.hide();
  }
  // Enables the footer buttons
  public buttons: Object = [
      {
          'click': this.hideDialog.bind(this),
          // Accessing button component properties by buttonModel property
            buttonModel: {
            content: 'OK',
            isPrimary: true
          }
      },
      {
          'click': this.hideDialog.bind(this),
          buttonModel: {
            content: 'Cancel'
          }
      }
  ];
  // Sample level code to handle the button click action
  public onOpenDialog = function(event: any): void {
    // Call the show method to open the Dialog
    this.ejDialog.show();
  };
}



