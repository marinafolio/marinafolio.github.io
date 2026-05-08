---
title: "Clarifying MFA Workflows"
description: "Improving configuration language and risk communication for administrators"
tags: ["ux writing", "workflow guidance", "risk communication"]
featured: true
order: 2
---

## Overview

This project focused on UX writing for a multi-factor authentication (MFA) configuration workflow within an administrative management experience.

The feature allowed institutional administrators to require MFA for different groups of users. When enabled, users would be required to sign in using a verification code sent to their email in addition to their email and password.

While MFA improves account security, the feature also introduced operational risk.

If MFA was enabled for users with missing or outdated email access, those users could become locked out of their accounts until the setting was reverted. This risked creating a large volume of support requests for both administrators and customer support teams.

The challenge was not just explaining how MFA works, but helping administrators understand the consequences of enabling it at scale. The workflow needed to help administrators understand the consequences of enabling MFA at scale without overwhelming them with technical, punitive, or alarmist language.

My work focused on:

- simplifying configuration language,
- improving how options could be compared and scanned,
- introducing layered risk communication,
- and creating deliberate friction around high-impact actions.
---

## The problem

The original experience presented two major usability issues.

### Ambiguous configuration language

The configuration options included enabling MFA for specific groups of users as well as disabling MFA entirely. This made the choices feel inconsistent and harder to compare quickly.

Early language explorations included options such as:

- Disable MFA
- No access
- None
- MFA disabled

These options introduced several problems, including inconsistent structure, ambiguous meaning, and overly negative or technical language.

### High-risk action with limited warning

Enabling MFA broadly could unintentionally prevent users from signing in if:

- email addresses were invalid,
- users no longer had access to their email accounts,
- or institutional account data was outdated.

Although the interface explained what MFA was, it did not clearly communicate the impact of enabling it.

This created risks such as:

- user lockouts,
- increased support burden,
- and administrative frustration.

## Reframing the configuration options

To improve readability and consistency, I reframed the entire radio group around a shared sentence structure:

> Require multi-factor authentication for

The final options became:

- No users
- Instructors
- All users

This approach improved parallel structure and made the configuration choices easier to compare at a glance.

The updated configuration is shown below.

<img 
  src="/images/writing-samples/mm-01.png" 
  alt="MFA configuration options with inline warning and role-based selection" 
  class="sample-image" 
/>

## Simplifying the MFA explanation

The original helper text attempted to explain the entire MFA workflow in procedural detail.

Early drafts included language such as:

> Require users to sign in with their email, password, and a one-time passcode...

I rewrote the helper text to focus only on the behavioral change introduced by MFA:

> Require users to enter a verification code in addition to their email and password.

This revision reduced cognitive load, removed unnecessary technical detail, and framed MFA as an additional security layer.

## Introducing layered risk communication

A major concern raised during the workflow review was the risk of widespread login failures if MFA was enabled before institutions confirmed users had reliable email access.

I explored several approaches, including inline helper text, warning callouts, and confirmation-only patterns.

I ultimately recommended a layered approach that combined an inline warning and a confirmation modal.

This structure supported both passive awareness during configuration and active confirmation before changes were applied.

## Designing the warning pattern

I intentionally designed the warning language to feel noticeable without appearing destructive or alarmist.

The final warning copy read:

> Before enabling multi-factor authentication, confirm that users have valid email addresses and can access their email accounts. Users without email access will be unable to sign in.

The warning was visually separated from standard helper text to reduce the likelihood of administrators skimming past it.

The messaging focused on clearly communicating risk without relying on alarmist or overly punitive language.

## Refining the confirmation modal

The confirmation modal needed to slow down a high-impact action without placing unrealistic responsibility on administrators.

Earlier drafts included language asking administrators to confirm that users could access their email accounts. I removed this phrasing because administrators may not realistically be able to guarantee this across an institution.

### Final modal copy

#### Title

> Enable MFA for all users

#### Body

> All users will be required to enter a verification code in addition to their email and password when signing in.
>
> Users without valid email addresses or access to their email accounts will be unable to sign in.

#### CTAs

> [Cancel] [Enable MFA]

<img 
  src="/images/writing-samples/mm-02.png" 
  alt="Confirmation modal for enabling MFA for all users" 
  class="sample-image" 
/>

This version focused on communicating consequences clearly while avoiding blame-oriented or legalistic language.

## UX writing principles applied

Throughout the workflow, I focused on:

- clear and consistent configuration language,
- layered risk communication,
- concise instructional copy,
- and reducing ambiguity in high-impact administrative decisions.

---

## Outcome

The final concept improved:

- clarity of configuration options,
- visibility of risk before changes were applied,
- confirmation patterns for high-impact actions,
- and overall consistency in enterprise UX writing.

This sample reflects my approach to simplifying complex administrative workflows, balancing security and usability, and designing UX copy around operational consequences rather than interface mechanics.