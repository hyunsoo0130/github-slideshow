---
title: "30-Day Habit & Goal Tracker"
description: "Generate a motivating 30-day habit tracking spreadsheet with daily check-in grids, streak counters, completion percentages, and a visual progress heatmap — built to help you build lasting routines and achieve monthly goals."
tool: "claude"
tags: ["habit", "goal", "tracker", "productivity", "30 day", "streak"]
date: "2026-04-10"
image: "/images/prompts/excel-layout/habit-goal-tracker.svg"
promptText: |
  Create a 30-Day Habit & Goal Tracker spreadsheet for Excel or Google Sheets.

  SHEET 1: DAILY HABIT GRID

  LAYOUT:
  A1: "30-Day Habit Tracker" — merged A1:AF1, bold 18pt, colored header
  A2: "Month:" | B2: [MONTH YEAR] — user fills in

  Column Headers (Row 3):
  A3: "Habit"
  B3: "Goal/Target"
  C3 through AF3: Day 1 through Day 30 (numbers 1–30)
  AG3: "Total ✓"
  AH3: "Completion %"
  AI3: "Current Streak"
  AJ3: "Best Streak"

  HABITS (Rows 4–13, one per row):
  A4–A13: [HABIT_1] through [HABIT_10] — user's habit names
  B4–B13: Target (e.g., "Daily", "5x/week", "3x/week")

  DAILY CELLS (C4:AF13):
  Each cell: user types "✓" or "1" to mark completion
  Conditional formatting: ✓ = green fill | empty = light gray | "x" = red fill

  FORMULAS:
  AG4: =COUNTIF(C4:AF4,"✓")
  AH4: =AG4/30 formatted as %
  AI4: [streak formula counting consecutive recent ✓]
  AJ4: [max streak formula]

  STREAK FORMULA (AI column):
  Modern Excel 365 / Google Sheets (recommended):
  =LET(data,C4:AF4,n,COLUMNS(data),
   REDUCE(0,SEQUENCE(n,,n,-1),
   LAMBDA(acc,i,IF(INDEX(data,1,i)="✓",acc+1,0))))

  Excel 2019 or older (compatibility fallback — use this if the above returns an error):
  =IFERROR(MATCH(FALSE,EXACT(IF(OFFSET(C4,0,COLUMNS(C4:AF4)-ROW(INDIRECT("1:"&COLUMNS(C4:AF4))),1,1),"✓",""),{"✓"}),0)-1,COUNTIF(C4:AF4,"✓"))

  BOTTOM SUMMARY (Row 15):
  A15: "Daily Completion Score" 
  C15:AF15: =COUNTIF(C4:C13,"✓")/10 as % — what % of habits done each day

  HEATMAP (Row 16):
  Color scale: 0% = white, 50% = yellow, 100% = dark green

  SHEET 2: MONTHLY GOALS

  For each of [NUMBER_OF_GOALS] goals:
  A: Goal Description
  B: Category (Health / Career / Finance / Learning / Relationships / Other)
  C: Specific Target (measurable)
  D: Start Value
  E: Current Value
  F: Target Value
  G: % Complete (auto formula)
  H: Target Date
  I: Daily Action Required
  J: Progress Notes
  K: Status (On Track / At Risk / Achieved / Failed)

  Progress bar (Column L):
  =REPT("█",ROUND(G2*10,0))&REPT("░",10-ROUND(G2*10,0))

  SHEET 3: WEEKLY REVIEW

  For each of the 4-5 weeks in the month:
  A: Week Number
  B: Wins (what went well)
  C: Struggles (what was hard)
  D: Adjustment for Next Week
  E: Habit Completion Rate that Week
  F: Goal Progress That Week
  G: Energy/Mood Rating (1–10)
  H: Notes

  SHEET 4: MONTHLY SUMMARY

  Overall stats pulled automatically:
  - Most consistent habit (highest %)
  - Weakest habit (lowest %)
  - Perfect days count (100% habit completion)
  - Longest streak achieved across all habits
  - Goals achieved count
  - Total habit completions

  Visual: Month calendar heatmap showing daily completion scores

  Generate this tracker for the habits: [HABIT_LIST]
  with goals: [GOAL_LIST]
  for the month of [MONTH] [YEAR].

usage: |
  1. Paste into Claude with your habit names and goals filled in
  2. Claude generates the complete layout with your specific habits
  3. Set up in Excel or Google Sheets following the instructions
  4. Each day, open the sheet and mark your completed habits with ✓
  5. Weekly, fill in the review sheet to reflect and adjust
  6. At month end, review your summary stats and set next month's goals

  Works in: Excel 2016+, Google Sheets (streak formula may need adjustment)
  Estimated setup time: 20–30 minutes
variables: |
  [HABIT_1] through [HABIT_10] → Your specific habits
    Examples: "Morning Run", "Read 20 mins", "No Sugar", "Meditate", "Cold Shower"
  [NUMBER_OF_GOALS] → How many monthly goals (2–8 recommended)
  [HABIT_LIST] → Comma-separated habits for sample data
  [GOAL_LIST] → Comma-separated goals with targets
  [MONTH] [YEAR] → e.g., "April 2026"
tips: |
  • Ask Claude to "add a habit dependency chain — unlock Habit 3 only after Habit 1 streak ≥ 7 days"
  • Request "include a rewards system — earn points for streaks, redeem for rewards"
  • Add "create a quarterly version with 90-day streak tracking"
  • For teams: "make a shared version with multiple people's habits side by side"
  • Ask Claude to "add motivational quotes that appear based on weekly completion rate"
---
