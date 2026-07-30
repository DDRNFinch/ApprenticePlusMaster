# V1.5

- Added Professional Discussion recordings to the PDF evidence index.
- Mapped Professional Discussion evidence to the KSB and LO matrices using PD references.
- Added a dedicated Professional Discussion page and attached-audio-file page, matching Video Walkthrough.
- Included Professional Discussion audio files in the downloaded evidence package.

# V1.4

- Removed obsolete Supporting Evidence references and pages from generated PDFs.
- KSB matrices now list every evidence reference for each KSB.
- Added detailed LO evidence matrices listing AO, LS, WT, VW, PD and PE locations.
- Wrapped and paginated long KSB/LO descriptions and reference lists to prevent page overflow.

# Apprentice+ V1.2 — One-off Modern Professional Visual Upgrade

- Created as an isolated visual test build for a backup repository.
- Retained all V1.1 evidence rules, saved-data structures, workflows and PDF logic.
- Introduced softer borderless cards, refined shadows and increased whitespace.
- Standardised typography, spacing, form controls and button styling.
- Improved assignment, evidence and status-card hierarchy.
- Added a floating, glass-style mobile navigation bar.
- Retained left-aligned evidence icons, adjacent KSB capability labels and purple ribbons.
- Added restrained press/hover motion and reduced-motion support.
- Updated visible app version to V1.2.

# V1.1 UI Polish

- Removed the Professional Discussion notes field from each audio recording card.
- Standardised all application ribbons to purple.
- Restored left-aligned evidence icons while keeping each SVG centred inside its green square.
- Kept K/S/B eligibility labels immediately beside the icon for a cleaner evidence-tile layout.

# V1.1 — Evidence Icon Alignment and Professional Discussion Ribbon

- Centred all evidence method SVG icons within their green icon squares.
- Added a purple ASSESSOR ONLY ribbon to the Professional Discussion tile and page.
- Renamed the visible in-app version to V1.1.

# V1.3.73 — Professional Discussion Voice Recorder Layout

- Professional Discussion now mirrors the Video Walkthrough card layout.
- Replaced video capture with microphone-only voice recording.
- Added per-KSB/LO audio recording, playback, replace and remove controls.
- Retained locked submissions, new-attempt workflow, evidence coverage rules and PDF compatibility.

# V1.3.72 — Evidence-Type Reuse Locks

- Removed K/S/B and LO capability labels from outer assignment and evidence-pack cards.
- Kept capability labels inside individual evidence tabs, positioned beside the icon box.
- Previously submitted KSBs/LOs are greyed out and disabled when creating another attempt using the same evidence type.
- Other KSBs/LOs remain available, and the learner must use a different evidence method to increase 2/2 or 3/3 coverage.

# V1.3.70 — Skill-only photographic evidence

- KSB Photographic Evidence now displays Skill (S) units only.
- Each selected Skill requires exactly three landscape photographs.
- Separate Camera and Gallery actions are available for every photo slot.
- No written evidence text is required.
- A submitted photographic evidence attempt awards one evidence credit toward the Skill's 2/2 requirement.
- LO photographic evidence remains unchanged.

# V1.3.69 — Evidence order and app-styled icons

- Reordered LO evidence tiles: Photographic Evidence, Learner Statement, Video Walkthrough, Witness Testimony, Assessor Observation, Professional Discussion.
- Reordered KSB evidence tiles: Photographic Evidence, Learner Statement, Video Walkthrough, Witness Testimony, Practical Assessment, Professional Discussion.
- Added matching app-styled camera, document, video, eye, clipboard, microphone and hammer icons to outer cards, inner tiles and section headings.
- Restored Photographic Evidence and Professional Discussion as independent KSB evidence methods and included them in 2/2 KSB coverage.
- Kept all existing saved data and evidence keys unchanged.

# V1.3.68 — Compact Outer Icons + 2×3 Inner Evidence Grid

- Restored the compact single-row six-icon status display on NVQ assignment and evidence-pack cards.
- Kept the large six evidence-method tiles in a 2-column × 3-row grid inside each assignment/evidence pack.
- No evidence logic, coverage, PDF, history, or workflow rules changed.

# V1.3.67 — 2×3 Evidence Tile Grid

