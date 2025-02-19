---
title: "Genre Classifier"
description: "Trained models to accurately classify multiple book genres using its blurb."
date: "May 24 2020"
repoURL: "https://github.com/steven-lm/Genre-Classifier"
repoText: "GitHub"
---

![Genre Classifier Preview](/genre.png)

I trained models to predict multiple book genres just from their summaries. The project involved building three different models: a Random Forest classifier, Logistic Regression with OneVsRest, and a Feedforward Neural Network.

The data processing was tedious, it reminded me that a majority of AI development is just cleaning data. I had to clean over 16,000 book summaries across various sources and handle multi-label classification for hundreds of genres. One interesting challenge was dealing with genre imbalance, where I ended up merging subgenres and filtering out low-frequency categories to improve model accuracy. The text preprocessing involved several stages including TF-IDF vectorization and sequence padding for the neural network.

The neural network unsurprisingly performed best, achieving strong F1 scores comparable to similar text classification systems. I built testing functions to analyze any book summary, making it practical for real-world use. For example, when testing with "The Woman in White" (which wasn't in the training data), the model accurately predicted its Gothic/Mystery genres. The project demonstrated the potential for building more sophisticated book recommendation systems based on content analysis.