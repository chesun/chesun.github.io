---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Study Guide for Behavioral Economics
permalink: /resources/behavioral-study-guide/
---

<style>
    .pdf {
        width: 100%;
        aspect-ratio: 9 / 16;
    }

    .pdf {
        height: 100%;
        margin: 0;
        padding: 0;
    }

</style>

### A Study Guide for Behavioral Economics

Here is a study guide that I made for Professor Chakraborty's Behavioral Economics course at UC Davis while I was the TA. Disclaimer: All mistakes are mine, please use your own judgment.

{% assign guide = '/assets/resources/behavioral_study_guide.pdf' | relative_url %}

<div style="border:0; padding: 20px 0;">
  <iframe
    src="{{ guide }}"
    width="100%"
    height="700"
    style="border:0;"
    loading="lazy">
  </iframe>
  <p style="margin-top:0.5rem;">
    If the PDF doesn’t display, <a href="{{ guide }}" target="_blank" rel="noopener">open it in a new tab</a>.
  </p>
</div>
