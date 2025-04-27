---
layout: gallery
title: Zion National Park
permalink: /extras/zion/
---

# Zion National Park

## Winter Holidays 2024

Zion was my second stop on my solo road trip over the holidays in December 2024. The drive over from Great Basin was desolate but surprisingly scenic. This was my first time visiting Zion and I found the intricate dance of water, sand, wind, and sunlight mesmerizing. During this trip was also the first time I went backpacking (and I decided to do it solo!): an overnight trip into the Kolob Canyons. It was breathtaking.

<!-- Add your pictures, text, or galleries here -->

### Kolob Canyons
As I venture deeper into the canyon, the red sandstone walls start closing in. The golden sunlight of the setting sun gets set on fire by the sandstone. After setting up my home for the night at camp 11, I went on to explore the rest of the trail. The camp was only a mile or so from the end of the trail, where the two forks of La Verkin Creek meet. I also saw what a ranger later told me was likely mountain lion prints on the trail (see photos)!
<div class="grid" >
  {% for file in site.static_files %}
      {% if file.path contains '/assets/photos/zion/dec_2024/kolob' and file.extname == '.jpeg' %}
          <div class="grid-item">
                    <img src="{{ file.path | relative_url }}" alt="Gallery Image">
          </div>
      {% endif %}
  {% endfor %}
</div>


### The Watchman

<div class="grid">
  {% for file in site.static_files %}
      {% if file.path contains '/assets/photos/zion/dec_2024/watchman' and file.extname == '.jpeg' %}
          <div class="grid-item">
                    <img src="{{ file.path | relative_url }}" alt="Gallery Image">
          </div>
      {% endif %}
  {% endfor %}
</div>