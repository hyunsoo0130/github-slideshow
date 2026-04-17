---
title: "Travel Budget Planner"
description: "Generate a Google Sheets travel budget planner with automatic live exchange rates via GOOGLEFINANCE, per-destination expense categories, day-by-day spending log, and a multi-trip comparison dashboard — plan any trip without currency confusion."
tool: "claude"
tags: ["travel", "budget", "exchange rate", "google sheets", "trip planner"]
date: "2026-04-10"
image: "/images/prompts/excel-layout/travel-budget-planner.svg"
promptText: |
  Create a Travel Budget Planner for Google Sheets (uses GOOGLEFINANCE for live exchange rates).

  NOTE: This spreadsheet uses GOOGLEFINANCE() formula — works in Google Sheets only.
  For Excel, use manual exchange rate entry instead.

  SHEET 1: TRIP OVERVIEW

  TRIP HEADER (Rows 1–5):
  A1: "Trip Name:" | B1: [DESTINATION]
  A2: "Departure Date:" | B2: [START_DATE]
  A3: "Return Date:" | B3: [END_DATE]
  A4: "Duration (days):" | B4: =B3-B2
  A5: "Travel Party Size:" | B5: [NUMBER_OF_PEOPLE]

  CURRENCY SETUP (Rows 7–12):
  A7: "Home Currency:" | B7: [HOME_CURRENCY] (e.g., USD, KRW, JPY)
  A8: "Destination Currency:" | B8: [DEST_CURRENCY]
  A9: "Live Exchange Rate:" | B9: =GOOGLEFINANCE("CURRENCY:"&B7&B8)
  A10: "Rate Updated:" | B10: =NOW()
  A11: "Manual Override Rate:" | B11: (leave blank to use live rate)
  A12: "Effective Rate:" | B12: =IF(B11="",B9,B11)

  BUDGET CATEGORIES (Rows 14–35):
  Columns: A=Category | B=Item | C=Budget (home currency) | D=Budget (dest currency, auto) |
           E=Actual Spent (dest currency) | F=Actual Spent (home currency, auto) | G=Variance

  D formula: =C14/Sheet1!$B$12
  F formula: =E14*Sheet1!$B$12
  G formula: =C14-F14 (positive=under budget, negative=over)

  CATEGORIES AND ITEMS:
  ✈ FLIGHTS
  - Round-trip airfare
  - Luggage fees
  - Travel insurance

  🏨 ACCOMMODATION
  - Hotel/Airbnb (per night × nights)
  - Taxes & resort fees
  - Parking

  🚗 TRANSPORTATION
  - Airport transfers
  - Local transport (subway/bus pass)
  - Car rental / fuel
  - Taxis / rideshare

  🍜 FOOD & DRINK
  - Breakfast (budget × days)
  - Lunch (budget × days)
  - Dinner (budget × days)
  - Coffee & snacks
  - Grocery / convenience store
  - Special dining / fine dining

  🎡 ACTIVITIES & ENTERTAINMENT
  - Museum / attraction tickets
  - Tours & experiences
  - Shows / events
  - Sports activities

  🛍 SHOPPING
  - Souvenirs / gifts
  - Clothing
  - Personal items

  🏥 EMERGENCY FUND
  - Medical (10% of total budget)
  - Unexpected expenses

  TOTALS (Row 36–40):
  A36: "TOTAL BUDGET" | C36: =SUM(C14:C35) | D36: =SUM(D14:D35)
  A37: "TOTAL SPENT" | F37: =SUM(F14:F35)
  A38: "REMAINING" | C38: =C36-F37
  A39: "Budget per Person per Day" | C39: =C36/B4/B5
  A40: "Actual per Person per Day" | C40: =F37/B4/B5

  SHEET 2: DAY-BY-DAY LOG

  Columns per day entry:
  A: Date
  B: Day #
  C: Category
  D: Item / Description
  E: Amount (local currency)
  F: Amount (home currency, auto-converted)
  G: Payment Method
  H: Receipt # / Notes

  Running total at top: Today's spend | Trip total to date | Budget remaining

  SHEET 3: MULTI-TRIP COMPARISON

  Compare up to 5 past/planned trips:
  Rows: each trip | Columns: destination, dates, total cost, cost/day, cost/person/day
  Chart: bar chart comparing total trip costs

  Generate a detailed travel budget for a [DURATION]-day trip to [DESTINATION]
  for [NUMBER_OF_PEOPLE] people with a total budget of [BUDGET_AMOUNT] [CURRENCY].
  Include realistic cost estimates for a [TRAVEL_STYLE] travel style.

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DESIGN & VISUAL FORMATTING STANDARDS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Apply these exact styles so the sheet looks like a professional dashboard:

  COLOR PALETTE:
  ▸ Title header row:       Background #0c4a6e, text #FFFFFF, Bold 12pt, row height 36
  ▸ Section header rows:    Background #0369a1, text #FFFFFF, Bold 11pt, row height 28
  ▸ Column label headers:   Background #1E293B, text #94A3B8, Bold 10pt
  ▸ Data rows (alternating): #F8FAFC (odd rows) / #FFFFFF (even rows), text #1E293B, 10pt
  ▸ Grand total / summary:  Background #F1F5F9, Bold, thick top border #0369a1
  ▸ Footer / notes row:     Background #0F172A, text #475569, 9pt

  STATUS & CONDITIONAL COLORS:
  ▸ Done / On Track / Positive:  text #16A34A, cell fill #DCFCE7
  ▸ In Progress / Warning:       text #D97706, cell fill #FEF3C7
  ▸ At Risk / Overdue / Negative: text #DC2626, cell fill #FEE2E2
  ▸ Planned / Neutral:           text #4F46E5, cell fill #E0E7FF
  ▸ Highlight accent color:      #38bdf8

  FONTS & SIZES:
  ▸ Font: Calibri (Excel) or Arial (Google Sheets)
  ▸ Title: Bold 14pt | Section headers: Bold 11pt | Data: 10pt | Notes: 9pt gray

  BORDERS:
  ▸ Data cells: thin border, color #E2E8F0
  ▸ Between sections: medium border, color #CBD5E1
  ▸ Key metric / total rows: thick top border, color #0369a1

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
  ▸ Set sheet tab color to #0369a1
  ▸ Add a print area covering the main visible range

