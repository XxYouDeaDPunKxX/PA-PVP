# ⚖️ PA_PVP

**A copy/paste adversarial decision protocol for turning uncertain work into a verdict, a next action, and reusable state.**

![PA_PVP Banner](assets/banner.png)

PA_PVP helps when a plan, artifact, choice, or project keeps sounding plausible without becoming operational.

Give it one of these:

- a plan to pressure-test;
- an artifact to audit;
- a decision with competing options;
- a target plus an evaluation method;
- a previous PA_PVP snapshot to continue.

It returns:

- ⚡ `DO NOW`, 🕓 `DO LATER`, or 🗑️ `DISCARD`;
- ▶️ one concrete `[NEXT]` action;
- 📦 a machine-readable snapshot you can paste into the next run;
- 📋 a human-readable table for scanning the result.

> Doubt is not a blocker. It is a state transition.

---

## 🚀 Use it in 60 seconds

### 1. Load the canonical protocol

Open and provide this file to the AI system you are using:

[`PA_PVP_full_v9.9.0_canonical.txt`](PA_PVP_full_v9.9.0_canonical.txt)

Then instruct it:

```text
Use PA_PVP as the active decision protocol for the next input. Follow its output contract exactly.
```

### 2. Paste the real situation

You can start in normal language:

```text
This implementation plan looks plausible, but I am not sure the dependencies and rollback path are strong enough. Use PA_PVP to pressure-test it and give me the next action.
```

Or use one of these patterns:

```text
Use PA_PVP on this plan and tell me what moves now.
```

```text
Audit this artifact with PA_PVP. Break the highest-impact weakness and patch it minimally.
```

```text
I have two viable options and no clear winner. Use PA_PVP to close the decision or identify the smallest probe needed.
```

```text
Continue this PA_PVP state and advance its current NEXT step:
<paste the previous PA_PVP snapshot>
```

### 3. Read the result in two layers

The response has two distinct surfaces:

1. **Machine state** — one code block beginning with `STATE: DECISION.TEST.FINAL`.
2. **Human view** — a table after the code block for quick reading.

The code block is the reusable state. The table is only a derived view.

---

## 🎯 When PA_PVP is useful

Use PA_PVP when you need to convert uncertainty into an operational decision, especially for:

- plans that need pressure-testing before execution;
- architecture or procurement choices with trade-offs;
- prompts, protocols, code, documents, or other artifacts that need adversarial review;
- projects with too many possible next moves;
- decisions blocked by weak evidence;
- reversible experiments that need a clear kill condition;
- previous PA_PVP states that should continue instead of restarting.

It scales its output to the situation. A small reversible choice should stay compact. A contested or high-impact decision can expand into gates, probes, debt tracking, and evidence-bound closure.

---

## 🧭 What PA_PVP actually does

PA_PVP is not a brainstorming prompt. It is a decision-state protocol.

For each item, it tries to:

1. identify the real decision or artifact;
2. expose the highest-impact weakness or uncertainty;
3. select a verdict;
4. create executable or measurable steps;
5. bind claims to available evidence;
6. choose one `[NEXT]` action;
7. preserve enough state for the next run.

A normal decision run ends in one of three verdicts:

| Verdict | Meaning |
|---|---|
| `DO NOW` | The item is active and has an executable next move. |
| `DO LATER` | The item is parked until a condition, date, dependency, or evidence requirement changes. |
| `DISCARD` | The item should not proceed under the current state. |

The protocol never uses “depends” as a verdict. When uncertainty matters, it must become a probe, a parked state, a bounded simulation, or a discard condition.

---

## 🔁 Continue instead of restarting

PA_PVP is designed for repeated runs.

```text
Input or previous snapshot
        ↓
Verdict + NEXT
        ↓
Execute, inspect, simulate, or collect evidence
        ↓
Paste the whole previous snapshot back
        ↓
Delta-only continuation
```

You do not need to manually cut the previous output into fragments for normal continuation. Paste the complete valid snapshot back as input, and PA_PVP recovers the item state.

When previous state exists, the protocol should focus on what changed, what broke, and the smallest patch that improves the decision.

---

