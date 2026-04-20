---
title: "Global Stock Market Dashboard"
description: "Generate a Google Sheets stock market dashboard with live prices via GOOGLEFINANCE, color-coded sector groupings for US, Japan, Korea, and China markets — each on its own sheet with real-time percentage changes and portfolio overview."
tool: "claude"
tags: ["stocks", "finance", "google sheets", "GOOGLEFINANCE", "market", "investing"]
date: "2026-04-10"
image: "/images/prompts/excel-layout/stock-market-dashboard.svg"
promptText: |
  ╔══════════════════════════════════════════════════════╗
  ║  IMPORTANT: GOOGLE SHEETS ONLY — NOT EXCEL          ║
  ║  Step 1: Go to sheets.new in your browser           ║
  ║  Step 2: Paste this prompt into Claude              ║
  ║  Step 3: Follow Claude's instructions cell by cell  ║
  ║  No API keys, no plugins, no setup — just works.    ║
  ╚══════════════════════════════════════════════════════╝

  Create a Global Stock Market Dashboard for Google Sheets with
  GOOGLEFINANCE live data. Build ALL 7 sheets in this exact order.

  ─────────────────────────────────────────────
  SHEET 1 (Tab name "US Markets", tab color #1d4ed8): US MARKETS
  ─────────────────────────────────────────────

  SECTION A — MAJOR INDICES (Rows 2–9), dark navy header:
  Columns: A=Index | B=Price | C=Change | D=Change% | E=52W High | F=52W Low

  Row 3: S&P 500       | =GOOGLEFINANCE("INDEXSP:.INX","price")      | =GOOGLEFINANCE("INDEXSP:.INX","change")      | =GOOGLEFINANCE("INDEXSP:.INX","changepct")/100
  Row 4: NASDAQ Comp.  | =GOOGLEFINANCE("INDEXNASDAQ:.IXIC","price") | =GOOGLEFINANCE("INDEXNASDAQ:.IXIC","change") | =GOOGLEFINANCE("INDEXNASDAQ:.IXIC","changepct")/100
  Row 5: Dow Jones     | =GOOGLEFINANCE("INDEXDJX:.DJI","price")     | =GOOGLEFINANCE("INDEXDJX:.DJI","change")     | =GOOGLEFINANCE("INDEXDJX:.DJI","changepct")/100
  Row 6: Russell 2000  | =GOOGLEFINANCE("INDEXRUSSELL:RUT","price")  | ...
  Row 7: VIX Fear Index| =GOOGLEFINANCE("INDEXCBOE:VIX","price")     | ...

  Conditional formatting on Change% column: positive = green fill, negative = red fill

  SECTION B — TECHNOLOGY SECTOR (light blue header, rows 11+):
  Columns: A=Ticker | B=Company | C=Price | D=Change% | E=Mkt Cap
  AAPL  | Apple     | =GOOGLEFINANCE("AAPL","price")  | =GOOGLEFINANCE("AAPL","changepct")/100
  MSFT  | Microsoft | =GOOGLEFINANCE("MSFT","price")  | =GOOGLEFINANCE("MSFT","changepct")/100
  NVDA  | NVIDIA    | =GOOGLEFINANCE("NVDA","price")  | =GOOGLEFINANCE("NVDA","changepct")/100
  GOOGL | Alphabet  | =GOOGLEFINANCE("GOOGL","price") | =GOOGLEFINANCE("GOOGL","changepct")/100
  META  | Meta      | =GOOGLEFINANCE("META","price")  | =GOOGLEFINANCE("META","changepct")/100
  AMZN  | Amazon    | =GOOGLEFINANCE("AMZN","price")  | =GOOGLEFINANCE("AMZN","changepct")/100
  TSLA  | Tesla     | =GOOGLEFINANCE("TSLA","price")  | =GOOGLEFINANCE("TSLA","changepct")/100

  SECTION C — FINANCE SECTOR (light green header):
  JPM   | JPMorgan Chase      | =GOOGLEFINANCE("JPM","price")   | ...
  BAC   | Bank of America     | =GOOGLEFINANCE("BAC","price")   | ...
  GS    | Goldman Sachs       | =GOOGLEFINANCE("GS","price")    | ...
  V     | Visa                | =GOOGLEFINANCE("V","price")     | ...
  BRK.B | Berkshire Hathaway  | =GOOGLEFINANCE("BRK.B","price") | ...

  SECTION D — HEALTHCARE (light purple header):
  JNJ  | Johnson & Johnson | =GOOGLEFINANCE("JNJ","price")  | ...
  UNH  | UnitedHealth      | =GOOGLEFINANCE("UNH","price")  | ...
  PFE  | Pfizer            | =GOOGLEFINANCE("PFE","price")  | ...
  ABBV | AbbVie            | =GOOGLEFINANCE("ABBV","price") | ...

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

  SECTOR SUMMARY TABLE (bottom of sheet):
  Each sector's average daily change % — best sector highlighted green, worst red

  ─────────────────────────────────────────────
  SHEET 2 (Tab "Japan", tab color #dc2626): JAPAN MARKETS
  ─────────────────────────────────────────────

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

  ─────────────────────────────────────────────
  SHEET 3 (Tab "Korea", tab color #0369a1): KOREA MARKETS
  ─────────────────────────────────────────────

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

  ─────────────────────────────────────────────
  SHEET 4 (Tab "China/HK", tab color #b91c1c): CHINA / HK MARKETS
  ─────────────────────────────────────────────

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

  ─────────────────────────────────────────────
  SHEET 5 (Tab "FX · Crypto · Commodities", tab color #7c3aed):
  CURRENCIES, CRYPTO & COMMODITIES
  ─────────────────────────────────────────────

  SECTION A — EXCHANGE RATES (vs USD, dark header):
  Columns: A=Pair | B=Rate | C=Change% | D=Description

  A3: USD/KRW | B3: =GOOGLEFINANCE("CURRENCY:USDKRW") | C3: (change %) | D3: "US Dollar → Korean Won"
  A4: USD/JPY | B4: =GOOGLEFINANCE("CURRENCY:USDJPY") | C4: ...        | D4: "US Dollar → Japanese Yen"
  A5: USD/CNY | B5: =GOOGLEFINANCE("CURRENCY:USDCNY") | C5: ...        | D5: "US Dollar → Chinese Yuan"
  A6: USD/EUR | B6: =GOOGLEFINANCE("CURRENCY:USDEUR") | C6: ...        | D6: "US Dollar → Euro"
  A7: USD/GBP | B7: =GOOGLEFINANCE("CURRENCY:USDGBP") | C7: ...        | D7: "US Dollar → British Pound"
  A8: USD/HKD | B8: =GOOGLEFINANCE("CURRENCY:USDHKD") | C8: ...        | D8: "US Dollar → Hong Kong Dollar"
  A9: EUR/KRW | B9: =GOOGLEFINANCE("CURRENCY:EURKRW") | C9: ...        | D9: "Euro → Korean Won"

  SECTION B — CRYPTOCURRENCY (purple header):
  A12: Bitcoin (BTC)  | B12: =GOOGLEFINANCE("CURRENCY:BTCUSD") | C12: change% | D12: "BTC/USD"
  A13: Ethereum (ETH) | B13: =GOOGLEFINANCE("CURRENCY:ETHUSD") | C13: ...      | D13: "ETH/USD"
  A14: Solana (SOL)   | B14: =GOOGLEFINANCE("CURRENCY:SOLUSD") | C14: ...      | D14: "SOL/USD"
  A15: BNB            | B15: =GOOGLEFINANCE("CURRENCY:BNBUSD") | C15: ...      | D15: "BNB/USD"

  SECTION C — COMMODITIES via ETF proxy (amber header):
  Note: GOOGLEFINANCE does not support gold/silver spot prices directly.
  Use ETF prices as real-time proxies — they track the underlying commodity closely.

  A18: Gold (via GLD ETF)   | B18: =GOOGLEFINANCE("GLD","price")  | C18: =GOOGLEFINANCE("GLD","changepct")/100  | D18: "SPDR Gold Trust — tracks gold price"
  A19: Silver (via SLV ETF) | B19: =GOOGLEFINANCE("SLV","price")  | C19: =GOOGLEFINANCE("SLV","changepct")/100  | D19: "iShares Silver Trust — tracks silver"
  A20: Oil (via USO ETF)    | B20: =GOOGLEFINANCE("USO","price")  | C20: =GOOGLEFINANCE("USO","changepct")/100  | D20: "US Oil Fund — tracks crude oil"
  A21: Natural Gas (UNG)    | B21: =GOOGLEFINANCE("UNG","price")  | C21: ...                                    | D21: "US Natural Gas Fund"

  Conditional formatting on all Change% columns: green if positive, red if negative.

  Set up this dashboard with all 5 sheets in order:
  US Markets → Japan → Korea → China/HK → FX·Crypto·Commodities
  Make sure every live price cell uses IFERROR to show "—" if data is unavailable.

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DESIGN & VISUAL FORMATTING STANDARDS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Apply these exact styles so the sheet looks like a professional dashboard:

  COLOR PALETTE:
  ▸ Title header row:       Background #0d1117, text #FFFFFF, Bold 12pt, row height 36
  ▸ Section header rows:    Background #161b22, text #FFFFFF, Bold 11pt, row height 28
  ▸ Column label headers:   Background #1E293B, text #94A3B8, Bold 10pt
  ▸ Data rows (alternating): #F8FAFC (odd rows) / #FFFFFF (even rows), text #1E293B, 10pt
  ▸ Grand total / summary:  Background #F1F5F9, Bold, thick top border #161b22
  ▸ Footer / notes row:     Background #0F172A, text #475569, 9pt

  STATUS & CONDITIONAL COLORS:
  ▸ Done / On Track / Positive:  text #16A34A, cell fill #DCFCE7
  ▸ In Progress / Warning:       text #D97706, cell fill #FEF3C7
  ▸ At Risk / Overdue / Negative: text #DC2626, cell fill #FEE2E2
  ▸ Planned / Neutral:           text #4F46E5, cell fill #E0E7FF
  ▸ Highlight accent color:      #3b82f6

  FONTS & SIZES:
  ▸ Font: Calibri (Excel) or Arial (Google Sheets)
  ▸ Title: Bold 14pt | Section headers: Bold 11pt | Data: 10pt | Notes: 9pt gray

  BORDERS:
  ▸ Data cells: thin border, color #E2E8F0
  ▸ Between sections: medium border, color #CBD5E1
  ▸ Key metric / total rows: thick top border, color #161b22

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
  ▸ Set sheet tab color to #161b22
  ▸ Add a print area covering the main visible range

usage: |
  ⚡ QUICK START (takes 2 minutes):
  1. Open sheets.new in Chrome (creates a blank Google Sheet instantly)
  2. Copy this prompt → paste into Claude
  3. Claude gives you cell-by-cell instructions — follow sheet by sheet
  4. Prices load automatically — no API key, no login, no setup

  Works in: Google Sheets ONLY (sheets.new)
  ❌ Does NOT work in Excel — GOOGLEFINANCE is a Google-only function
  Data delay: ~15–20 min (Google's free data feed limitation)
  Estimated setup time: 60–90 min for all 6 sheets
variables: |
  No variables required — all formulas are pre-built.
  Just replace example tickers in the Portfolio sheet with your own holdings.
tips: |
  • Crypto prices: BTC, ETH, SOL already included in Sheet 6
  • Exchange rates: USD/KRW, USD/JPY, EUR/USD and more in Sheet 6
  • Gold & Silver: tracked via GLD and SLV ETF prices (very close to spot)
  • Ask Claude to "add a watchlist sheet for stocks I'm researching"
  • Ask Claude to "add a dividend tracker — annual income from my holdings"
  • For Korean stocks showing — : enter the ticker in KRX:005930 format, not 005930.KS
---
