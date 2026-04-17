---
title: "Wedding & Event Budget Planner"
description: "Generate a comprehensive wedding or special event budget spreadsheet with vendor tracking, payment milestone calendar, guest list manager, seating chart organizer, and a real-time budget vs actual spend dashboard to keep your big day on budget."
tool: "claude"
tags: ["wedding", "event", "budget", "planner", "vendor", "guest list"]
date: "2026-04-10"
image: "/images/prompts/excel-layout/wedding-event-planner.svg"
promptText: |
  Create a Wedding & Special Event Budget Planner for Excel or Google Sheets.
  (Works for weddings, engagement parties, corporate events, birthday galas, etc.)

  SHEET 1: BUDGET DASHBOARD

  EVENT HEADER (Rows 1–6):
  A1: "Event Name:" | B1: [EVENT_NAME]
  A2: "Event Date:" | B2: [EVENT_DATE]
  A3: "Venue:" | B3: [VENUE]
  A4: "Total Budget:" | B4: [TOTAL_BUDGET]
  A5: "Guest Count:" | B5: [GUEST_COUNT]
  A6: "Cost Per Guest:" | B6: =B4/B5

  BUDGET OVERVIEW TABLE:
  Category | Budgeted | Contracted | Paid | Remaining | % of Budget | Over/Under

  Categories (with typical % allocation for reference):
  🏛 VENUE & SPACE (25–30%)
  📸 PHOTOGRAPHY & VIDEO (10–12%)
  🎵 MUSIC & ENTERTAINMENT (8–10%)
  🌸 FLOWERS & DÉCOR (8–12%)
  🍽 CATERING & CAKE (35–40%)
  💌 STATIONERY & PAPER (2–3%)
  👗 ATTIRE & BEAUTY (8–10%)
  💍 RINGS & JEWELRY (3–5%)
  🚗 TRANSPORTATION (2–3%)
  🏨 ACCOMMODATIONS (3–5%)
  🎁 FAVORS & GIFTS (2–3%)
  📋 PLANNING & ADMIN (2%)
  💰 CONTINGENCY FUND (5–10%)

  TOTAL ROW:
  Total Budgeted: =SUM(Budgeted column)
  Total Paid: =SUM(Paid column)
  Total Remaining to Pay: =SUM(Contracted-Paid)
  Budget Surplus / Deficit: =B4-Total Contracted

  GAUGE CHART: Visual budget thermometer showing % spent

  SHEET 2: VENDOR TRACKER

  One row per vendor:
  A: Category (from budget categories)
  B: Vendor / Company Name
  C: Contact Person
  D: Phone | E: Email | F: Website
  G: Service Description
  H: Quoted Price
  I: Final Contracted Price
  J: Deposit Due Date | K: Deposit Amount | L: Deposit Paid (Yes/No)
  M: Final Payment Date | N: Balance Due (auto) =I-K
  O: Contract Signed (Yes/No)
  P: Insurance / License Verified (Yes/No)
  Q: Status (Researching/Quoted/Booked/Confirmed/Completed)
  R: Review Rating (1–5 post-event)
  S: Notes

  CONDITIONAL FORMATTING:
  Status "Booked" = green | "Researching" = gray | "Quoted" = yellow
  Deposit not paid by due date = red alert
  Contract not signed for booked vendors = orange

  PAYMENT TIMELINE (mini calendar):
  Sorted list of all payment due dates across all vendors

  SHEET 3: GUEST LIST & RSVP

  A: # (guest number)
  B: First Name | C: Last Name
  D: Group / Relationship (Family/Friend/Work/Partner's Family)
  E: Side (Partner A / Partner B / Mutual) — for weddings
  F: Meal Choice (dropdown: Chicken/Fish/Vegetarian/Kids/None)
  G: Dietary Restrictions
  H: Plus One? (Yes/No) | I: Plus One Name
  J: Address (for invitations)
  K: Invitation Sent (Yes/No) | L: Date Sent
  M: RSVP Status (Awaiting/Attending/Declined/Maybe)
  N: RSVP Date Received
  O: Table # (from seating chart)
  P: Thank You Card Sent (Yes/No)
  Q: Gift Received | R: Gift Description
  S: Notes

  RSVP SUMMARY:
  Total Invited | Attending | Declined | Awaiting | Attending %
  Total Vegetarian/Vegan meals | Total Kids meals | Total meals needed

  SHEET 4: TIMELINE & CHECKLIST

  12 months before:
  □ Set total budget and contribution splits
  □ Choose wedding date and backup date
  □ Book venue
  □ Hire wedding planner (if using)
  □ Create initial guest list

  9 months before: [items]
  6 months before: [items]
  3 months before: [items]
  1 month before: [items]
  1 week before: [items]
  Day before / Day of: [items]
  Post-event: thank you cards, vendor reviews, legal name change, honeymoon

  Each task: checkbox | Category | Owner (Partner A/B/Planner) | Due Date | Done Date

  SHEET 5: HONEYMOON / AFTER-PARTY BUDGET

  Separate mini-budget for honeymoon:
  Same category structure: Flights, Accommodation, Activities, Food, Shopping, Emergency
  With destination currency conversion

  Generate this planner for a [EVENT_TYPE] for [GUEST_COUNT] guests
  with a total budget of $[TOTAL_BUDGET] on [EVENT_DATE] at [VENUE_TYPE].

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DESIGN & VISUAL FORMATTING STANDARDS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Apply these exact styles so the sheet looks like a professional dashboard:

  COLOR PALETTE:
  ▸ Title header row:       Background #831843, text #FFFFFF, Bold 12pt, row height 36
  ▸ Section header rows:    Background #9d174d, text #FFFFFF, Bold 11pt, row height 28
  ▸ Column label headers:   Background #1E293B, text #94A3B8, Bold 10pt
  ▸ Data rows (alternating): #F8FAFC (odd rows) / #FFFFFF (even rows), text #1E293B, 10pt
  ▸ Grand total / summary:  Background #F1F5F9, Bold, thick top border #9d174d
  ▸ Footer / notes row:     Background #0F172A, text #475569, 9pt

  STATUS & CONDITIONAL COLORS:
  ▸ Done / On Track / Positive:  text #16A34A, cell fill #DCFCE7
  ▸ In Progress / Warning:       text #D97706, cell fill #FEF3C7
  ▸ At Risk / Overdue / Negative: text #DC2626, cell fill #FEE2E2
  ▸ Planned / Neutral:           text #4F46E5, cell fill #E0E7FF
  ▸ Highlight accent color:      #f43f5e

  FONTS & SIZES:
  ▸ Font: Calibri (Excel) or Arial (Google Sheets)
  ▸ Title: Bold 14pt | Section headers: Bold 11pt | Data: 10pt | Notes: 9pt gray

  BORDERS:
  ▸ Data cells: thin border, color #E2E8F0
  ▸ Between sections: medium border, color #CBD5E1
  ▸ Key metric / total rows: thick top border, color #9d174d

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
  ▸ Set sheet tab color to #9d174d
  ▸ Add a print area covering the main visible range

usage: |
  1. Paste into Claude with your event type and budget details
  2. Claude generates all 5 sheets with realistic budget breakdowns
  3. Share Sheet 1 dashboard with your partner — it's the single source of truth
  4. Add each vendor as you research and book them in Sheet 2
  5. Update RSVP status in Sheet 3 as responses come in
  6. Check Sheet 4 checklist weekly — delegate tasks by owner
  7. Run the dashboard monthly to catch budget overruns early

  Works in: Excel 2016+, Google Sheets
  Tip: Share via Google Sheets for real-time collaboration with partner and planner
  Estimated setup time: 45–60 minutes
variables: |
  [EVENT_NAME] → e.g., "Sarah & James Wedding"
  [EVENT_DATE] → Date of the event
  [VENUE] → Venue name
  [TOTAL_BUDGET] → Total event budget in your currency
  [GUEST_COUNT] → Expected number of guests
  [EVENT_TYPE] → "wedding" / "engagement party" / "corporate gala" / "birthday party"
  [VENUE_TYPE] → "hotel ballroom" / "outdoor garden" / "beach resort" / "city restaurant"
tips: |
  • Ask Claude to "add a seating chart layout with table numbers and capacity"
  • Request "include a vendor comparison worksheet — side-by-side price quotes"
  • Add "create a wedding website content planner (photos, story, FAQ, registry)"
  • For destination weddings: "add international guest logistics (flights, hotel blocks, visa info)"
  • Ask Claude to "split the budget between two families with individual contribution tracking"
---
