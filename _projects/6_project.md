---
layout: page
title: "MCWs: MicroWire Sorter"
description: "An open-source, modular framework for automated spike sorting in human intracerebral recordings."
img: assets/img/publication_preview/mcws_preview.png
importance: 2
category: work
---

## Overview

**MCWs (MicroWire sorter)** is a modular, open-source spike sorting framework engineered specifically for human intracerebral recordings in clinical settings. Developed in collaboration with the Medical College of Wisconsin **ReyLab**, MCWs addresses the unique challenges of processing neural data from epilepsy patients undergoing invasive monitoring.

### The Problem

Spike sorting — the process of detecting, extracting, and classifying neural action potentials from extracellular recordings — is essential for studying the neural basis of human cognition and for advancing epilepsy diagnostics. However, existing tools are primarily designed for animal recordings and struggle with:

- **Clinical noise environments** — Hospital settings introduce artifacts not present in controlled lab recordings
- **Human-specific waveforms** — Human single-unit waveforms differ from animal data in shape, amplitude, and variability
- **Scale** — Modern microwire bundles generate massive datasets requiring efficient, automated processing

### Our Approach

MCWs provides an end-to-end pipeline for clinical spike sorting:

**1. Preprocessing & Artifact Rejection**
- Custom filtering optimized for human microwire recordings (bandpass: 300 Hz – 3 kHz)
- Novel artifact detection methods designed for hospital-based electrophysiology environments
- Integration with SpikeInterface for flexible data format support

**2. Spike Detection**
- Wavelet-based detection with adaptive thresholding
- Handles overlapping spikes and low signal-to-noise ratios common in clinical data

**3. Feature Extraction**
- Haar wavelet decomposition for capturing waveform morphology
- Principal Component Analysis (PCA) for dimensionality reduction
- Hybrid feature pipelines selectable per recording quality

**4. Clustering**
- Super Paramagnetic Clustering (SPC) for robust neuron identification
- Automatic cluster count determination without manual intervention
- Quality metrics for cluster validation and merge decisions

### Technical Architecture

```
Raw Recording → Bandpass Filter → Artifact Rejection → Spike Detection
    → Feature Extraction (Wavelets / PCA) → SPC Clustering → Sorted Units
```

### Infrastructure

MCWs is deployed on a high-performance computing environment at MCW:
- **40-core systems** for parallel processing of multi-channel recordings
- **250 TB storage** for large-scale neural data archives
- Automated quality control and reproducible analysis pipelines

### Impact

MCWs enables researchers to investigate:
- **Episodic memory** — How single neurons encode and retrieve memories
- **Seizure onset localization** — Identifying seizure focus through single-neuron firing patterns
- **Local field potential biomarkers** — Discovering neural signatures for epilepsy diagnosis

**Status:** Preprint available on *bioRxiv* (first co-author)
[Read the preprint →](https://www.biorxiv.org/content/10.1101/2025.07.09.663285)
