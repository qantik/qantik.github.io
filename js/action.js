var G = new jsnx.Graph();
G.addNode(1, {count: 12});
G.addNode(2, {count: 8});
G.addNode(3, {count: 15});
G.addEdgesFrom([[1,2],[2,3]]);

//function draw(n) {
//    if (n % 2 == 0)
//        jsnx.draw(G, {element:'#demo-canvas', nodeStyle:{fill: 'red'}});
//    else
//        jsnx.draw(G, {element:'#demo-canvas', nodeStyle:{fill: 'blue'}});
//}
//
//var counter = 0;
//window.onclick = () => {
//    draw(counter++);
//}

//jsnx.draw(G,  {element:'#demo-canvas', width: 500, height: 500, nodeStyle:{fill: 'red'}});

//MathJax.Hub.Config({styles: {
//        ".MathJax": {
//            color: "#000000"
//        }
//    }
//    });
//
//

sigma.parsers.gexf(
  'js/patents_grad.gexf',
  { // Here is the ID of the DOM element that
    // will contain the graph:
    container: 'demo-canvas',
      settings:  {
          //autoResize: true,
          //enableCamera: true,
          zoomingRatio: 1.0,
          minEdgeSize: 3,
          maxEdgeSize: 4,
          defaultEdgeType: 'arrow',
      }
  },
  function(s) {
    // This function will be executed when the
    // graph is displayed, with "s" the related
    // sigma instance.
    //s.renderers[0].resize();
    s.cameras[0].goTo({ x: 200, y: 0, angle: 0, ratio: 1.5 });
    s.refresh();
  }
);

window.onload = () => {
    var canvas = document.getElementById("he");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Hello World",10,50); 
}
