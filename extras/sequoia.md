---
layout: gallery
title: Sequoia and Kings Canyon
permalink: /extras/sequoia/
---

# Sequoia and Kings Canyon National Park

## November 2024

I took a short trip over Thanksgiving and camped and day hiked for a few days at Kings Canyon & Sequoia. This trip was also my first time hiking in the snow!
<!-- Add your pictures, text, or galleries here -->


<div class="grid">
  {% for file in site.static_files %}
      {% if file.path contains '/assets/photos/sequoia/nov_2024' and file.extname == '.jpeg' %}
          <div class="grid-item">
                    <img src="{{ file.path | relative_url }}" alt="Gallery Image">
          </div>
      {% endif %}
  {% endfor %}
</div>