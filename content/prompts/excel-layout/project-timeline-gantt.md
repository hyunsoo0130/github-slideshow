---
title: "Project Timeline Gantt Chart"
description: "Generate a Gantt chart spreadsheet layout with task rows, milestone markers, dependency tracking, progress bars, and resource assignment — ideal for project management in Excel or Google Sheets."
tool: "claude"
tags: ["gantt", "project", "timeline", "excel", "project management", "planner"]
date: "2026-04-02"
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
