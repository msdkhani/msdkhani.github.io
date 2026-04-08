---
layout: page
title: "Explainable AI for Clinical Risk Prediction"
description: "SHAP-based temporal risk pathways and LLM-driven natural language explanations for clinical prediction models."
img: assets/img/publication_preview/ExplainableAI_BPPV.jpg
importance: 3
category: work
---

## Overview

This research addresses one of the most critical barriers to AI adoption in healthcare: the **black-box problem**. We develop frameworks that combine **explainable AI (XAI)** methods with **Large Language Models** to make clinical prediction models transparent, trustworthy, and actionable for healthcare providers.

### The Problem

Machine learning models can achieve impressive accuracy in predicting clinical outcomes — from fall risk to disease progression — but clinicians are often reluctant to trust predictions they cannot understand. Traditional feature importance methods (e.g., SHAP values) produce numerical outputs that are difficult to interpret without statistical expertise.

### Our Approach

We bridge the gap between complex AI outputs and clinical decision-making through a two-stage approach:

**Stage 1: Temporal Explainability**
- Apply **SHAP (SHapley Additive exPlanations)** to temporal prediction models to identify which features contribute most to risk at different time points
- Develop **temporal risk pathways** that reveal how feature importance evolves over a patient's care journey
- Combine with **LIME** and **attention visualization** for multi-perspective explainability

**Stage 2: LLM-Powered Interpretation**
- Use large language models to translate numerical SHAP values into **clear, natural language explanations**
- Generate **patient-specific risk narratives** that clinicians can review alongside predictions
- Provide **actionable recommendations** tied to the most influential risk factors

### Applications

- **Fall Risk Prediction** — Identifying temporal risk pathways for elderly patient falls, published in *GeroScience* (2026)
- **BPPV Risk Assessment** — Personalized explainable predictions for benign paroxysmal positional vertigo, published in *Health Information Science and Systems* (2024)
- **Antidepressant Discontinuation** — Risk detection with interpretable feature importance, published in *Frontiers in AI* (2023)

### Key Innovation

Our system doesn't just explain *what* the model predicts — it explains *why* in terms clinicians can act on. By combining XAI methods with LLM interpretation, we reduce the cognitive load on healthcare providers and enable trust-based clinical decision-making.

**Recognition:** This work contributed to the **AMIA Best Reviewer Award (2024)** and has been presented at **ICMHI 2025** and **AMIA Annual Symposium**.
