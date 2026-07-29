v1.37.5: Added display-only privacy blurring for all saved in-app signature previews while preserving the original clear signature data for PDF generation.
v1.37.4: Removed the Learning Outcome Coverage tile from NVQ Evidence Pack assignment pages while retaining all underlying outcome tracking and reporting.

v1.37.3: Fixed the NVQ Assessor Observation evidence tile. The observation page now opens correctly with assessor details, activity, learning-outcome selection, outcome photographs, generated narrative and assessor signature.

# v1.37 — Entire Saved Portfolio Download

- Added **Download Entire Portfolio** to the end of the Assignments page.
- Includes every assignment that contains evidence saved through an assignment evidence section, even when the assignment itself is unfinished.
- Includes only submitted/saved evidence versions and saved walkthrough recordings.
- Excludes blank assignments, unsaved drafts and untouched evidence sections.
- Packages each included assignment in its own clearly named folder inside one portfolio ZIP.
- Removed **Export complete backup** and **Restore backup** from Admin Mode.
- Updated the visible app version and offline cache.

# v1.36 — PDF Identification Seals

- Added a large circular colour-coded identification seal to the top-right of every generated PDF page.
- Seals use clear evidence abbreviations and full labels, including PA, LS, WT, VW, PD, PE, KQ, SE, KSB and Portfolio.
- Added double-ring, highlight and shadow styling for a professional embossed appearance.
- Repositioned college branding where necessary so the seal does not cover the existing PDF header content.
- Applied the same identification system to standard and NVQ evidence PDFs.

# v1.35 — Professional PDF Redesign

- Replaced lime-green PDF pages with clean white layouts.
- Added the Apprentice+ logo to PDF page headers.
- Added stronger hierarchy: large course title, compact standard/level details and medium evidence title.
- Redesigned the portfolio cover with light-green, logo-inspired accents and subtle layered 3D styling.
- Kept college branding and logo support.
- Replaced solid coloured footers with a restrained light-green divider and clean page numbering.

# v1.34 — Admin Mode College Branding

- Renamed Developer Mode to Admin Mode.
- Added college name, campus, address, telephone, email, website and logo settings.
- Added reusable learner QR generation with the branding package embedded in the QR.
- Added printable/save-as-PDF learner setup sheet.
- College branding is stored locally on each learner device and remains unchanged when another college creates a new QR.
- Added college logo/name to the app header and generated evidence portfolio PDFs.
- No signatures were added to college branding.

# v1.32 — Matching In-App Ribbon Colours

- Practical Assessment / Assessor Only ribbons now use deep green.
- Witness and Employer ribbons now use amber.
- Optional Evidence ribbons now use slate grey.
- Submitted remains Apprentice+ green and RPL remains dark red.
- Ribbon colours now match the evidence-type colours used in exported PDFs.
- No PDF templates, assessment criteria, saved evidence or app layout were changed.

# v1.31 — Colour-Coded PDF Evidence Sections

- Added evidence-type colours to exported PDFs only.
- Practical Assessment pages use deep green.
- Learner Statement pages use royal blue.
- Witness and Employer Statement pages use amber.
- Video Walkthrough pages use purple.
- Professional Discussion pages use teal.
- Photo Evidence pages use orange.
- Knowledge and theory pages use indigo.
- Supporting documents use slate grey.
- Specification sheets use dark red.
- Portfolio covers and indexes retain Apprentice+ green.
- Added matching page headers, left-edge colour strips, section tabs and footer accents.
- App interface and official assessment criteria are unchanged.

# v1.30 — PDF Video Index and Feedback Sections

- Replaced video thumbnail pages with one video filename index page.
- Practical Assessment PDFs now include Assessment Summary and Areas for Improvement.
- Witness Testimony and Employer Statement PDFs now include Assessment Summary and Areas for Improvement.
- Attached media files remain included in the evidence ZIP package.

# v1.29 — Evidence Package Download Fix

- Replaced the memory-heavy combined ZIP builder with a mobile-safe Blob package.
- Prevented large video and voice-note exports from creating several full in-memory copies.
- Added validation for empty or invalid media data.
- Extended object-URL lifetime for Android downloads.
- Added a clear download-start confirmation and visible error detail.
- Practical Assessment criteria and saved evidence are unchanged.

# v1.28 — Complete PDF and Media Evidence Packages

