const settings = {
    autoRescale: ['nodePosition', 'edgeSize'],
    defaultLabelColor: "#000",
    defaultLabelSize: 12,
    defaultLabelHoverColor: "#fff",
    defaultHoverLabelBGColor: "#888",
    defaultLabelBGColor: "#ddd",
    minEdgeSize: 1,
    maxEdgeSize: 2,
    labelThreshold: 10,
    defaultEdgeType: 'arrow',
    touchEnabled: false,
    mouseWheelEnabled: false,
    doubleClickEnabled: false,
    sideMargin: 10
};

sigma.parsers.gexf('static/shortestpath1.gexf', {
    container: 'network-shortestpaths',
    settings: settings
  },
  function(s) {
      s.cameras[0].goTo({ x: 100, y: 0, angle: 0, ratio: 1.0 });
      s.graph.nodes().forEach(n => {
	  if (n.label.length > 60)
	      n.label = n.label.substring(0, 60) + '...';
          n.size = 7;
      });
      s.graph.edges().forEach(e => {
	  e.size = 2; 
      });
      s.settings('enableCamera', false);
      s.refresh({ skipIndexation: true });
  }
);

sigma.parsers.gexf('static/patgraph3_3.gexf', {
    container: 'network-sinks',
    settings: settings
  },
  function(s) {
      s.cameras[0].goTo({ x: 150, y: 50, angle: 0, ratio: 1.5 });
      s.graph.nodes().forEach(n => {
	  n.size = 7;
      });
      s.settings('enableCamera', false);
      s.refresh({ skipIndexation: true });
  }
);
