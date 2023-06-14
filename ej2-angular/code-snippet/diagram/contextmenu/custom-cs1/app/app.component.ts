

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { ContextMenuSettingsModel, Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' [getConnectorDefaults]='getConnectorDefaults' [contextMenuSettings]="contextMenuSettings">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle1" [horizontalAlignment]="horizontalAlignment">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Rectangle2" [horizontalAlignment]="horizontalAlignment">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' sourceID='node1' targetID='node2'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public contextMenuSettings?: ContextMenuSettingsModel
horizontalAlignment: any;
    ngOnInit(): void {
        //Enables the context menu
        this.contextMenuSettings = {
            //Enables the context menu
            show: true,
            // Defines the custom context menu items
            items: [{
                    // Text to be displayed
                    text: 'Save',
                    //Sets the id for the item
                    id: 'save',
                    //ContextMenu can be visible based on the target in which you open the ContextMenu.
                    target: '.e-elementcontent',
                    // Sets the css icons for the item
                    iconCss: 'e-save'
                },
                {
                    text: 'Load',
                    id: 'load',
                    target: '.e-elementcontent',
                    iconCss: 'e-load'
                },
                {
                    text: 'Clear',
                    id: 'clear',
                    target: '.e-elementcontent',
                    iconCss: 'e-clear'
                }
            ],
            // Hides the default context menu items
            showCustomMenuOnly: false,
        }
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel ).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel ).strokeColor = "White";
        return node;
    }
    public getConnectorDefaults(obj: ConnectorModel): void {
        obj.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }
        obj.targetDecorator = {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }
}


