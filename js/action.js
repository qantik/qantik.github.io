sigma.parsers.gexf('js/shortestpath1.gexf',
  {
    container: 'demo-canvas',
      settings:  {
	  autoRescale: ['nodePosition', 'edgeSize'],
        defaultLabelColor: "#000",
        defaultLabelSize: 12,
        defaultLabelHoverColor: "#fff",
        defaultHoverLabelBGColor: "#888",
        defaultLabelBGColor: "#ddd",
        minEdgeSize: 1,
        maxEdgeSize: 1,
	labelThreshold: 7,
        defaultEdgeType: 'arrow',
	// touchEnabled: false,
	mouseWheelEnabled: false,
        // doubleClickEnabled: false,
	sideMargin: 10
      }
  },

  function(s) {
      s.cameras[0].goTo({ x: 300, y: 50, angle: 0, ratio: 1.3 });
      s.graph.nodes().forEach(n => {
	  if (n.label === 'Electric Lamp')
	      n.size = 8;
	  else
	      n.size = 7;
      });
      s.settings('enableCamera', false);
      s.refresh({ skipIndexation: true });
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
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            strokeColor: "brown",

            //backgroundColor: [
            //    'rgba(255, 99, 132, 0.2)',
            //    'rgba(54, 162, 235, 0.2)',
            //    'rgba(255, 206, 86, 0.2)',
            //    'rgba(75, 192, 192, 0.2)',
            //    'rgba(153, 102, 255, 0.2)',
            //    'rgba(255, 159, 64, 0.2)'
            //],
            //borderColor: [
            //    'rgba(255,99,132,1)',
            //    'rgba(54, 162, 235, 1)',
            //    'rgba(255, 206, 86, 1)',
            //    'rgba(75, 192, 192, 1)',
            //    'rgba(153, 102, 255, 1)',
            //    'rgba(255, 159, 64, 1)'
            //],
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

var formatNumber = d3.format(",d");

var svg = d3.select("svg");

var width = +svg.attr("width"),
    height = +svg.attr("height");

var groupSpacing = 3,
    cellSpacing = 1,
    cellSize = Math.floor((width - 11 * groupSpacing) / 100) - cellSpacing,
    offset = Math.floor((width - 100 * cellSize - 90 * cellSpacing - 11 * groupSpacing) / 2);

var updateDuration = 125,
    updateDelay = updateDuration / 500;

var cell = svg.append("g")
    .attr("class", "cells")
    .attr("transform", "translate(" + offset + "," + (offset + 30) + ")")
  .selectAll("rect");

var label = svg.append("text")
    .attr("class", "label");

function update(n1) {
  var n0 = cell.size();

  cell = cell
      .data(d3.range(n1));

  cell.exit().transition()
      .delay(function(d, i) { return (n0 - i) * updateDelay; })
      .duration(updateDuration)
      .attr("width", 0)
      .remove();

  cell.enter().append("rect")
      .attr("width", 0)
      .attr("height", cellSize)
      .attr("x", function(i) {
        var x0 = Math.floor(i / 100) % 10, x1 = Math.floor(i % 10);
        return groupSpacing * x0 + (cellSpacing + cellSize) * (x1 + x0 * 10);
      })
      .attr("y", function(i) {
        var y0 = Math.floor(i / 1000), y1 = Math.floor(i % 100 / 10);
        return groupSpacing * y0 + (cellSpacing + cellSize) * (y1 + y0 * 10);
      })
    .transition()
      .delay(function(d, i) { return (i - n0) * updateDelay; })
      .duration(updateDuration)
      .attr("width", cellSize);

  label
      .attr("x", offset + groupSpacing)
      .attr("y", offset + groupSpacing)
      .attr("dy", ".71em")
    .transition()
      .duration(Math.abs(n1 - n0) * updateDelay + updateDuration / 2)
      .ease("linear")
      .tween("text", function() {
        var i = d3.interpolateNumber(n0, n1);
        return function(t) {
          this.textContent = formatNumber(Math.round(i(t)));
        };
      });
}

(function interval() {
  update(Math.floor(Math.random() * 100 * 100));
  setTimeout(interval, updateDelay * 100 * 100 + updateDuration + 1000);
})();
