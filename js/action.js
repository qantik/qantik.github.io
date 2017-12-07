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

jsnx.draw(G,  {element:'#demo-canvas', width: 500, height: 500, nodeStyle:{fill: 'red'}});

console.log(MathJax);
//MathJax.Hub.Config({styles: {
//        ".MathJax": {
//            color: "#000000"
//        }
//    }
//    });