- Added every saved evidence section to the downloaded evidence package.
- Added a dedicated PDF page for every KSB video walkthrough, including its generated video thumbnail, KSB reference, summary, recording date and package filename.
- KSB walkthrough video files are automatically renamed using the KSB code and KSB description.
- Professional-discussion voice notes are automatically renamed using their KSB code and attempt number.
- Supporting videos include their selected KSB references in the exported filename where available.
- PDF, video files and voice notes are downloaded together in one ZIP evidence package whenever media is present.
- Updated download labels and upload confirmation wording to reflect the complete evidence package.
- Existing assessment criteria, scores and saved learner evidence remain unchanged.
- Updated the visible version and offline cache.

# v1.27 — Assignment-Specific Practical Tasks

- Replaced the shared three-task practical generator with assignment-specific Easy, Medium and Hard activities.
- Added a unique practical activity set for every Bricklayer, Site Carpentry, Architectural Joiner and Property Maintenance assignment.
- Task-titled assignments now generate activities directly related to their topic, including solid walling, cavity walling, roofing, staircases, doors, windows, plumbing, masonry and other trade activities.
- General assignments such as health and safety, sustainability, communication and preparation still use genuine trade tasks so the existing KSBs can be observed during practical work.
- Kept Custom Task completely blank.
- Left all official Practical Assessment KSB marking criteria and scoring unchanged.
- Updated the visible version and offline cache.

# v1.26 — Optional Witness KSB Mapping

- Witness testimony and employer statements no longer require every KSB to be selected or scored.
- KSB mapping remains available as optional supporting evidence.
- Submission now requires only the witness/employer details, observed activity and signature.
- Updated wording clearly identifies the KSB section as optional.

# v1.24 — ProjectMate Mobile Layout Fix

- Rebuilt the ProjectMate tabs as three equal-width mobile controls.
- Removed inherited square-card sizing from the ProjectMate generator.
- Stacked ProjectMate action cards on narrow screens.
- Kept the difficulty selector and Generate button inside the card.
- Corrected spacing, overflow and text wrapping.
- Updated the visible app version and service-worker cache.

# v1.23 — Practical Assessment Task Generator

- Added trade-specific Easy, Medium and Hard practical task generation inside every non-NVQ Practical Assessment.
- Added a completely blank Custom Task option.
- Generated briefs include title, duration, description, dimensions, suggested materials and completion requirements.
- Existing official KSB marking criteria and scoring remain unchanged.

## V1.22 — Standalone ProjectMate generator

- Removed generated-project dependence on assignment mapping.
- Added Easy, Medium and Hard project generation with 1–2, 2–4 and 4–6 hour targets.
- Expanded Bricklayer projects beyond a small fixed wall set, including returns, coping, piers, cavity corners, openings, lintels, decorative and movement-joint work.
- KSBs are now selected for the generated task itself rather than copied from a single assignment.
- Custom projects are standalone and no longer alter or rely on official practical-assessment criteria.

## V1.21 — ProjectMate wastage and project management

- Material quantities now accept the calculated requirement through to a maximum of 10% extra wastage.
- Quantities below the requirement show Increase; quantities above the 10% maximum show Reduce.
- Completed projects turn green after the learner saves the completion record.
- Every generated or custom project can be deleted, including its stored finished-project photographs.

## V1.18 – ProjectMate

- Added course-specific 2–3 hour customer-style workshop projects.
- Added material price lists, learner quantity entry, labour and overhead quotation.
- Added budget/urgency-based accepted, negotiation and rejected quote outcomes.
- Added persistent start, pause, resume and finish job timer.
- Added effective hourly labour-rate calculation.
- Added finished-project photo capture and saved completion notes.
- Generated and custom projects map to a course assignment and its KSBs.
- Added custom project creation and saved project library.

## V1.12
- Replaced the Toolbox audio file input with a true in-app microphone recorder.
- Added permission handling, timer, stop/cancel controls, Android-compatible audio formats, IndexedDB storage and playback.
- Preserves typed note name and text when a recording is added.

# V1.7

- Added a confirmation popup after a walkthrough video is saved: ‘Video saved. Refresh the page to update.’
- Added a confirmation popup after a walkthrough video is removed: ‘Video removed. Refresh the page to update.’
- No other walkthrough layout or evidence behaviour changed.

# V1.6

- Save video now re-renders the current walkthrough immediately after IndexedDB and app-state storage complete.
- Remove now re-renders the current walkthrough immediately after deletion completes.
- Choose video now opens a normal video file picker without the camera capture attribute.
- Added cache-busted app and stylesheet references and updated the service-worker cache.

