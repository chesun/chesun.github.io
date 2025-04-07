---
layout: gallery
title: Desolation Wilderness
permalink: /extras/desolation-wilderness/
---

# Desolation Wilderness

<div class="grid">
  {% for file in site.static_files %}
      {% if file.path contains '/assets/photos/desolation/winter_2025' and file.extname == '.jpeg' %}
          <div class="grid-item">
                    <img src="{{ file.path | relative_url }}" alt="Gallery Image">
          </div>
      {% endif %}
  {% endfor %}
</div>