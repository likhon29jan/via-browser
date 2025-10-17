# Via Browser Vision Roadmap

This document captures three vision-stage and greenfield product opportunities for Via Browser, along with the API endpoints that would underpin each experience. The concepts are intentionally ambitious and designed to stretch the platform while remaining grounded in Via Browser's strengths: automation, observability, and human-in-the-loop control.

## Feature Portfolio Overview

| Slug | Name | Stage | Elevator Pitch |
| ---- | ---- | ----- | -------------- |
| `mission-control-studio` | Mission Control Studio | Greenfield | Design, simulate, and orchestrate multi-agent research missions that blend autonomous browsing with mindful human handoffs. |
| `compliance-ledger` | Compliance Ledger | Vision | Immutable audit trails for every automated browsing action, packaged for regulated industries that require provable oversight. |
| `insight-mesh` | Insight Mesh | Vision | A managed data mesh that transforms raw browser automation exhaust into continuously updated knowledge graphs for decision teams. |

> Retrieve this portfolio programmatically through `GET /api/vision/features`.

---

## Mission Control Studio (`mission-control-studio`)

- **Problem** — Teams running AI-powered research workflows struggle to coordinate long-running browser automations, capture intent, and hand off to humans without losing context or control.
- **Opportunity** — Provide a mission design surface that composes Via Browser sessions, AI prompts, and human review checkpoints into a single, auditable flow.
- **Target Users** — Automation architects, AI ops teams, and product squads prototyping autonomous browsing experiences.
- **Differentiators** — Visual flow builder that compiles to session graphs, stateful timelines with reversible checkpoints, and deep integration with Via Browser's live collaboration surface.
- **Success Metrics** — Mission orchestration <15 minutes, >90% telemetry reuse, NPS above +45.
- **System Considerations** — Mission DSL compilation, resumable execution storage, deterministic audit logs.

### Primary API Surface

| ID | Method | Path | Summary |
| -- | ------ | ---- | ------- |
| `create-mission` | `POST` | `/api/mission-control/missions` | Submit mission goals, stages, and review gates to create a reusable blueprint. |
| `mission-status` | `GET` | `/api/mission-control/missions/{missionId}` | Inspect mission graph, execution telemetry, and next human checkpoints. |
| `mission-events` | `GET` | `/api/mission-control/missions/{missionId}/events` | Stream structured events for dashboards and human-in-the-loop interventions. |

> Inspect the structured specification via `GET /api/vision/features/mission-control-studio/endpoints` or drill down to a specific record such as `GET /api/vision/features/mission-control-studio/endpoints/create-mission`.

---

## Compliance Ledger (`compliance-ledger`)

- **Problem** — Regulated teams cannot adopt AI-driven browsing without tamper-proof records that satisfy auditors, security officers, and legal teams.
- **Opportunity** — Deliver a compliance-grade evidence trail by automatically capturing, hashing, and storing every critical interaction across Via Browser sessions.
- **Target Users** — Financial services automation leads, healthcare compliance officers, and security teams.
- **Differentiators** — Cryptographically verifiable event ledger, layered privacy controls, and auditor workbench with guided replay.
- **Success Metrics** — SOC 2 readiness, <4 hour audit evidence turnaround, >95% auto-verified sessions.
- **System Considerations** — Low-latency ledger integration, regional residency, programmable retention with legal hold.

### Primary API Surface

| ID | Method | Path | Summary |
| -- | ------ | ---- | ------- |
| `ledger-append` | `POST` | `/api/compliance-ledger/sessions/{sessionId}/events` | Append signed evidence payloads tied to a Via Browser session. |
| `ledger-digest` | `GET` | `/api/compliance-ledger/sessions/{sessionId}` | Retrieve signed session digests with anomaly summaries. |
| `auditor-access` | `POST` | `/api/compliance-ledger/auditor-access` | Provision time-boxed auditor tokens with scoped replay permissions. |

> API specs are available at `GET /api/vision/features/compliance-ledger/endpoints` and individual definitions such as `GET /api/vision/features/compliance-ledger/endpoints/ledger-append`.

---

## Insight Mesh (`insight-mesh`)

- **Problem** — Enterprises gather huge volumes of browsing outputs but lack a governed way to turn them into trustworthy knowledge for downstream analytics and LLM copilots.
- **Opportunity** — Offer an opinionated pipeline that normalizes session artifacts, enriches them with third-party data, and exposes a governed API surface.
- **Target Users** — Data product managers, revenue intelligence teams, and LLM platform builders.
- **Differentiators** — Schema-on-read enrichment, graph-based entity linking, and SLA-backed freshness monitors.
- **Success Metrics** — <10 minute artifact-to-mesh lag, >80% enrichment coverage, 50% less manual analyst effort.
- **System Considerations** — Tenant isolation, lineage tracking, point-in-time snapshot support.

### Primary API Surface

| ID | Method | Path | Summary |
| -- | ------ | ---- | ------- |
| `register-stream` | `POST` | `/api/insight-mesh/streams` | Register a new Via Browser artifact stream and map it to a governed domain schema. |
| `graph-query` | `POST` | `/api/insight-mesh/graph/query` | Execute parameterized graph queries with freshness guarantees and policy-aware access control. |
| `mesh-snapshot` | `POST` | `/api/insight-mesh/snapshots` | Materialize point-in-time mesh snapshots for ML and BI workloads. |

> Fetch the JSON specification through `GET /api/vision/features/insight-mesh/endpoints` or per-endpoint lookups like `GET /api/vision/features/insight-mesh/endpoints/graph-query`.

---

## Programmatic Access

- **List all features** — `GET /api/vision/features`
- **Fetch a feature** — `GET /api/vision/features/{slug}`
- **List endpoints for a feature** — `GET /api/vision/features/{slug}/endpoints`
- **Inspect a single endpoint** — `GET /api/vision/features/{slug}/endpoints/{endpointId}`

These routes return the structured data defined in `lib/vision/feature-ideas.ts`, enabling downstream tools, design partners, or product strategy dashboards to stay synchronized with the evolving roadmap.
