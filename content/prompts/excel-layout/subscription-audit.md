---
title: "Subscription Expense Audit"
description: "Generate a subscription tracking spreadsheet that lists all your recurring charges, calculates monthly and annual totals, scores each subscription by value, and recommends which ones to cancel — your complete financial detox tool."
tool: "claude"
tags: ["subscription", "budget", "audit", "recurring", "personal finance"]
date: "2026-04-10"
image: "/images/prompts/excel-layout/subscription-audit.svg"
promptText: |
  Create a Subscription Expense Audit spreadsheet for Excel or Google Sheets.

  SHEET 1: SUBSCRIPTION INVENTORY

  Header Row:
  A1: Service Name
  B1: Category
  C1: Monthly Cost
  D1: Annual Cost (auto)
  E1: Billing Cycle (Monthly/Annual/Weekly)
  F1: Billing Date
  G1: Payment Method
  H1: Last Used (date)
  I1: Days Since Last Use (auto)
  J1: Usage Frequency (Daily/Weekly/Monthly/Rarely/Never)
  K1: Value Score (1–5)
  L1: Cancel Recommendation
  M1: Cancel By Date
  N1: Notes

  FORMULAS:
  D2: =IF(E2="Annual",C2,IF(E2="Weekly",C2*52,C2*12))
  I2: =IF(H2="","-",TODAY()-H2)
  L2: =IF(AND(J2="Never",K2<=2),"CANCEL NOW",IF(AND(J2="Rarely",K2<=3),"Consider Canceling","Keep"))

  CONDITIONAL FORMATTING (Column L):
  "CANCEL NOW" → red fill, white bold text
  "Consider Canceling" → orange fill
  "Keep" → green fill

  CATEGORIES (Column B dropdown):
  Streaming | Music | Gaming | News/Media | Productivity | Health/Fitness |
  Cloud Storage | Security | Food/Delivery | Shopping | Finance | Other

  SHEET 2: SUMMARY DASHBOARD

  TOTAL COSTS:
  B2: "Monthly Subscription Spend" | C2: =SUMIF(Sheet1!E:E,"Monthly",Sheet1!C:C)+SUMIF(Sheet1!E:E,"Annual",Sheet1!D:D)/12
  B3: "Annual Subscription Spend" | C3: =SUM(Sheet1!D:D)
  B4: "Potential Monthly Savings (cancel recommended)" | C4: [SUMIF on Cancel column]
  B5: "Potential Annual Savings" | C5: =C4*12
  B6: "Number of Subscriptions" | C6: =COUNTA(Sheet1!A2:A100)
  B7: "Cancel Recommended Count" | C7: =COUNTIF(Sheet1!L:L,"CANCEL NOW")

  CATEGORY BREAKDOWN TABLE:
  For each category: Total Monthly | Total Annual | Count | % of Spend

  Pie chart placeholder: Spend by category
  Bar chart: Monthly cost per service (top 10, descending)

  SHEET 3: CANCELLATION ACTION LIST

  Auto-filtered view of all subscriptions marked "CANCEL NOW" or "Consider Canceling":
  A: Service Name
  B: Monthly Cost
  C: Annual Cost
  D: How to Cancel (link/notes)
  E: Cancellation Status (Pending/Cancelled/Kept)
  F: Date Cancelled
  G: Confirmed Savings

  SHEET 4: SUBSCRIPTION WISH LIST

  Services you're considering adding:
  A: Service Name
  B: Monthly Cost
  C: What You'd Use It For
  D: Priority (High/Medium/Low)
  E: Better Alternative?
  F: Decision

  Generate a realistic sample dataset with [NUMBER] subscriptions
  across multiple categories for a [LIFESTYLE TYPE] person spending approximately
  $[MONTHLY_AMOUNT] per month on subscriptions.

usage: |
  1. Paste into Claude and specify your lifestyle type and approximate spend
  2. Claude generates a complete sheet with sample data matching your profile
  3. Replace sample data with your actual subscriptions
  4. Set billing dates and usage frequency honestly
  5. Review the Cancel Recommendation column
  6. Use Sheet 3 to systematically cancel unwanted services
  7. Revisit monthly to track savings progress

  Works in: Excel 2016+, Google Sheets
  Estimated setup time: 20–30 minutes + 1 hour to audit your actual subscriptions
variables: |
  [NUMBER] → Number of sample subscriptions (e.g., "25")
  [LIFESTYLE TYPE] → e.g., "young professional", "student", "family of four"
  [MONTHLY_AMOUNT] → Approximate monthly spend (e.g., "150")
tips: |
  • Ask Claude to "add a free trial tracker with trial end dates and auto-alert column"
  • Request "include a shared subscriptions section for family plan cost splitting"
  • Add "create a year-over-year subscription cost comparison"
  • For couples: "add a 'Who Uses It' column with individual vs shared tags"
  • Ask Claude to "generate a 12-month savings projection if I cancel the top 5 recommendations"
---