## 📦 What a valid result contains

A valid decision response starts with:

```text
STATE: DECISION.TEST.FINAL
```

Inside the machine block, the most important scan points are:

```text
[QUEUE]
```

and:

```text
[NEXT]
```

Typical shape:

```text
STATE: DECISION.TEST.FINAL

[QUEUE]
E1 | DRAFT->ACTIVE | DO NOW | ... | gate:NONE | S1

[NEXT]
S1: <one executable or planned next action>
```

If the state header is missing, or `[PANEL]` reports `OutputValidity: INVALID`, treat the result as diagnostic only. Do not reuse it as machine state.

---

## 🪶 Start simple; add structure only when needed

For a first run, plain language is enough.

Use the formal wrappers when you need deterministic batching, explicit modes, dependencies, per-item previous state, or machine-to-machine exchange.

The protocol supports three primary input modes:

| Mode | Use it for |
|---|---|
| `PLAN` | Steps, options, or an implementation plan. |
| `ARTIFACT` | A prompt, document, protocol, code sample, specification, or other artifact. |
| `TOOL + TARGET` | A named evaluation method applied to a specific target. |

It also accepts a previous PA_PVP snapshot as input for continuation.

---

## 🧯 Practical limits

PA_PVP is a text protocol, not a software runtime or autonomous agent.

It can structure decisions, simulations, evidence requests, probes, and next steps. Real execution still depends on the AI host, available tools, permissions, and external systems.

PA_PVP does not guarantee that:

- the underlying model follows every instruction perfectly;
- simulated evidence matches reality;
- a decision is legally, financially, medically, or technically correct;
- external facts are current unless they are inspected;
- an irreversible decision can be closed without real evidence.

When evidence is weak, the protocol should label the limitation instead of hiding it. Depending on the state, it may simulate a bounded closure, create a probe, park the item, request one minimal input when allowed, or discard it.

“PLUTONIUM-like” is the project’s identity and design metaphor. It is not a claim of safety certification, formal verification, or resistance to every adversarial condition.

---

## 📦 Repository contents

| File | Purpose |
|---|---|
| [`PA_PVP_full_v9.9.0_canonical.txt`](PA_PVP_full_v9.9.0_canonical.txt) | Canonical execution contract and source of truth. |
| [`README.md`](README.md) | Human entrypoint and technical guide. |
| [`assets/banner.png`](assets/banner.png) | Repository banner. |
| [`context7.json`](context7.json) | Context7 project metadata. |
| [`LICENSE`](LICENSE) | License text. |

---

<details>
<summary><strong>🧩 Technical contract and maintainer reference</strong></summary>

## Authority and version

The canonical execution semantics live in:

[`PA_PVP_full_v9.9.0_canonical.txt`](PA_PVP_full_v9.9.0_canonical.txt)

This README explains how to adopt and understand the protocol. When wording here conflicts with the canonical kernel, the kernel governs PA_PVP output format, routing, and decision semantics.

The current canonical filename identifies version `v9.9.0`.

## Default operating profile

Unless the kernel is edited, the default profile is:

```text
ExecCapability=NO_RUNTIME
ClosePolicy=SIM_OK
AskUser=OFF
CopyPasteMode=NO_LOOK
```

Meaning:

- the protocol does not assume real execution capability;
- simulated closure is allowed when explicitly labeled;
- it does not ask the operator for missing evidence by default;
- a full prior snapshot can be pasted back without manual extraction.

## Formal input contract

Optional batch header:

```text
<<<B keep_open=NO expire_days=30 exec_capability=NO_RUNTIME close_policy=SIM_OK ssot_scale=MIN resource_pool=>>>
```

Wrapped item:

```text
<<<I id=E1 title="short title" keep_open=NO expire_days=30 depends_on= uses= reversibility=>>>
...payload...
<<<END>>>
```

Each item uses exactly one mode.

### PLAN

```text
<<<PLAN>>>
- bullet list of actions/options OR numbered steps
```

### ARTIFACT

```text
<<<ARTIFACT>>>
<prompt/file/protocol/code/doc/etc>
```

### TOOL + TARGET

