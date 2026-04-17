---
title: "Inventory Management Spreadsheet"
description: "Generate a comprehensive inventory tracking spreadsheet with stock levels, reorder alerts, supplier details, cost tracking, and low-stock dashboard — suitable for retail, e-commerce, and warehouses."
tool: "claude"
tags: ["inventory", "stock", "excel", "retail", "warehouse", "management"]
date: "2026-04-06"
image: "/images/prompts/excel-layout/inventory-management.svg"
promptText: |
  Create an inventory management spreadsheet for [BUSINESS NAME] — [BUSINESS TYPE].
  Product categories: [LIST MAIN CATEGORIES]. Currency: [CURRENCY].

  SHEET 1: INVENTORY MASTER

  COLUMNS:
  A: SKU / Item Code
  B: Product Name
  C: Category
  D: Description (brief)
  E: Unit of Measure (each, kg, box, etc.)
  F: Current Stock Qty
  G: Reorder Point (minimum before ordering)
  H: Reorder Quantity (how much to order)
  I: Max Stock Level
  J: Unit Cost (purchase price)
  K: Selling Price
  L: Margin % (=(K-J)/K)
  M: Total Value (=F×J)
  N: Supplier Name
  O: Supplier Lead Time (days)
  P: Last Ordered Date
  Q: Last Received Date
  R: Location/Bin Number
  S: Status (Active/Discontinued/Seasonal)
  T: Notes

  CONDITIONAL FORMATTING:
  Column F (Current Stock):
  - If F < G (below reorder point): RED background + "⚠ REORDER" in notes
  - If F < G×0.5 (critical): DARK RED, bold
  - If F > I (overstocked): YELLOW
  - Normal range: GREEN

  SHEET 2: LOW STOCK ALERTS DASHBOARD
  Auto-filtered view showing only items where Current Stock < Reorder Point.
  Sorted by urgency (most critical first).
  Columns: SKU | Product | Current Qty | Reorder Point | Shortage | Supplier | Lead Time | Action
  "URGENT ORDER NEEDED" header row for items < 50% of reorder point.

  SHEET 3: STOCK MOVEMENT LOG
  Date | SKU | Product | Transaction Type (Received / Sold / Adjusted / Returned) | Qty Change | Running Balance | Reference # | Staff

  SHEET 4: SUPPLIER DIRECTORY
  Supplier Name | Contact Person | Email | Phone | Products Supplied | Payment Terms | Lead Time | Rating | Notes

  SHEET 5: VALUATION SUMMARY
  Total inventory value by category (SUMIF formulas)
  Pie chart: inventory value distribution by category
  KPI tiles: Total SKUs | Total Value | SKUs in Stock | SKUs to Reorder | Dead Stock Items

  FORMULAS TO INCLUDE:
  - Reorder alert: =IF(F2<G2,"ORDER NOW","OK")
  - Days of stock remaining: =IF(AVERAGESALE>0, F2/AVERAGESALE, "N/A")
  - Turnover rate: =COGS/Average Inventory Value

  Generate 20 sample products across [CATEGORIES] with realistic pricing and stock levels.
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DESIGN & VISUAL FORMATTING STANDARDS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Apply these exact styles so the sheet looks like a professional dashboard:

  COLOR PALETTE:
  ▸ Title header row:       Background #78350f, text #FFFFFF, Bold 12pt, row height 36
  ▸ Section header rows:    Background #b45309, text #FFFFFF, Bold 11pt, row height 28
  ▸ Column label headers:   Background #1E293B, text #94A3B8, Bold 10pt
  ▸ Data rows (alternating): #F8FAFC (odd rows) / #FFFFFF (even rows), text #1E293B, 10pt
  ▸ Grand total / summary:  Background #F1F5F9, Bold, thick top border #b45309
  ▸ Footer / notes row:     Background #0F172A, text #475569, 9pt

  STATUS & CONDITIONAL COLORS:
  ▸ Done / On Track / Positive:  text #16A34A, cell fill #DCFCE7
  ▸ In Progress / Warning:       text #D97706, cell fill #FEF3C7
  ▸ At Risk / Overdue / Negative: text #DC2626, cell fill #FEE2E2
  ▸ Planned / Neutral:           text #4F46E5, cell fill #E0E7FF
  ▸ Highlight accent color:      #f59e0b

  FONTS & SIZES:
  ▸ Font: Calibri (Excel) or Arial (Google Sheets)
  ▸ Title: Bold 14pt | Section headers: Bold 11pt | Data: 10pt | Notes: 9pt gray

  BORDERS:
  ▸ Data cells: thin border, color #E2E8F0
  ▸ Between sections: medium border, color #CBD5E1
  ▸ Key metric / total rows: thick top border, color #b45309

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
  ▸ Set sheet tab color to #b45309
  ▸ Add a print area covering the main visible range

usage: |
  Start with Sheet 1 — paste Claude's output as your initial product list.
  Update Sheet 3 (movement log) every time stock comes in or goes out.
  Review Sheet 2 (low stock dashboard) daily to trigger reorders.
variables: |
  [BUSINESS NAME] → Your business name
  [BUSINESS TYPE] → "coffee shop" / "clothing boutique" / "electronics store" / "warehouse"
  [CATEGORIES] → Your product categories (2–4 main ones)
  [CURRENCY] → USD / EUR / KRW / GBP
tips: |
  • Ask Claude to "add an ABC analysis tab categorizing products by revenue contribution"
  • Request "add a dead stock report — items with no movement in 90+ days"
  • Add "seasonal demand column and adjust reorder points for Q4 peak"
  • For e-commerce: ask Claude to "add Amazon/Shopify SKU mapping column"
---