usage: |
  1. Open Google Sheets (not Excel — requires GOOGLEFINANCE)
  2. Paste into Claude with your trip details filled in
  3. Claude generates cell-by-cell instructions with live exchange rate formulas
  4. Follow the setup instructions for all 3 sheets
  5. The exchange rate in B9 updates automatically when you open the sheet
  6. Log actual expenses in Sheet 2 daily while traveling
  7. Monitor Sheet 1 variance column to stay on budget

  Works in: Google Sheets only (for live exchange rates)
  Excel version: Use manual exchange rate in B11 — update before each trip day
  Estimated setup time: 30–40 minutes
variables: |
  [DESTINATION] → City/country of travel (e.g., "Tokyo, Japan")
  [START_DATE] / [END_DATE] → Trip dates
  [NUMBER_OF_PEOPLE] → Travel party size
  [HOME_CURRENCY] → Your home currency code (USD, KRW, EUR, GBP, etc.)
  [DEST_CURRENCY] → Destination currency code (JPY, THB, EUR, etc.)
  [DURATION] → Number of days
  [BUDGET_AMOUNT] → Total trip budget
  [CURRENCY] → Currency of your budget
  [TRAVEL_STYLE] → "budget backpacker" / "mid-range" / "luxury" / "family-friendly"
tips: |
  • Ask Claude to "add a packing list tab linked to trip dates and destination weather"
  • Request "include a split cost calculator for group travel — who owes whom"
  • Add "create a flight comparison table for different dates and airlines"
  • For multiple currencies: "add a currency card for each country visited"
  • Ask Claude to "add a 'splurge vs save' column suggesting where to cut costs"
---
