Apprentice+ V1.5.0 — Notification Badge Only

Source: Apprentice+ V1.4 In-App Update Notification (known-good build).

This is the first isolated V1.5 step. It deliberately makes no Notification Centre or Settings Centre changes.

Changes:
- App version updated to V1.5.0.
- Service-worker cache renamed so this build installs as a clean update.
- Existing red update badge retained on the Apprentice+ logo.
- Existing proven update-ready modal and update activation flow retained.
- No new startup initialisers, notification data stores, panels, settings shells, or navigation handlers added.

Purpose:
Verify that the stable application continues to load and all existing controls work before the Notification Centre is introduced in a later isolated build.
