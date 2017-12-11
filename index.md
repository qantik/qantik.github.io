---
layout: default
---

### Here comes the subtitle and stuff...

---

<h2 id="counter1">#Patents ~</h2>
<h2 id="counter2">#Patents ~</h2>

## What are the most influential United States patents?

---

This blog was written as part of the CS-401 Applied data analysis course at EPFL, taught in the autumn of 2017. 

The purpose of this blog is to present our analysis of the patent citations provided by the [patentsview.org](http://www.patentsview.org) website of the United States Patent and Trademark Office ([USPTO](https://www.uspto.gov/)). 

The content of this blog is intentionally high-level. Please refer to our [python notebook](https://nbviewer.jupyter.org/github/qantik/prayingmantissa/blob/master/project/patents.ipynb), if you are interested in viewing a more thorough and complete analysis.

--- 

### What is a patent and what are the above mentioned citations?

The USTPO defines a patent as a property right granted by the Government of the United States of America to an inventor "to exclude others from making, using, offering for sale, or selling the invention throughout the United States or importing the invention into the United States" for a limited time in exchange for public disclosure of the invention when the patent is granted.

The process of obtaining a patent from the USPTO is a lengthy and rigorous procedure. While applying for a patent a list of cited patents must be provided. From patents view.org we got the complete list of all patent citations from 1976 up to the current year.

### How can a list of citations be analyzed?

An important subject in mathematics is the field of graph theory. The introductory paragraph of the wikipedia article on graph theory says the following: 

"In mathematics, graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects. A graph in this context is made up of vertices, nodes, or points which are connected by edges, arcs, or lines. A graph may be undirected, meaning that there is no distinction between the two vertices associated with each edge, or its edges may be directed from one vertex to another."

In our model the nodes are represented by patents and the edges by citations. Our citations graph is directed, because it is important that one node cites the other and not vice versa.

### What was the goal of this project?

The innovation of technology is a fast paced and intertwined process. During our undergraduate education in computer science and communication systems we learnt about landmark inventions and innovations, that led to the connected world we live in. Upon looking into the data we quickly found these inventions in the citations graph. For example Stephen Wozniak’s Microcomputer for use with video display (#4136359), which led to the famous Apple II computer, or Google's Page Rank algorithm (#6285999), which lies at the foundation of Google's rise to power. 

These findings led us to the question around which this project evolves, which is:

"Using graph theoretic tools, can we give an educated opinion on what we think were the most influential United States patents in recent history?"

## Some preliminary facts
[Solo](http://chibicode.github.io/solo) is a Jekyll theme that supports **single-page websites** only, but supports them well. Yes, it's responsive.

Looking for a more standard Jekyll theme? Try out [Shiori](http://github.com/ellekasai/shiori) theme, which has Bootstrap integration.

When $$f(x) = x$$ then identity

## This is a SigmaJS graph

<div id="parent" style="width: 1000px; height: 350px;">
  <div id="demo-canvas" style="position: absolute; height: 350px; width: 1000px"></div>
</div>

<svg width="600px" height="100px">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#000" />
    </marker>
  </defs>
  <text x="325" y="35" font-family="Courier" font-size="15">Time</text>
  <line x1="250" y1="50" x2="450" y2="50" stroke="#000" stroke-width="4" marker-end="url(#arrow)" />
</svg>

## This is a ChartJS plot
<canvas id="myChart" width="300" height="300"></canvas>

## Usage

First, [install Jekyll](http://jekyllrb.com/docs/installation/). Then download Solo from its [GitHub Repository](https://github.com/chibicode/solo). Start Jekyll and you should see this page up and running.

**The main file you'll be editing is `index.md`**. This becomes the content for the page.

### Other Files

* Edit `_config.yml` to change the site's title and description.
* Edit `_includes/head.html` to add custom code to `<head>`.
* Edit `_includes/scripts.html` to add custom code before `</body>`.
* Edit `CNAME` to host on a custom domain.
* Edit `README.md` before pushing your code.

### Don't use `<h1>` tags

Wthin `index.md`, do not use `<h1>` tags - `<h1>` is reserved for the site title.

### Supported Tags

Solo supports lists, `<hr>`s, `<table>`s,

> blockquotes, and...

~~~html
<pre>code blocks with syntax highlighting.</pre>
~~~

### Keep Solo up to date

Instead of downloading, you can [fork Solo](https://github.com/chibicode/solo/fork) and use the "upstream" strategy described on [this page](https://help.github.com/articles/fork-a-repo) to keep Solo up to date.

## Authors

* Roman Bachmann
* Michael Allemann
* Andrea Caforio