- Replaced the cramped six-icon row for NVQ evidence packs with a clear two-column, three-row layout.
- Added readable evidence-method labels to the six status tiles on each evidence-pack card.
- Restored full titles, descriptions and evidence ribbons on the assignment evidence tiles.
- Kept all evidence rules, saved records and 2/2 coverage calculations unchanged.

# V1.3.66 — Evidence Coverage Ticks

- Added live coverage markers beside every KSB and Learning Outcome inside evidence forms.
- Items already meeting the two-piece requirement display **✓ Completed**.
- Items with one saved evidence source display **1/2**.
- Coverage is calculated from submitted evidence across all valid evidence methods.
- Applied to LO evidence forms, KSB statements, practical/witness scoring and Video Walkthrough criteria.

# Apprentice+ V1.3.66

- Restored Photographic Evidence and Professional Discussion as separate LO evidence methods.
- All six LO evidence methods count toward the existing 2-evidence-per-LO rule.
- Added six compact evidence icons in one row on evidence-pack cards and assignment pages.
- Kept Video Walkthrough independent from Professional Discussion.
- Added restored evidence types to portfolio data and downloads.

# Apprentice+ V1.3.64

- Replaced Professional Discussion with Video Walkthrough for NVQ Trowel Occupations LO courses.
- Added per-learning-outcome landscape video recording with camera and microphone.
- Updated LO evidence labels, coverage sources, PDF headings, stamps and packaged media folders to VW / Video Walkthrough.
- Existing legacy discussion audio remains viewable for backwards compatibility.

# Apprentice+ V1.3.63

## Mobile video playback compatibility
- In-app video recording now prefers H.264/AAC MP4 where the browser supports it.
- Falls back to VP8 WebM on browsers that do not provide MP4 recording.
- Saved recording MIME types are normalised before storage and playback.
- Saved videos now open in a user-controlled inline player rather than blocked autoplay.
- Added an Open / save video fallback when a mobile browser cannot decode a selected file.
- Supporting evidence videos now use inline mobile playback attributes.
- Increased recording quality while retaining mobile-friendly file sizes.

# Apprentice+ V1.3.62

- Submitted witness testimonies are permanently read-only.
- The witness action now creates a separate blank testimony instead of reopening the saved record.
- Previous witness testimonies remain available in Saved attempts for viewing.

# Apprentice+ V1.3.61

- Added Environmental Awareness as a cumulative Trade Course.
- Added 15 Environmental Awareness knowledge slides under Academy > Knowledge Slides.
- Added the matching 15-question MCQ assessment under Academy > Trade Courses.
- Added independent progress, results, history, best-score tracking and certificate support.
- Randomised correct-answer positions while preserving the supplied source-of-truth answers.

## V1.3.60 - Safeguarding & Professional Standards Academy Module
- Added the supplied 15-question Safeguarding & Professional Standards MCQ bank as the source of truth.
- Added a matching 15-slide Knowledge Slides pack under Academy > Knowledge Slides.
- Added the matching assessment under Academy > Trade Courses.
- Included results, attempt history, best-score tracking, incorrect-answer review and certificate support.
- Distributed correct answers across A, B, C and D while preserving every supplied correct response and explanation.
- Updated application and offline cache versions.

## V1.3.59 - A4 Certificate Print Fix
- Fixed blank certificate PDFs caused by conflicting print visibility rules.
- Certificates now print as one A4 portrait page with fixed print-safe margins.
- Reduced and constrained certificate typography to prevent clipping with long names, course titles and certificate IDs.
- Updated the offline cache so the corrected certificate stylesheet is installed.

## V1.3.58 - Central Knowledge Slides Subsection

- Added a dedicated **Academy > Knowledge Slides** destination.
- Moved every 15-slide subject pack into this single subsection.
- Separated Trade Course slide packs from Functional Skills slide packs within the Knowledge Slides page.
- Removed slide packs from the Trade Courses and Functional Skills assessment pages.
- Kept independent progress, completion and resume state for every subject.
- Updated slide back-navigation to return to Knowledge Slides.

## V1.3.57 - Subject-Specific Knowledge Training

- Split Academy knowledge slides into separate subject modules.
- Learners can now train specifically in Fire Safety, COSHH, Mental Health Awareness and every other installed Trade Course.
- Functional Skills knowledge is also separated into English and Maths at Level 1 and Level 2.
- Each subject keeps its own slide progress, completion status and revision access.
- All previous cumulative updates remain included.