```text
<<<TOOL>>>
<analysis tool, standard, or checklist>
<<<TARGET>>>
<artifact to audit or optimize>
```

### Previous item state

```text
<<<PREV>>>
<previous [ITEM id=...] block for this item>
```

For normal continuation, snapshot-as-input is simpler: paste the entire previous valid PA_PVP output and let the kernel recover matching item states.

### New evidence and declared change

Use new evidence to revisit a previously closed item:

```text
<<<NEW_EVIDENCE evidence_tier=HISTORICAL|REAL|EXPERIMENT>>>
<observable evidence>
```

A simulated-closed item may also be revisited through:

```text
<<<CHANGE>>>
- observable change to facts, assumptions, or drivers
```

## AskUser switch

The kernel contains:

```text
AskUser = OFF
```

With `OFF`, missing evidence is handled through simulation, probing, parking, or cutting according to the contract.

Set it to:

```text
AskUser = ON
```

only when one minimal operator-facing evidence request should be allowed.

Even with `ON`, a question is emitted only for an eligible, non-terminal, externally blocked item. The protocol emits at most one question per output.

## Output contract

A decision run emits exactly one machine code block beginning with:

```text
STATE: DECISION.TEST.FINAL
```

The global structure includes:

```text
[USER_PANEL]
[PANEL]
[QUEUE]
[ITEM id=...]
```

A derived `[HUMAN_TABLE]` follows the code block. It is not reusable machine state.

`[RECOVERY_INPUT]` is optional and appears only when explicitly requested.

## Queue, verdicts, and lifecycle

`[QUEUE]` is the execution scan surface:

```text
id | prev_state->new_state | verdict | impact | urgency | ds | term | ct | pp | exp | gate | step1
```

Core states:

- `DRAFT`
- `ACTIVE`
- `STANDBY`
- `PROBING`
- `CLOSED`
- `EXPIRED`
- `DISCARDED`

Default verdict mapping:

- `DO NOW` → `ACTIVE`
- `DO LATER` → `STANDBY`
- `DISCARD` → `DISCARDED`

`CLOSED` means finalized for now. `PROBING` means an active reality probe or evidence-acquisition step is required.

## Surface scaling

PA_PVP does not require full diagnostic output for every item.

Low-impact or DIY items use a minimal surface unless they enter probing or trigger a gate that requires more structure.

Contested, gated, high-impact, or evidence-sensitive items may expand into full/debug surfaces.

The output budget is therefore state-dependent, not merely prompt-dependent.

## Dominant gates

Each item derives one `dominant_gate`:

- `FAIL_FAST_CUT`
- `FALSIFICATION`
- `DEBT_CEILING`
- `FRAGILITY`
- `DEPENDENCY_BLOCK`
- `CONFIDENCE_CAP`
- `EXTERNAL_BLOCK`
- `REDESIGN_TRIGGER`
- `SCORE_TRIAGE`
- `NONE`

The gate is diagnostic and routing-oriented. It must not invent semantics beyond the kernel rules.

`SCORE_TRIAGE` is reserved for explicit score or impact routing. It is not a generic reason to increase output size.

## Missing source behavior

When a claim or step depends on an identifiable source that is missing, the kernel sets:

```text
required_source_missing=YES
```

It then performs exactly one permitted outcome:

1. acquire the identifiable source with one bounded step;
2. park the item in `STANDBY`;
3. discard only when a higher-priority rule already requires discard.

It must not reconstruct missing text, diffs, hashes, file targets, commits, or source blocks from prose.

## PLAN fail-fast behavior

A plan must expose at least:

- a goal state;
- a system boundary;
- a hard constraint.

When the signal-to-noise ratio is too low, PA_PVP applies the fail-fast gate.

With `CopyPasteMode=NO_LOOK` or `AskUserMode=NONE`, it may derive minimal specifications as `SIMULATED` and continue. Repeated fail-fast reaches `FAIL_FAST_CUT` and discards the item.

## Executable step grammar

Steps must be observable or measurable:

```text
S{n}: <OBSERVABLE_VERB> <OBJECT> -> <OUTPUT> | timebox<=<N>m | fail_if=<OBSERVABLE_CONDITION>
```

