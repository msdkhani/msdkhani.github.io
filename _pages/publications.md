---
layout: publications
permalink: /publications/
title: Publications
description: Journal articles, conference contributions, preprints, and manuscripts in biomedical informatics and clinical data science.
years: [2026, 2025, 2024, 2023, 2022, 2021]
nav: true
nav_order: 1
---
<div class="publications">
{% for y in page.years %}
  <section class="publication-year" id="year-{{ y }}" aria-labelledby="heading-{{ y }}">
    <h2 class="year" id="heading-{{ y }}">{{ y }}</h2>
    <div class="year-papers">{% bibliography -f papers -q @*[year={{y}}]* %}</div>
  </section>
{% endfor %}
</div>
