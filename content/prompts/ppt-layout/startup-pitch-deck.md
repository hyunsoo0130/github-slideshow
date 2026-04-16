---
title: "Startup Pitch Deck Structure"
description: "Generate a 12-slide investor pitch deck structure with problem, solution, market size, business model, traction, team, and ask slides. Follows the classic Sequoia/YC pitch format."
tool: "claude"
tags: ["pitch deck", "startup", "investor", "ppt", "fundraising"]
date: "2026-04-01"
promptText: |
  Create a complete 12-slide startup pitch deck structure for [COMPANY NAME],
  a [COMPANY DESCRIPTION] targeting [TARGET MARKET].

  Format each slide as: SLIDE NUMBER | TITLE | LAYOUT DESCRIPTION | CONTENT NOTES

  SLIDE 1 — COVER
  Layout: Full-bleed background gradient ([BRAND COLOR] to dark). Company logo centered top.
  Content: Company name in large white text. Tagline: "[ONE-LINE TAGLINE]" below in light gray.
  Presenter name, date, and "CONFIDENTIAL" bottom-left.
  Visual feel: Bold, memorable, cinematic.

  SLIDE 2 — PROBLEM
  Layout: Left half = large visual metaphor (placeholder image). Right half = text.
  Headline: "The Problem" — white on dark header band.
  Content: 3 bullet points, each starting with a pain-point emoji + bold label:
  • 😤 [PAIN POINT 1]: [2-sentence description]
  • ⏱️ [PAIN POINT 2]: [2-sentence description]
  • 💸 [PAIN POINT 3]: [2-sentence description]
  Footer stat: "[X]% of [TARGET MARKET] experience this problem daily" — source placeholder.

  SLIDE 3 — SOLUTION
  Layout: Split into 3 vertical panels. Each panel has icon (top), feature name (middle), description (bottom).
  Headline: "Introducing [COMPANY NAME]" — centered above panels.
  Panel 1: [KEY FEATURE 1] — icon + 1 sentence
  Panel 2: [KEY FEATURE 2] — icon + 1 sentence
  Panel 3: [KEY FEATURE 3] — icon + 1 sentence
  Bottom: "So simple that [BENEFIT STATEMENT]"

  SLIDE 4 — PRODUCT DEMO / HOW IT WORKS
  Layout: 3-step horizontal flow with numbered circles and connecting arrows.
  Headline: "How It Works"
  Step 1: [USER ACTION 1] → Step 2: [USER ACTION 2] → Step 3: [OUTCOME]
  Each step: large number + icon + 1-2 sentence description.
  Screenshot/mockup placeholder: bottom of slide, spanning full width.

  SLIDE 5 — MARKET SIZE
  Layout: 3 concentric circles (TAM/SAM/SOM), left side. Right side: numbers and explanation.
  TAM: Total Addressable Market: $[X]B — "[MARKET DEFINITION]"
  SAM: Serviceable Addressable Market: $[X]B — "[OUR SEGMENT]"
  SOM: Serviceable Obtainable Market: $[X]M — "[YEAR 3 REALISTIC TARGET]"
  Source: "[DATA SOURCE]" — 8pt, bottom.

  SLIDE 6 — TRACTION
  Layout: Large KPI numbers, 3-up in top row. Line chart below showing growth.
  Headline: "Early Traction"
  KPI 1: "[X] [METRIC]" — e.g., "2,400 Users"
  KPI 2: "[X]% [METRIC]" — e.g., "87% Retention"
  KPI 3: "$[X] [METRIC]" — e.g., "$12K MRR"
  Chart: Month-over-month growth last 6 months (use placeholder data)
  Quote: "[CUSTOMER QUOTE]" — [CUSTOMER NAME], [COMPANY]

  SLIDE 7 — BUSINESS MODEL
  Layout: Clean table with 3 tiers/products. Row per product, columns for features and price.
  Headline: "Business Model"
  Revenue stream explanation: [REVENUE MODEL — subscription/transaction/freemium/etc.]
  Pricing table: Free tier / Pro tier / Enterprise tier
  Unit economics: CAC: $[X] | LTV: $[X] | LTV:CAC Ratio: [X]:1

  SLIDE 8 — COMPETITIVE LANDSCAPE
  Layout: 2×2 matrix. X-axis: [DIMENSION 1]. Y-axis: [DIMENSION 2].
  [COMPANY NAME] logo positioned at top-right (best position).
  Competitor logos/names at their appropriate positions.
  Caption: "We are the only solution that [UNIQUE DIFFERENTIATOR]"

  SLIDE 9 — TEAM
  Layout: Photos in circles, 2-column grid. Name + title below each photo.
  Headline: "The Team"
  For each member: [NAME] — [ROLE] — "[KEY CREDENTIAL]" — logo of past employer
  Advisory board: smaller, in a row at bottom.

  SLIDE 10 — ROADMAP
  Layout: Horizontal timeline with milestone markers.
  Headline: "What We're Building Next"
  Past (gray): [COMPLETED MILESTONE]
  Now (brand color): [CURRENT QUARTER FOCUS]
  Q3 2026: [MILESTONE]
  Q4 2026: [MILESTONE]
  2027: [LONG-TERM VISION]

  SLIDE 11 — FINANCIALS
  Layout: 3-year projection bar chart (top). Key assumptions table (bottom).
  Headline: "Financial Projections"
  Year 1: Revenue $[X]M, Expenses $[X]M, Net $[X]M
  Year 2: Revenue $[X]M, Expenses $[X]M, Net $[X]M
  Year 3: Revenue $[X]M, Expenses $[X]M, Net $[X]M (profitability target)
  Note: "Conservative estimates based on [GROWTH ASSUMPTION]%"

  SLIDE 12 — THE ASK
  Layout: Centered, clean, single focal point.
  Headline: "We are raising [RAISE AMOUNT]"
  Use of funds pie chart: [%] Product, [%] Marketing, [%] Team, [%] Operations
  What we'll achieve: 3 specific milestones this funding enables.
  Close: "[COMPANY NAME].[TLD]" + contact email + LinkedIn

  Generate full placeholder content for all 12 slides so I can review the complete narrative.
usage: |
  1. Paste into Claude with your company details filled in
  2. Claude returns the full 12-slide narrative with placeholder content
  3. Open PowerPoint or Figma
  4. Create one slide per section, using Claude's content as your copy
  5. Apply your brand colors and fonts
  6. Add real screenshots, charts, and team photos

  This prompt follows the Sequoia Capital pitch deck format — industry standard for Series A pitches.
variables: |
  [COMPANY NAME] → Your startup name
  [COMPANY DESCRIPTION] → One-line description: "a B2B SaaS platform that..."
  [TARGET MARKET] → Who you serve: "SMB e-commerce businesses"
  [BRAND COLOR] → Primary brand color
  [ONE-LINE TAGLINE] → Memorable tagline (under 10 words)
  [PAIN POINT 1–3] → Key problems you solve
  [KEY FEATURE 1–3] → Your solution's main pillars
  [RAISE AMOUNT] → Funding target: "$500K", "$2M", "$5M"
tips: |
  • Keep each slide to ONE key message — if you need more, add a slide
  • Ask Claude to "make the problem slide more emotionally compelling" for stronger storytelling
  • Request "include Airbnb's pitch deck narrative structure" for proven B2C format
  • For SaaS: add "include MRR growth graph with J-curve shape" in Traction slide
  • Ask Claude to write the "investor email subject line and 3-sentence cold email" to accompany the deck
---
