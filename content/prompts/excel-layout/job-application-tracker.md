---
title: "Job Application Tracker"
description: "Generate a comprehensive job application tracking spreadsheet with status pipelines, interview scheduling, follow-up reminders, and company research columns — designed to manage your entire job search in one sheet."
tool: "claude"
tags: ["job search", "career", "tracker", "interview", "hiring"]
date: "2026-04-10"
image: "/images/prompts/excel-layout/job-application-tracker.svg"
promptText: |
  Create a detailed Job Application Tracker spreadsheet layout for Excel or Google Sheets.

  SHEET 1: APPLICATION PIPELINE

  Header Row (Row 1):
  A1: Company Name
  B1: Position Title
  C1: Job Board / Source
  D1: Date Applied
  E1: Application Status
  F1: Salary Range
  G1: Location / Remote
  H1: Contact Name
  I1: Contact Email
  J1: Interview Date
  K1: Interview Type (Phone / Video / Onsite)
  L1: Follow-Up Sent (Yes/No)
  M1: Next Action
  N1: Notes / Impressions
  O1: Offer Amount

  STATUS DROPDOWN (Column E):
  Values: Not Applied | Applied | Screening | Phone Interview | Technical Test | Onsite Interview | Offer Received | Offer Declined | Rejected | Withdrawn

  CONDITIONAL FORMATTING (Column E):
  "Applied" → light blue
  "Phone Interview" / "Technical Test" / "Onsite Interview" → yellow
  "Offer Received" → bright green
  "Rejected" / "Withdrawn" → light red
  "Offer Declined" → orange

  FORMULA (Column P — Days Since Applied):
  P1: "Days Since Applied"
  P2: =IF(D2="","",TODAY()-D2)
  Color rule: >30 days = red, 15–30 = yellow, <15 = green

  FREEZE: Row 1 + Column A frozen for scrolling

  SHEET 2: INTERVIEW PREP

  For each company in Sheet1 with interview scheduled:
  A: Company Name (linked from Sheet1)
  B: Role
  C: Interview Date/Time
  D: Interviewer Names
  E: Key Questions to Prepare
  F: Company Research Notes (product, culture, recent news)
  G: Your Questions to Ask Them
  H: Post-Interview Feedback

  SHEET 3: DASHBOARD SUMMARY

  B2: "Total Applications" | C2: =COUNTA(Sheet1!A2:A500)
  B3: "Active Pipelines" | C3: =COUNTIF(Sheet1!E:E,"*Interview*")
  B4: "Offers Received" | C4: =COUNTIF(Sheet1!E:E,"Offer Received")
  B5: "Response Rate %" | C5: =C3/C2 formatted as %
  B6: "Avg Days to Response" | C6: =AVERAGEIF(Sheet1!E:E,"<>Applied",Sheet1!P:P)

  Donut chart placeholder: Application status breakdown by count
  Bar chart: Applications per week (using Date Applied column)

  SHEET 4: WEEKLY GOALS

  Track weekly job search activity:
  A: Week of (date)
  B: Applications Target | C: Applications Sent
  D: Networking Contacts Target | E: Contacts Made
  F: Follow-Ups Sent
  G: Notes

  Add sample data for a [JOB TITLE] job search in the [INDUSTRY] industry,
  with [NUMBER] of applications across various companies.

usage: |
  1. Paste this prompt into Claude AI
  2. Claude returns cell-by-cell layout instructions for all 4 sheets
  3. Open a new Excel or Google Sheets workbook
  4. Follow Claude's instructions sheet by sheet
  5. Set up the status dropdown using Data Validation
  6. Apply conditional formatting rules for visual pipeline tracking
  7. Update your application status daily as you progress

  Works in: Excel 2016+, Google Sheets
  Estimated setup time: 30–45 minutes
variables: |
  [JOB TITLE] → Your target role (e.g., "Software Engineer", "Marketing Manager")
  [INDUSTRY] → Your target industry (e.g., "tech", "finance", "healthcare")
  [NUMBER] → Number of sample applications to generate (e.g., "15")
tips: |
  • Ask Claude to "add a salary negotiation tracker tab with offer comparison"
  • Request "include a networking contacts sheet with LinkedIn URLs and last contact date"
  • Add "create a weekly application goal tracker with streak counter"
  • For remote jobs: ask to "add a timezone column and remote policy column"
  • Ask Claude to "generate 20 realistic sample applications for a UX Designer job search"
---
