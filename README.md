# attendanceUI

## Stack
- React
- styled-components
- Node/Express

## Purpose
The attendanceUI is the face of a service intended to benignly check current student attendance (no LOG) in Hack Reactor's RPT program.

It is one part of a multifacted dashboard tool.

## How it works

Note: currently, there are only 5 cohorts at a time irl.

The static cohort data is intended to be used to render checkboxes and register the status of each checkbox.

When a checkbox is selected or deselected, the state is updated to reflect that.

When the `show attendance` button is clicked, a function is fired:
  1. All of the cohorts that were checked are saved to an array `attendanceArgs`, which is used to pass arguments to the attendance API (not currently linked to this repo).
  2. Then, `runAttendanceData` function is run.
    - this is supposed to use `runAttendanceData.js` API from the main app
    - the API is structured such that data retreival takes about 12s currently to make sure the limit isn't reached on GoogleSheets call frequency
  3. After attendance data is returned, relevant cohort boxes are rendered with the student attendance data arranged in a 2xN table
