---
layout: page
permalink: /extras/
title: extras
description:
nav: true
nav_order: 5
---

## Photography

I am an avid photographer. I love landscape photography the most, but when I can't
travel, I will also shoot personal projects in my local areas. My photographs
cover both wild and human-altered landscapes, and I shoot both digital and film.

- [My landscape portfolio](https://christinasun.org/landscape){:target="_blank"}
- [Personal projects](https://christinasunphoto.com/anthology){:target="_blank"}

## Outdoors and Travel

The great outdoors are where I feel closest to myself, and the wilderness holds a special place in my heart.
Here's where I share pictures and stories from my recent hikes and backpacking trips.

<!-- Trip cards: any page under /extras/ with a `preview` front matter field gets a card here. -->
<div class="trip-card-grid">
  {% assign trip_pages = site.pages | where_exp: "p", "p.preview" | sort: "title" %}
  {% for p in trip_pages %}
    {% if p.url contains '/extras/' %}
      <a href="{{ p.url | relative_url }}" class="trip-card-link">
        <div class="card hoverable">
          <img src="{{ p.preview | relative_url }}" class="card-img trip-card-img" alt="{{ p.title }}" loading="lazy">
          <div class="card-body">
            <h3 class="card-title">{{ p.title }}</h3>
            <p class="card-text">{{ p.card_subtitle }}</p>
          </div>
        </div>
      </a>
    {% endif %}
  {% endfor %}
</div>

<style>
  .trip-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1rem 0 1.5rem;
  }
  @media (max-width: 800px) {
    .trip-card-grid {
      grid-template-columns: 1fr;
    }
  }
  .trip-card-link,
  .trip-card-link:hover {
    text-decoration: none;
  }
  .trip-card-grid .card {
    height: 100%;
  }
  .trip-card-img {
    aspect-ratio: 3 / 2;
    object-fit: cover;
    width: 100%;
  }
  .trip-card-grid .card-title {
    font-size: 1.1rem;
    margin-bottom: 0.15rem;
  }
  .trip-card-grid .card-text {
    font-size: 0.9rem;
    margin-bottom: 0;
    opacity: 0.7;
  }
</style>

## Cycling

I am also a cyclist who rides road and gravel. Feel free to check out my
[Strava](https://www.strava.com/athletes/35905919){:target="_blank"} for my rides, and my
[Komoot](https://www.komoot.com/user/1500847933178/tours?type=planned){:target="_blank"} for some
routes that I planned.
