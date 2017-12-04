var G = new jsnx.Graph();
G.addNode(1, {count: 12});
G.addNode(2, {count: 8});
G.addNode(3, {count: 15});
G.addEdgesFrom([[1,2],[2,3]]);

jsnx.draw(G, {element:'#demo-canvas'});
