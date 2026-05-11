---
title: "Clarifying MFA Workflows"
description: "Improving configuration language and risk communication for administrators"
tags: ["ux writing", "workflow guidance", "risk communication"]
featured: true
order: 2
---

## At a glance

| Category | Details |
|---|---|
| **Project** | Multi-factor authentication administration workflow |
| **Role** | UX Writer |
| **Focus** | Configuration language, workflow guidance, risk communication |
| **Users** | Institutional administrators |
| **Problem** | Administrators could unintentionally lock users out through unclear MFA configuration options |
| **Outcome** | Improved terminology, clarified scope, and introduced layered risk communication for high-impact actions |

## Overview

This project focused on UX writing for a multi-factor authentication (MFA) configuration workflow within an administrative management experience.

The feature allowed institutional administrators to require MFA for different groups of users. When enabled, users would be required to sign in using a verification code sent to their email in addition to their email and password.

While MFA improves account security, the feature also introduced operational risk.

If MFA was enabled for users with missing or outdated email access, those users could become locked out of their accounts until the setting was reverted. This risked creating a large volume of support requests for both administrators and customer support teams.

The challenge was not just explaining how MFA worked, but helping administrators understand the operational consequences of enabling it at scale.Because enabling MFA could unintentionally lock users out of their accounts, the workflow needed to support deliberate decision-making without relying on alarmist or overly technical language.

Key writing goals:

- simplifying configuration language,
- improving how options could be compared and scanned,
- introducing layered risk communication,
- and creating deliberate friction around high-impact actions.
---

## The problem

The original experience presented two major usability risks:

### Ambiguous configuration language

Administrators could apply MFA requirements without fully understanding who would be affected.

Original option labels included:

- Disable MFA
- No access
- None
- MFA disabled

The language lacked clear behavioral meaning and created uncertainty around scope and outcomes.

### High-risk actions with limited warning

Enabling MFA could unintentionally prevent users from signing in if:

- email addresses were not valid,
- users no longer had access to their email accounts,
- or institutional records were outdated.

This created risks for:

- user lockouts,
- increased support burden,
- and avoidable administrative frustration.

## Reframing the configuration options

To improve readability and consistency, I reframed the entire radio group around a shared sentence structure:

> Require multi-factor authentication for

The final radio button labels became:

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

Ultimately, I recommended a layered approach that combined an inline warning and a confirmation modal.

This structure supported both passive awareness during configuration and active confirmation before changes were applied.

## Designing the warning pattern

The warning pattern was designed to interrupt passive confirmation behaviors without creating unnecessary alarm.

Because enabling MFA could affect access across an institution, the messaging needed to slow administrators down long enough to evaluate the consequences of the action while still preserving trust and usability.

The final warning copy read:

> Before enabling multi-factor authentication, confirm that users have valid email addresses and can access their email accounts. Users without email access will be unable to sign in.

The warning was visually separated from standard helper text to reduce the likelihood of administrators skimming past it.

The messaging focused on clearly communicating risk without relying on alarmist or overly punitive language.

## Refining the confirmation modal

The confirmation modal was intentionally designed to create a moment of deliberate review before administrators applied a high-impact configuration change.

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

This work focused on improving decision-making clarity within a high-risk administrative workflow where unclear terminology could create operational consequences for both administrators and end users.

The writing approach emphasized:

- explicit behavioral language over abstract system terminology,
- layered risk communication for high-impact actions,
- deliberate friction to support safer administrative decision-making,
- predictable configuration outcomes,
- and progressive disclosure to reduce cognitive overload.

---

## Outcome

The updated workflow supported clearer administrative decision-making by improving terminology, clarifying scope, and introducing more deliberate confirmation patterns around high-impact actions.

The updated workflow:

- reduced ambiguity around user scope,
- improved predictability of configuration outcomes,
- clarified the consequences of enabling MFA,
- and created a more supportive administrative experience for complex security workflows.

This project reinforced the importance of treating UX writing as operational guidance within enterprise systems, particularly in workflows involving permissions, access, and account security.