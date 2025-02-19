---
title: "Censor"
description: "A webpage that uses Microsoft Cognitive services to blur out faces in user uploaded photos."
date: "Oct 1 2020"
repoURL: "https://github.com/steven-lm/Censor"
repoText: "GitHub"
---

![Censor Preview](/censor.jpg)

This was a fun project that taught me a lot about computer vision concepts as well as building robust image processing pipelines.

Under the hood, I used Microsoft's Cognitive services API to detect the faces. I then wrote a custom masking system that generates precise elliptical masks for each detected face, making sure to preserve the image quality of the surrounding areas. The detection coordinates from the API are used to dynamically create these masks, which are then used to guide a Gaussian blur effect. 

One interesting problem I had to solve was ensuring the face detection and blurring remained accurate across different image resolutions and face angles - the solution involved fine-tuning the mask generation and blur parameters based on the Cognitive service API confidence scores.