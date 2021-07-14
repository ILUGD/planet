# About

LinuxDelhi planet is an rss feed aggregator which collects blog posts from people who are volunteers at ILUGD.
Blogs should be generally tech themed. If you aren't sure or you have a general blog then maybe consider setting up a tag and subscribing that feed here.

## Adding your feed 

Steps to join the planet

* Fork this repo 
* Add your feed to `src/feeds/<your_name>.njk. The file needs be in the following format

```yaml
---
title: <Your Blog Title>
link: "<link to your blog>"
feed: "<rss/atom/json feed url>"
---
```

* Create a pull request 

Note that certain static site generators like hugo may generate feeds with relative URLs. This does not conform to the [standard](https://validator.w3.org/feed/docs/error/InvalidFullLink.html) and your listings will be erroneous. Read [this answer](https://stackoverflow.com/a/48457055/2251364) for a possible solution.

## Basic Guidlines for the Planet
This Planet is kind of an impression of the ILUGD volunteers hence you are required to follow some basic guidelines and the [COC](https://github.com/ILUGD/Code-of-Conduct).

### Do not inflame 
Profanities , Prejudice and offensive political comments are not welcome . Do not make personal attacks on other people or projects in your posts.

### Posts should be constructive
Blog feeds should not contain useless, destructive and negative material. Constructive criticism is welcome and the occasional rant is understandable , but a feed where every post is critical and negative is unsuitable. This helps keep the overall vibe of the planet positive. 

Please reach out to us on our chat channels such as on [telegram](https://t.me/joinchat/AmwdvEAc48xN_P0xRaR_7Q) or [matrix](https://riot.im/app/#/room/#ilugd:matrix.org) in case you are confused or doubtful about anything.
