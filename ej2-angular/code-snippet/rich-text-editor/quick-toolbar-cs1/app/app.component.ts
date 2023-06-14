


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService,
QuickToolbarService, RichTextEditorComponent, QuickToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor #imageRTE id='imageRTE' [quickToolbarSettings]='quickToolbarSettings' (quickToolbarSettingsChange)=' quickToolbarSettingsChange'>
            <ng-template #valueTemplate>
                <p>RichTextEditor allows to insert images from online source as well as local
                    computer where you want to insert the image in your content.</p>
                <p><b>Get started Quick Toolbar to click on the image</b></p>
                <p>It is possible to add custom style on the selected image inside the Rich Text Editor through quick toolbar.</p>
                <img id="rteImageID" style="width:300px; height:300px;transform: rotate(0deg);" alt="Logo" src="http://ej2.syncfusion.com/angular/demos/src/rte/images/RTEImage-Feather.png">
            </ng-template>
        </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]
})
export class AppComponent  {
    @ViewChild('imageRTE') rteObj: RichTextEditorComponent | undefined;
    quickToolbarSettings: QuickToolbarSettingsModel = {
        image: [
            'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
            'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'
        ]
    };
    quickToolbarSettingsChange: QuickToolbarSettingsModel={}
}



