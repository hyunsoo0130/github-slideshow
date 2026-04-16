---
title: "Meeting Minutes Template"
description: "Generate a professional meeting minutes document with agenda items, discussion summaries, action items, decisions log, and follow-up tracker. Works for board meetings, team standups, and client calls."
tool: "claude"
tags: ["meeting", "minutes", "word", "template", "team"]
date: "2026-04-03"
promptText: |
  Create a Word document template for meeting minutes for [MEETING TYPE] at [ORGANIZATION NAME].

  HEADER SECTION
  Meeting title: "[MEETING NAME]"
  Date: [DATE] | Time: [START TIME] – [END TIME] | Location/Platform: [LOCATION]
  Meeting Chair: [CHAIR NAME] | Minutes by: [RECORDER NAME]
  Attendees: [LIST NAMES AND ROLES]
  Absent: [ABSENT MEMBERS, IF ANY]

  AGENDA ITEMS (repeat this block for each item):
  Item [X]: [AGENDA ITEM TITLE]
  Presenter: [NAME]
  Discussion Summary: [2–3 sentence summary]
  Decision Made: [Decision or "No decision — further discussion needed"]
  Vote Result (if applicable): For: [X] | Against: [X] | Abstain: [X]

  ACTION ITEMS TABLE
  | # | Action Item | Owner | Due Date | Priority | Status |
  (Generate 5 sample action items based on [MEETING TYPE] context)
  Status options: Not Started / In Progress / Completed / Blocked

  DECISIONS LOG
  Quick reference list of all decisions made in this meeting:
  • Decision 1: [DECISION TEXT] — confirmed by [AUTHORITY]
  • Decision 2: [DECISION TEXT]

  NEXT MEETING
  Date: [NEXT MEETING DATE] | Time: [TIME] | Location: [LOCATION]
  Agenda items to carry forward: [ITEMS NOT RESOLVED TODAY]

  SIGNATURE/APPROVAL
  "These minutes are a true and accurate record of the meeting."
  Approved by: _____________ Date: _____________

  Generate complete realistic example for a [MEETING TYPE] meeting.
usage: |
  Fill in meeting details and paste into Claude. Claude returns fully formatted minutes
  that you can copy into Word. The action items table is especially useful — track
  follow-ups by updating the Status column after each meeting.
variables: |
  [MEETING TYPE] → "board meeting" / "weekly team standup" / "client review" / "project kickoff"
  [ORGANIZATION NAME] → Your company or team name
  [DATE], [START/END TIME], [LOCATION] → Meeting logistics
  [CHAIR NAME], [RECORDER NAME] → People in key roles
tips: |
  • Ask Claude to "draft suggested agenda for next meeting based on unresolved items"
  • Add "include parking lot section for off-topic items to address later"
  • Request "add a risk log section for issues flagged during discussion"
---
