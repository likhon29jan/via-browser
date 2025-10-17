import Link from "next/link";
import type { Metadata } from "next";

import {
  listRestEndpoints,
  listWebSocketEndpoints,
  type RestEndpoint,
  type WebSocketEndpoint
} from "@/lib/reference/api-reference";
import {
  DataTable,
  type DataTableColumn
} from "@/components/reference/data-table";

export const metadata: Metadata = {
  title: "Via Browser API Reference",
  description:
    "Deep-dive into Via Browser's REST and WebSocket APIs with live JSON schemas and usage guidance."
};

const restColumns: DataTableColumn<RestEndpoint>[] = [
  {
    key: "path",
    header: "Endpoint",
    render: (endpoint) => (
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-gray-900 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {endpoint.method}
          </span>
          <code className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-800">
            {endpoint.path}
          </code>
        </div>
        <p className="text-sm text-gray-600">{endpoint.description}</p>
        {endpoint.notes && endpoint.notes.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
            {endpoint.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
      </div>
    ),
    cellClassName: "align-top"
  },
  {
    key: "request",
    header: "Sample Request",
    render: (endpoint) => renderJsonBlock(endpoint.requestExample),
    cellClassName: "align-top"
  },
  {
    key: "response",
    header: "Sample Response",
    render: (endpoint) => renderJsonBlock(endpoint.responseExample),
    cellClassName: "align-top"
  }
];

const websocketColumns: DataTableColumn<WebSocketEndpoint>[] = [
  {
    key: "path",
    header: "Endpoint",
    render: (endpoint) => (
      <div className="space-y-3">
        <code className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-800">
          {endpoint.path}
        </code>
        <p className="text-sm text-gray-600">{endpoint.description}</p>
        {endpoint.connectionExample ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Connection URL
            </p>
            <code className="mt-1 block overflow-x-auto rounded bg-gray-900 px-3 py-2 text-xs text-gray-100">
              {endpoint.connectionExample}
            </code>
          </div>
        ) : null}
        {endpoint.notes && endpoint.notes.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
            {endpoint.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
      </div>
    ),
    cellClassName: "align-top"
  },
  {
    key: "browser",
    header: "Browser",
    render: (endpoint) => (
      <div className="space-y-2 text-sm text-gray-700">
        <span className="font-semibold text-gray-900">{endpoint.browser}</span>
      </div>
    ),
    cellClassName: "align-top"
  },
  {
    key: "libraries",
    header: "Supported Libraries",
    render: (endpoint) => (
      <div className="flex flex-wrap gap-2">
        {endpoint.libraries.map((library) => (
          <span
            key={library}
            className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700"
          >
            {library}
          </span>
        ))}
      </div>
    ),
    cellClassName: "align-top"
  }
];

function renderJsonBlock(example?: Record<string, unknown>) {
  if (!example) {
    return <span className="text-sm text-gray-500">—</span>;
  }

  return (
    <pre className="max-h-64 overflow-auto rounded-lg bg-gray-900 p-4 text-xs text-gray-100">
      <code>{JSON.stringify(example, null, 2)}</code>
    </pre>
  );
}

export default function DocsPage() {
  const restEndpoints = listRestEndpoints();
  const websocketEndpoints = listWebSocketEndpoints();

  return (
    <main className="bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Documentation
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
            Via Browser API Reference
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore the core REST and WebSocket surfaces that power Via Browser. Use the live JSON endpoints to integrate programmatically or skim the tables below for quick copy-ready payloads.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/api/reference/rest"
              className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700"
            >
              View REST schema JSON
            </Link>
            <Link
              href="/api/reference/websocket"
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
            >
              View WebSocket schema JSON
            </Link>
            <Link
              href="https://github.com/likhon29jan/via-browser/blob/main/docs/api-reference.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:text-blue-900"
            >
              View Markdown guide
            </Link>
          </div>
        </header>

        <section className="space-y-6">
          <DataTable
            caption="REST Endpoints"
            description={
              <span>
                Stateless operations for screenshots, PDFs, content extraction, and structured scraping.
              </span>
            }
            items={restEndpoints}
            getRowKey={(endpoint) => endpoint.id}
            columns={restColumns}
            emptyState={<span>No REST endpoints found.</span>}
          />
        </section>

        <section className="mt-12 space-y-6">
          <DataTable
            caption="WebSocket Endpoints"
            description={
              <span>
                Persistent browser sessions with DevTools-level control. Connect via Playwright or Puppeteer using the URLs below.
              </span>
            }
            items={websocketEndpoints}
            getRowKey={(endpoint) => endpoint.id}
            columns={websocketColumns}
            emptyState={<span>No WebSocket endpoints found.</span>}
          />
        </section>

        <section className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-8">
          <h2 className="text-xl font-semibold text-blue-900">Integrate programmatically</h2>
          <p className="mt-3 text-sm text-blue-900">
            Prefer typed metadata? Fetch the JSON catalogs directly from your workflow and keep your integrations in sync.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-blue-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-blue-900">REST endpoints</h3>
              <code className="mt-2 block overflow-x-auto rounded bg-gray-900 px-3 py-2 text-xs text-gray-100">
                curl https://viabrowserai.vercel.app/api/reference/rest
              </code>
            </div>
            <div className="rounded-xl border border-blue-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-blue-900">WebSocket endpoints</h3>
              <code className="mt-2 block overflow-x-auto rounded bg-gray-900 px-3 py-2 text-xs text-gray-100">
                curl https://viabrowserai.vercel.app/api/reference/websocket
              </code>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