# V1.5

- Save video now reloads the current Video Walkthrough page only after IndexedDB storage completes.
- Remove now reloads the current Video Walkthrough page only after IndexedDB deletion and metadata saving complete.
- Navigation state is saved before reload so the learner returns to the same assignment and walkthrough.
- Removed the premature internal render that left the old tile markup visible.

# V1.3

- Video Walkthrough now reloads the current walkthrough page after a video is saved.
- Removing a walkthrough video now reloads the current walkthrough page immediately.
- Navigation state is saved before reloading so the learner remains on the same assignment walkthrough.

# v2.0.0-phase3i

- Keeps the walkthrough recorder open while a video is being written to local storage.
- Shows a clear “Saving video…” state after Use video is selected.
- Refreshes the active K criterion, green tick, saved-video controls and walkthrough progress immediately after the save completes.
- Prevents learners seeing the unchanged walkthrough page during the save operation.

# v2.0.0 Phase 3h — In-app Walkthrough Camera

- Added an in-app recorder using the phone camera and microphone.
- Camera preview remains visible above each K criterion prompt while recording.
- Added recording timer, stop, playback, retake and use-video controls.
- Retained existing-video selection as a fallback when camera access is unavailable.
- Saved recordings continue to complete the selected K criterion individually.

# Apprentice+ v2.0.0 Phase 3g

- Removed the assignment Knowledge Assessment tile and both MCQ question-bank files.
- Added a Video Walkthrough tile to every apprenticeship assignment.
- Shows only the Knowledge criteria mapped to that assignment, one criterion at a time.
- Added a fixed bottom-right video camera button for recording or selecting a short video.
- Saves each criterion video separately in IndexedDB so learners can complete criteria in different locations and at different times.
- Turns the individual Knowledge criterion green immediately after its video is added.
- Added view, replace and remove controls for each saved clip.
- Added optional collapsed criterion wording so the recording screen remains uncluttered.
- Video walkthrough evidence now contributes to the KSB evidence-coverage tracker.
- Existing learner data is preserved; old knowledge assessment records are not deleted.

## v2.0.0-phase1 — MCQ Engine 2.0 Foundation
- Replaced the active assignment live-question generator with an approved permanent-bank architecture.
- Added strict MCQ schema, validation, duplicate detection, balancing, approval states and assessment assembly.
- Restricted assignment theory questions to Knowledge and Behaviour KSBs.
- Added recent-question avoidance and random A–D answer positions.
- Added the new engine and bank files to the offline application shell.

## v1.5.9 — Witness / Employer KSB Tick Fix

- Fixed Witness Testimony and Employer Statement KSB selections being immediately reset after tapping.
- Removed the render-time forced-selection instruction.
- KSB selections now persist through autosave and page re-rendering.
- Retained required all-KSB selection and 1–5 scoring before submission.

## v1.5.8 — Balanced Answer Lengths
- Balanced all four answer options to a narrow word-count range.
- Added validation to reject questions with visibly different option lengths.
- Preserved matched answers, plausible distractors and random A–D placement.

## v1.5.4
- Rebuilt Knowledge Assessment question and answer generation as matched KSB pairs.
- Correct answers now come directly from the same Knowledge KSB used to create each question.
- Added validation that rejects any question whose marked answer does not match its source KSB.
- Preserved unique questions, four options, randomised answer placement, grading and evidence mapping.

## v1.5.3
- Replaced the Knowledge Assessment book icon with a question-pack icon inside assignments.
- Added Knowledge Assessment status to each KSB assignment card on the front assignment list.

# v1.5.2 — Unique Knowledge Question Engine

- Replaced the active assignment Knowledge Assessment generator.
- Generates 15 unique questions only from Knowledge KSBs attached to the current assignment.
- Rejects duplicate stems, repeated concept keys, duplicate options and out-of-assignment KSBs.
- Ensures every attached Knowledge KSB is represented.
- Preserves randomised balanced A-D answer positions, grading, resits and evidence mapping.

# v1.5.0
- Added 15-question Knowledge Assessments to KSB assignments.
- Questions map to assignment Knowledge KSBs with four plausible options and randomised answer positions.
- Added Fail, Pass, Merit and Distinction grading, review and resits.
- Passed attempts count as Knowledge evidence.

