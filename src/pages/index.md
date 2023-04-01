---
title: Hello
layout: page.html
permalink: /
---

==**My name is Jon**== I am a ==**technical writer**== and ==**web designer**==. I am interested in ==**documentation**== and ==**accessible**==, ==**inclusive**== websites.

This site is not tracking you, but you can subscribe to the [RSS](/feed/feed.xml/) feed if would like to track it.

{% assign postslist = collections.posts | slice: 0, 3 %}

{% include 'partials/postslist.html' %}

{% include 'partials/about.html' %}

{% include 'partials/backtotop.html' %}
