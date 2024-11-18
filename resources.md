---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Resources
---

Here are some resources I created that you may find useful. 

{% for resource in site.resources %}
  <h2>
    <a href="{{ resource.url }}">
      {{ resource.title }} 
    </a>
  </h2>
{% endfor %}