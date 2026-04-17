---
title: "Side Income & Hustle Tracker"
description: "Generate a multi-stream side income tracking spreadsheet that logs earnings from multiple hustles, calculates your true hourly rate, forecasts annual income, and compares which side gigs are actually worth your time."
tool: "claude"
tags: ["side hustle", "income", "freelance", "passive income", "money", "finance"]
date: "2026-04-10"
image: "/images/prompts/excel-layout/side-income-tracker.svg"
promptText: |
  Create a Side Income & Multiple Revenue Stream Tracker for Excel or Google Sheets.

  SHEET 1: INCOME STREAMS OVERVIEW

  STREAM SETUP TABLE (one row per income source):
  A: Stream Name
  B: Category (Freelance / Gig Economy / Digital Products / Investments / Rental / Content / Other)
  C: Platform (e.g., Upwork, Fiverr, Etsy, YouTube, Airbnb, Stock Market)
  D: Start Date
  E: Status (Active / Paused / Scaling / Winding Down)
  F: Monthly Revenue (this month)
  G: Monthly Expenses (this month)
  H: Monthly Net Profit (auto) =F-G
  I: Hours Invested (this month)
  J: True Hourly Rate (auto) =H/I
  K: Monthly Goal
  L: Goal Progress % (auto) =F/K
  M: Growth vs Last Month %
  N: Notes / Strategy

  CONDITIONAL FORMATTING:
  True Hourly Rate (J) < minimum wage → red | above $50/hr → green | between → yellow
  Status (E): Active = green | Scaling = blue | Paused = gray | Winding Down = orange

  TOTAL ROW:
  Total Monthly Revenue: =SUM(F:F)
  Total Monthly Net: =SUM(H:H)
  Total Hours: =SUM(I:I)
  Blended Hourly Rate: =SUM(H:H)/SUM(I:I)

  SHEET 2: MONTHLY LEDGER (detailed transactions)

  One row per income event:
  A: Date
  B: Stream Name (dropdown from Sheet1)
  C: Client / Customer / Source
  D: Description / Project
  E: Gross Amount
  F: Platform Fee / Commission
  G: Net Amount (auto) =E-F
  H: Tax Withholding (%) | I: Tax Amount (auto)
  J: After-Tax Amount (auto) =G-I
  K: Payment Method (PayPal/Bank/Cash/Crypto)
  L: Payment Status (Pending/Received/Invoiced)
  M: Invoice # (if applicable)
  N: Category (for tax purposes)

  EXPENSE LOG (below income):
  Date | Stream | Expense Type | Amount | Tax Deductible (Yes/No) | Receipt #

  SHEET 3: TIME INVESTMENT TRACKER

  Weekly time log:
  A: Week Starting
  B: Stream Name
  C: Task Type (Client Work / Marketing / Admin / Learning / Content Creation)
  D: Hours Spent
  E: Revenue Generated This Session
  F: Hourly Rate This Session
  G: Notes

  Monthly time summary per stream:
  Total hours | Revenue generated | ROI per hour | % of total time

  "Time is Money" Analysis:
  Which streams have the highest $/hour?
  Which streams take the most time for least return?

  SHEET 4: GROWTH & FORECAST

  MONTHLY SUMMARY TABLE (running 12 months):
  Month | Total Revenue | Total Expenses | Net Profit | Hours | Hourly Rate | YoY Growth

  ANNUAL PROJECTIONS:
  - At current monthly average: =monthly_avg*12
  - At 10% monthly growth rate: compound projection
  - Goal: $[INCOME_GOAL] annual — months to reach: =calculated

  INCOME MILESTONES:
  $500/month ✓/✗ | $1,000/month | $2,000/month | $5,000/month | Full-time income

  LINE CHART: Monthly revenue per stream stacked over time
  BAR CHART: Hours vs Revenue comparison by stream

  SHEET 5: TAX PREP SUMMARY

  Quarterly tax estimates:
  Self-employment income total | SE tax (15.3%) | Federal estimated tax | State estimated tax
  Quarterly payment due dates (Apr 15, Jun 15, Sep 15, Jan 15)
  Deductible business expenses by category
  Estimated annual tax bill

  Generate this tracker for [NUMBER] income streams:
  [STREAM_LIST]
  with a monthly revenue goal of $[MONTHLY_GOAL].

usage: |
  1. Paste into Claude with your income streams listed
  2. Claude generates the complete 5-sheet tracker with your streams pre-filled
  3. Set up each income stream in Sheet1 with your current numbers
  4. Log every payment received in Sheet2 immediately (build the habit)
  5. Weekly: log your time investment in Sheet3
  6. Monthly: review Sheet4 to see which streams are worth scaling
  7. Quarterly: use Sheet5 to estimate and pay your self-employment taxes

  Works in: Excel 2016+, Google Sheets
  Estimated setup time: 30–45 minutes
variables: |
  [NUMBER] → Number of income streams (e.g., "4")
  [STREAM_LIST] → Comma-separated stream names and types
    Example: "Fiverr logo design, Etsy digital downloads, YouTube ad revenue, Stock dividends"
  [MONTHLY_GOAL] → Target monthly side income in dollars (e.g., "3000")
  [INCOME_GOAL] → Annual income goal for projection (e.g., "50000")
tips: |
  • Ask Claude to "add a client CRM tab — repeat client tracking with contact info and project history"
  • Request "include a pricing calculator — what rate do I need to reach my income goal?"
  • Add "create a passive vs active income breakdown — how much earns while I sleep?"
  • For multiple currencies: "add currency conversion for international clients"
  • Ask Claude to "generate a 12-month scaling strategy to reach $[GOAL]/month from current baseline"
---
