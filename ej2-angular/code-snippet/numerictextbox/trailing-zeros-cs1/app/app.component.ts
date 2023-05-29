

import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component

    template: `
            <ejs-numerictextbox #numeric='' id="numeric"  decimals='2' format='n2' value='10'  placeholder= 'NumericTextBox' floatLabelType= 'Always' (change)="onChange($event)" (created)="onCreate($event)" ></ejs-numerictextbox>
            `
})
export class AppComponent {
    public onChange(args) {
        var numericObj =  numeric.ej2_instances[0];
        numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
    }
    public onCreate(): void {
         document.getElementsByClassName('e-numerictextbox')[0].addEventListener('focus',function(){
            var numericObj = this.ej2_instances[0];
            numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
        });
    }
    constructor() {
    }
}



