---
title: "Project Timeline Gantt Chart"
description: "Generate a Gantt chart spreadsheet layout with task rows, milestone markers, dependency tracking, progress bars, and resource assignment — ideal for project management in Excel or Google Sheets."
tool: "claude"
tags: ["gantt", "project", "timeline", "excel", "project management", "planner"]
date: "2026-04-02"
image: "/images/prompts/excel-layout/project-timeline-gantt.svg"
promptText: |
  Create a Gantt chart spreadsheet for [PROJECT NAME] with [DURATION] timeline.
  Team size: [TEAM SIZE]. Start date: [START DATE].

  SHEET SETUP:
  Column A: Task ID (T01, T02...) — width 40px
  Column B: Task Name — width 200px
  Column C: Owner — width 100px
  Column D: Start Date — width 80px
  Column E: End Date — width 80px
  Column F: Duration (days) — formula =E-D
  Column G: % Complete — width 80px, format as percentage
  Column H: Dependencies — width 80px (e.g., "T03, T05")
  Column I: Priority — width 70px (High/Med/Low)
  Columns J onward: Date headers (one column per week or day depending on [DURATION])

  DATE HEADER FORMAT:
  Row 1: Month names (merged across their weeks)
  Row 2: Week numbers or specific dates
  Color bands: alternate light gray / white per month

  GANTT BARS:
  In each date column, use conditional formatting:
  If that date falls between task Start and End date: fill with [PRIMARY COLOR] (task bar)
  If task % Complete is calculated: first [X]% of bar in darker [PRIMARY COLOR] (progress)
  Remaining bar: lighter tint of [PRIMARY COLOR]
  Milestones (0-day tasks): Diamond symbol ◆ in that date cell, different color

  PHASE GROUPINGS (use row grouping/outline):
  Phase 1: [PHASE 1 NAME] — rows grouped, collapsible
  Phase 2: [PHASE 2 NAME] — rows grouped, collapsible
  Phase 3: [PHASE 3 NAME] — rows grouped, collapsible

  GENERATE TASKS for [PROJECT TYPE] project:
  Create 15–20 realistic tasks organized into 3 phases with logical dependencies.
  Include 3 milestone rows (marked with ◆).

  SUMMARY ROW at top:
  Overall project: Start [DATE] | End [DATE] | % Complete: =average of all task %

  RESOURCE VIEW (separate sheet):
  Per team member: list their assigned tasks and workload per week.
  Highlight overloaded weeks (more than 5 tasks in one week) in red.

  COLOR CODE:
  Not started: light gray bar | In progress: [PRIMARY COLOR] | Complete: green | Overdue: red

  Generate 20 realistic tasks for a [PROJECT TYPE] project starting [START DATE].
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DESIGN & VISUAL FORMATTING STANDARDS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Apply these exact styles so the sheet looks like a professional dashboard:

  COLOR PALETTE:
  ▸ Title header row:       Background #134e4a, text #FFFFFF, Bold 12pt, row height 36
  ▸ Section header rows:    Background #0f766e, text #FFFFFF, Bold 11pt, row height 28
  ▸ Column label headers:   Background #1E293B, text #94A3B8, Bold 10pt
  ▸ Data rows (alternating): #F8FAFC (odd rows) / #FFFFFF (even rows), text #1E293B, 10pt
  ▸ Grand total / summary:  Background #F1F5F9, Bold, thick top border #0f766e
  ▸ Footer / notes row:     Background #0F172A, text #475569, 9pt

  STATUS & CONDITIONAL COLORS:
  ▸ Done / On Track / Positive:  text #16A34A, cell fill #DCFCE7
  ▸ In Progress / Warning:       text #D97706, cell fill #FEF3C7
  ▸ At Risk / Overdue / Negative: text #DC2626, cell fill #FEE2E2
  ▸ Planned / Neutral:           text #4F46E5, cell fill #E0E7FF
  ▸ Highlight accent color:      #14b8a6

  FONTS & SIZES:
  ▸ Font: Calibri (Excel) or Arial (Google Sheets)
  ▸ Title: Bold 14pt | Section headers: Bold 11pt | Data: 10pt | Notes: 9pt gray

  BORDERS:
  ▸ Data cells: thin border, color #E2E8F0
  ▸ Between sections: medium border, color #CBD5E1
  ▸ Key metric / total rows: thick top border, color #0f766e

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
  ▸ Set sheet tab color to #0f766e
  ▸ Add a print area covering the main visible range

usage: |
  Paste into Claude with your project details. Claude returns task list with dates and
  all Gantt bar logic. Copy into Excel and apply conditional formatting rules as described.
  Then set up the date header columns based on your project start date.
variables: |
  [PROJECT NAME] → Your project title
  [DURATION] → Total project length: "3 months", "6 weeks", "1 year"
  [START DATE] → Project kick-off date
  [TEAM SIZE] → Number of team members
  [PROJECT TYPE] → "software development" / "marketing campaign" / "office renovation" / "product launch"
  [PRIMARY COLOR] → Gantt bar color (e.g., "indigo blue", "teal", "orange")
  [PHASE 1-3 NAME] → Phase names (e.g., "Discovery", "Development", "Launch")
tips: |
  • Ask Claude to "generate realistic task durations based on industry benchmarks for [PROJECT TYPE]"
  • Add "include buffer tasks (5–10% extra) between major phases"
  • Request "add a risk register tab with probability × impact matrix"
  • For agile projects: ask for "2-week sprint structure instead of phase structure"
---
