export type RestEndpoint = {
  id: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  path: string
  description: string
  requestExample?: Record<string, unknown>
  responseExample?: Record<string, unknown>
  notes?: string[]
}

export type WebSocketEndpoint = {
  id: string
  path: string
  browser: 'Chrome' | 'Firefox' | 'WebKit'
  libraries: string[]
  description: string
  connectionExample?: string
  notes?: string[]
}

const restEndpoints: RestEndpoint[] = [
  {
    id: 'screenshot',
    method: 'POST',
    path: '/screenshot',
    description: 'Capture webpage screenshots',
    requestExample: {
      url: 'https://example.com',
      viewport: { width: 1280, height: 720 },
      fullPage: true,
    },
    responseExample: {
      jobId: 'job_12345',
      status: 'queued',
      outputUrl: 'https://cdn.via-browser.dev/jobs/job_12345.png',
    },
    notes: [
      'Supports PNG and JPEG output via the `format` option',
      'Use the async job identifier to poll for completion',
    ],
  },
  {
    id: 'pdf',
    method: 'POST',
    path: '/pdf',
    description: 'Generate PDF documents',
    requestExample: {
      url: 'https://example.com/whitepaper',
      printBackground: true,
      margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
    },
    responseExample: {
      jobId: 'job_67890',
      status: 'processing',
      outputUrl: 'https://cdn.via-browser.dev/jobs/job_67890.pdf',
    },
    notes: [
      'PDF output is streamed; large renders stay under memory quotas',
      'Leverage custom headers for authenticated pages',
    ],
  },
  {
    id: 'content',
    method: 'POST',
    path: '/content',
    description: 'Extract page content',
    requestExample: {
      url: 'https://example.com/blog-post',
      selectors: ['article', 'h1', 'meta[name=description]'],
      format: 'markdown',
    },
    responseExample: {
      jobId: 'job_24680',
      status: 'completed',
      content: {
        title: 'Example Blog Post',
        body: '# Example Blog Post\nVia Browser makes extraction simple...',
        metadata: {
          description: 'Sample page for extraction',
        },
      },
    },
    notes: [
      'Fallbacks to full HTML serialization when selectors are omitted',
      'Normalize output through built-in readability heuristics',
    ],
  },
  {
    id: 'scrape',
    method: 'POST',
    path: '/scrape',
    description: 'Scrape structured data',
    requestExample: {
      url: 'https://example.com/products',
      schema: {
        name: 'text',
        price: 'number',
        availability: 'text',
      },
    },
    responseExample: {
      jobId: 'job_11223',
      status: 'completed',
      records: [
        {
          name: 'Example Product',
          price: 29.99,
          availability: 'In stock',
        },
      ],
    },
    notes: [
      'Schema definitions support nested properties and arrays',
      'Use pagination hints to iterate across long listings',
    ],
  },
]

const websocketEndpoints: WebSocketEndpoint[] = [
  {
    id: 'chromium',
    path: '/chromium',
    browser: 'Chrome',
    libraries: ['Puppeteer', 'Playwright'],
    description: 'Connect to managed Chromium instances',
    connectionExample:
      'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN',
    notes: [
      'Supports DevTools protocol extensions for live session URLs',
      'Best for automation that requires Chrome-specific features',
    ],
  },
  {
    id: 'firefox',
    path: '/firefox',
    browser: 'Firefox',
    libraries: ['Playwright'],
    description: 'Connect to managed Firefox instances',
    connectionExample: 'wss://viabrowserai.vercel.app/firefox?token=YOUR_TOKEN',
    notes: [
      'Ideal for privacy-sensitive automation scenarios',
      'Expose geolocation emulation via Playwright contexts',
    ],
  },
  {
    id: 'webkit',
    path: '/webkit',
    browser: 'WebKit',
    libraries: ['Playwright'],
    description: 'Connect to managed WebKit instances',
    connectionExample: 'wss://viabrowserai.vercel.app/webkit?token=YOUR_TOKEN',
    notes: [
      'Great for validating Safari-specific experiences',
      'Use media emulation to mirror Apple device profiles',
    ],
  },
]

export function listRestEndpoints(): RestEndpoint[] {
  return restEndpoints
}

export function getRestEndpoint(id: string): RestEndpoint | undefined {
  return restEndpoints.find((endpoint) => endpoint.id === id)
}

export function listWebSocketEndpoints(): WebSocketEndpoint[] {
  return websocketEndpoints
}

export function getWebSocketEndpoint(
  id: string,
): WebSocketEndpoint | undefined {
  return websocketEndpoints.find((endpoint) => endpoint.id === id)
}
