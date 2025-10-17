import type { NextRequest } from 'next/server'

export type EndpointSpec = {
  id: string
  name: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  path: string
  description: string
  requestExample?: Record<string, unknown>
  responseExample: Record<string, unknown>
  notes?: string[]
}

export type FeatureIdea = {
  slug: string
  title: string
  visionStage: 'greenfield' | 'vision'
  elevatorPitch: string
  problem: string
  opportunity: string
  targetUsers: string[]
  differentiators: string[]
  successMetrics: string[]
  systemConsiderations: string[]
  endpoints: EndpointSpec[]
}

const featureIdeas: FeatureIdea[] = [
  {
    slug: 'mission-control-studio',
    title: 'Mission Control Studio',
    visionStage: 'greenfield',
    elevatorPitch:
      'Design, simulate, and orchestrate multi-agent research missions that blend autonomous browsing with mindful human handoffs.',
    problem:
      'Teams running AI-powered research workflows struggle to coordinate long-running browser automations, capture intent, and hand off to humans without losing context or control.',
    opportunity:
      'Provide a mission design surface that composes Via Browser sessions, AI prompts, and human review checkpoints into a single, auditable flow.',
    targetUsers: [
      'Automation architects at enterprise research orgs',
      'AI ops teams running multi-agent investigations',
      'Product teams prototyping autonomous browsing experiences',
    ],
    differentiators: [
      'Visual flow builder that compiles to reproducible Via Browser session graphs',
      'Stateful mission timeline with reversible checkpoints and rich telemetry',
      'Tight integration with the Via Browser live collaboration surface for human-in-the-loop overrides',
    ],
    successMetrics: [
      'Time-to-orchestrate a mission drops below 15 minutes',
      '>90% of mission steps emit structured telemetry reused across teams',
      'NPS from automation architects above +45',
    ],
    systemConsiderations: [
      'Composable mission DSL must compile to existing session orchestration primitives',
      'Long-running missions require resumable storage with idempotent retries',
      'Need deterministic audit logs to support rollback and compliance reviews',
    ],
    endpoints: [
      {
        id: 'create-mission',
        name: 'Create Mission',
        method: 'POST',
        path: '/api/mission-control/missions',
        description:
          'Create a new mission blueprint by submitting goals, triggers, and required capabilities.',
        requestExample: {
          name: 'Launch Product Research',
          intent: "Map competitors' onboarding flows",
          stages: [
            {
              id: 'discover',
              type: 'parallel',
              agents: [
                {
                  agentId: 'market-researcher',
                  prompt:
                    'Capture onboarding flow screenshots and key friction points.',
                },
              ],
            },
          ],
          reviewCheckpoints: [
            {
              stageId: 'discover',
              gating: 'manual-approval',
            },
          ],
        },
        responseExample: {
          missionId: 'msn_123',
          status: 'draft',
          createdAt: '2024-05-01T12:00:00.000Z',
          editUrl: 'https://via.local/missions/msn_123',
        },
        notes: [
          'Validate mission schema against reusable templates',
          'All sensitive data is encrypted at rest',
        ],
      },
      {
        id: 'mission-status',
        name: 'Get Mission',
        method: 'GET',
        path: '/api/mission-control/missions/{missionId}',
        description:
          'Fetch the latest mission graph, execution status, telemetry, and pending human actions.',
        responseExample: {
          missionId: 'msn_123',
          status: 'running',
          progress: 0.42,
          nextCheckpoint: {
            type: 'review',
            dueAt: '2024-05-01T12:30:00.000Z',
          },
          timeline: [
            {
              stageId: 'discover',
              startedAt: '2024-05-01T12:10:00.000Z',
              completedAt: null,
              agentsOnline: 2,
            },
          ],
        },
        notes: [
          'Surface only redacted mission data to non-owner viewers',
          'Consider SSE upgrade when timeline granularity exceeds paging limits',
        ],
      },
      {
        id: 'mission-events',
        name: 'Stream Mission Events',
        method: 'GET',
        path: '/api/mission-control/missions/{missionId}/events',
        description:
          'Stream structured mission events (agent actions, browser snapshots, human annotations) for real-time dashboards.',
        responseExample: {
          event: 'agent.step.completed',
          missionId: 'msn_123',
          data: {
            stageId: 'discover',
            agentId: 'market-researcher',
            outputUrl: 'https://cdn.via/assets/step-42.png',
          },
        },
        notes: [
          'Prefer Server-Sent Events; gracefully degrade to long-polling',
          'Guarantee ordering with monotonic event offsets',
        ],
      },
    ],
  },
  {
    slug: 'compliance-ledger',
    title: 'Compliance Ledger',
    visionStage: 'vision',
    elevatorPitch:
      'Immutable audit trails for every automated browsing action, packaged for regulated industries that require provable oversight.',
    problem:
      'Regulated teams cannot adopt AI-driven browsing without tamper-proof records that satisfy auditors, security officers, and legal teams.',
    opportunity:
      'Deliver a compliance-grade evidence trail by automatically capturing, hashing, and storing every critical interaction across Via Browser sessions.',
    targetUsers: [
      'Financial services automation leads',
      'Healthcare compliance officers',
      'Security teams monitoring third-party automation',
    ],
    differentiators: [
      'Cryptographically verifiable event ledger with append-only guarantees',
      'Layered privacy controls so teams can redact customer data without losing evidentiary value',
      'Auditor workbench with guided replay of automation sessions',
    ],
    successMetrics: [
      'Passes SOC 2 Type II readiness assessments',
      '<4 hour turnaround for audit evidence requests',
      '>95% of recorded sessions achieve verification without manual cleanup',
    ],
    systemConsiderations: [
      'Ledger service must integrate with existing session telemetry without adding latency spikes',
      'Evidence storage requires regional residency options',
      'Provide programmable retention policies with legal hold overrides',
    ],
    endpoints: [
      {
        id: 'ledger-append',
        name: 'Append Evidence',
        method: 'POST',
        path: '/api/compliance-ledger/sessions/{sessionId}/events',
        description:
          'Submit signed evidence payloads (DOM diffs, screenshots, console logs) tied to a Via Browser session.',
        requestExample: {
          checksum: 'sha256:4fd2...',
          recordedAt: '2024-05-01T11:58:31.120Z',
          payloadType: 'screenshot',
          payloadUrl: 'https://cdn.via/evidence/evt_445.png',
          metadata: {
            userId: 'ops_88',
            classification: 'confidential',
            tags: ['kyc', 'onboarding'],
          },
        },
        responseExample: {
          ledgerEventId: 'led_evt_991',
          sequence: 128,
          acknowledgedAt: '2024-05-01T11:58:31.560Z',
        },
        notes: [
          'Reject entries whose checksum fails server-side verification',
          'Sessions under legal hold bypass retention deletions',
        ],
      },
      {
        id: 'ledger-digest',
        name: 'Get Session Digest',
        method: 'GET',
        path: '/api/compliance-ledger/sessions/{sessionId}',
        description:
          'Retrieve a signed digest summarizing all events, approvals, and anomalies for a session.',
        responseExample: {
          sessionId: 'sess_432',
          status: 'verified',
          eventCount: 142,
          latestEventAt: '2024-05-01T12:02:11.003Z',
          digest: {
            algorithm: 'sha3-512',
            signature: '0xabc123...',
          },
          anomalies: [],
        },
        notes: [
          'Expose digest signature chain for independent validation',
          'Paginate anomalies when they exceed 20 entries',
        ],
      },
      {
        id: 'auditor-access',
        name: 'Request Auditor Access',
        method: 'POST',
        path: '/api/compliance-ledger/auditor-access',
        description:
          'Provision time-boxed, scope-limited access tokens so external auditors can replay evidence without touching production systems.',
        requestExample: {
          auditorEmail: 'audit@firm.com',
          scope: {
            sessions: ['sess_432', 'sess_501'],
            expiresAt: '2024-05-07T00:00:00.000Z',
          },
        },
        responseExample: {
          accessToken: 'led_aud_778',
          expiresAt: '2024-05-07T00:00:00.000Z',
          loginUrl: 'https://via.compliance/replay/led_aud_778',
        },
        notes: [
          'All auditor sessions must be watermarked and monitored in real time',
          'Token issuance requires dual control approval',
        ],
      },
    ],
  },
  {
    slug: 'insight-mesh',
    title: 'Insight Mesh',
    visionStage: 'vision',
    elevatorPitch:
      'A managed data mesh that transforms raw browser automation exhaust into continuously updated knowledge graphs for decision teams.',
    problem:
      'Enterprises gather huge volumes of browsing outputs but lack a governed way to turn them into trustworthy, queryable knowledge for downstream analytics and LLM copilots.',
    opportunity:
      'Offer an opinionated pipeline that normalizes session artifacts, enriches them with third-party data, and exposes a governed API surface.',
    targetUsers: [
      'Data product managers at growth-stage companies',
      'Revenue intelligence teams',
      'LLM platform teams curating retrieval corpora',
    ],
    differentiators: [
      'Schema-on-read enrichment that maps any captured page to a canonical ontology',
      'Graph-based linking of entities discovered across thousands of sessions',
      'Built-in freshness guarantees with SLA-backed sync monitors',
    ],
    successMetrics: [
      '<10 minute lag between new session artifact and mesh availability',
      '>80% enrichment coverage for top customer verticals',
      '50% reduction in manual analyst curation time',
    ],
    systemConsiderations: [
      'Pipelines must isolate customer data domains with zero data bleed',
      'Provide lineage tracking across enrichment hops',
      'Expose mesh snapshots for point-in-time analytics',
    ],
    endpoints: [
      {
        id: 'register-stream',
        name: 'Register Stream',
        method: 'POST',
        path: '/api/insight-mesh/streams',
        description:
          'Declare a new source stream of Via Browser artifacts and map it to a governed domain schema.',
        requestExample: {
          name: 'Ecommerce Pricing Sweeps',
          sourceSessions: ['sess_101', 'sess_102'],
          domain: 'retail.pricing',
          retentionDays: 30,
        },
        responseExample: {
          streamId: 'str_900',
          status: 'active',
          schemaVersion: 'retail.pricing@2024-04',
          firstIngestEta: '2024-05-01T13:00:00.000Z',
        },
        notes: [
          'Validate that referenced sessions exist and belong to the requesting tenant',
          'Emit governance events for catalog synchronization',
        ],
      },
      {
        id: 'graph-query',
        name: 'Query Knowledge Graph',
        method: 'POST',
        path: '/api/insight-mesh/graph/query',
        description:
          'Execute parameterized graph queries across enriched entities with freshness filters and policy-aware access control.',
        requestExample: {
          query:
            'MATCH (product)-[r:MENTIONED_IN]->(page) WHERE product.category = $category RETURN product, COUNT(r) as mentions',
          parameters: {
            category: 'laptops',
          },
          freshnessMinutes: 30,
        },
        responseExample: {
          results: [
            {
              productId: 'prod_22',
              mentions: 184,
            },
          ],
          generatedAt: '2024-05-01T12:59:00.000Z',
        },
        notes: [
          'Enforce tenant-level row filtering via attribute-based access control',
          'Rate limit heavy graph traversals to protect cluster stability',
        ],
      },
      {
        id: 'mesh-snapshot',
        name: 'Create Snapshot',
        method: 'POST',
        path: '/api/insight-mesh/snapshots',
        description:
          'Materialize a point-in-time snapshot of the mesh for downstream ML training or BI workloads.',
        requestExample: {
          streamId: 'str_900',
          snapshotName: 'pricing-q2-plan',
          exportFormat: 'parquet',
        },
        responseExample: {
          snapshotId: 'snp_445',
          status: 'pending',
          downloadUrl: null,
          estimatedReadyAt: '2024-05-01T14:10:00.000Z',
        },
        notes: [
          'Snapshots must respect domain-level retention policies',
          'Emit lineage metadata to catalog services',
        ],
      },
    ],
  },
]

export const featureIndex = featureIdeas.map(
  ({ slug, title, visionStage, elevatorPitch }) => ({
    slug,
    title,
    visionStage,
    elevatorPitch,
  }),
)

export const listFeatureIdeas = () => featureIdeas

export const getFeatureIdea = (slug: string) =>
  featureIdeas.find((feature) => feature.slug === slug)

export const getFeatureEndpoints = (slug: string) =>
  getFeatureIdea(slug)?.endpoints ?? []

export const getFeatureEndpoint = (slug: string, endpointId: string) =>
  getFeatureEndpoints(slug).find((endpoint) => endpoint.id === endpointId)

// Placeholder export to keep Next.js tree-shaking aware when the module is imported dynamically
export const _requestTypeReference: NextRequest | undefined = undefined
