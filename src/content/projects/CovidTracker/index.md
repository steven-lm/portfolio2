---
title: "Covid Tracker"
description: "Script that monitored COVID-19 trends by web scrapping and processing data with Azure."
date: "Sep 5 2020"
repoURL: "https://github.com/steven-lm/Azure-IoT"
repoText: "GitHub"
---
I built this during the peak of COVID to track cases across NSW in real-time. The interesting part was automating the entire data pipeline - I wrote a Python script that scrapes multiple websites using Selenium, extracts the latest COVID stats then feeds them directly into Azure.

The technical challenge was handling the inconsistent data formats across different health department websites. I ended up building a pretty robust web scraping system that could reliably extract data even when websites changed their layouts or update frequencies. The script collects everything from total case numbers to regional breakdowns and active cases.

Once the data reaches Azure, it flows through Stream Analytics for processing before being visualized in Power BI.