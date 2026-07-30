## v1.3.42 – Academy and EPA Layout Update

- Removed the Knowledge Library tile from the Academy home screen.
- Added a 2×2 Academy grid containing In-house Courses, English, Maths and Trade Certificates.
- Renamed the existing Knowledge Library screens to In-house Courses.
- Changed the EPA Academy home screen to vertically stacked, centred circular options.
- Updated the application and service-worker version to v1.3.42.

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

## v1.3.43 — English and Maths Academy MCQs
- Added 15-question English and 15-question Maths multiple-choice quizzes.
- Set the pass mark for each quiz to 12 correct answers out of 15.
- Added randomized answer order, required completion of all questions, saved attempt records, and full answer review with explanations and key takeaways.
