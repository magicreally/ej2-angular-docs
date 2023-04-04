

import { Component, ViewChild} from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    template: ` <ejs-sidebar id="default-sidebar" #sidebar (created)="onCreated($event)" style="visibility: hidden" [width]="width" [showBackdrop]="showBackdrop" [closeOnDocumentClick]="closeOnDocumentClick">
                    <div class="title"> Sidebar content</div>
                    <div class="sub-title">
                        Click the button to close the Sidebar.
                    </div>
                    <div class="center-align">
                        <button ejs-button id="close" (click)="closeClick()" class="e-btn close-btn">Close Sidebar</button>
                    </div>
                </ejs-sidebar>
                <div>
                    <div class="title">Main content</div>
                    <div class="sub-title"> Click the button to open/close the Sidebar.</div>
                    <div style="padding:20px" class="center-align">
                        <button ejs-button id="toggle" class="e-btn e-info" (click)="toggleClick()">Toggle Sidebar</button>
                    </div>
                </div>`
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    public showBackdrop: boolean = true;
    public type: string = 'Push';
    public width: string ='280px';
    public closeOnDocumentClick: boolean = true;
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }
    closeClick(): void {
        this.sidebar.hide();
    };

    toggleClick():void{
      this.sidebar.show();
    }
}


