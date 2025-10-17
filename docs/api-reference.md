# Via Browser API Reference

This reference catalogs the core REST and WebSocket endpoints that power Via Browser's automation platform. Each entry includes a concise description, usage guidance, and example payloads to accelerate integration work for agents and developers.

> Programmatic access is also available through the Next.js routes exposed under `/api/reference`. Use these JSON endpoints to keep design systems, SDKs, and partner tooling synchronized with the source of truth.

## REST Endpoints

| Endpoint      | Method | Description                 |
| ------------- | ------ | --------------------------- |
| `/screenshot` | `POST` | Capture webpage screenshots |
| `/pdf`        | `POST` | Generate PDF documents      |
| `/content`    | `POST` | Extract page content        |
| `/scrape`     | `POST` | Scrape structured data      |

### `/screenshot` — Capture webpage screenshots

- **Method**: `POST`
- **Path**: `/screenshot`
- **Use When**: You need full-page or viewport-constrained screenshots for QA, monitoring, or content generation.
- **Request Example**

```json
{
  "url": "https://example.com",
  "viewport": { "width": 1280, "height": 720 },
  "fullPage": true
}
```

- **Response Example**

```json
{
  "jobId": "job_12345",
  "status": "queued",
  "outputUrl": "https://cdn.via-browser.dev/jobs/job_12345.png"
}
```

- **Notes**
  - Supports PNG and JPEG output via the `format` option.
  - Use the asynchronous job identifier to poll for completion.

### `/pdf` — Generate PDF documents

- **Method**: `POST`
- **Path**: `/pdf`
- **Use When**: You need production-ready PDFs rendered from dynamic pages without a headless browser locally.
- **Request Example**

```json
{
  "url": "https://example.com/whitepaper",
  "printBackground": true,
  "margin": { "top": "1cm", "right": "1cm", "bottom": "1cm", "left": "1cm" }
}
```

- **Response Example**

```json
{
  "jobId": "job_67890",
  "status": "processing",
  "outputUrl": "https://cdn.via-browser.dev/jobs/job_67890.pdf"
}
```

- **Notes**
  - PDF output is streamed; large renders stay within memory quotas.
  - Use custom request headers for authenticated pages.

### `/content` — Extract page content

- **Method**: `POST`
- **Path**: `/content`
- **Use When**: You need normalized content for search, summarization, or downstream analysis.
- **Request Example**

```json
{
  "url": "https://example.com/blog-post",
  "selectors": ["article", "h1", "meta[name=description]"],
  "format": "markdown"
}
```

- **Response Example**

```json
{
  "jobId": "job_24680",
  "status": "completed",
  "content": {
    "title": "Example Blog Post",
    "body": "# Example Blog Post\nVia Browser makes extraction simple...",
    "metadata": {
      "description": "Sample page for extraction"
    }
  }
}
```

- **Notes**
  - Falls back to full HTML serialization when selectors are omitted.
  - Normalizes output through built-in readability heuristics.

### `/scrape` — Scrape structured data

- **Method**: `POST`
- **Path**: `/scrape`
- **Use When**: You need repeatable structured data extraction with schema validation.
- **Request Example**

```json
{
  "url": "https://example.com/products",
  "schema": {
    "name": "text",
    "price": "number",
    "availability": "text"
  }
}
```

- **Response Example**

```json
{
  "jobId": "job_11223",
  "status": "completed",
  "records": [
    {
      "name": "Example Product",
      "price": 29.99,
      "availability": "In stock"
    }
  ]
}
```

- **Notes**
  - Schema definitions support nested properties and arrays.
  - Use pagination hints to iterate across long listings.

## WebSocket Endpoints

| Endpoint    | Browser | Library                |
| ----------- | ------- | ---------------------- |
| `/chromium` | Chrome  | Puppeteer / Playwright |
| `/firefox`  | Firefox | Playwright             |
| `/webkit`   | WebKit  | Playwright             |

### `/chromium` — Chrome-grade automation

- **Browser**: Chrome
- **Libraries**: Puppeteer, Playwright
- **Connection Example**

```text
wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN
```

- **Notes**
  - Supports DevTools protocol extensions for live session URLs.
  - Ideal for automation requiring Chrome-specific capabilities.

### `/firefox` — Privacy-forward automation

- **Browser**: Firefox
- **Libraries**: Playwright
- **Connection Example**

```text
wss://viabrowserai.vercel.app/firefox?token=YOUR_TOKEN
```

- **Notes**
  - Optimized for privacy-sensitive automation scenarios.
  - Provides geolocation emulation through Playwright contexts.

### `/webkit` — Safari-focused testing

- **Browser**: WebKit
- **Libraries**: Playwright
- **Connection Example**

```text
wss://viabrowserai.vercel.app/webkit?token=YOUR_TOKEN
```

- **Notes**
  - Ideal for validating Safari and Apple device experiences.
  - Pair with media emulation to mirror specific device profiles.

## Programmatic Index

Leverage the API routes below to query the reference in JSON form:

- `GET /api/reference/rest` — list REST endpoints
- `GET /api/reference/rest/{endpointId}` — fetch a REST endpoint definition
- `GET /api/reference/websocket` — list WebSocket endpoints
- `GET /api/reference/websocket/{endpointId}` — fetch a WebSocket endpoint definition

These endpoints are cache-friendly (revalidated hourly) and can power documentation sites, SDK generators, or other automation entry points.
