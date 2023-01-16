using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Syncfusion.EJ2.Diagrams;
namespace sample1.Controllers
{
    public class NodeController : Controller
    {
        // GET: Node
        public ActionResult Node()
        {
            // Sets the Annotation for the Node
            List<DiagramNode> Nodes = new List<DiagramNode>();
            List<DiagramNodeAnnotation> Node1 = new List<DiagramNodeAnnotation>();
            Node1.Add(new DiagramNodeAnnotation()
            {
                Content= "Annotation Text Wrapping",
                Style = new DiagramTextStyle()
                {
                    Color = "black",
                    Fill = "transparent",
                    // Sets the TextWrapping as wrap for the content
                    TextWrapping = Syncfusion.EJ2.Diagrams.TextWrap.Wrap
                },
                
            });
            Nodes.Add(new DefaultNode()
            {
                Id = "Node1",
                OffsetY = 100,
                OffsetX = 100,
                Height = 100,
                Width = 100,
                // add the Annotation for the Node
                Annotations = Node1,
            });
            ViewBag.nodes = Nodes;
            return View();
        }
    }
}