## V1.3.56 - Mental Health Awareness Academy Module

- Added a cumulative Mental Health Awareness Trade Course module.
- Added 15 MCQs covering presenteeism, harmful coping, lone working, return-to-work support, stigma, fatigue, stress risk assessments, toolbox talks, job insecurity, industry support, micro-breaks, nutrition, warning signs, boundaries and manager responsibilities.
- Added 15 matching Learn Before the Test knowledge slides.
- Added assessment history, best-score status, incorrect-answer review and certificate support.
- Preserved all previous Fire Safety, COSHH and earlier Academy updates.

## V1.3.55 - COSHH Academy Module

- Added a 15-question COSHH MCQ course to Trade Courses.
- Added all 15 COSHH topics to the cumulative Learn Before the Tests knowledge slide deck.
- Preserved all earlier updates, including the Fire Safety module and certificate system.
- Distributed correct answers across A, B, C and D while preserving each correct response.
- Added results, unlimited attempts, best-score status, review explanations and certificate support through the existing Trade Courses engine.
- Updated the application and offline cache versions.

## V1.3.54 - Fire Safety Academy Module

- Added a 15-question Fire Safety MCQ course to Trade Courses.
- Added all 15 Fire Safety topics to the full-width Learn Before the Tests knowledge slide deck.
- Preserved each correct answer while distributing correct positions across A, B, C and D.
- Added results, unlimited attempts, best-score status, review explanations and certificate support through the existing Trade Courses engine.
- Updated the application and offline cache versions.

## V1.3.53 - A4 Certificate Print Layout

- Removed the four Pass Score, Pass Level, Merit Level and Distinction Level boxes from certificates.
- Kept only the learner's achieved grade, score and percentage.
- Reworked certificate print styling to fit one A4 portrait page.
- Added fixed A4 dimensions, print margins and page-break prevention.
- Updated the application and offline cache versions.

## V1.3.52 - Academy Knowledge Slides
- Added a full-width Knowledge tile above Functional Skills and Trade Courses tests.
- Built teaching slides from each MCQ scenario, correct answer, explanation and key takeaway.
- Added progress saving, resume, completion state and revision access.
- EPA Academy is unchanged.

## V1.3.51 — MCQ Status Width Fix

- Reworked the compact MCQ card header so the assessment title uses the full tile width.
- Kept the icon and single-line result status aligned beneath the title.
- Made Not Started, Fail x/15, Pass 13/15, Merit 14/15 and Distinction 15/15 fit without clipping.
- Added extra sizing protection for very narrow phones.
- No changes to scores, histories, certificates or grading.

## V1.3.50 — Single-Line MCQ Status

- Replaced the two-line assessment status with one compact best-result line.
- New states: Not Started, Fail x/15, Pass 13/15, Merit 14/15, Distinction 15/15.
- Functional Skills and Trade Courses now show the learner's highest recorded score rather than only the latest attempt.
- Removed the duplicated pass requirement from individual MCQ cards.

## V1.3.49 — Mixed MCQ Answer Positions
- Redistributed correct answers across A, B, C and D in every installed MCQ bank.
- Preserved each original correct answer, explanation and scoring rule.
- Applied balanced randomised positions across Functional Skills, Trade Courses, EPA and assignment knowledge tests.
- Updated application and offline cache versions.

## V1.3.47 — Functional Skills Level 1

- Added English Level 1 with 15 workplace MCQs.
- Added Maths Level 1 with 15 workplace MCQs.
- Retained separate English and Maths Level 2 tests.
- All four tests use the full-screen MCQ player, saved history, review, retakes and 13/15–15/15 grading.

## V1.3.46 — Full-Screen MCQ Player

- Redesigned every MCQ question screen to fit more comfortably within the available mobile viewport.
- Fixed Previous, Next and Submit controls to the bottom of the screen so they are always visible.
- Reduced question-header, option and spacing sizes without removing question content.
- Added extra compact behaviour for short-height mobile screens.
- Applied the redesign to Functional Skills, Trade Courses, assignment knowledge assessments and EPA knowledge practice.
- Updated the displayed version and offline cache.

