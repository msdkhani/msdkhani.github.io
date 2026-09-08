---
layout: research-index
title: Research
permalink: /projects/
description: Methods and tools for understanding clinical data, language, and neural activity.
nav: true
nav_order: 2
---
<div class="research-catalog">{% assign projects = site.projects | where_exp: 'project', 'project.archived != true' | sort: 'importance' %}{% for project in projects %}{% assign method = site.data.project_methods[project.method_id] %}<a class="catalog-entry" href="{{ project.url | relative_url }}"><div class="catalog-art"><img src="{{ '/assets/img/method-' | append: method.image | append: '.svg' | relative_url }}" width="800" height="500" alt="Conceptual illustration for {{ project.title }}" loading="lazy"></div><div><p class="eyebrow">{{ project.topic }} / {{ project.status }}</p><h2>{{ project.title }}</h2><p>{{ project.description }}</p><span class="work-open">Explore the method</span></div></a>{% endfor %}</div>
