---
title: "Global Stock Market Dashboard"
description: "Generate a Google Sheets stock market dashboard with live prices via GOOGLEFINANCE, color-coded sector groupings for US, Japan, Korea, and China markets — each on its own sheet with real-time percentage changes and portfolio overview."
tool: "claude"
tags: ["stocks", "finance", "google sheets", "GOOGLEFINANCE", "market", "investing"]
date: "2026-04-10"
image: "/images/prompts/excel-layout/stock-market-dashboard.svg"
promptText: |
  Create a Global Stock Market Dashboard for Google Sheets using GOOGLEFINANCE formulas
  for live real-time data.

  NOTE: All price formulas use GOOGLEFINANCE() — Google Sheets only, no Excel.

  SHEET 1: 🇺🇸 US MARKETS

  MARKET INDICES (Rows 1–8):
  A1: "US Market Indices" — bold header, dark blue background
  A2: "Index" | B2: "Price" | C2: "Change" | D2: "Change %" | E2: "52W High" | F2: "52W Low"
  A3: "S&P 500" | B3: =GOOGLEFINANCE("INDEXSP:.INX","price") | C3: =GOOGLEFINANCE("INDEXSP:.INX","change") | D3: =GOOGLEFINANCE("INDEXSP:.INX","changepct")/100 | ...
  A4: "NASDAQ" | B4: =GOOGLEFINANCE("INDEXNASDAQ:.IXIC","price") | ...
  A5: "Dow Jones" | B5: =GOOGLEFINANCE("INDEXDJX:.DJI","price") | ...
  A6: "Russell 2000" | B6: =GOOGLEFINANCE("INDEXRUSSELL:RUT","price") | ...
  A7: "VIX (Fear Index)" | B7: =GOOGLEFINANCE("INDEXCBOE:VIX","price") | ...

  CONDITIONAL FORMATTING (Change % column):
  Positive % → green fill (darker = more positive)
  Negative % → red fill (darker = more negative)
  Zero → white

  SECTOR GROUPS (Row 10 onward, each sector in colored block):

  🖥️ TECHNOLOGY SECTOR (light blue background):
  Columns: A=Ticker | B=Company | C=Price | D=Change% | E=Market Cap | F=P/E | G=52W Perf
  AAPL | Apple | =GOOGLEFINANCE("AAPL","price") | =GOOGLEFINANCE("AAPL","changepct")/100 | ...
  MSFT | Microsoft | =GOOGLEFINANCE("MSFT","price") | ...
  GOOGL | Alphabet | =GOOGLEFINANCE("GOOGL","price") | ...
  NVDA | NVIDIA | =GOOGLEFINANCE("NVDA","price") | ...
  META | Meta | =GOOGLEFINANCE("META","price") | ...
  AMZN | Amazon | =GOOGLEFINANCE("AMZN","price") | ...
  TSLA | Tesla | =GOOGLEFINANCE("TSLA","price") | ...
  CRM | Salesforce | =GOOGLEFINANCE("CRM","price") | ...

  💰 FINANCE SECTOR (light green background):
  JPM | JPMorgan Chase | =GOOGLEFINANCE("JPM","price") | ...
  BAC | Bank of America | =GOOGLEFINANCE("BAC","price") | ...
  GS | Goldman Sachs | =GOOGLEFINANCE("GS","price") | ...
  V | Visa | =GOOGLEFINANCE("V","price") | ...
  BRK.B | Berkshire Hathaway | =GOOGLEFINANCE("BRK.B","price") | ...

  🏥 HEALTHCARE SECTOR (light purple background):
  JNJ | Johnson & Johnson | =GOOGLEFINANCE("JNJ","price") | ...
  UNH | UnitedHealth | =GOOGLEFINANCE("UNH","price") | ...
  PFE | Pfizer | =GOOGLEFINANCE("PFE","price") | ...
  ABBV | AbbVie | =GOOGLEFINANCE("ABBV","price") | ...

  ⚡ ENERGY SECTOR (light yellow background):
  XOM | ExxonMobil | =GOOGLEFINANCE("XOM","price") | ...
  CVX | Chevron | =GOOGLEFINANCE("CVX","price") | ...

  🛒 CONSUMER SECTOR (light orange background):
  WMT | Walmart | =GOOGLEFINANCE("WMT","price") | ...
  COST | Costco | =GOOGLEFINANCE("COST","price") | ...
  MCD | McDonald's | =GOOGLEFINANCE("MCD","price") | ...

  SECTOR SUMMARY TABLE:
  Each sector's average daily change % — best and worst sector highlighted

  SHEET 2: 🇯🇵 JAPAN MARKETS

  INDICES:
  Nikkei 225: =GOOGLEFINANCE("INDEXNIKKEI:NI225","price")
  TOPIX: =GOOGLEFINANCE("TYO:TOPIX","price") [Note: may use alternative]

  MAJOR STOCKS by sector (Toyota exchange code: TYO:7203):

  🚗 AUTO & MANUFACTURING:
  TYO:7203 | Toyota Motor | =GOOGLEFINANCE("TYO:7203","price") | ...
  TYO:7267 | Honda Motor | =GOOGLEFINANCE("TYO:7267","price") | ...
  TYO:7751 | Canon | ...
  TYO:6758 | Sony Group | =GOOGLEFINANCE("TYO:6758","price") | ...

  💻 TECH & TELECOM:
  TYO:9984 | SoftBank Group | =GOOGLEFINANCE("TYO:9984","price") | ...
  TYO:6861 | Keyence | ...
  TYO:7974 | Nintendo | =GOOGLEFINANCE("TYO:7974","price") | ...
  TYO:6501 | Hitachi | ...

  🏦 FINANCE:
  TYO:8306 | Mitsubishi UFJ | =GOOGLEFINANCE("TYO:8306","price") | ...
  TYO:8316 | Sumitomo Mitsui | ...

  SHEET 3: 🇰🇷 KOREA MARKETS

  INDICES:
  KOSPI: =GOOGLEFINANCE("KRX:KOSPI","price") [Note: limited GOOGLEFINANCE support]
  KOSDAQ: =GOOGLEFINANCE("KRX:KOSDAQ","price")

  NOTE: Korean stocks may require manual price entry or use Yahoo Finance import
  as GOOGLEFINANCE has limited KRX coverage.

  MAJOR STOCKS (KRX codes):
  KRX:005930 | Samsung Electronics
  KRX:000660 | SK Hynix
  KRX:035420 | NAVER
  KRX:035720 | Kakao
  KRX:005380 | Hyundai Motor
  KRX:006400 | Samsung SDI
  KRX:051910 | LG Chem
  KRX:000270 | Kia

  SHEET 4: 🇨🇳 CHINA / HK MARKETS

  INDICES:
  Shanghai Composite: =GOOGLEFINANCE("SHA:000001","price")
  Hang Seng (HK): =GOOGLEFINANCE("INDEXHANGSENG:HSI","price")

  HONG KONG LISTED (HKG — best GOOGLEFINANCE support):
  HKG:0700 | Tencent Holdings | =GOOGLEFINANCE("HKG:0700","price") | ...
  HKG:9988 | Alibaba (HK) | =GOOGLEFINANCE("HKG:9988","price") | ...
  HKG:2318 | Ping An Insurance | ...
  HKG:1211 | BYD Company | =GOOGLEFINANCE("HKG:1211","price") | ...
  HKG:0941 | China Mobile | ...
  HKG:3690 | Meituan | =GOOGLEFINANCE("HKG:3690","price") | ...

  US-LISTED CHINESE ADRs (full GOOGLEFINANCE support):
  BABA | Alibaba ADR | =GOOGLEFINANCE("BABA","price") | ...
  PDD | PDD Holdings | =GOOGLEFINANCE("PDD","price") | ...
  BIDU | Baidu | =GOOGLEFINANCE("BIDU","price") | ...
  NIO | NIO Inc | =GOOGLEFINANCE("NIO","price") | ...

  SHEET 5: PORTFOLIO TRACKER (Optional)

  A: Ticker | B: Market | C: Shares Owned | D: Avg Buy Price | E: Current Price (GOOGLEFINANCE)
  F: Current Value | G: Gain/Loss | H: Gain/Loss % | I: % of Portfolio

  Portfolio total: =SUMPRODUCT(C:C,E:E)
  Chart: Portfolio allocation pie chart

  Set up this dashboard with all 4 market sheets, sector color coding,
  and conditional formatting for gains (green) and losses (red).

