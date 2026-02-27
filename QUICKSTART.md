# PA_PVP Quickstart (copy/paste, no-look)

License: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). See `LICENSE`.

SSOT (canonical kernel):
- `PA_PVP_full_v9.7_canonical.txt`

This quickstart is a human wrapper. The kernel SSOT is always the canonical file above.

## 1) Run a new batch (paste as input)

```text
<<<B expire_days=30 ask_user=NONE exec_capability=NO_RUNTIME close_policy=SIM_OK ssot_scale=MIN resource_pool=>>>

<<<I id=E1 title="Short title" expire_days=60 ask_user=INHERIT uses= reversibility=>>>
<<<PLAN>>>
- <your plan in bullets or numbered steps>
<<<END>>>
```

Notes:
- Use `ask_user=NONE` for simulation-first runs.
- Enable `ask_user=ALLOW` only when you truly need real-world evidence.

## 2) Read the output (what matters)

Inside the single PA_PVP snapshot code block:
- `[QUEUE]`: operational summary per item (verdict, gate, trigger, next)
- `[NEXT]`: next executable step token (or planned-only if `STANDBY`)
- `[STEPS]`: up to 5 atomic steps

Outside the code block:
- `[HUMAN_TABLE]` is mandatory for human scanning, but it is UI-only and MUST NOT be used as SSOT input.

## 3) Ping-pong (continue, no-look)

To continue, you can paste either:
- a new batch with `<<<PREV>>>` per item, OR
- the entire previous output snapshot ("SNAPSHOT-AS-INPUT"). No manual cutting required.

## 4) Human report (optional, derived-only)

If you want a human-readable summary without changing SSOT state, run a report pass:

```text
REPORT LITE
<paste ONE PA_PVP snapshot here (the code block; extra derived text after it is OK)>
```

Or the full report:

```text
REPORT
<paste ONE PA_PVP snapshot here (the code block; extra derived text after it is OK)>
```

Hard rules:
- Reports are derived-only and MUST NOT change verdicts/gates/triggers/steps or introduce new facts.
- Report output MUST NOT be used as `<<<PREV>>>` input.

## Next steps

- Guide: `docs/guide.md`
- Glossary: `docs/glossary.md`
- Examples pack: `docs/examples.md`

