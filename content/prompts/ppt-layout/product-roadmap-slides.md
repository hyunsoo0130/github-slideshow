---
title: "Product Roadmap Presentation"
description: "Create a product roadmap slide deck with now/next/later framework, feature prioritization matrix, release timeline, and stakeholder-friendly visuals — ideal for quarterly planning and all-hands meetings."
tool: "claude"
tags: ["roadmap", "product", "planning", "ppt", "quarterly", "strategy"]
date: "2026-04-04"
promptText: |
  Create an 8-slide product roadmap presentation for [PRODUCT NAME] — [QUARTER] [YEAR] planning.
  Audience: [AUDIENCE — e.g., "leadership team", "all-hands", "investors", "engineering team"].

  SLIDE 1: COVER
  "[PRODUCT NAME] Roadmap — [QUARTER] [YEAR]"
  Presenter, date. Subtitle: "Where we're going and why."

  SLIDE 2: NORTH STAR & GOALS
  This quarter's North Star metric: "[METRIC]"
  3 quarterly OKRs:
  Objective 1: "[OBJECTIVE]" → Key Result: "[MEASURABLE TARGET]"
  Objective 2: "[OBJECTIVE]" → Key Result: "[MEASURABLE TARGET]"
  Objective 3: "[OBJECTIVE]" → Key Result: "[MEASURABLE TARGET]"

  SLIDE 3: NOW / NEXT / LATER FRAMEWORK
  Three columns layout:
  NOW (This quarter): [LIST 3–4 IN-PROGRESS FEATURES]
  NEXT (Next quarter): [LIST 3–4 PLANNED FEATURES]
  LATER (6+ months): [LIST 3–4 FUTURE IDEAS]
  Color code: NOW = green | NEXT = yellow/amber | LATER = gray

  SLIDE 4: FEATURE PRIORITIZATION
  2×2 matrix: X-axis = Effort (Low → High), Y-axis = Impact (Low → High)
  Plot 8–10 features as labeled dots. Quadrant labels:
  Top-left: "Quick Wins" | Top-right: "Big Bets" | Bottom-left: "Fill-ins" | Bottom-right: "Thankless Tasks"
  Callout box: "We're focusing on Quick Wins and Big Bets this quarter"

  SLIDE 5: Q[X] RELEASE TIMELINE
  Month-by-month horizontal timeline:
  Month 1: [MILESTONE 1] + [FEATURE RELEASE]
  Month 2: [MILESTONE 2] + [FEATURE RELEASE]
  Month 3: [MILESTONE 3] + [QUARTER END GOAL]
  Color bands per team/workstream. Dependency arrows between related milestones.

  SLIDE 6: WHAT WE'RE NOT DOING (and why)
  List 3–4 things explicitly descoped this quarter.
  For each: Feature name | Why deprioritized | When we'll revisit
  This slide builds trust by showing strategic focus, not random cuts.

  SLIDE 7: RISKS & DEPENDENCIES
  Table: Risk | Likelihood | Impact | Mitigation Plan | Owner
  External dependencies: [TEAM/PARTNER NAME] needs to deliver [X] by [DATE]
  Internal dependencies: [TEAM] blocked until [CONDITION]

  SLIDE 8: HOW YOU CAN HELP
  Tailored to audience:
  For leadership: "We need [DECISION/RESOURCE] by [DATE]"
  For engineers: "Sprint priorities are [X, Y, Z]"
  For all-hands: "Give us feedback on [FEATURE] via [CHANNEL]"
  Next review date: [DATE]

  Generate complete content for a [PRODUCT TYPE] product targeting [USER TYPE] users.
usage: |
  Ideal for product managers, startup founders, and engineering leads.
  Paste into Claude with your product context for fully written slide content.
  Present in PowerPoint, Notion, or Google Slides.
variables: |
  [PRODUCT NAME] → Your product/app name
  [QUARTER] / [YEAR] → Planning period (Q2 2026)
  [AUDIENCE] → Who you're presenting to (affects language and detail level)
  [METRIC] → Your North Star metric (DAU, MRR, NPS, etc.)
  [PRODUCT TYPE] → "mobile app" / "B2B SaaS" / "e-commerce platform" / "developer tool"
  [USER TYPE] → Who uses your product
tips: |
  • Ask Claude to "write this for a non-technical leadership audience" for exec-friendly language
  • Add "include a 'bet we're making' section explaining strategic reasoning"
  • Request "add a customer feedback quotes section to justify prioritization decisions"
  • For remote teams: ask for "async-friendly version with pre-read notes per slide"
---