usage: |
  1. Open a new Google Sheets (GOOGLEFINANCE only works in Google Sheets)
  2. Paste into Claude — Claude returns formula-by-formula setup instructions
  3. Create 5 sheets: US / Japan / Korea / China / Portfolio
  4. Enter GOOGLEFINANCE formulas exactly as instructed
  5. Prices auto-refresh when you open the sheet (15–20 min delay per Google's feed)
  6. Pin this tab in your browser — check markets any time

  Works in: Google Sheets ONLY
  GOOGLEFINANCE data delay: ~15–20 minutes (free tier limitation)
  Estimated setup time: 60–90 minutes for all 4 market sheets
variables: |
  No variables required — formulas are pre-set for major stocks in each market.
  Optional: Add your own tickers to the Portfolio sheet
tips: |
  • Ask Claude to "add a cryptocurrency sheet with BTC, ETH, SOL live prices"
  • Request "add a currency exchange rates sheet (USD/KRW, USD/JPY, USD/CNY, EUR/USD)"
  • Add "create a stock screener tab filtering by P/E ratio and market cap"
  • Ask Claude to "add a watchlist sheet where I can track stocks I'm researching"
  • Request "add a sector rotation heatmap showing which sectors are leading/lagging"
  • For portfolio: "add an annual dividend income calculator"
---
