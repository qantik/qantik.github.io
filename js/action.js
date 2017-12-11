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

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: 'Number of vertices: '
};
var demo1 = new CountUp('counter1', 0, 8274991, 0, 5.0, options);
if (!demo1.error) {
  demo1.start();
} else {
  console.error(demo1.error);
}

options.prefix = 'Number of edges: '
var demo2 = new CountUp('counter2', 0, 86284396, 0, 5.0, options);
if (!demo2.error) {
  demo2.start();
} else {
  console.error(demo2.error);
}
