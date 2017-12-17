---
layout: default
---

### Here comes the subtitle and stuff bladehblada...

---

<h2 id="counter1"></h2>
<h2 id="counter2"></h2>

## What are the most influential United States patents?

---

This blog was written as part of the CS-401 Applied data analysis course at EPFL,
taught in the autumn of 2017. 

The purpose of this blog is to present our analysis of the patent citations provided by
the [patentsview.org](http://www.patentsview.org) website of the United States Patent
and Trademark Office ([USPTO](https://www.uspto.gov/)). 

The content of this blog is intentionally high-level. Please refer to our
[python notebook](https://nbviewer.jupyter.org/github/qantik/prayingmantissa/blob/master/project/patents.ipynb), if you are interested in viewing a more thorough and complete analysis.

--- 

### What is a patent and what are the above mentioned citations?

The USTPO defines a patent as a property right granted by the Government of
the United States of America to an inventor "to exclude others from making,
using, offering for sale, or selling the invention throughout the United States or
importing the invention into the United States" for a limited time in exchange for
public disclosure of the invention when the patent is granted.

The process of obtaining a patent from the USPTO is a lengthy and rigorous procedure.
While applying for a patent a list of cited patents must be provided. From patents
view.org we got the complete list of all patent citations from 1976 up to the current year.

### How can a list of citations be analyzed?

An important subject in mathematics is the field of graph theory. The introductory
paragraph of the wikipedia article on graph theory says the following: 

"In mathematics, graph theory is the study of graphs, which are mathematical structures 
used to model pairwise relations between objects. A graph in this context is made up
of vertices, nodes, or points which are connected by edges, arcs, or lines. A graph may
be undirected, meaning that there is no distinction between the two vertices associated
with each edge, or its edges may be directed from one vertex to another."

In our model the nodes are represented by patents and the edges by citations. Our
citations graph is directed, because it is important that one node cites the other
and not vice versa.

### What was the goal of this project?

The innovation of technology is a fast paced and intertwined process. During our
undergraduate education in computer science and communication systems we learnt about
landmark inventions and innovations, that led to the connected world we live in. Upon
looking into the data we quickly found these inventions in the citations graph. For example
Stephen Wozniak’s Microcomputer for use with video display (#4136359), which led to the
famous Apple II computer, or Google's Page Rank algorithm (#6285999), which lies at the
foundation of Google's rise to power. 

These findings led us to the question around which this project evolves, which is:

"Using graph theoretic tools, can we give an educated opinion on what we think were
the most influential United States patents in recent history?"

## Some preliminary facts
[Solo](http://chibicode.github.io/solo) is a Jekyll theme that supports **single-page websites** only, but supports them well. Yes, it's responsive.

Looking for a more standard Jekyll theme? Try out [Shiori](http://github.com/ellekasai/shiori) theme, which has Bootstrap integration.

When $$f(x) = x$$ then identity

## Counter

<div style="float:left; margin-right: 60px;">
<svg id="grid" width="550" height="600"></svg>
</div>
<div style="height: 350px; width: 150px; float:left;text-align:center;">
  <div id="counter3" style="position: relative; top:60%; font-size: 400%"></div>
</div>

<img src="static/pagerank_bfs.gif" style="border-style: none" />

## This is a SigmaJS graph

<div id="parent" style="width: 900px; height: 750px;">
  <div id="network-shortestpaths" style="position: absolute; height: 675px; width: 950px"></div>
</div>

<div id="parent" style="width: 900px; height: 500px;">
  <div id="network-sinks" style="position: absolute; height: 650px; width: 950px"></div>
</div>

<div id="wrapper" style="height: 750px; width: 750px;">
  <canvas id="plot-patents-year" width="300px" height="300px"></canvas>
</div>

## The case against time and date

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit auctor laoreet.
Donec hendrerit ex nisl, eu ornare purus tempor at. Vestibulum ante ipsum primis in
faucibus orci luctus et ultrices posuere cubilia Curae; Nullam at cursus sem. Aenean at
mauris ipsum. Vestibulum metus augue, pulvinar vitae tincidunt at, mattis vitae leo.
Sed pellentesque et tellus tristique pellentesque. Mauris congue sodales nunc a tempor.

Nulla aliquam velit sed quam fermentum eleifend. Mauris sem nulla, tincidunt eget arcu in,
vestibulum fermentum dolor. Curabitur diam enim, laoreet sed justo sed, euismod aliquet
enim. Vivamus quis dapibus tortor. Quisque placerat varius magna, sed facilisis est
tincidunt ac. Donec sollicitudin cursus magna, porttitor mattis tellus molestie ut. Donec
commodo sapien sapien, at pellentesque tellus fringilla et. Duis pellentesque leo quis
sodales mollis. Mauris bibendum consequat purus, et pharetra quam tempor vel. Nunc tincidunt
lacus vitae tortor dapibus, id pretium magna interdum. Etiam posuere porta nibh, ac
dapibus sem malesuada ut. Donec cursus risus eu rutrum sagittis. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit auctor laoreet.
Donec hendrerit ex nisl, eu ornare purus tempor at. Vestibulum ante ipsum primis in
faucibus orci luctus et ultrices posuere cubilia Curae; Nullam at cursus sem. Aenean at
mauris ipsum. Vestibulum metus augue, pulvinar vitae tincidunt at, mattis vitae leo.
Sed pellentesque et tellus tristique pellentesque. Mauris congue sodales nunc a tempor.

Nulla aliquam velit sed quam fermentum eleifend. Mauris sem nulla, tincidunt eget arcu in,
vestibulum fermentum dolor. Curabitur diam enim, laoreet sed justo sed, euismod aliquet
enim. Vivamus quis dapibus tortor. Quisque placerat varius magna, sed facilisis est
tincidunt ac. Donec sollicitudin cursus magna, porttitor mattis tellus molestie ut. Donec
commodo sapien sapien, at pellentesque tellus fringilla et. Duis pellentesque leo quis
sodales mollis. Mauris bibendum consequat purus, et pharetra quam tempor vel. Nunc tincidunt
lacus vitae tortor dapibus, id pretium magna interdum. Etiam posuere porta nibh, ac
dapibus sem malesuada ut. Donec cursus risus eu rutrum sagittis. 


<div style="overflow:auto;">
  <div style="width: 450px; height: 400px; float:left;">
    <canvas id="plot-patents-months" width="350px" height="300px"></canvas>
  </div>

  <div style="width:450px; height: 400px; float:left;">
    <canvas id="plot-patents-days" width="350px" height="300px"></canvas>
  </div>
</div>

## In-degrees

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit auctor laoreet.
Donec hendrerit ex nisl, eu ornare purus tempor at. Vestibulum ante ipsum primis in
faucibus orci luctus et ultrices posuere cubilia Curae; Nullam at cursus sem. Aenean at
mauris ipsum. Vestibulum metus augue, pulvinar vitae tincidunt at, mattis vitae leo.
Sed pellentesque et tellus tristique pellentesque. Mauris congue sodales nunc a tempor.

Nulla aliquam velit sed quam fermentum eleifend. Mauris sem nulla, tincidunt eget arcu in,
vestibulum fermentum dolor. Curabitur diam enim, laoreet sed justo sed, euismod aliquet
enim. Vivamus quis dapibus tortor. Quisque placerat varius magna, sed facilisis est
tincidunt ac. Donec sollicitudin cursus magna, porttitor mattis tellus molestie ut. Donec
commodo sapien sapien, at pellentesque tellus fringilla et. Duis pellentesque leo quis
sodales mollis. Mauris bibendum consequat purus, et pharetra quam tempor vel. Nunc tincidunt
lacus vitae tortor dapibus, id pretium magna interdum. Etiam posuere porta nibh, ac
dapibus sem malesuada ut. Donec cursus risus eu rutrum sagittis. 

Nulla aliquam velit sed quam fermentum eleifend. Mauris sem nulla, tincidunt eget arcu in,
vestibulum fermentum dolor. Curabitur diam enim, laoreet sed justo sed, euismod aliquet
enim. Vivamus quis dapibus tortor. Quisque placerat varius magna, sed facilisis est
tincidunt ac. Donec sollicitudin cursus magna, porttitor mattis tellus molestie ut. Donec
commodo sapien sapien, at pellentesque tellus fringilla et. Duis pellentesque leo quis
sodales mollis. Mauris bibendum consequat purus, et pharetra quam tempor vel. Nunc tincidunt
lacus vitae tortor dapibus, id pretium magna interdum. Etiam posuere porta nibh, ac
dapibus sem malesuada ut. Donec cursus risus eu rutrum sagittis. 

<div id="wrapper" style="height: 750px; width: 750px;">
  <canvas id="plot-citations-indegree" width="300px" height="300px"></canvas>
</div>


## Don't use `<h1>` tags

Wthin `index.md`, do not use `<h1>` tags - `<h1>` is reserved for the site title.

### Supported Tags

Solo supports lists, `<hr>`s, `<table>`s,

> blockquotes, and...

~~~html
<pre>code blocks with syntax highlighting.</pre>
~~~

## Authors

* Roman Bachmann
* Michael Allemann
* Andrea Caforio
