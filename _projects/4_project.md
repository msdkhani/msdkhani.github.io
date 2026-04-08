---
layout: page
title: "Digital Twins for Healthcare"
description: "Patient-specific computational models for real-time risk stratification and dynamic intervention planning."
img: assets/img/publication_preview/fall_geroscience.png
importance: 3
category: work
---

## Overview

**Digital twins** are virtual replicas of individual patients that integrate multimodal clinical data to simulate health trajectories, evaluate interventions, and support personalized medicine. This project develops computational frameworks that combine **agent-based modeling**, **discrete-event simulation**, and **machine learning** to create dynamic, patient-specific models.

### The Problem

Healthcare decisions are often based on population-level evidence that may not reflect an individual patient's unique circumstances. Clinicians need tools that can:
- Predict how a *specific* patient's condition will evolve
- Simulate the likely outcomes of different treatment options
- Account for the complex interactions between comorbidities, medications, and social determinants

### Our Approach

We build digital twin frameworks using a **hybrid simulation-ML architecture**:

**Agent-Based Modeling (ABM)**
- Each patient is modeled as an autonomous agent with individual health states, risk factors, and care trajectories
- Agents interact with healthcare system components (clinics, specialists, interventions) modeled as entities in the simulation
- Population-level dynamics emerge from individual patient behaviors and system constraints

**Discrete-Event Simulation (DES)**
- Clinical encounters, procedures, and transitions are modeled as discrete events with stochastic timing
- Resource allocation and care pathway bottlenecks are captured to evaluate system-wide impacts

**Machine Learning Integration**
- Predictive models inform agent state transitions using real-world EHR data
- Transformer-based architectures capture complex temporal dependencies in patient histories
- Risk stratification models are continuously updated with incoming data

### Applications

- **Fall Risk Stratification** — Real-time risk assessment for elderly patients using multimodal data (EHR, sensors, imaging)
- **What-If Scenario Analysis** — Comparing intervention strategies before implementation
- **Population Health Simulation** — Modeling disease burden and intervention impact at scale

### Technical Capabilities

| Capability | Details |
|-----------|---------|
| **Multimodal Data Fusion** | EHR, wearable sensors, imaging, social determinants |
| **Stochastic Simulation** | Monte Carlo methods for uncertainty quantification |
| **Real-Time Updates** | Online learning from streaming patient data |
| **Scalability** | Validated on cohorts of 7M+ patients |

This research is supported by **NIH-funded projects** through the Advancing Healthier Wisconsin Endowment and the CTSI Pilot-BERD program.
