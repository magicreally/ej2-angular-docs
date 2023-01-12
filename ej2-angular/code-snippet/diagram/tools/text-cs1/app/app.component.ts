

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, TextModel, DiagramTools } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public node: NodeModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
    public created(args: Object): void {
        //JSON to create a path
        this.node = {
            shape: {
                type:'Text',
            } as TextModel
        };
        this.diagram.drawingObject = this.node;
        //To draw an object once, activate draw once
        this.diagram.tool = DiagramTools.DrawOnce;
        this.diagram.dataBind();
    }
}


