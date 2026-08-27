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

  <h2 class="research-section">job market paper</h2>
  {% bibliography --query @*[category=jmp] %}

  <h2 class="research-section">working papers</h2>
  {% bibliography --query @*[category=workingpaper] %}

  <h2 class="research-section">work in progress</h2>
  {% bibliography --query @*[category=inprogress] %}

  <h2 class="research-section">policy reports and briefs</h2>
  {% bibliography --query @*[category=policy] %}

</div>
