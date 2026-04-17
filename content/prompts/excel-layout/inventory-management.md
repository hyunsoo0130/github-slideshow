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