## V1.3.45 — Compact Academy Subsections

- Redesigned Functional Skills, Trade Courses and EPA Academy cards into a compact two-column layout.
- Reduced header, icon, card, status, attempt and button sizes to fit more content on each page.
- Kept all test banks, saved attempt history, grading, retakes and navigation unchanged.
- Added the Trade Courses question bank to the offline app shell.

# V1.3.43 — Functional Skills Tests

- Added a 15-question English Functional Skills test.
- Added a 15-question Maths Functional Skills test.
- Added exact grading: Pass 13/15, Merit 14/15, Distinction 15/15.
- Added saved attempt history, results and answer-review feedback.
- Corrected the English homophone answer so the marked answer is grammatically valid.
- Updated the service-worker cache and app version.

## v1.3.42 – Academy 2x2 Tile Redesign

- Rebuilt the Academy landing page as four equal square tiles in a 2x2 grid.
- Reduced every Academy tile to an Apprentice+-style icon and title only.
- Added Knowledge Library, EPA Academy, Functional Skills and Certificates tiles.
- Added matching Functional Skills and Certificates destination screens.
- Updated the displayed app version and service-worker cache to v1.3.42.

## v1.3.42 – Academy 2x2 Tile Redesign

- Rebuilt the Academy landing page as four equal square tiles in a 2x2 grid.
- Reduced every Academy tile to an Apprentice+-style icon and title only.
- Added Knowledge Library, EPA Academy, Functional Skills and Certificates tiles.
- Added matching Functional Skills and Certificates destination screens.
- Updated the displayed app version and service-worker cache to v1.3.42.

## v1.3.41 – EPA Practical Missing Renderer Fix

- Restored the missing practical preparation-list renderer used by EPA Practical.
- Fixed Start new attempt failing after confirmation.
- Added mobile-friendly Add Item controls for Tools, Materials and PPE.
- Replaced remaining mobile-unsafe cloning calls in the EPA Practical save and history flow.
- Updated the service-worker cache to v1.3.41.

## v1.3.40 – EPA New Attempt Creation Rewrite
- Replaced the failing asynchronous new-attempt chain with a synchronous mobile-safe builder.
- Opens the new practical before background storage.
- Uses plain JSON task copies and a dependency-free attempt ID.
- Displays the actual runtime error message if creation ever fails again.

## v1.3.38 – EPA New Attempt Runtime Fix

- Rebuilt the new-attempt creation sequence for mobile compatibility.
- Added safe UUID and cloning fallbacks.
- Opens the new practical before the background save, preventing storage errors from blocking the screen.
- Retains all v1.3.35 preparation matching and PDF updates.

## v1.3.37 – EPA Start New Attempt Button Fix

- Replaced the fragile EPA practical new-attempt click binding with a mobile-safe awaited action.
- Added explicit button types, click prevention, progress feedback and visible error handling.
- Added a structuredClone fallback for wider mobile browser support.
- Validates that a practical bank and generated task exist before saving the new attempt.

# Apprentice+ v1.3.37

## Cross-course EPA preparation completion
- EPA Practical PDFs include the learner-selected Tools and Equipment, Materials and Fixings, and PPE and Safety Equipment for all four courses.
- Added the preparation saved date/time to the final EPA Practical PDF.
- Expanded flexible matching across Site Carpentry, Architectural Joinery and Property Maintenance, including common tool names, trade synonyms, PPE wording and grouped materials.
- Retained the v1.3.34 Start new attempt fix.

## v1.3.34 — EPA new-attempt fix

- Fixed **Start new attempt** so a new EPA practical is created, saved immediately, and replaces the previous draft correctly.
- Retains the cross-course EPA PDF preparation lists and flexible preparation matching introduced in v1.3.32–v1.3.33.

## v1.3.33 — Flexible EPA preparation wording

- Accepts common equivalent names for tools, materials and PPE.
- Accepts “goggles” and “safety goggles” for eye protection or safety glasses.
- Accepts “mortar” or ready-mixed mortar as the grouped equivalent of building sand, cement and plasticiser where those ingredients are required.
- Added further common site terminology including dust mask/RPE, ear defenders/hearing protection, hi-vis variants and safety footwear variants.
- Keeps genuinely missing and unnecessary items visible after marking.

