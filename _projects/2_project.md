---
layout: page
title: "Sequential Pattern Transformer (SPT)"
description: "A generative and interpretable framework for predicting disease trajectories using transformer architectures."
img: assets/img/publication_preview/spt_preview.png
importance: 2
category: work
---

## Overview

The **Sequential Pattern Transformer (SPT)** is a novel deep learning framework designed to predict disease trajectories by modeling temporal patterns in patient health records. Unlike traditional approaches that treat health events as static features, SPT captures the **sequential, time-dependent nature** of disease progression.

### The Problem

Predicting how a patient's health will evolve over time is one of the most challenging problems in clinical informatics. Traditional machine learning models often flatten temporal data into static feature vectors, losing critical information about the **order and timing** of clinical events. This limits their ability to forecast future diagnoses, complications, and care needs.

### Our Approach

SPT leverages a **transformer architecture** — the same family of models behind modern large language models — but adapts it specifically for clinical event sequences:

- **Sequential Pattern Mining** — Extracts frequent temporal patterns from electronic health records to create a structured vocabulary of disease progressions
- **Generative Prediction** — Produces probabilistic forecasts of future diagnoses, enabling clinicians to anticipate emerging conditions
- **Interpretable Attention** — Attention weights reveal which prior events most influence each prediction, providing built-in explainability

### Key Features

| Feature | Description |
|---------|-------------|
| **Temporal Encoding** | Time-aware positional embeddings that capture irregular intervals between clinical events |
| **Multi-horizon Forecasting** | Predictions at multiple future time points (30-day, 90-day, 1-year) |
| **Interpretability** | Attention-based explanations showing which historical events drive each prediction |
| **Scalability** | Validated on datasets with millions of patient records |

### Technical Architecture

The framework consists of three stages:

1. **Pattern Discovery** — Sequential pattern mining identifies common disease progression pathways from large-scale EHR data
2. **Sequence Encoding** — Patient histories are encoded as ordered sequences of clinical events with temporal embeddings
3. **Transformer Prediction** — A modified transformer decoder generates probability distributions over future diagnoses

### Impact

SPT has been validated on real-world datasets and demonstrates superior performance compared to traditional approaches (LSTM, GRU) for disease trajectory prediction. The framework's interpretable design makes it suitable for clinical deployment where understanding the "why" behind predictions is essential for trust and adoption.

**Published in:** *Neural Computing and Applications* (2025)
[Read the paper →](https://doi.org/10.1007/s00521-025-11695-4)
