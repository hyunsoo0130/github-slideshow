---
title: "Employee Onboarding Checklist"
description: "Generate a comprehensive employee onboarding checklist spreadsheet with task tracking, department assignments, progress visualization, and completion certificates for HR teams."
tool: "claude"
tags: ["hr", "onboarding", "checklist", "excel", "employee", "template"]
date: "2026-04-04"
image: "/images/prompts/excel-layout/employee-onboarding-checklist.svg"
promptText: |
  Create an employee onboarding checklist spreadsheet for [COMPANY NAME].
  New hire role: [JOB TITLE]. Start date: [START DATE]. Department: [DEPARTMENT].

  SHEET 1: MASTER CHECKLIST

  HEADER:
  Employee Name: [NAME] | Start Date: [DATE] | Manager: [MANAGER] | HR Contact: [HR NAME]
  Overall completion: =COUNTIF(status column, "Done")/COUNT(all tasks) formatted as %
  Progress bar visualization using REPT formula

  TASK SECTIONS (with columns: Task | Owner | Timeline | Status | Notes):

  BEFORE START DATE (Pre-boarding):
  □ Send welcome email with first-day instructions — HR — Day -5
  □ Set up workstation and equipment — IT — Day -3
  □ Create login credentials and system access — IT — Day -3
  □ Add to company Slack/Teams channels — IT — Day -2
  □ Prepare desk/office space — Facilities — Day -1
  □ Send parking/building access instructions — HR — Day -1

  DAY 1 — FIRST IMPRESSIONS:
  □ Welcome meeting with HR — HR — 9:00am
  □ Office/facility tour — HR — 10:00am
  □ Meet the team lunch/coffee — Manager — 12:00pm
  □ Review employment contract and policies — HR — 2:00pm
  □ Set up computer and tools — IT — 3:00pm
  □ Review Day 1 agenda — Manager — 4:30pm

  WEEK 1 — ORIENTATION:
  □ Complete company overview training — HR
  □ Meet key stakeholders (list 5 names) — Manager
  □ Learn team processes and tools — Manager
  □ Complete mandatory compliance training — HR
  □ Set 30/60/90 day goals with manager — Manager
  □ Complete IT security training — IT
  □ Review company handbook — Employee

  MONTH 1 — INTEGRATION:
  □ Shadow team members on key projects — Manager
  □ Complete role-specific training modules — [DEPARTMENT]
  □ Attend all relevant team meetings — Employee
  □ 2-week check-in with HR — HR
  □ Complete product/service deep-dive — [DEPARTMENT]
  □ 30-day review with manager — Manager

  MONTH 2–3 — RAMP-UP:
  □ Take ownership of first independent project — Manager
  □ Enroll in professional development course — Employee
  □ 60-day performance review — Manager
  □ Collect peer feedback — HR
  □ 90-day formal review and goal update — Manager
  □ Probation period completion sign-off — HR

  STATUS OPTIONS: Not Started / In Progress / Done / N/A / Blocked
  Conditional formatting: Done = green | In Progress = yellow | Blocked = red

  SHEET 2: DEPARTMENT-SPECIFIC TASKS
  Same format but tasks specific to [DEPARTMENT]
  Include tool training, access requirements, and role-specific certifications

  SHEET 3: RESOURCES & LINKS
  List of important links, documents, login URLs, and contacts

  Generate complete task list tailored to a [DEPARTMENT] role at a [COMPANY TYPE] company.
usage: |
  Perfect for HR managers, team leads, and small business owners setting up structured onboarding.
  Claude fills in realistic tasks for your specific role and department.
variables: |
  [COMPANY NAME], [JOB TITLE], [DEPARTMENT] → Basic role context
  [COMPANY TYPE] → "tech startup" / "law firm" / "retail company" / "hospital"
  [START DATE] → New hire start date
tips: |
  • Ask Claude to "add an IT access request form tab" for large organizations
  • Request "buddy system pairing suggestions based on team structure"
  • Add "include 30/60/90 day success criteria for [JOB TITLE] role"
---
