---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: CV
permalink: /cv/

---


{% assign cv = '/assets/documents/Christina_Sun_CV.pdf' | relative_url %}

<div style="border:0; padding: 20px 0;">
  <iframe
    src="{{ cv }}"
    width="100%"
    height="700"
    style="border:0;"
    loading="lazy">
  </iframe>
  <p style="margin-top:0.5rem;">
    If the PDF doesn’t display, <a href="{{ cv }}" target="_blank" rel="noopener">open it in a new tab</a>.
  </p>
</div>