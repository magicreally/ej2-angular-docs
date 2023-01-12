

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ToolbarEventArgs } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" (toolbarUpdating)="toolbarUpdating($event)"></ejs-imageeditor>
              </div>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj: ImageEditorComponent;
      public created(): void {
        if (Browser.isDevice) {
            this.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }

    public toolbarUpdating(args: ToolbarEventArgs): void {
       if (args.toolbarType === 'shapes') {
            args.toolbarItems = ['strokeColor'];
        }
    }
}



