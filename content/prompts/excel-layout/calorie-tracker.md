---
title: "Daily Calorie & Nutrition Tracker"
description: "Generate a smart calorie tracking spreadsheet with a built-in 300+ food database, automatic VLOOKUP calorie lookup, macro nutrient breakdown, daily goal progress bars, and a weekly weight-loss projection chart — no app needed."
tool: "claude"
tags: ["calorie", "nutrition", "diet", "health", "VLOOKUP", "fitness"]
date: "2026-04-10"
image: "/images/prompts/excel-layout/calorie-tracker.svg"
promptText: |
  Create a Daily Calorie & Nutrition Tracker spreadsheet for Excel or Google Sheets
  with an auto-lookup food database using VLOOKUP.

  SHEET 1: FOOD DATABASE (the lookup engine)

  Column structure:
  A: Food Name (exact, used for VLOOKUP key)
  B: Serving Size (default, e.g., "100g", "1 cup", "1 piece")
  C: Calories (kcal per serving)
  D: Protein (g)
  E: Carbohydrates (g)
  F: Fat (g)
  G: Fiber (g)
  H: Sugar (g)
  I: Sodium (mg)
  J: Category (Protein / Grain / Vegetable / Fruit / Dairy / Fat / Snack / Beverage / Fast Food)

  Populate with 300+ common foods across all categories, including:

  PROTEINS (30+ items):
  Chicken breast (100g), Salmon fillet (100g), Egg (1 large), Greek yogurt (100g),
  Canned tuna (100g), Beef sirloin (100g), Tofu firm (100g), Shrimp (100g),
  Cottage cheese (100g), Whey protein powder (1 scoop 30g), [continue...]

  GRAINS & CARBS (30+ items):
  White rice cooked (100g), Brown rice cooked (100g), Oatmeal cooked (100g),
  Whole wheat bread (1 slice), White bread (1 slice), Pasta cooked (100g),
  Sweet potato (100g), Regular potato (100g), Quinoa cooked (100g), [continue...]

  VEGETABLES (25+ items):
  Broccoli (100g), Spinach raw (100g), Kale (100g), Carrots (100g),
  Cucumber (100g), Tomato (100g), Bell pepper (100g), Avocado (100g), [continue...]

  FRUITS (20+ items):
  Banana (1 medium), Apple (1 medium), Orange (1 medium), Berries mixed (100g),
  Mango (100g), Grapes (100g), Watermelon (100g), [continue...]

  DAIRY (15+ items):
  Whole milk (1 cup), Skim milk (1 cup), Cheddar cheese (30g),
  Butter (1 tbsp), Heavy cream (1 tbsp), [continue...]

  SNACKS & FAST FOOD (30+ items):
  Almonds (28g/1oz), Peanut butter (2 tbsp), Potato chips (28g),
  Chocolate dark 70% (28g), Granola bar (1 bar 40g), [continue...]

  BEVERAGES (15+ items):
  Coffee black (240ml), Whole milk latte (medium), Orange juice (240ml),
  Sports drink (500ml), Cola (355ml), Beer (355ml), [continue...]

  SHEET 2: DAILY FOOD LOG

  USER PROFILE (Rows 1–8):
  A1: "Name:" | B1: [YOUR_NAME]
  A2: "Age:" | B2: [AGE]
  A3: "Weight (kg):" | B3: [WEIGHT]
  A4: "Height (cm):" | B4: [HEIGHT]
  A5: "Activity Level:" | B5: [ACTIVITY_LEVEL]
  A6: "Goal:" | B6: [GOAL] (Lose / Maintain / Gain)
  A7: "Daily Calorie Target:" | B7: [calculated BMR × activity factor]
  A8: "Protein Target (g):" | B8: =[WEIGHT]*[PROTEIN_MULTIPLIER]

  TODAY'S LOG (Rows 10 onward):
  A: Meal (Breakfast/Lunch/Dinner/Snack)
  B: Food Name (type here — must match Sheet1 Column A)
  C: Quantity (number of servings)
  D: Calories (auto) =IFERROR(VLOOKUP(B,Sheet1!$A:$C,3,FALSE)*C,"Not found")
  E: Protein (g) (auto) =IFERROR(VLOOKUP(B,Sheet1!$A:$D,4,FALSE)*C,"")
  F: Carbs (g) (auto)
  G: Fat (g) (auto)
  H: Fiber (g) (auto)
  I: Notes

  DAILY TOTALS (Row 40):
  Calories: =SUM(D10:D39)
  Protein: =SUM(E10:E39)
  Carbs: =SUM(F10:F39)
  Fat: =SUM(G10:G39)

  PROGRESS BARS (Row 42):
  Calories: =REPT("█",MIN(ROUND(D40/B7*10,0),10))&" "&TEXT(D40,"0")&"/"&TEXT(B7,"0")&" kcal"
  Color: <85% target = green | 85–100% = yellow | >100% = red

  MACROS PIE: Calorie breakdown from protein/carbs/fat

  SHEET 3: WEEKLY OVERVIEW

  7-day summary table:
  Columns: Date | Total Cal | Protein | Carbs | Fat | vs Target | Weight (logged)
  Line chart: Daily calories vs target line over 7 days
  Bar chart: Macro distribution per day

  SHEET 4: WEIGHT PROGRESS

  Columns: Date | Weight (kg) | BMI | Change from last week | Notes
  Line chart: Weight trend over time with goal line
  Projection formula: estimated date to reach goal weight

  Generate this tracker for a [AGE]-year-old [GENDER] weighing [WEIGHT]kg,
  height [HEIGHT]cm, [ACTIVITY_LEVEL] activity level, goal: [GOAL].

usage: |
  1. Paste into Claude with your personal stats filled in
  2. Claude generates the full food database (300+ items) + layout
  3. Set up Sheet1 (database) first — this is the lookup engine
  4. Sheet2 is your daily log — type food names exactly as in Sheet1
  5. The VLOOKUP auto-fills calories and macros instantly
  6. Log your weight in Sheet4 weekly to track progress
  7. Duplicate Sheet2 for each new day (rename to "Apr 17", "Apr 18", etc.)

  Works in: Excel 2016+, Google Sheets
  Estimated setup time: 45–60 minutes (database entry takes most time)
  Pro tip: Sort Sheet1 Column A A→Z for faster manual lookups
variables: |
  [YOUR_NAME] → Your name
  [AGE] → Your age in years
  [WEIGHT] → Your weight in kg
  [HEIGHT] → Your height in cm
  [ACTIVITY_LEVEL] → Sedentary / Lightly Active / Moderately Active / Very Active / Extremely Active
  [GOAL] → Lose Weight / Maintain / Gain Muscle
  [GENDER] → Male / Female
  [PROTEIN_MULTIPLIER] → 1.6 for muscle gain, 1.2 for fat loss, 0.8 for maintenance
tips: |
  • Ask Claude to "add Korean foods database sheet (bibimbap, kimchi, tteokbokki, etc.)"
  • Request "add a restaurant meal estimator for common restaurant dishes"
  • Add "include intermittent fasting window tracker (eating window + fasting hours)"
  • Ask Claude to "add a water intake tracker with 8-glass daily goal"
  • Request "generate a 7-day meal plan using foods from the database under my calorie target"
---
