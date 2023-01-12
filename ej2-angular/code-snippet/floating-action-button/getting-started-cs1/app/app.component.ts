

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
                </div>
                <!-- To Render Floating Action Button -->
                <button ejs-fab id='fab' content='Add' target='#targetElement'></button>`
})

export class AppComponent { }


