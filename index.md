---
layout: default
---

### Here comes the subtitle...

---

[Solo](http://chibicode.github.io/solo) is a Jekyll theme that supports **single-page websites** only, but supports them well. Yes, it's responsive.

Looking for a more standard Jekyll theme? Try out [Shiori](http://github.com/ellekasai/shiori) theme, which has Bootstrap integration.

When $$f(x) = x$$ then identity

## Solo is useful if...

* You want to create an "about me" page from a single markdown file and host it under a custom domain name.
* You want to create a single-page website that's mostly text, like [Know Your Company](https://knowyourcompany.com/).
* You want to share a single markdown file and tried GitHub Gist ([example](https://gist.github.com/dypsilon/5819504)), but would like something nicer-looking.
* You want something like GitHub's [automatic page generator](http://pages.github.com/) for a non-code repository.

This page itself is built with Solo. It's generated from [this markdown file](https://github.com/chibicode/solo/blob/gh-pages/_includes/index.md).

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
