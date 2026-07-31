# V1.5.42

- Added a single app-wide bottom-navigation safe-area system.
- Kept all screens, buttons, popups, modals and help tours above the fixed navigation.
- Prevented the mobile keyboard from pushing the navigation upward.

# V1.5.40

- Modernised OTJ place selector tabs.
- Added press-to-unlock protection to every blank signature box.
- Prevented accidental signature marks while scrolling.

# V1.5.39

- Removed EPA readiness from the Review Status red/amber/green calculation.
- EPA readiness remains displayed as a separate tracker.
- Review Status now uses assignments, KSBs/Learning Outcomes and OTJ progress only.

# V1.5.38

- Restored the missing `reminders()` and `saveReminders()` functions.
- Fixed the Toolbox page runtime crash.
- Fixed intermittent Academy crashes caused by reminder notification refreshes.

# V1.5.35

- Expanded notification settings for newer Mate apps and course features.
- Removed OTJ photo capture and photo export.
- Redesigned OTJ PDF exports to list multiple complete entries per page with green separators.
- Added Aptem-ready Copy entry clipboard action.

# Apprentice+ V1.5.34

- Rebuilt the page-information tours around the current app layout.
- Added OTJMate and RemindMate to Toolbox guidance.
- Corrected learner-name and progress-ring guidance.
- Fitted tour screens and controls above the fixed bottom navigation.
- Added global navigation-safe spacing and height limits to popups, sheets and modal dialogs.

## V1.5.37

- Fixed the false “Unable to open local storage” crash caused by update safety backups exhausting IndexedDB storage.
- Older duplicate update backups are removed before the current backup is written.
- Backup, service-worker and notification failures no longer stop the main app from loading.
- Added navigation recovery so Toolbox, Course and Academy remain usable if one page throws a runtime error.

## V1.5.36
- Restored the mobile quick tour to a stacked layout: phone preview in the top half and guidance in the bottom half.
- Kept the tour fully above the fixed bottom navigation.
- Kept all tour action buttons visible, with internal text scrolling only where required.
