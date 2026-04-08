---
layout: page
title: "LLM-Based Clinical Decision Support"
description: "Leveraging large language models for clinical text understanding, synthetic data generation, and retrieval-augmented clinical applications."
img: assets/img/publication_preview/LLMCARE.png
importance: 3
category: work
---

## Overview

This project explores the application of **Large Language Models (LLMs)** in healthcare — from clinical text understanding and medical question answering to synthetic data generation and safety evaluation. We develop LLM-based agentic systems that enhance clinical workflows while maintaining rigorous safety and reliability standards.

### The Problem

Healthcare generates vast amounts of unstructured text — clinical notes, discharge summaries, pathology reports, research literature — that contain critical information for patient care. Traditional NLP methods struggle with the complexity and nuance of medical language. Meanwhile, modern LLMs show remarkable capabilities but raise concerns about hallucination, bias, and safety in clinical settings.

### Our Approach

We develop and evaluate LLM applications across several domains:

**Retrieval-Augmented Generation (RAG)**
- Build knowledge-grounded clinical assistants that retrieve relevant evidence before generating responses
- Integrate clinical guidelines, drug databases, and research literature into LLM workflows
- Reduce hallucination risk through evidence-based response generation

**Synthetic Data Generation**
- Generate realistic synthetic clinical data for training and validation when real patient data is unavailable or restricted
- Develop privacy-preserving data augmentation techniques for rare conditions and underrepresented populations
- Validate synthetic data quality against real-world distributions

**Clinical Education**
- Design LLM-enhanced simulation platforms for medical training
- Create interactive clinical scenarios with adaptive difficulty and personalized feedback
- Support case-based learning with AI-generated patient presentations

**Safety Evaluation Frameworks**
- Systematic evaluation of LLM reliability in clinical contexts
- Bias detection across demographics and clinical specialties
- Hallucination detection and mitigation strategies specific to medical applications

### Key Technologies

- **Fine-tuning**: LoRA and QLoRA for efficient adaptation to clinical domains
- **Frameworks**: LangChain, Hugging Face, OpenAI API, NVIDIA NeMo
- **Evaluation**: Custom clinical safety benchmarks, multi-annotator validation protocols

### Impact

This research was supported by the **NMDSI Student Scholars Award ($7,500)** and contributes to the development of trustworthy AI systems that can augment — not replace — clinical expertise.
