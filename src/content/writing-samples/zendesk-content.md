---
title: "Structuring Zendesk Content"
description: "Internal documentation for using HTML-based components in Zendesk"
tags: ["technical documentation", "systems thinking", "content structure"]
featured: true
type: internal documentation
order: 1
---

<div class="sample-note">
This guide was created as part of a broader internal documentation system designed to help non-technical writers work with HTML-based components in Zendesk. The documentation translated implementation patterns into clear, step-by-step instructions so writers could create and manage structured content without prior coding experience.
</div>

<hr>

<h1 class="sample-title">Creating tabbed content in Zendesk</h1>

Tabs organize related content into clearly labeled sections, allowing users to switch between workflows or views without leaving the page.

## When to use tabs

Use tabs when:
- Content can be grouped into a small number of related sections.
- Users may need to switch between workflows or views.
- Displaying all content at once would make a page difficult to scan.

## Considerations

Consider the following before deciding whether tabs are appropriate for your content:

- Tabs require significant horizontal space. If there is not enough room, tab labels may wrap onto multiple lines and become difficult to scan.
- For smaller-width or more content-heavy layouts, consider using accordions instead of tabs.

## Create a basic tab layout

Copy and paste the following code to create a two-tab layout. To add additional tabs, follow the instructions below the code block.

<pre><code class="language-html">&lt;div class="tabs tabs--colored-2"&gt;
  &lt;div class="tabs-menu"&gt;
    &lt;span class="tabs-link is-active"&gt;Tab 1&lt;/span&gt;
    &lt;span class="tabs-link"&gt;Tab 2&lt;/span&gt;
    &lt;!-- Add additional tab titles above --&gt;
  &lt;/div&gt;

  &lt;div class="tab"&gt;
    Mauris ipsum. Nulla metus metus, ullamcorper vel,
    tincidunt sed, euismod in, nibh.
  &lt;/div&gt;

  &lt;div class="tab is-hidden"&gt;
    Proin quam. Etiam ultrices. Suspendisse in justo
    eu magna luctus suscipit.
  &lt;/div&gt;

  &lt;!-- Add additional tab content above --&gt;
&lt;/div&gt;
</code></pre>

## How to create more tabs

1. In the Zendesk code editor, locate the following HTML comment:

<pre><code class="language-html">&lt;!-- Add additional tab titles above --&gt;
</code></pre>

2. Above the comment, paste the following line of code:

<pre><code class="language-html">&lt;span class="tabs-link"&gt;Tab&lt;/span&gt;
</code></pre>

3. Replace <code class="inline">Tab</code> with the name of your tab.

4. Locate the following HTML comment:

<pre><code class="language-html">&lt;!-- Add additional tab content above --&gt;
</code></pre>

5. Above the comment, paste the following block of code:

<pre><code class="language-html">&lt;div class="tab is-hidden"&gt;
  Add your tab content here.
&lt;/div&gt;
</code></pre>

6. Replace the placeholder text with your tab content. 

<div class="callout">For each new tab, you must add both a tab title and corresponding tab content.</div>

7. Repeat this process for each additional tab.

8. When finished, select **Apply**, then save and preview the article.