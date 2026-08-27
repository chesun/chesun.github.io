---
layout: page
permalink: /resources/ucdavis-beamer-template/
title: UC Davis beamer template
description:
nav: false
---

### a LaTeX beamer template for UC Davis

[Here's what it looks like.](/assets/resources/ucdavis_theme_test.pdf){:target="_blank"}

Get it [here](https://github.com/chesun/latex_templates/tree/main){:target="_blank"}.

{% assign template_pdf = '/assets/resources/ucdavis_theme_test.pdf' | relative_url %}

<div style="border:0; padding: 10px 0;">
  <iframe
    src="{{ template_pdf }}"
    width="100%"
    height="600"
    style="border:0; aspect-ratio: 16 / 9;"
    loading="lazy">
  </iframe>
  <p style="margin-top:0.5rem;">
    If the PDF doesn't display, <a href="{{ template_pdf }}" target="_blank" rel="noopener">open it in a new tab</a>.
  </p>
</div>
