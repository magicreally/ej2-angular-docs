


import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { Button } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-container',
    templateUrl: 'app/app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DefaultToolbarComponent {
    public undoBtn: any;
    public zoomBtn: any;
    public mediaBtn: any;
    public filterBtn: any;
    public visibleBtn: any;

    public create(): void {
        this.zoomBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-zoomin-icon', isToggle: true });
        this.zoomBtn.appendTo('#zoom_btn');

        this.mediaBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-play-icon', isToggle: true });
        this.mediaBtn.appendTo('#media_btn');

        this.undoBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-undo-icon', isToggle: true });
        this.undoBtn.appendTo('#undo_btn');

        this.filterBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-filter-icon', isToggle: true });
        this.filterBtn.appendTo('#filter_btn');

        this.visibleBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-hide-icon', isToggle: true, content:'Hide'});
        this.visibleBtn.appendTo('#visible_btn');

        //Toggle button click event handlers
        this.zoomBtn.element.onclick = (): void => {
            if (this.zoomBtn.element.classList.contains('e-active')) {
                this.zoomBtn.iconCss = 'e-icons e-zoomout-icon';
            } else {
                this.zoomBtn.iconCss = 'e-icons e-zoomin-icon';
            }
        };

        this.mediaBtn.element.onclick = (): void => {
            if (this.mediaBtn.element.classList.contains('e-active')) {
                this.mediaBtn.iconCss = 'e-icons e-pause-icon';
            } else {
                this.mediaBtn.iconCss = 'e-icons e-play-icon';
            }
        };

        this.undoBtn.element.onclick = (): void => {
            if (this.undoBtn.element.classList.contains('e-active')) {
                this.undoBtn.iconCss = 'e-icons e-redo-icon';
            } else {
                this.undoBtn.iconCss = 'e-icons e-undo-icon';
            }
        };

        this.filterBtn.element.onclick = (): void => {
            if (this.filterBtn.element.classList.contains('e-active')) {
                this.filterBtn.iconCss = 'e-icons e-filternone-icon';
            } else {
                this.filterBtn.iconCss = 'e-icons e-filter-icon';
            }
        };

        this.visibleBtn.element.onclick = (): void => {
            if (this.visibleBtn.element.classList.contains('e-active')) {
                document.getElementById('content').style.display = 'none';
                this.visibleBtn.content = 'Show';
                this.visibleBtn.iconCss = 'e-icons e-show-icon';
            } else {
                document.getElementById('content').style.display = 'block';
                this.visibleBtn.content = 'Hide';
                this.visibleBtn.iconCss = 'e-icons e-hide-icon';
            }
        };
    }
}



