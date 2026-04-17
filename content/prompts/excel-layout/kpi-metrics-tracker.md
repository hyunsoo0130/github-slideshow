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
