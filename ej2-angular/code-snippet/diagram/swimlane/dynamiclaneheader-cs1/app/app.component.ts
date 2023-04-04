

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, SwimLaneModel,Diagram, NodeModel,Node, LaneModel,HeaderModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
      public nodes: NodeModel[] = [
        {
            shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                //Intialize header to swimlane
                header: {
                    annotation: { content: 'ONLINE PURCHASE STATUS', style: { fill: 'pink' } },
                    height: 50, style: { fontSize: 11 },
                },
                lanes: [
                  {
                       id: 'stackCanvas1',
                        height: 100,
                        // customization of lane header
                         header: {
                        annotation: { content: 'Online Consumer' }, width: 30,
                        style: { fontSize: 11 },style: { fill: 'red' }
                    },
                    },
                ],
                phases: [{
                    id: 'phase1', offset: 170,
                        header: { annotation: { content: 'Phase' } }
                }
                ],
                phaseSize: 20,
            },
           offsetX: 300, offsetY: 200,
            height: 200,
            width: 350
        },
      ]
    @ViewChild("diagram")
    public diagram: DiagramComponent;
     public created(args: Object): void {
        // Update the connector properties at the run time
        this.diagram.nodes[0].shape.lanes[0].header.style.fill = 'blue';
        this.diagram.dataBind();
    }
}