## v1.4.4
- KSB coverage now counts separate submitted evidence items rather than distinct evidence forms.
- Two submissions of the same evidence type can complete a KSB to 2/2.
- Practical assessments remain restricted to Skill units.

# v1.4.0

- Replaced the active EPA multiple-choice generator with concise construction questions.
- Questions now test one concept with exactly four realistic options and one correct answer.
- Updated the service-worker cache so installed copies receive the new framework.
- App version remains visibly displayed as v1.4.0.

# v1.3.36
- Replaced generic EPA distractors with topic-specific, question-type-specific answer sets.
- Consequence, analysis, action and evidence questions now use matching answer formats.

## v1.3.30

- Added a dedicated NVQ-only PDF layout for the Level 3 NVQ Diploma in Trowel Occupations.
- NVQ PDFs now use Evidence Pack and Unit headings, Learning Outcome coverage, and the four NVQ evidence types: Assessor Observation, Learner Statement, Professional Discussion and Witness Testimony.
- Removed grading, percentages, KSB scoring and supporting-evidence pages from NVQ PDFs.
- Each saved NVQ attempt is shown separately and contributes to the 2/2 Learning Outcome coverage summary.
- Professional Discussion recordings remain included in the downloaded NVQ evidence package.
- The existing PDF generator for Bricklaying, Site Carpentry, Architectural Joiner and Property Maintenance is unchanged and is bypassed only when the selected course has the NVQ flag.

## v1.3.29
- Fixed Learning Outcome coverage so separate saved evidence attempts accumulate instead of being merged by evidence type.
- Two observations covering the same outcome now count as 2/2 and turn the outcome green.
- Existing saved attempts are recalculated automatically.

## v1.3.28
- Learning Outcome coverage now accumulates across every saved version instead of using only the newest file.
- A new observation, statement, discussion or witness version adds to earlier completed outcomes without removing them.
- NVQ Assessor Observation no longer displays Fail, Pass, Merit, Distinction or percentage grades.
- NVQ observations are treated as submitted evidence rather than graded practical assessments.

## v1.3.26
- Learner Statements can now be submitted after evidencing at least one Learning Outcome.
- Only Learning Outcomes with an attached statement photograph count toward outcome coverage.
- The existing 100-word minimum and learner signature remain required.

## v1.3.17 — Dynamic unit-specific assessment narratives
- Added multiple natural sentence structures for every unit-specific Learning Outcome evidence statement.
- Reworked assessor observations and witness testimonies into approximately 300-word workplace narratives.
- Repeated use of Write observation / Write testimony now produces a different valid wording arrangement.
- Removed generic references to contract requirements where they are not relevant to the selected unit.
- Updated the application version and service-worker cache together to prevent an older v1.3.14 build being served.

# Changelog

## v1.3.14 — Assessment wording update
- Removed implementation notices from assessor observations, witness testimonies and assessment comments.
- Changed visible controls and guidance to use normal assessment terminology.
- Kept all existing unit-specific observation logic and saved evidence unchanged.

## v1.3.13 — Unit-specific NVQ observations
- Added Learning Outcome-specific assessor observation wording for every mandatory and optional masonry unit.
- Added matching unit-specific witness testimony wording.
- Removed the generic generated-comment disclaimer.
- Updated the application version and cache version.

v1.3.9
Added Targeted Revision engine backend helpers.

## 1.3.23
- Replaced the NVQ Supporting Evidence tile with Professional Discussion.
- Added one voice-recording control for every learning outcome.
- Added playback, replacement, deletion and optional notes for each recording.
- Added professional-discussion validation, signatures, PDF summaries and downloadable audio files in the evidence ZIP.

## 1.3.24
- Changed NVQ Evidence Pack completion from requiring all four sections to requiring every Learning Outcome to reach 2/2 evidence coverage.
- Each outcome can be covered once by each submitted evidence type: Learner Statement, Assessor Observation, Professional Discussion or Witness Testimony.
- Added a live Learning Outcome coverage summary to each Evidence Pack.


## v1.3.25
- Learning Outcome chips now update automatically from evidence coverage.
- Grey means 0/2 evidence types, yellow means 1/2, and green means 2/2 complete.
- The same colour rule is shown on the Evidence Packs list and inside each pack.


## v1.3.27
- Assessor Observations can now be submitted after a minimum of one Learning Outcome is selected and evidenced.
- The app no longer requires every Learning Outcome to be completed within one observation.
- Only selected outcomes count toward the Evidence Pack 2/2 coverage rule.
- Each selected outcome still requires its own photograph, along with the assessor details, observation and signature.

