---
layout: research-project
permalink: /projects/cps-net/
title: "CPS-Net"
description: "Collaborating Physicians in Silico Network: a decentralized multi-agent transformer framework for specialty-aware disease prediction."
topic: "Multi-agent clinical AI"
status: "Published · September 2026"
importance: 0
category: work
method_id: "8"
---

## Why a network of specialists?

Clinical diagnosis often involves a sequence of consultations. A general assessment leads to a specialty referral, and a complex case may require subspecialty expertise. CPS-Net asks whether predictive AI can benefit from a similar division of expertise, instead of asking one general-purpose model to handle every diagnosis.

The framework pairs **41 specialty-aware transformers** with language-model agents. The transformers learn from structured patient histories; the agents interpret their predictions in context, communicate with other agents, and explain their referral decisions. This separates data-driven sequence prediction from the consultation process around it.

[Read the open-access study](https://link.springer.com/article/10.1007/s10916-026-02460-8) · *Journal of Medical Systems*, 50, article 131 · Published September 15, 2026.

## How the architecture works

**Represent the history.** Diagnoses, procedures, laboratory events, and medications are ordered over time. Each token combines its identity with event-type and elapsed-time information. The training pipeline uses 64-token windows, predicting the final token from the preceding 63.

**Train at three levels of specificity.** A primary-care transformer predicts a specialty; 10 specialty transformers predict broader disease groups; 30 subspecialty transformers predict specific diagnosis codes. Each model has a vocabulary and training cohort matched to its task.

**Consult without a central supervisor.** Agents use the model outputs alongside the case history to decide where to refer next. They may redirect a case or reorder candidate diagnoses. Shared case memory retains the history, predictions, and discussion. Referrals must identify the receiving agent and include a rationale, while consultation tracking limits circular referrals.

**Keep the path visible.** The final output includes a primary diagnosis prediction, ranked alternatives, and an explanation. Readers can inspect the consultation trail instead of seeing only a score. That trail supports review; it is not proof that the reasoning is clinically correct.

## What the evaluation found

The study assembled a cohort of **75,000 patients** from Froedtert Hospital: **72,000 for model development and 3,000 held-out test cases**. For testing, histories were truncated before the target diagnosis. The following results measure exact ICD-10 code matching in that retrospective setup.

| Approach | Top-1 | Top-3 | Top-5 |
| :--- | ---: | ---: | ---: |
| CPS-Net | **48.80%** | **71.00%** | **77.76%** |
| Same hierarchical transformers, without consultation | 44.20% | 52.23% | 52.67% |
| Single generalist transformer | 19.20% | 38.60% | 47.20% |
| Single language-model agent | 12.70% | 26.40% | 37.23% |

*Top-k accuracy asks whether the target code appears among the first k predictions. Values are reported in the paper, not recomputed here.*

The comparison with the same hierarchical transformers is especially informative: adding consultation and re-ranking improved top-1 accuracy by **4.60 percentage points** and top-5 by **25.10 points**. These gains distinguish the consultation layer from the benefit of specialty-specific models alone.

The paper also reports **94.17% clinical relevance**, a separate binary assessment by two researchers of whether predictions represented the same clinical condition within the correct specialty. It should not be read as 94.17% exact diagnostic accuracy.

## What still needs to be established

This is a single-hospital, retrospective study using recorded diagnosis codes as targets. It does not establish prospective clinical effectiveness or generalization to other health systems. Multi-site prospective testing and evaluation by practicing clinicians remain important next steps. The paper’s separate comparisons of explanation quality used an LLM judge, rather than a clinician-outcome trial.

## My contribution

I am a coauthor with Mohammad Assadi Shalmani, Michael S. Harris, Qiang Lu, and Jake Luo. The published contribution statement credits my work in methodology, data extraction, development, validation, formal analysis, writing, and visualization.

## Sources and related work

- [Full article, figures, results, and supplementary material](https://link.springer.com/article/10.1007/s10916-026-02460-8).
- [Sequential Pattern Transformer](/projects/2_project/): related work on disease sequences and interpretable prediction.
- [Explainable clinical risk models](/projects/3_project/): complementary work on understanding predictions over time.

This explanation and the original schematic adapt the study by Shalmani, Khani, Harris, Lu, and Luo (2026), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The wording and diagram are simplified for this portfolio; they are not reproduced paper figures.
