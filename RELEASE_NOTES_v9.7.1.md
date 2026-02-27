# Release Notes — v9.7.1

Date: 2026-02-27

This is a patch release focused on **anti-loop reopening**, **SSOT clarity**, and **docs usability**.

## Kernel / SSOT changes

- Add authoritative `reopen_total` derived field (always present in `[DERIVED]`) to enforce **max-1 reopen per id**.
- Add `trigger=REOPEN_BLOCKED_BUDGET` and enforce it via the CLOSED revisit rule when `PREV.reopen_total>=1` (anti-loop hard stop).
- Add `AUTO-REOPEN VALIDATOR (Option B)` consumer contract: probe-first, observable outcome, reopen only via `<<<NEW_EVIDENCE evidence_tier=EXPERIMENT>>>`, no narrative reopen.

## Documentation

- Add `QUICKSTART.md` as the canonical copy/paste entrypoint; remove `PLUTONIUM_REVIEW.md` and update all references.
- Clarify that `[HUMAN_TABLE]` is UI-only and must be ignored by machine SSOT processing (SNAPSHOT-AS-INPUT).
- Make key file/guide references clickable across docs (local relative links).

## Versioning

- Align visible protocol strings to `v9.7.1` and keep `derived_version` pinned to `v9.7.1`.