## v1.3.31 — Academy knowledge framework
- Added reusable knowledge teaching sessions for every course, with rotating lesson styles, generated checks and no XP.

## v1.3.32
- Added an EPA Multiple-Choice Mock card after the final assignment for the four KSB courses only.
- Added a reusable question-bank framework generated from every course KSB.
- Added 40-question attempts balanced across Knowledge, Skills and Behaviours.
- Added randomised answer positions, attempt history, best score, review explanations and weak-KSB revision indicators.
- Excluded the NVQ Trowel Occupations course from all EPA Mock changes.

## v1.3.36
- Added examiner-standard cognitive templates, realistic edge cases, automated question scoring, duplicate rejection and validated fallback questions to the EPA mock framework.

## v1.4.1 — KSB statement evidence update
- Removed the separate Photos section from Bricklaying, Site Carpentry, Architectural Joinery and Property Maintenance assignments.
- Listed assignment KSBs directly within the learner statement page.
- Added a camera/gallery control beside each KSB for linked photographic evidence.
- Removed automatic KSB keyword/prompt coverage from the statement text requirement.
- Learner statements require 100 words, a signature and at least one KSB-linked photograph.
- Added KSB-linked statement photographs to generated evidence PDFs.

## v1.4.3
- Practical Assessments now use Skill units only.
- Moved Skill evidence selection from the top tile into the /5 scoring section.
- Practical evidence coverage ignores Knowledge and Behaviour KSBs.
- Updated the app version and service-worker cache.

## 2.0.0-phase2
- Added 80 approved, authored MCQs for Bricklayer ST0095 v1.2 Assignment 1.
- Balanced coverage across K1, K2, K3 and B1 with 20 questions per KSB.
- Balanced stored correct-answer positions across A, B, C and D.
- Corrected repeated-word validation to avoid apostrophe and word-suffix false positives.
- Updated offline cache and application version.

## V1.9
- Added Resources as a new bottom-navigation tab immediately left of Course.
- Added Learner Notepad with named notes, searchable text, photographs, voice recordings and videos.
- Notes and media save locally in IndexedDB and can be edited or deleted later.


## V1.10
- Toolbox saved-note cards now show only the note name, date and content-type icons.
- Full note text and media display only after opening the note.
- Restored the Gallery icon and made Camera, Video, Voice and Gallery each occupy one quarter of the attachment row.


## V1.13
- Replaced the permanent Learner Notepad search bar with a compact magnifying-glass button directly below the learner-name area.
- Tapping the icon opens a focused search popup for note names and note text.
- Added close, backdrop-dismiss and clear-search controls while preserving filtered results.
- Updated the app version and offline cache to V1.13.


## V1.14
- Changed Toolbox items to square tiles in a two-column mobile grid.
- Restyled Learner Notepad as a square Toolbox tile.
- Added a new Tools tile and dedicated Tools page for future workplace mini apps.
- Updated the application version and offline cache to V1.14.

## V1.17 — DrawingMate
- Added DrawingMate as a fourth square Toolbox app tile.
- Added searchable construction symbol and material-hatching reference libraries with favourites.
- Added bidirectional drawing-scale calculator and calibrated on-screen scale ruler.
- Added local PDF drawing viewer with saved drawing notes.
- Added camera/photo compare alongside the symbol and hatching libraries.
- Added clear drawing-legend and measurement accuracy notices.


## V1.19 — ProjectMate input and quote-status fix
- Fixed ProjectMate quantity, labour and overhead fields closing after each character was entered.
- Project totals now update live without rebuilding the page or removing input focus.
- Accepted quotations now display in green.
- Rejected quotations now display in red.
- Negotiation requests display in amber.

## V1.20 — ProjectMate material quantity guidance
- Added hidden target quantities to generated ProjectMate materials.
- Added live ▲ increase, ✓ suitable and ▼ reduce feedback while quantities are entered.
- Targets use each generated project’s verified material allowance, including wastage and pack rounding where applicable.
- Quotation submission remains disabled until every listed material quantity is suitable.
- Existing saved generated projects remain compatible through their stored suggested quantities.


v1.37.1: PDF header evidence block moved left and wrapped within printable margins.

v1.37.2: Removed the KSB Evidence Coverage panel from standard assignment pages. KSB tracking and the dedicated KSB Matrix remain unchanged.
