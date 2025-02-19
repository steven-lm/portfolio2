---
title: "Jump To Recipe"
description: "Published Chrome extension that extracts recipes. Currently has 4,000+ weekly users."
date: "Feb 17 2022"
demoURL: "https://chrome.google.com/webstore/detail/jump-to-recipe/gmkblbmghnolinkhfmkidocbojcfiejm?hl=en-GB&authuser=0"
demoText: "View Extension"
repoURL: "https://github.com/steven-lm/Jump-To-Recipe"
repoText: "GitHub"
---

<img src="/jumptorecipe.png" alt="Jump To Recipe Chrome Extension" style="height: 250px; width: auto; margin: 0 auto;" />

I got tired of having to scroll past ads and life stories whenever looking at recipes so I published a Chrome extension that instantly extracts recipes from any recipe page or blog, stripping away all the unnecessary content. There was a lot of complexity in retrieving the correct fields (ingredients, steps, yield, etc..) and recipe websites often bury their data in complex nested structures, use inconsistent Schema markup or split recipe information across multiple DOM elements.

To solve this, I built a multi-stage parsing system. First, it scans for recipe Schema markup in the page's JSON-LD scripts. Since many sites implement this incorrectly, I wrote a recursive search function that digs through nested Schema objects, handling scenarios where recipe data might be mislabeled or buried several layers deep. The parser then carefully extracts and validates each component - handling edge cases like missing time formats, incomplete ingredient lists, or malformed instruction steps.

I published the extension in 2022 and it's now being used by over 4,000 weekly active users!