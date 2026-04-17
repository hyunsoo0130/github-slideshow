---
title: "KPI Metrics Tracker Dashboard"
description: "Generate a weekly/monthly KPI tracking dashboard in Excel with sparklines, traffic light indicators, trend analysis, and executive summary — suitable for any team or department."
tool: "claude"
tags: ["kpi", "metrics", "dashboard", "excel", "reporting", "business"]
date: "2026-04-05"
image: "/images/prompts/excel-layout/kpi-metrics-tracker.svg"
promptText: |
  Create a KPI metrics tracker dashboard for [TEAM/DEPARTMENT] at [COMPANY NAME].
  Reporting period: [WEEKLY/MONTHLY]. Key stakeholders: [WHO REVIEWS THIS].
  Number of KPIs to track: [NUMBER, typically 8–12].

  DASHBOARD LAYOUT (Sheet 1):

  HEADER ROW
  "KPI Dashboard — [TEAM] — [PERIOD]"
  Last updated: [DATE] | Prepared by: [NAME]
  Overall health score: [FORMULA — average of all KPI achievement %]

  KPI TABLE STRUCTURE (one row per KPI):
  Column A: KPI Name
  Column B: Description (1-line)
  Column C: Owner
  Column D: Target (this period)
  Column E: Actual (this period)
  Column F: Achievement % (=E/D formatted as %)
  Column G: vs Last Period (% change)
  Column H: vs Same Period Last Year (% change)
  Column I: Trend (Sparkline — last 8 periods)
  Column J: Status (traffic light: 🟢 🟡 🔴 based on achievement %)
  Column K: Notes/Context

  TRAFFIC LIGHT RULES (Conditional Formatting):
  ≥ 90% achievement → Green 🟢 background
  75–89% → Yellow 🟡 background
  < 75% → Red 🔴 background

  GENERATE KPIs for [DEPARTMENT TYPE]:
  [If Sales]: Revenue, Deals Closed, Win Rate, Pipeline Value, Avg Deal Size, CAC, Churn Rate, NPS
  [If Marketing]: Website Traffic, MQL Leads, Conversion Rate, CAC, Email Open Rate, Social Reach, Content Published
  [If Operations]: On-time Delivery %, Defect Rate, Cost per Unit, Employee Utilization, SLA Compliance
  [If HR]: Headcount, Attrition Rate, Time-to-Hire, Employee Satisfaction, Training Hours, Absenteeism

  CHARTS SECTION (below main table):
  Chart 1: Bar chart — KPI achievement % sorted high to low
  Chart 2: Line chart — top 3 KPIs trend over last 12 periods
  Chart 3: Pie/donut — % of KPIs Green / Yellow / Red

  EXECUTIVE SUMMARY BOX
  "At a Glance — [PERIOD]:"
  • [X] of [TOTAL] KPIs on track (Green)
  • [X] need attention (Yellow)
  • [X] off-track (Red)
  Top performer: [KPI NAME] at [X]% achievement
  Most improved: [KPI NAME], up [X]% vs last period
  Biggest risk: [KPI NAME] — [ACTION NEEDED]

  HISTORICAL DATA SHEET (Sheet 2):
  Same KPI rows, columns = each period (month or week)
  Allows trend analysis and sparkline source data

  Generate complete KPI list with realistic sample data for a [DEPARTMENT TYPE] team.
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DESIGN & VISUAL FORMATTING STANDARDS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Apply these exact styles so the sheet looks like a professional dashboard:

  COLOR PALETTE:
  ▸ Title header row:       Background #4c1d95, text #FFFFFF, Bold 12pt, row height 36
  ▸ Section header rows:    Background #7c3aed, text #FFFFFF, Bold 11pt, row height 28
  ▸ Column label headers:   Background #1E293B, text #94A3B8, Bold 10pt
  ▸ Data rows (alternating): #F8FAFC (odd rows) / #FFFFFF (even rows), text #1E293B, 10pt
  ▸ Grand total / summary:  Background #F1F5F9, Bold, thick top border #7c3aed
  ▸ Footer / notes row:     Background #0F172A, text #475569, 9pt

  STATUS & CONDITIONAL COLORS:
  ▸ Done / On Track / Positive:  text #16A34A, cell fill #DCFCE7
  ▸ In Progress / Warning:       text #D97706, cell fill #FEF3C7
  ▸ At Risk / Overdue / Negative: text #DC2626, cell fill #FEE2E2
  ▸ Planned / Neutral:           text #4F46E5, cell fill #E0E7FF
  ▸ Highlight accent color:      #8b5cf6

  FONTS & SIZES:
  ▸ Font: Calibri (Excel) or Arial (Google Sheets)
  ▸ Title: Bold 14pt | Section headers: Bold 11pt | Data: 10pt | Notes: 9pt gray

  BORDERS:
  ▸ Data cells: thin border, color #E2E8F0
  ▸ Between sections: medium border, color #CBD5E1
  ▸ Key metric / total rows: thick top border, color #7c3aed

  COLUMN WIDTHS:
  ▸ Text/label columns: 180–220px (auto-fit)
  ▸ Number/metric columns: 90–110px
  ▸ Status columns: 80–100px
  ▸ Date columns: 100px

  NUMBER & DATE FORMATS:
  ▸ Currency: $#,##0.00 (or local equivalent)
  ▸ Large currency: $#,##0
  ▸ Percentages: 0.0%
  ▸ Counts/integers: #,##0
  ▸ Dates: mmm dd, yyyy

  FINISHING TOUCHES:
  ▸ Freeze the top header row (View → Freeze Top Row)
  ▸ Apply AutoFilter to the main data table header row
  ▸ Hide gridlines (View → uncheck Gridlines) for a clean dashboard look
  ▸ Set sheet tab color to #7c3aed
  ▸ Add a print area covering the main visible range

usage: |
  Share this tracker in weekly team meetings or monthly leadership reviews.
  Update the Actual column weekly/monthly — conditional formatting updates automatically.
  The executive summary helps non-data stakeholders get the picture at a glance.
variables: |
  [TEAM/DEPARTMENT] → "Sales Team" / "Marketing" / "Operations" / "Engineering"
  [COMPANY NAME] → Your organization
  [PERIOD] → "Weekly" or "Monthly" tracking cadence
  [DEPARTMENT TYPE] → Determines which KPIs Claude generates
  [NUMBER] → How many KPIs (8–12 is ideal — too many = noise)
tips: |
  • Ask Claude to "add a target-setting section where Q targets cascade to monthly targets"
  • Request "add a KPI dictionary tab defining each metric and its data source"
  • Add "waterfall chart showing which KPIs drove overall performance change"
  • For OKR alignment: ask Claude to "map each KPI to the company OKR it supports"
---
