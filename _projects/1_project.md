---
layout: research-project
title: "Spike Sorting Framework"
description: "From neural recordings to interpretable spike groups: PyWaveClus and MCWs."
topic: "Neural signals"
status: "Software & preprint"
importance: 3
category: work
method_id: "1"
---

## Two approaches to spike sorting

Spike sorting separates candidate neuronal events in electrophysiological recordings into groups with similar characteristics. My work in this area includes **PyWaveClus**, a Python pipeline, and **MCWs (MiCroWire sorter)**, a collaborative framework for human intracerebral recordings.

The schematic above shows the shared task at a conceptual level. The two projects have their own methods and implementations.

## PyWaveClus

[PyWaveClus](https://github.com/msdkhani/PyWaveClus) implements a Python workflow inspired by Wave_clus. It brings together spike detection, waveform extraction, Haar wavelet and PCA features, and superparamagnetic clustering.

Its documentation covers artifact removal and the steps required to run the pipeline on electrophysiological recordings, with credit to the original Wave_clus and superparamagnetic clustering methods. Sorting output requires quality assessment for the recording being studied.

[Explore PyWaveClus code and documentation](https://github.com/msdkhani/PyWaveClus)

## MCWs · MiCroWire sorter

MCWs is a framework for automated spike sorting in human intracerebral recordings. It addresses the recording-quality challenges of hospital environments, including noise and interruptions during experimental sessions.

Developed with colleagues in ReyLab, this work supports analysis of human neuronal activity. I am a coauthor of the framework’s preprint.

Alexander Betancourt, Masoud Khani, Tapasi Brahma, Fernando J. Chaure, Connor Hauder, Sunil Mathew, Ana Sofia Dominguez Zesati, Sean Lew, Kunal Gupta, and Hernan G. Rey. **MCWs (MiCroWire sorter): A new framework for automated and reliable spike sorting in human intracerebral recordings.** *bioRxiv*, 2025.

[Read the MCWs preprint](https://doi.org/10.1101/2025.07.09.663285)

The linked MCWs work is a preprint and has not been peer reviewed.
