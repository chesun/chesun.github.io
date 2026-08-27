---
layout: page
permalink: /cv/
title: cv
description:
nav: true
nav_order: 3
---

{% assign cv = '/assets/documents/Christina_Sun_CV.pdf' | relative_url %}

<div style="border:0; padding: 10px 0;">
  <iframe
    src="{{ cv }}"
    width="100%"
    height="800"
    style="border:0;"
    loading="lazy">
  </iframe>
  <p style="margin-top:0.5rem;">
    If the PDF doesn't display, <a href="{{ cv }}" target="_blank" rel="noopener">open it in a new tab</a>.
  </p>
</div>
