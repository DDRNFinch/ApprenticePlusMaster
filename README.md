# V1.2 Modern Visual Test Build

This is a one-off visual upgrade intended for testing in a backup Apprentice+ repository. It preserves the V1.1 application logic and data model. The original V1.1 ZIP should be retained as the rollback source.

## v1.37.8

Practical Assessment results now use only criteria that were actually graded. Unobserved/unscored criteria are excluded from the denominator, and assessments with no scores show “Not yet graded”.

Saved signatures are blurred in the app for privacy while remaining clear in generated PDFs.


- Removed the Learning Outcome Coverage tile from NVQ Evidence Pack assignment pages.
- Learning Outcome tracking, evidence counts and PDF reporting remain unchanged.

## v1.37.3

Adds a one-tap entire portfolio download containing only evidence that has been saved within assignments, including saved evidence from unfinished assignments. Blank and unsaved sections are excluded. Admin Mode no longer displays manual export or restore backup controls.

## v1.36

Adds professional colour-coded circular identification seals to the top-right of every PDF page while retaining the clean white v1.35 layout and college branding.

## v1.35

Professional PDF redesign with white pages, Apprentice+ logo headers, clearer course and evidence hierarchy, and a light-green 3D-inspired portfolio cover.

# Apprentice+ — Trowel Occupations Course Pack

Course:
City & Guilds Level 3 NVQ Diploma in Trowel Occupations (Construction)
6570-05 — July 2025 (Version 1.1)

## GitHub Pages

1. Create a new GitHub repository.
2. Upload every file from this ZIP to the repository root.
3. Open Settings → Pages.
4. Select Deploy from a branch.
5. Select the main branch and /root.
6. Save.

## Included structure

- Five mandatory Evidence Packs
- One saved optional-unit selector
- Primary unit and embedded criterion mapping
- Four locked evidence sections per pack:
  - Photographic Evidence — minimum 10 photos
  - Learner Statement — minimum 200 words
  - Assessor Observation
  - Supporting Evidence

The primary-unit criterion details and criterion-specific evidence prompts can be added later in `course-data.js`.


## v1.34
Admin Mode now includes locally stored college branding and reusable learner QR setup sheets.

### V1.37.9
Every editable text field now includes app-wide voice-to-text dictation using an Apprentice+ microphone control. Dictation inserts at the cursor and continues to use each field's existing save or auto-save behaviour.

### V1.38.2 Learning Support
The Toolbox now includes a Learning Support hub with reading, writing, focus, hearing, memory, planning and plain-English support tools. Accessibility preferences are stored locally on the learner's device and do not record diagnoses or medical information.


## v1.38.2
Learning Support settings are global and apply to every part of Apprentice+, not only the Learning Support pages.


## v1.38.3
- Witness testimonies can now be reopened, edited and submitted again without clearing the existing testimony.
- Each resubmission is saved as a new evidence attempt while earlier attempts remain in history.


## v1.38.4

The PDF KSB Evidence Matrix now uses one consistent evidence-linking method across learner statements, practical assessments, witness evidence, professional discussions, walkthroughs, supporting evidence and any photographic evidence carrying KSB metadata. Existing saved learner statements are also recovered from their linked KSB photographs if older data does not contain the selected-KSB array.


## v1.38.6

Evidence camera inputs now display a landscape reminder and validate the finished photograph. Portrait and square camera captures are rejected before any evidence handler can save them, with options to retake the photograph or choose one from the gallery.


## V1.38.6
- Reorganised Admin Mode into clear management cards with a cleaner mobile layout.
- Modernised the practical task specification action.

### V1.38.8 EPA Knowledge Practice Attempts

- Each EPA Knowledge Practice attempt contains 20 randomly selected questions.
- Questions are drawn from the full approved KSB bank.
- Answer order is mixed on every attempt.
- Learners can repeat the practice to receive a different combination.

### V1.38.7 Knowledge Slides
Trade Courses
EPA Academy|The Academy is where you build your knowledge and prepare for assessments throughout your apprenticeship.

Knowledge Slides - Short lessons covering the knowledge required for your course.

Trade Courses - Trade-specific learning modules containing practical guidance, techniques and quizzes.

EPA Academy - Prepare for your End-Point Assessment with mock knowledge tests, professional discussion and practical assessment preparation.

Functional Skills - Improve your English and Maths through revision lessons and practice questions.

Certificates - View and download certificates you have earned after completing Academy courses and assessments.
The previous generated EPA multiple-choice mock has been replaced by a fixed, approved Knowledge Practice bank. Each KSB course expects one validated question per unique KSB. Bricklayer questions will be added to `EPA_KNOWLEDGE_PRACTICE_BANKS` in `app.js`. Professional Discussion and EPA Practical Pack stages are present as placeholders.


### V1.38.9 Professional-Judgement MCQ Standard
EPA question banks are now checked against the locked Apprentice+ writing standard: realistic workplace scenarios, four plausible answers, natural trade language, no careless distractors, no giveaway wording, and a stored explanation plus key takeaway. Incorrect answers display an immediate coaching panel during the test.


### V1.9.9
Tap the learner name in the header to open course progress, review submitted work and evidence activity, and edit course dates. The progress ring is display-only.


## V1.10.2 — Suggested Search Terms
- Added three predictive grey suggestion pills below the assignment search field.
- Suggestions respond to the learner's wording and use trade-specific synonyms.
- Tapping a suggestion immediately opens ranked assignment matches.


## V1.10.3 — Compact Course Tab

The Course page now uses a shorter progress summary card and single-line assignment status pills for a cleaner mobile layout.


## V1.10.6 — Dark Compact Course Tile

The course summary is now a smaller dark-green tile. The progress ring is enlarged and fixed in the top-right, while the white assignment-search icon remains in the bottom-right.


## V1.11.1
The compact course progress tile now uses the Apprentice+ logo gradient with subtle depth and shadow.


## V1.11.2
Witness Testimony PDFs now include every selected KSB or learning outcome, including Behaviours, and combine all WT details onto one compact A4 sheet.
