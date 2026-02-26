# PA_PVP - a PLUTONIUM-like Adversarial Peer Validation Protocol (Lite Entrypoint v9.7)
This file is the simplest way to run the **current** project without drifting from the canonical kernel.

License: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). See LICENSE.

Canonical kernel:
- [PA_PVP_full_v9.7_canonical.txt](PA_PVP_full_v9.7_canonical.txt)

## Copy/paste input (recommended)
Paste this template, fill the plan, run it with the kernel, then paste the full output back as the next input.

```text
<<<B keep_open=NO expire_days=30 ask_user=NONE exec_capability=NO_RUNTIME close_policy=SIM_OK ssot_scale=MIN resource_pool=>>>

<<<I id=E1 title="Short title" keep_open=NO expire_days=60 ask_user=INHERIT uses= reversibility=>>>
<<<PLAN>>>
- <your plan in bullets or numbered steps>
<<<END>>>
```

## Ping-pong (no-look)
To continue, you can paste either:
- the next batch with `<<<PREV>>>` per item, OR
- the **entire previous output** (snapshot-as-input). No manual cutting is required.

## Human report (optional, no-look)
If you want a human-readable summary without changing SSOT state, you can run a report pass:

```text
REPORT LITE
<paste ONE PA_PVP snapshot here (the code block; extra derived text after it is OK)>
```

Or the full report:

```text
REPORT
<paste ONE PA_PVP snapshot here (the code block; extra derived text after it is OK)>
```

## When to enable AskUser
Default is simulation-first (`ask_user=NONE`).

Enable external-data questions only when you truly need real evidence:
- batch-level: `<<<B ... ask_user=ALLOW>>>`
- per-item override: `<<<I ... ask_user=ALLOW>>>`

Even when enabled, `ask_user=ALLOW` is a permission gate (not a requirement):
- the kernel still advances autonomously unless the item is mechanically externally locked (`dominant_gate=EXTERNAL_BLOCK`)
- and internal simulation cycles are spent (`pc/nm/inc` counters)

The protocol can ask at most **one** minimal evidence question per run.
