


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" enablePointerDrag='true' height='250px' width='250px'>
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=50></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public animation: Object;
    ngOnInit(): void {
    }
}



