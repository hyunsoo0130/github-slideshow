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

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DESIGN & VISUAL FORMATTING STANDARDS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Apply these exact styles so the sheet looks like a professional dashboard:

  COLOR PALETTE:
  ▸ Title header row:       Background #1e293b, text #FFFFFF, Bold 12pt, row height 36
  ▸ Section header rows:    Background #334155, text #FFFFFF, Bold 11pt, row height 28
  ▸ Column label headers:   Background #1E293B, text #94A3B8, Bold 10pt
  ▸ Data rows (alternating): #F8FAFC (odd rows) / #FFFFFF (even rows), text #1E293B, 10pt
  ▸ Grand total / summary:  Background #F1F5F9, Bold, thick top border #334155
  ▸ Footer / notes row:     Background #0F172A, text #475569, 9pt

  STATUS & CONDITIONAL COLORS:
  ▸ Done / On Track / Positive:  text #16A34A, cell fill #DCFCE7
  ▸ In Progress / Warning:       text #D97706, cell fill #FEF3C7
  ▸ At Risk / Overdue / Negative: text #DC2626, cell fill #FEE2E2
  ▸ Planned / Neutral:           text #4F46E5, cell fill #E0E7FF
  ▸ Highlight accent color:      #6366f1

  FONTS & SIZES:
  ▸ Font: Calibri (Excel) or Arial (Google Sheets)
  ▸ Title: Bold 14pt | Section headers: Bold 11pt | Data: 10pt | Notes: 9pt gray

  BORDERS:
  ▸ Data cells: thin border, color #E2E8F0
  ▸ Between sections: medium border, color #CBD5E1
  ▸ Key metric / total rows: thick top border, color #334155

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
  ▸ Set sheet tab color to #334155
  ▸ Add a print area covering the main visible range

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
