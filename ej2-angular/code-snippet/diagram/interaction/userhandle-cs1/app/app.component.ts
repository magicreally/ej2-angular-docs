

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, SelectorModel, IElement, randomId, cloneObject, UserHandleModel, SelectorConstraints, ToolBase, NodeModel, Diagram, MoveTool } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]='getNodeDefaults' [getCustomTool]='getCustomTool' [selectedItems]='selectedItems'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150></e-node>
        </e-nodes>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram: DiagramComponent;

  public handles: UserHandleModel[] = [
    {
      name: "clone",
      pathData: "M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5, 28.9h-30c-3, 0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z",
      visible: true,
      offset: 0,
      side: "Bottom",
      margin: { top: 0, bottom: 0, left: 0, right: 0 }
    }
  ];
  public selectedItems: SelectorModel = {
    constraints: SelectorConstraints.UserHandle,
    userHandles: this.handles
  };
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    node.style.fill = "#6BA5D7";
    node.style.strokeColor = "#6BA5D7";
    return node;
  }
  public getCustomTool: Function = this.getTool.bind(this);
  public getTool(action: string): ToolBase {
    let tool: ToolBase;
    if (action === "clone") {
      let cloneTool: CloneTool = new CloneTool(this.diagram.commandHandler);
      cloneTool.diagram = this.diagram;
      return cloneTool;
    }
    return tool;
  }
}

//Defines the clone tool used to copy Node/Connector
class CloneTool extends MoveTool {
  public diagram: Diagram = null;
  public mouseDown(args: MouseEventArgs): void {
    let newObject: NodeModel | ConnectorModel;
    if (this.diagram.selectedItems.nodes.length > 0) {
      newObject = cloneObject(this.diagram.selectedItems.nodes[0]) as NodeModel;
    } else {
      newObject = cloneObject(this.diagram.selectedItems.connectors[0]) as ConnectorModel;
    }
    newObject.id += randomId();
    this.diagram.paste([newObject]);
    args.source = this.diagram.nodes[this.diagram.nodes.length - 1] as IElement;
    args.sourceWrapper = args.source.wrapper;
    super.mouseDown(args);
    this.inAction = true;
  }
}


