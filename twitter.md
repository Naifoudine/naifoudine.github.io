---
title: My page
tweets:
  - https://twitter.com/dhh
  - https://twitter.com/rails
a_tweet: https://twitter.com/rubygems/status/518821243320287232
---

{% for tweet in page.tweets %}
  {% twitter tweet align=center width=350 limit=3%}
{% endfor %}

{% twitter page.a_tweet %}
