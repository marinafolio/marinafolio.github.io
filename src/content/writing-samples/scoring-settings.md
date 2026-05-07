---
title: "Explaining Scoring Configuration"
description: "Documentation for configurable grading workflows and scoring behavior"
tags: ["systems thinking", "configuration guidance", "documentation"]
featured: true
type: system documentation
order: 3
---

<div class="sample-intro">This excerpt is from a larger guide created for instructors who use a web application to digitally grade handwritten assignments. In this section, I focused on explaining configurable scoring workflows and how scoring settings, bounds, and adjustments behave before changes are applied.</div>

<h1 class="sample-title">Using the scoring settings</h1>

Use **Scoring Settings** to configure the default scoring method and scoring bounds for each question.

## Scoring methods

### Positive scoring

Positive scoring adds points starting from <code class="inline">0</code>.

For a question worth <code class="inline">3</code> points:

| Result | Action | Final score |
|---|---|---|
| **Correct** | Add <code class="inline">3</code> points | <code class="inline">3/3</code> |
| **Partially correct** | Add <code class="inline">1.5</code> points | <code class="inline">1.5/3</code> |
| **Incorrect** | No points are added | <code class="inline">0/3</code> |

### Negative scoring

Negative scoring subtracts points from the total possible score.

For a question worth <code class="inline">3</code> points:

| Result | Action | Final score |
|---|---|---|
| **Correct** | No points are subtracted | <code class="inline">3/3</code> |
| **Partially correct** | Subtract <code class="inline">1.5</code> points | <code class="inline">1.5/3</code> |
| **Incorrect** | Subtract <code class="inline">3</code> points | <code class="inline">0/3</code> |

To apply negative values manually, add a minus sign (<code class="inline">-</code>) before the point value.

## Scoring bounds

Scoring bounds prevent scores from exceeding the allowed range.

- **Ceiling** — prevents scores greater than <code class="inline">100%</code>
- **Floor** — prevents scores lower than <code class="inline">0%</code>

Both settings are enabled by default. You can disable them for situations such as:

- extra credit
- late penalties
- custom scoring workflows

## Changing the scoring settings

1. In the grading side panel, select **Scoring Settings**.

2. In the modal, configure the following settings:

   - **Total Score** — set the total possible points for the question.
   - **Scoring Method** — choose between positive or negative scoring.
   - **Scoring Bounds** — enable or disable Ceiling and Floor limits.

3. Select the appropriate scoring options for your workflow.

> Ceiling and Floor scoring bounds are enabled by default and can be changed at any time.