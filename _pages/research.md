---
layout: page
permalink: /research/
title: research
description:
nav: true
nav_order: 1
---

<!-- Papers are defined in _bibliography/papers.bib; each entry's custom `category` field assigns it to a section below. -->

<div class="publications">

  <h2 class="bibliography">Job Market Paper</h2>
  {% bibliography --query @*[category=jmp] %}

  <h2 class="bibliography">Working Papers</h2>
  {% bibliography --query @*[category=workingpaper] %}

  <h2 class="bibliography">Work in Progress</h2>
  {% bibliography --query @*[category=inprogress] %}

  <h2 class="bibliography">Policy Reports and Briefs</h2>
  {% bibliography --query @*[category=policy] %}

</div>
