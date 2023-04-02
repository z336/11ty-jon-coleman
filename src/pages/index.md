---
title: Hello
layout: page.html
permalink: /
---

{% assign postslist = collections.posts | slice: 0, 3 %}

{% include 'partials/cta.html' %}

{% include 'partials/postslist.html' %}

{% include 'partials/about.html' %}

{% include 'partials/backtotop.html' %}
