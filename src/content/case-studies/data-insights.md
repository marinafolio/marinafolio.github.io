---
title: "Turning Data into Insight"
description: "Designing a scalable insight system that translates complex data into clear, actionable signals"
tags: ["content strategy", "UX writing", "systems design"]
featured: true
---

I designed a content system that transforms complex institutional data into clear, actionable insights, helping administrators quickly identify patterns and explore underlying data.

## Impact

- Created a scalable content pattern for insight cards, making it easier to expand across assignments, students, and classes without reworking structure.

- Made insight workflows easier to use by aligning copy with how users actually approach the task, moving from discovery to understanding to exploration.

- Reduced ambiguity by separating high-level signals from detailed data, helping users understand what they’re seeing without extra effort.

- Established a consistent way of talking about integrity-related insights, supporting clearer communication in a sensitive and high-stakes area.

## Overview

The feature introduced a new way of surfacing data insights to administrators, highlighting patterns such as high integrity scores across assignments or repeated high scores among students. These insights were not static, they served as entry points into a dynamic experience where users could adjust filters and explore variations of the data.

This required a content approach that could communicate value at a glance, encourage interaction, and transition seamlessly into a more detailed, flexible data view.

## The challenge

There was tension between multiple goals. Marketing emphasized system effort (“we’ve found,” “we’ve gathered”) to reinforce product value, while UX required content to be scannable, clear, and actionable. At the same time, product behavior was dynamic, with insights acting as entry points into filterable datasets rather than fixed results.

Early versions of the copy were either too verbose and system-focused, too vague when simplified, or too dense when fully specified.

The challenge was to define what belongs on the card versus the detail page, communicate value without overwhelming users, and ensure consistency across different types of insights.

## My approach

I defined a content strategy based on progressive disclosure, aligning content with how users move from discovery to exploration.

- I reframed insight cards as entry points rather than complete explanations, shifting focus from describing data to inviting exploration

- I established a clear content hierarchy and level of specificity: cards signal patterns at a glance, while detail views define the dataset with exact thresholds, counts, and timeframes  

- I developed a consistent content approach emphasizing plain, scannable language, action-oriented phrasing, and neutral, defensible terminology for AI-related insights  

- I refined how patterns are expressed, replacing system-centric or awkward phrasing with more natural, user-centered language  

- I defined distinct roles for titles and descriptions, where titles establish the dimension (e.g., by assignment or student) and descriptions communicate the insight and next step  

## Example UX writing

### Insight card copy

I refocused the copy on what the user can do, rather than what the system did.

> **Exploration**
> We've gathered the assignments with the highest integrity scores for you.

> **Refined**
> Review assignments with the highest average integrity scores.

### Data view copy

I made it clear what the data represents and how users can explore it.

> **Exploration**
> Over the last six months, we found the students that have the highest average integrity scores.

> **Refined**
> You're viewing students with 3 or more integrity scores above 30% over the last 6 months. Adjust the filters below to explore different results.

## Outcomes

- Insight cards became more scannable and actionable, making it easier for users to recognize relevant patterns and engage with the feature

- The experience clearly communicates that insights are explorable and adjustable, not static reports

- Language is more consistent, natural, and aligned with user expectations, reducing confusion and improving trust

- The system supports future growth, enabling new insight types to be added without reworking the content structure