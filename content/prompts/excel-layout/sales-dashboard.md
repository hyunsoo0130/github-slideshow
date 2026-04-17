---
title: "Sales Performance Dashboard"
description: "Generate a comprehensive sales dashboard in Excel with KPI tiles, pipeline funnel, monthly revenue chart, top performers table, and regional breakdown — ready for team meetings and executive reviews."
tool: "claude"
tags: ["sales", "dashboard", "excel", "KPI", "performance", "business"]
date: "2026-04-03"
image: "/images/prompts/excel-layout/sales-dashboard.svg"
promptText: |
  Create a sales performance dashboard spreadsheet for [COMPANY NAME], [PERIOD].
  Sales team size: [TEAM SIZE]. Currency: [CURRENCY].

  SHEET 1: EXECUTIVE DASHBOARD

  KPI TILES (Row 1–5, use merged cells for large display):
  Tile 1 (A1:C5): "Total Revenue" | Value: [AMOUNT] | vs Target: [% of target] | vs Last Period: [% change]
  Tile 2 (D1:F5): "Deals Closed" | Count | vs target | % change
  Tile 3 (G1:I5): "Win Rate" | Percentage | benchmark: [INDUSTRY BENCHMARK]%
  Tile 4 (J1:L5): "Average Deal Size" | Amount | trend arrow
  Tile 5 (M1:O5): "Sales Cycle" | X days | vs last period

  Style: Each tile has [PRIMARY COLOR] header row, large number in center (28pt bold), small metadata below.
  Conditional formatting: green if above target, red if below.

  PIPELINE FUNNEL (Row 7–18):
  Funnel stages with deal counts and values:
  Stage 1: Prospect — [X] deals — $[VALUE]
  Stage 2: Qualified — [X] deals — $[VALUE]
  Stage 3: Proposal — [X] deals — $[VALUE]
  Stage 4: Negotiation — [X] deals — $[VALUE]
  Stage 5: Closed Won — [X] deals — $[VALUE]
  Stage 6: Closed Lost — [X] deals — $[VALUE]

  Conversion rates between each stage (formula row).

  MONTHLY REVENUE CHART (Row 20–35):
  Data table: Month | Target Revenue | Actual Revenue | Variance | % Achievement
  Chart type: Combo — bars for actual, line for target
  Color: Blue bars, red target line

  SHEET 2: INDIVIDUAL PERFORMANCE
  Columns: Rep Name | Deals Assigned | Deals Closed | Revenue | Win Rate | Avg Deal | Pipeline Value | Rank
  Sort by: Revenue (descending)
  Conditional formatting: Top 3 rows green highlight, bottom 2 red highlight
  Sparkline column: mini trend chart of last 6 months performance per rep

  SHEET 3: PRODUCT/SERVICE BREAKDOWN
  Revenue by product line: pie chart + table
  Columns: Product | Deals | Revenue | % of Total | vs Last Period | Trend

  Generate realistic sample data for a [INDUSTRY] company with [TEAM SIZE] sales reps.
usage: |
  Paste into Claude with your company and sales details. Claude generates the complete
  dashboard structure with formulas and sample data. Copy into Excel and apply the
  conditional formatting rules and chart specifications as described.
variables: |
  [COMPANY NAME] → Your company
  [PERIOD] → "Q1 2026" / "April 2026" / "FY 2026"
  [TEAM SIZE] → Number of sales reps (affects data table rows)
  [CURRENCY] → USD / EUR / KRW / GBP
  [PRIMARY COLOR] → Dashboard accent color
  [INDUSTRY] → Your industry (affects realistic data values)
tips: |
  • Ask Claude to "add a forecast model using linear regression trend from last 6 months"
  • Request "add a customer retention / churn section" for SaaS companies
  • Add "leaderboard with animated conditional formatting" for competitive teams
  • Ask for "email-ready HTML version of the KPI tiles for weekly sales email"
---
