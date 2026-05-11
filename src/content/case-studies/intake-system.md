---
title: "Building an Intake Workflow"
description: "Designing an asynchronous intake workflow between Slack and Jira for content requests"
tags: ["documentation", "process simplification", "internal guidance"]
featured: true
order: 3
---

I created a structured intake workflow for UX writing requests using Slack, Jira, and supporting documentation. The process reduced interruptions, improved request visibility, and made work easier to track, prioritize, and complete.

## At a glance

| Category | Details |
|---|---|
| **Project** | UX writing intake workflow redesign |
| **Role** | Senior UX Writer |
| **Focus** | Workflow documentation, async collaboration, intake process design |
| **Tools** | Slack, Jira |
| **Problem** | Ad-hoc Slack requests created interruptions, inconsistent prioritization, and limited visibility into work status |
| **Outcome** | Created a structured intake workflow that improved request visibility, reduced interruptions, and increased Jira adoption |

## Impact

- By reducing manual triage, repeated follow-ups, and Slack-based coordination, the workflow saved an estimated 86+ hours annually per writer.

- Reduced Slack interruptions, enabling more focused work on complex tasks.

- Improved clarity and consistency of incoming requests through structured intake and supporting documentation.

- Increased Jira adoption through clear guidance, onboarding materials, and a 25-page Jira playbook.

## Overview

Requests for UX writing support arrived unpredictably through Slack, making work difficult to track and prioritize. Writers fielded ad-hoc pings, requesters lacked visibility into status, and ownership was often unclear. Although Jira existed as a system of record, it wasn’t consistently used by the team or understood by partners.

## The challenge

An unstructured request process forced writers to context-switch frequently and manually manage intake in Slack. Inconsistent Jira usage made prioritization uneven, reduced visibility into request status, and limited the team’s ability to plan and protect time for higher-impact work.

The solution needed to fit naturally into existing Slack behaviors while enforcing more structure, and it had to drive adoption without adding administrative overhead or requiring extensive tooling changes.

## My approach

I set out to design a lightweight intake system that reduced Slack friction without adding administrative overhead. It needed to be something the team would actually use.

- I researched existing IT and DevOps intake workflows and collaborated on a lightweight Slack-to-Jira automation that fit within our existing tooling.

- From there, I mocked and refined the Slack form and bot behavior, balancing clarity for requesters with the structured information needed to route and complete requests efficiently.

<img 
  src="/images/writing-samples/is-01.png" 
  alt="Structured Slack intake form used to collect UX writing requests, including request type, related guidance URLs, and supporting details before creating a Jira ticket." 
  class="sample-image" 
/>

<figcaption>
  Final Slack intake form used to standardize UX writing requests and route work into Jira through a more structured intake workflow.
</figcaption>

- Before launch, I tested the workflow with senior writers to pressure-test edge cases and make sure it held up in real scenarios, not just in theory.

- After launch, I refined the workflow and supporting guidance based on team feedback.

## Outcomes

- Every request now enters Jira with a clear owner and visible status, replacing fragmented Slack threads with a transparent intake-to-resolution flow.

- Writers experience fewer ad-hoc interruptions, reducing context switching and protecting time for deeper, higher-impact work.

- Clear documentation and guidance improved team confidence with Jira.

<img 
  src="/images/writing-samples/is-02.png" 
  alt="Internal Jira training guide showing step-by-step instructions for creating and managing tickets as part of a structured UX writing intake workflow." 
  class="sample-image" 
/>

<figcaption>
 Excerpt from a Jira onboarding playbook created to support consistent ticket creation, workflow visibility, and long-term process adoption across the team.
</figcaption>

- The structure continues to support consistent intake and clearer, more manageable workflows.

The final workflow transformed intake from an interrupt-driven Slack process into a more structured, visible, and maintainable system that better supported focused work, predictable prioritization, and asynchronous collaboration.