## v1.3.32 — EPA practical PDF preparation lists

- Added the learner-selected Tools and Equipment to every completed EPA practical PDF.
- Added the learner-selected Materials and Fixings to every completed EPA practical PDF.
- Added the learner-selected PPE and Safety Equipment to every completed EPA practical PDF.
- Added item totals and a dedicated Learner Preparation section.
- Split the report into two pages so preparation, marks and feedback remain clear and unclipped.

# V1.3.30 — EPA Task Regeneration & Workload Balance

- Added a visible ♻️ Generate new EPA task button during practical preparation.
- New task generation clears the current draft only after confirmation when preparation entries exist.
- Rebalanced Bricklayer EPA practical dimensions and estimated quantities.
- Added a minimum planning productivity baseline of 25 bricks per hour.
- Added a workload allowance to each Bricklayer task specification.
- Prevented task estimates from exceeding time allowed × 25 bricks per hour.

# V1.3.29 — Mobile Preparation Entry Buttons

- Added a visible Add Item button to Tools and Equipment.
- Added a visible Add Item button to Materials and Fixings.
- Added a visible Add Item button to PPE and Safety Equipment.
- Kept keyboard Enter support where mobile keyboards provide it.
- Added duplicate and empty-entry validation across all three preparation lists.

# V1.3.27 — EPA Practical History & Polish

- Unlimited EPA practical retakes.
- A different random practical is selected for each new attempt where possible.
- Completed practical attempts are retained in searchable history.
- Best practical result is automatically highlighted.
- Attempt history can be searched and filtered by grade.
- Each marked practical has its own downloadable PDF report.
- Added result, history-card and panel animations with responsive UI polish.


## v1.3.29 — Generated Dimensioned Drawings
- Every generated EPA practical now stores its own complete measurements and tolerances.
- Added front elevation, plan view and section drawings matched to the selected task.
- Specification PDF now includes a dedicated dimensioned drawing page and written dimension schedule.


## v1.3.31 — Cross-course EPA workload controls
- Applied time-based workload limits to Site Carpentry, Architectural Joinery and Property Maintenance EPA practicals.
- Added trade-specific productivity planning for components, operations, linear output and repair stages.
- Reduced task dimensions and quantities to realistic mock-EPA workloads.
- Added explicit measurements, tolerances and workload allowances to every task specification.

## v1.3.40 — EPA 2×2 Dashboard and Complete Test History
- Rebuilt EPA Academy as four 2×2 tiles: Knowledge Practice, Professional Discussion, EPA Practical, Scores and Results.
- Added a combined Scores and Results screen with search and test-type filtering.
- Removed the 20-attempt cap so every completed Knowledge Practice and Professional Discussion is retained.
- Practical attempt history remains unlimited, with best result and PDF access retained.

## V1.3.44 — Trade Courses MCQ Tests
- Renamed the Academy "Knowledge Library" tile to "Trade Courses".
- Added four 15-question Trade Courses tests: Legislation, Manual Handling, Equality & Diversity, and CSCS.
- Added Pass (13/15), Merit (14/15), and Distinction (15/15) grading.
- Added saved attempt history, latest-result display, retakes, and incorrect-answer review with explanations and key takeaways.
- Updated the offline cache to include the new trade-courses question bank.

## v1.3.71 — Distinct Evidence-Type Coverage
- KSBs require two different evidence methods; repeated attempts of the same method count once per KSB.
- LOs require three different evidence methods; repeated attempts of the same method count once per LO.
- Added method capability labels: Photos S; Statement K-S-B; Walkthrough K-S-B; Witness S-B; Practical S-B; Discussion K-B.

## v1.3.71 — Distinct Evidence-Type Coverage
- KSBs require two different evidence methods; repeated attempts of the same method count once per KSB.
- LOs require three different evidence methods; repeated attempts of the same method count once per LO.
- Added method capability labels: Photos S; Statement K-S-B; Walkthrough K-S-B; Witness S-B; Practical S-B; Discussion K-B.

## V1.6
- Professional Discussion recorder now displays the selected Knowledge, Behaviour or learning-outcome description while recording.
- Added assessor prompt questions tailored to Knowledge and Behaviour criteria.
- Added mobile-friendly scrolling and layout for the recording guidance panel.