`[NEXT]` must match one emitted step. It cannot introduce a new action.

When more than five steps are necessary, the protocol emits the first five executable steps after priority ordering or splits independent goals into separate items.

## Evidence and closure

Evidence tiers include simulated, derived, historical, real, and experimental evidence according to the kernel context.

Closure tiers:

- `ct:SIM` — simulated closure;
- `ct:REAL` — closure backed by historical, real, or experimental evidence.

With the default `ClosePolicy=SIM_OK`, a simulated closure is legal only when it remains labeled and confidence caps are applied.

Irreversible or `REAL_ONLY` decisions cannot close as simulated. Without sufficient evidence, they remain blocked or parked.

## Probes and falsification

Low-confidence critical drivers can move an item into `PROBING`.

A reality probe should declare:

- the decision context;
- the target driver;
- an observable metric or result;
- a timebox;
- a kill switch;
- a representativeness check.

When a representative probe falsifies a critical driver, the verdict becomes `DISCARD` with trigger `FALSIFICATION`.

Two independent, current, high-representativeness validating probes may support fast closure, subject to any additional governance and evidence-tier requirements.

## Falsification debt and hedge actions

Falsification Debt records unresolved critical drivers that remain active without sufficient evidence. The kernel limits active debt to two critical drivers.

A hedge action is permitted only when:

- Cost of Delay is high;
- waiting exceeds the opportunity window;
- the action is reversible or risk-contained;
- a risk cap is declared;
- a parallel reality probe starts;
- Falsification Debt is declared.

The hedge terminates automatically when the probe validates or falsifies the driver, or when the item becomes terminal.

## Delta-only peer validation

When previous state exists, PA_PVP uses delta-only peer validation:

```text
[DELTA]
[BREAK]
<single highest-impact break>
[PATCH]
<minimal patch or best-information-ROI move>
```

Each iteration contains exactly one `BREAK` and one `PATCH`.

The delta must reference a changed driver, relationship, probe, or evidence item. Without a causal reference, the delta is invalid and the item cannot claim progress.

## Contestation

A peer may set `contested=YES` when it disputes a driver, relationship, evidence binding, probe design, representativeness judgment, or verdict.

With previous state, the next `BREAK` must address the contested point directly. Without new evidence, the `PATCH` must reduce uncertainty or narrow/split the decision.

## Reports

`REPORT LITE` and `REPORT` are read-only render passes over one valid PA_PVP snapshot.

They must not:

- change verdicts;
- change gates or triggers;
- change steps;
- introduce facts;
- emit a new machine state block.

Reports help humans read state. They are not reusable state themselves.

## Invalid output

If the state header is missing, the output is non-operational.

If `[PANEL]` contains:

```text
OutputValidity: INVALID
```

the output is diagnostic only.

Do not execute its steps, recover its state, or use it as `<<<PREV>>>`.

## Editing the kernel

The kernel is a behavioral contract, not a prose article.

When changing it:

- keep execution rules inside the canonical kernel;
- keep adoption guidance and explanation in this README;
- preserve exact output invariants when they are part of machine consumption;
- prefer deterministic branches over vague advice;
- keep missing-source behavior non-fabricating;
- keep AskUser controlled by its switch and eligibility gate;
- preserve snapshot-as-input and delta-only continuation;
- verify changes against complete, incomplete, conflicting, and previous-state inputs.

</details>

---

## 🤖 AI-assisted development

This project was developed with AI assistance.

The project, documentation, and repository materials were shaped through human-directed work supported by AI tools during drafting, structuring, review, and refinement.

AI assistance does not make the project automatically correct, complete, or suitable for every use case. Read it, test it, and adapt it to your own context.

## 📜 License

Unless otherwise noted, this repository is licensed under:

**Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).**

See [`LICENSE`](LICENSE).

Attribution recipe:

- 🧩 Project: PA_PVP - a PLUTONIUM-like Adversarial Peer Validation Protocol
- 🔗 Source: link to this repo or the specific file
- 📜 License: CC BY-SA 4.0
- ✏️ Changes: state what you changed, if anything
