import React from 'react';

const Section: React.FC<React.PropsWithChildren<{ title: string; id?: string }>> = ({ title, id, children }) => (
  <section id={id} className="mt-12 first:mt-0">
    <h2 className="text-2xl font-bold mb-4 text-zinc-50">{title}</h2>
    <div className="space-y-5 text-lg leading-relaxed text-zinc-200">{children}</div>
  </section>
);

const SubSection: React.FC<React.PropsWithChildren<{ title: string }>> = ({ title, children }) => (
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const CodeBlock: React.FC<React.PropsWithChildren<{ language?: string }>> = ({ language, children }) => (
  <pre className="overflow-x-auto rounded-xl bg-zinc-900/80 ring-1 ring-zinc-800 p-5 text-sm text-zinc-100 shadow-inner">
    <code className={language ? `language-${language}` : undefined}>{children}</code>
  </pre>
);

const makeCode = (lines: string[]) => lines.join('\n');

type ServiceModel = {
  name: string;
  useCase: string;
  differentiator: string;
};

type KeyFeature = {
  title: string;
  description?: string;
  bullets: string[];
  useCase?: string;
};

type CodeExample = {
  title: string;
  language: string;
  code: string;
  description?: string;
};

type AgentPattern = {
  title: string;
  description: string;
  code: string;
  language: string;
};

const serviceModels: ServiceModel[] = [
  {
    name: 'CDP-Based API',
    useCase: 'Cross-language automation with low-level control',
    differentiator: 'Direct Chrome DevTools Protocol access for maximum flexibility'
  },
  {
    name: 'Browsers as a Service (BaaS)',
    useCase: 'Running custom scripts with Playwright/Puppeteer',
    differentiator: 'Local development experience in the cloud'
  },
  {
    name: 'REST APIs',
    useCase: 'Simple tasks (PDFs, screenshots, scraping)',
    differentiator: 'Stateless HTTP requests for quick integrations'
  },
  {
    name: 'AI Agent SDK',
    useCase: 'Intelligent automation with LLM integration',
    differentiator: 'Built-in context management and decision-making'
  }
];

const keyFeatures: KeyFeature[] = [
  {
    title: '1. Hybrid Automation & Live Session Interactivity',
    description:
      'Via Browser enables a human-in-the-loop approach where automated scripts can be monitored and controlled in real-time.',
    bullets: [
      '<strong>Live View</strong>: Generate a live URL to watch browser sessions as they execute',
      '<strong>Real-time Interaction</strong>: Take control of sessions for debugging or handling CAPTCHAs',
      '<strong>Quality Control</strong>: Tune streaming quality with <code>quality</code> and <code>type</code> parameters'
    ],
    useCase: 'Perfect for debugging complex automations or scenarios requiring human intervention.'
  },
  {
    title: '2. Robust Session Management',
    bullets: [
      '<strong>Connect &amp; Reconnect</strong>: Pause and resume sessions maintaining full state',
      '<strong>Session Persistence</strong>: Keep sessions alive across multiple operations',
      '<strong>Resource Limits</strong>: Set time, memory, and capability constraints',
      '<strong>Kill Controls</strong>: Terminate sessions programmatically or automatically'
    ]
  },
  {
    title: '3. Chrome DevTools Protocol (CDP) API',
    description: 'Foundation for advanced browser control.',
    bullets: [
      '<strong>Cross-Language Support</strong>: Works with any language that can send WebSocket messages',
      '<strong>Custom Commands</strong>: Extended CDP commands specific to Via Browser',
      '<strong>Event Streaming</strong>: Real-time events for monitoring automation progress',
      '<strong>Network Interception</strong>: Modify requests, responses, and inject custom logic'
    ]
  },
  {
    title: '4. Advanced Infrastructure',
    bullets: [
      '<strong>Multi-Browser Support</strong>: Chromium, Chrome, Firefox, and WebKit',
      '<strong>Custom Extensions</strong>: Upload and run your own browser extensions',
      '<strong>Multiplexing</strong>: Route multiple sessions through shared resources while maintaining isolation',
      '<strong>Multi-Token Access Control</strong>: Team-friendly API key management',
      '<strong>Stealth Mode</strong>: Advanced bot detection evasion techniques'
    ]
  }
];

const technicalExamples: CodeExample[] = [
  {
    title: '// Puppeteer (Chromium)',
    language: 'javascript',
    code: makeCode([
      "// Puppeteer (Chromium)",
      "import puppeteer from 'puppeteer-core';",
      '',
      "const browser = await puppeteer.connect({",
      "  browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'",
      '});',
      '',
      'const page = await browser.newPage();',
      "await page.goto('https://example.com');",
      'const content = await page.content();',
      'await browser.close();'
    ])
  },
  {
    title: '// Playwright (Firefox)',
    language: 'javascript',
    code: makeCode([
      "// Playwright (Firefox)",
      "import { firefox } from 'playwright';",
      '',
      'const browser = await firefox.connect(',
      "  'wss://viabrowserai.vercel.app/firefox?token=YOUR_TOKEN'",
      ');',
      '',
      'const context = await browser.newContext();',
      'const page = await context.newPage();',
      "await page.goto('https://example.com');",
      'await browser.close();'
    ])
  },
  {
    title: '// Playwright (WebKit)',
    language: 'javascript',
    code: makeCode([
      "// Playwright (WebKit)",
      "import { webkit } from 'playwright';",
      '',
      'const browser = await webkit.connect(',
      "  'wss://viabrowserai.vercel.app/webkit?token=YOUR_TOKEN'",
      ');'
    ])
  }
];

const restApiExamples: CodeExample[] = [
  {
    title: 'Generate PDF',
    language: 'bash',
    code: makeCode([
      'curl -X POST "https://viabrowserai.vercel.app/pdf?token=YOUR_TOKEN" \\',
      "  -H 'Content-Type: application/json' \\",
      "  -d '{",
      "    \"url\": \"https://example.com\",",
      "    \"options\": {",
      "      \"format\": \"A4\",",
      "      \"printBackground\": true,",
      "      \"margin\": {",
      "        \"top\": \"1cm\",",
      "        \"bottom\": \"1cm\"",
      '      }',
      '    }',
      "  }' \\",
      '  -o output.pdf'
    ])
  },
  {
    title: 'Capture Screenshot',
    language: 'bash',
    code: makeCode([
      'curl -X POST "https://viabrowserai.vercel.app/screenshot?token=YOUR_TOKEN" \\',
      "  -H 'Content-Type: application/json' \\",
      "  -d '{",
      "    \"url\": \"https://example.com\",",
      "    \"options\": {",
      "      \"type\": \"png\",",
      "      \"fullPage\": true,",
      "      \"quality\": 90",
      '    }',
      "  }' \\",
      '  -o screenshot.png'
    ])
  },
  {
    title: 'Web Scraping',
    language: 'bash',
    code: makeCode([
      'curl -X POST "https://viabrowserai.vercel.app/content?token=YOUR_TOKEN" \\',
      "  -H 'Content-Type: application/json' \\",
      "  -d '{",
      "    \"url\": \"https://example.com\",",
      "    \"waitFor\": \"networkidle\",",
      "    \"selector\": \"article\"",
      "  }'"
    ])
  }
];

const liveSessionSnippet: CodeExample = {
  title: 'createLiveSession.ts',
  language: 'javascript',
  code: makeCode([
    "import puppeteer from 'puppeteer-core';",
    '',
    'async function createLiveSession() {',
    '  const browser = await puppeteer.connect({',
    "    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'",
    '  });',
    '',
    '  const page = await browser.newPage();',
    '  const cdp = await page.createCDPSession();',
    '',
    "  await page.goto('https://example.com');",
    '',
    '  // Generate live URL for human monitoring',
    "  const { liveURL } = await cdp.send('ViaBrowser.getLiveURL', {",
    "    quality: 'high',  // Options: 'low', 'medium', 'high'",
    "    type: 'view'      // Options: 'view', 'interact'",
    '  });',
    '',
    "  console.log('Watch live at:', liveURL);",
    '',
    '  // Continue automation while session is observable',
    "  await page.type('#search', 'AI automation');",
    '',
    '  return liveURL;',
    '}'
  ])
};

const stealthModeSnippet: CodeExample = {
  title: 'Stealth Mode',
  language: 'javascript',
  code: makeCode([
    'const browser = await puppeteer.connect({',
    "  browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN&stealth=true'",
    '});',
    '',
    '// Or via REST API',
    'const launchOptions = encodeURIComponent(JSON.stringify({',
    '  stealth: true,',
    '  blockAds: true,',
    "  timezone: 'America/New_York'",
    '}));',
    '',
    'const url = `https://viabrowserai.vercel.app/screenshot?token=YOUR_TOKEN&launch=${launchOptions}`;'
  ])
};

const agentPatterns: AgentPattern[] = [
  {
    title: 'Pattern 1: Web Research Agent',
    description: 'AI agents can orchestrate browsers to gather intelligence:',
    language: 'javascript',
    code: makeCode([
      "import { Anthropic } from '@anthropic-ai/sdk';",
      "import puppeteer from 'puppeteer-core';",
      '',
      'async function researchAgent(topic) {',
      '  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });',
      '',
      '  const browser = await puppeteer.connect({',
      "    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'",
      '  });',
      '',
      '  const page = await browser.newPage();',
      '',
      '  // Navigate to search',
      '  await page.goto(`https://www.google.com/search?q=${encodeURIComponent(topic)}`);',
      '',
      '  // Extract search results',
      '  const results = await page.evaluate(() => {',
      "    return Array.from(document.querySelectorAll('.g')).slice(0, 5).map(el => ({",
      "      title: el.querySelector('h3')?.textContent,",
      "      snippet: el.querySelector('.VwiC3b')?.textContent,",
      "      url: el.querySelector('a')?.href",
      '    }));',
      '  });',
      '',
      '  // Let Claude analyze the results',
      '  const response = await anthropic.messages.create({',
      "    model: 'claude-sonnet-4-20250514',",
      '    max_tokens: 2000,',
      '    messages: [{',
      "      role: 'user',",
      "      content: `Analyze these search results about \"${topic}\" and provide key insights:\\n\\n${JSON.stringify(results, null, 2)}`",
      '    }]',
      '  });',
      '',
      '  await browser.close();',
      '',
      '  return {',
      '    searchResults: results,',
      '    analysis: response.content[0].text',
      '  };',
      '}'
    ])
  },
  {
    title: 'Pattern 2: Visual Understanding Agent',
    description: 'Combine screenshots with vision models:',
    language: 'javascript',
    code: makeCode([
      "import Anthropic from '@anthropic-ai/sdk';",
      '',
      'async function analyzeWebpage(url) {',
      '  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });',
      '',
      '  // Capture screenshot via REST API',
      '  const response = await fetch(`https://viabrowserai.vercel.app/screenshot?token=YOUR_TOKEN`, {',
      "    method: 'POST',",
      "    headers: { 'Content-Type': 'application/json' },",
      '    body: JSON.stringify({',
      '      url: url,',
      "      options: { type: 'png', fullPage: true }",
      '    })',
      '  });',
      '',
      '  const imageBuffer = await response.arrayBuffer();',
      "  const base64Image = Buffer.from(imageBuffer).toString('base64');",
      '',
      "  // Analyze with Claude's vision capabilities",
      '  const analysis = await anthropic.messages.create({',
      "    model: 'claude-sonnet-4-20250514',",
      '    max_tokens: 1500,',
      '    messages: [{',
      "      role: 'user',",
      '      content: [',
      '        {',
      "          type: 'image',",
      '          source: {',
      "            type: 'base64',",
      "            media_type: 'image/png',",
      '            data: base64Image',
      '          }',
      '        },',
      '        {',
      "          type: 'text',",
      "          text: 'Analyze this webpage. What is the main purpose? Identify key UI elements and provide UX recommendations.'",
      '        }',
      '      ]',
      '    }]',
      '  });',
      '',
      '  return analysis.content[0].text;',
      '}'
    ])
  },
  {
    title: 'Pattern 3: Workflow Automation Agent',
    description: 'Multi-step automation with decision-making:',
    language: 'javascript',
    code: makeCode([
      "import { Anthropic } from '@anthropic-ai/sdk';",
      "import puppeteer from 'puppeteer-core';",
      '',
      'async function workflowAgent(task) {',
      '  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });',
      "  const browser = await puppeteer.connect({",
      "    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN&stealth=true'",
      '  });',
      '',
      '  const page = await browser.newPage();',
      '  const conversationHistory = [];',
      '',
      '  // Initial plan',
      '  let response = await anthropic.messages.create({',
      "    model: 'claude-sonnet-4-20250514',",
      '    max_tokens: 1000,',
      '    messages: [{',
      "      role: 'user',",
      "      content: `Create a step-by-step plan to: ${task}\\n\\nRespond with JSON:{\"steps\": [\"step1\", \"step2\", ...]}`",
      '    }]',
      '  });',
      '',
      '  const plan = JSON.parse(response.content[0].text);',
      '',
      '  // Execute each step',
      '  for (const step of plan.steps) {',
      "    console.log(`Executing: ${step}`);",
      '',
      '    // Get current page state',
      '    const pageInfo = await page.evaluate(() => ({',
      '      url: window.location.href,',
      '      title: document.title,',
      '      forms: Array.from(document.querySelectorAll(\'form\')).length,',
      "      buttons: Array.from(document.querySelectorAll('button')).map(b =>",
      '        b.textContent.trim()',
      '      )',
      '    }));',
      '',
      '    // Ask Claude what to do next',
      '    conversationHistory.push({',
      "      role: 'user',",
      "      content: `Current page: ${JSON.stringify(pageInfo)}\\nNext step: ${step}\\n\\nProvide Puppeteer code to execute this step.`",
      '    });',
      '',
      '    response = await anthropic.messages.create({',
      "      model: 'claude-sonnet-4-20250514',",
      '      max_tokens: 500,',
      '      messages: conversationHistory',
      '    });',
      '',
      '    const code = response.content[0].text.match(/```javascript\\n([\\s\\S]*?)\\n```/)?[1];',
      '',
      '    if (code) {',
      '      // Execute the generated code (in production, use proper sandboxing)',
      '      await eval(`(async () => { ${code} })()`);',
      '    }',
      '',
      '    conversationHistory.push({',
      "      role: 'assistant',",
      '      content: response.content[0].text',
      '    });',
      '',
      '    await page.waitForTimeout(1000);',
      '  }',
      '',
      '  await browser.close();',
      '',
      '  return { success: true, steps: plan.steps };',
      '}'
    ])
  }
];

const integrations: CodeExample[] = [
  {
    title: 'n8n Workflow Integration',
    description: 'Via Browser provides native n8n nodes for visual automation:',
    language: 'javascript',
    code: makeCode([
      '// n8n workflow example',
      '{',
      '  "nodes": [',
      '    {',
      '      "type": "ViaBrowser.Scrape",',
      '      "parameters": {',
      '        "url": "https://news.ycombinator.com",',
      '        "selector": ".athing",',
      '        "waitFor": "networkidle"',
      '      }',
      '    },',
      '    {',
      '      "type": "AI.Claude",',
      '      "parameters": {',
      '        "prompt": "Summarize these Hacker News posts"',
      '      }',
      '    }',
      '  ]',
      '}'
    ])
  },
  {
    title: 'Vercel AI SDK Integration',
    language: 'typescript',
    code: makeCode([
      "import { createAI } from 'ai';",
      "import { viaBrowserTool } from '@via-browser/ai-sdk';",
      '',
      'const ai = createAI({',
      '  tools: {',
      '    browser: viaBrowserTool({',
      '      token: process.env.VIA_BROWSER_TOKEN',
      '    })',
      '  }',
      '});',
      '',
      "// AI can now use browser autonomously",
      "const result = await ai.chat('Find the latest AI research papers and summarize them');"
    ])
  },
  {
    title: 'LangChain Integration',
    language: 'python',
    code: makeCode([
      'from langchain.tools import ViaBrowserTool',
      'from langchain.agents import initialize_agent',
      '',
      'browser_tool = ViaBrowserTool(',
      "    token=os.environ['VIA_BROWSER_TOKEN'],",
      "    base_url='https://viabrowserai.vercel.app'",
      ')',
      '',
      'agent = initialize_agent(',
      '    tools=[browser_tool],',
      '    llm=llm,',
      '    agent="zero-shot-react-description"',
      ')',
      '',
      'result = agent.run("Navigate to GitHub trending and extract top 5 repositories")'
    ])
  }
];

const useCases: string[] = [
  '<strong>Competitive Intelligence</strong>: Automated monitoring of competitor websites, pricing changes, and product launches.',
  '<strong>Data Enrichment</strong>: Enhance datasets by scraping additional information from web sources.',
  '<strong>Testing &amp; QA</strong>: Visual regression testing, end-to-end testing, and automated quality assurance.',
  '<strong>Content Generation</strong>: Screenshot websites for social media, generate PDFs from web content, create visual documentation.',
  '<strong>Lead Generation</strong>: Scrape business directories, extract contact information, and build prospect lists.',
  '<strong>Market Research</strong>: Gather product reviews, sentiment analysis from forums, and trend analysis.',
  '<strong>Monitoring &amp; Alerts</strong>: Track website changes, price monitoring, and availability alerts.'
];

const securitySnippets: CodeExample[] = [
  {
    title: 'Token Management',
    language: 'javascript',
    code: makeCode([
      '// Store tokens securely',
      'const token = process.env.VIA_BROWSER_TOKEN;',
      '',
      '// Use different tokens for different environments',
      'const tokens = {',
      '  development: process.env.VIA_DEV_TOKEN,',
      '  production: process.env.VIA_PROD_TOKEN',
      '};'
    ])
  },
  {
    title: 'Rate Limiting',
    description: 'Via Browser implements automatic rate limiting. Handle gracefully:',
    language: 'javascript',
    code: makeCode([
      'async function resilientRequest(fn, maxRetries = 3) {',
      '  for (let i = 0; i < maxRetries; i++) {',
      '    try {',
      '      return await fn();',
      '    } catch (error) {',
      "      if (error.message.includes('rate limit') && i < maxRetries - 1) {",
      '        await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));',
      '        continue;',
      '      }',
      '      throw error;',
      '    }',
      '  }',
      '}'
    ])
  },
  {
    title: 'Resource Cleanup',
    description: 'Always close browsers to prevent resource leaks:',
    language: 'javascript',
    code: makeCode([
      'let browser;',
      'try {',
      '  browser = await puppeteer.connect({',
      "    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'",
      '  });',
      '',
      '  // Your automation code',
      '',
      '} finally {',
      '  if (browser) {',
      '    await browser.close();',
      '  }',
      '}'
    ])
  }
];

const cdpCommandsSnippet: CodeExample = {
  title: 'Advanced CDP Commands',
  language: 'javascript',
  code: makeCode([
    'const cdp = await page.createCDPSession();',
    '',
    '// Get live session URL',
    "const { liveURL } = await cdp.send('ViaBrowser.getLiveURL', {",
    "  quality: 'high',",
    "  type: 'interact'",
    '});',
    '',
    '// Set session timeout',
    "await cdp.send('ViaBrowser.setSessionTimeout', {",
    '  timeout: 300000  // 5 minutes',
    '});',
    '',
    '// Get session stats',
    "const stats = await cdp.send('ViaBrowser.getSessionStats');",
    'console.log(stats);  // { memory, cpu, networkRequests, ... }',
    '',
    '// Inject custom extension',
    "await cdp.send('ViaBrowser.loadExtension', {",
    "  path: 'path/to/extension',",
    '  persistent: true',
    '});'
  ])
};

const resources = [
  {
    label: 'GitHub Repository',
    href: 'https://github.com/likhon29jan/via-browser'
  },
  {
    label: 'Live Platform',
    href: 'https://viabrowserai.vercel.app/'
  },
  {
    label: 'API Documentation',
    href: 'https://viabrowserai.vercel.app/docs'
  },
  {
    label: 'Discord Community',
    href: '#'
  },
  {
    label: 'Example Projects',
    href: 'https://github.com/likhon29jan/via-browser/tree/main/examples'
  }
];

const AgentsPage = () => {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-zinc-50">AI Agent Integration Guide for Via Browser</h1>

      <Section title="Overview" id="overview">
        <p>
          Via Browser is a powerful browser automation platform designed for AI agents, developers, and automation workflows.
          Built on Chrome DevTools Protocol (CDP) and supporting multiple browser engines, Via Browser provides the
          infrastructure needed for intelligent web automation at scale.
        </p>
      </Section>

      <Section title="🎯 Core Architecture & Service Models" id="service-models">
        <p>Via Browser offers multiple entry points for browser automation, each optimized for different use cases:</p>
        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/60">
          <table className="w-full text-left">
            <thead className="bg-zinc-900/80">
              <tr className="text-sm uppercase tracking-wide text-zinc-400">
                <th className="px-4 py-3 font-semibold">Service Model</th>
                <th className="px-4 py-3 font-semibold">Primary Use-Case</th>
                <th className="px-4 py-3 font-semibold">Key Differentiator</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-base text-zinc-200">
              {serviceModels.map(model => (
                <tr key={model.name}>
                  <td className="px-4 py-3 font-semibold text-zinc-100">{model.name}</td>
                  <td className="px-4 py-3">{model.useCase}</td>
                  <td className="px-4 py-3">{model.differentiator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="🔧 Key Features" id="key-features">
        <SubSection title="1. Hybrid Automation & Live Session Interactivity">
          <p>
            Via Browser enables a human-in-the-loop approach where automated scripts can be monitored and controlled in
            real-time:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Live View</strong>: Generate a live URL to watch browser sessions as they execute
            </li>
            <li>
              <strong>Real-time Interaction</strong>: Take control of sessions for debugging or handling CAPTCHAs
            </li>
            <li>
              <strong>Quality Control</strong>: Tune streaming quality with <code>quality</code> and <code>type</code>
              parameters
            </li>
          </ul>
          <p>
            <strong>Use Case</strong>: Perfect for debugging complex automations or scenarios requiring human intervention.
          </p>
        </SubSection>

        <SubSection title="2. Robust Session Management">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Connect & Reconnect</strong>: Pause and resume sessions maintaining full state
            </li>
            <li>
              <strong>Session Persistence</strong>: Keep sessions alive across multiple operations
            </li>
            <li>
              <strong>Resource Limits</strong>: Set time, memory, and capability constraints
            </li>
            <li>
              <strong>Kill Controls</strong>: Terminate sessions programmatically or automatically
            </li>
          </ul>
        </SubSection>

        <SubSection title="3. Chrome DevTools Protocol (CDP) API">
          <p>Foundation for advanced browser control:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Cross-Language Support</strong>: Works with any language that can send WebSocket messages
            </li>
            <li>
              <strong>Custom Commands</strong>: Extended CDP commands specific to Via Browser
            </li>
            <li>
              <strong>Event Streaming</strong>: Real-time events for monitoring automation progress
            </li>
            <li>
              <strong>Network Interception</strong>: Modify requests, responses, and inject custom logic
            </li>
          </ul>
        </SubSection>

        <SubSection title="4. Advanced Infrastructure">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Multi-Browser Support</strong>: Chromium, Chrome, Firefox, and WebKit
            </li>
            <li>
              <strong>Custom Extensions</strong>: Upload and run your own browser extensions
            </li>
            <li>
              <strong>Multiplexing</strong>: Route multiple sessions through shared resources while maintaining isolation
            </li>
            <li>
              <strong>Multi-Token Access Control</strong>: Team-friendly API key management
            </li>
            <li>
              <strong>Stealth Mode</strong>: Advanced bot detection evasion techniques
            </li>
          </ul>
        </SubSection>
      </Section>

      <Section title="💻 Technical Implementation" id="technical-implementation">
        <SubSection title="Quick Start: BaaS with Puppeteer/Playwright">
          <p>Connect via WebSocket for full programmatic control:</p>
          {technicalExamples.map(example => (
            <CodeBlock key={example.title} language={example.language}>
              {example.code}
            </CodeBlock>
          ))}
        </SubSection>
      </Section>

      <Section title="Live Session URL Generation" id="live-session-url">
        <p>Create interactive, shareable browser sessions:</p>
        <CodeBlock language={liveSessionSnippet.language}>{liveSessionSnippet.code}</CodeBlock>
      </Section>

      <Section title="REST API Examples" id="rest-api-examples">
        {restApiExamples.map(example => (
          <SubSection key={example.title} title={example.title}>
            <CodeBlock language={example.language}>{example.code}</CodeBlock>
          </SubSection>
        ))}
      </Section>

      <Section title="Stealth Mode Configuration" id="stealth-mode">
        <p>Enable advanced bot detection evasion:</p>
        <CodeBlock language="javascript">
          {`const browser = await puppeteer.connect({
  browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN&stealth=true'
});

// Or via REST API
const launchOptions = encodeURIComponent(JSON.stringify({
  stealth: true,
  blockAds: true,
  timezone: 'America/New_York'
}));

const url = `https://viabrowserai.vercel.app/screenshot?token=YOUR_TOKEN&launch=${launchOptions}`;`}
        </CodeBlock>
      </Section>

      <Section title="🤖 AI Agent Integration Patterns" id="ai-agent-patterns">
        <SubSection title="Pattern 1: Web Research Agent">
          <p>AI agents can orchestrate browsers to gather intelligence:</p>
          <CodeBlock language="javascript">
            {`import { Anthropic } from '@anthropic-ai/sdk';
import puppeteer from 'puppeteer-core';

async function researchAgent(topic) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
  });

  const page = await browser.newPage();

  // Navigate to search
  await page.goto(`https://www.google.com/search?q=${encodeURIComponent(topic)}`);

  // Extract search results
  const results = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.g')).slice(0, 5).map(el => ({
      title: el.querySelector('h3')?.textContent,
      snippet: el.querySelector('.VwiC3b')?.textContent,
      url: el.querySelector('a')?.href
    }));
  });

  // Let Claude analyze the results
  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: `Analyze these search results about "${topic}" and provide key insights:\n\n${JSON.stringify(results, null, 2)}`
    }]
  });

  await browser.close();

  return {
    searchResults: results,
    analysis: response.content[0].text
  };
}`}
          </CodeBlock>
        </SubSection>

        <SubSection title="Pattern 2: Visual Understanding Agent">
          <p>Combine screenshots with vision models:</p>
          <CodeBlock language="javascript">
            {`import Anthropic from '@anthropic-ai/sdk';

async function analyzeWebpage(url) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // Capture screenshot via REST API
  const response = await fetch(`https://viabrowserai.vercel.app/screenshot?token=YOUR_TOKEN`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: url,
      options: { type: 'png', fullPage: true }
    })
  });

  const imageBuffer = await response.arrayBuffer();
  const base64Image = Buffer.from(imageBuffer).toString('base64');

  // Analyze with Claude's vision capabilities
  const analysis = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1500,
    messages: [{
      role: 'user',
      content: [
        {
          type: 'image',
          source: {
            type: 'base64',
            media_type: 'image/png',
            data: base64Image
          }
        },
        {
          type: 'text',
          text: 'Analyze this webpage. What is the main purpose? Identify key UI elements and provide UX recommendations.'
        }
      ]
    }]
  });

  return analysis.content[0].text;
}`}
          </CodeBlock>
        </SubSection>

        <SubSection title="Pattern 3: Workflow Automation Agent">
          <p>Multi-step automation with decision-making:</p>
          <CodeBlock language="javascript">
            {`import { Anthropic } from '@anthropic-ai/sdk';
import puppeteer from 'puppeteer-core';

async function workflowAgent(task) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN&stealth=true'
  });

  const page = await browser.newPage();
  const conversationHistory = [];

  // Initial plan
  let response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    messages: [{
      role: 'user',
      content: `Create a step-by-step plan to: ${task}\n\nRespond with JSON:{"steps": ["step1", "step2", ...]}`
    }]
  });

  const plan = JSON.parse(response.content[0].text);

  // Execute each step
  for (const step of plan.steps) {
    console.log(`Executing: ${step}`);

    // Get current page state
    const pageInfo = await page.evaluate(() => ({
      url: window.location.href,
      title: document.title,
      forms: Array.from(document.querySelectorAll('form')).length,
      buttons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim())
    }));

    // Ask Claude what to do next
    conversationHistory.push({
      role: 'user',
      content: `Current page: ${JSON.stringify(pageInfo)}\nNext step: ${step}\n\nProvide Puppeteer code to execute this step.`
    });

    response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: conversationHistory
    });

    const code = response.content[0].text.match(/```javascript\n([\s\S]*?)\n```/)?[1];

    if (code) {
      // Execute the generated code (in production, use proper sandboxing)
      await eval(`(async () => { ${code} })()`);
    }

    conversationHistory.push({
      role: 'assistant',
      content: response.content[0].text
    });

    await page.waitForTimeout(1000);
  }

  await browser.close();

  return { success: true, steps: plan.steps };
}`}
          </CodeBlock>
        </SubSection>
      </Section>

      <Section title="🔌 Pre-built Integrations" id="prebuilt-integrations">
        <SubSection title="n8n Workflow Integration">
          <p>Via Browser provides native n8n nodes for visual automation:</p>
          <CodeBlock language="javascript">
            {`// n8n workflow example
{
  "nodes": [
    {
      "type": "ViaBrowser.Scrape",
      "parameters": {
        "url": "https://news.ycombinator.com",
        "selector": ".athing",
        "waitFor": "networkidle"
      }
    },
    {
      "type": "AI.Claude",
      "parameters": {
        "prompt": "Summarize these Hacker News posts"
      }
    }
  ]
}`}
          </CodeBlock>
        </SubSection>

        <SubSection title="Vercel AI SDK Integration">
          <CodeBlock language="typescript">
            {`import { createAI } from 'ai';
import { viaBrowserTool } from '@via-browser/ai-sdk';

const ai = createAI({
  tools: {
    browser: viaBrowserTool({
      token: process.env.VIA_BROWSER_TOKEN
    })
  }
});

// AI can now use browser autonomously
const result = await ai.chat('Find the latest AI research papers and summarize them');`}
          </CodeBlock>
        </SubSection>

        <SubSection title="LangChain Integration">
          <CodeBlock language="python">
            {`from langchain.tools import ViaBrowserTool
from langchain.agents import initialize_agent

browser_tool = ViaBrowserTool(
    token=os.environ['VIA_BROWSER_TOKEN'],
    base_url='https://viabrowserai.vercel.app'
)

agent = initialize_agent(
    tools=[browser_tool],
    llm=llm,
    agent="zero-shot-react-description"
)

result = agent.run("Navigate to GitHub trending and extract top 5 repositories")`}
          </CodeBlock>
        </SubSection>
      </Section>

      <Section title="📊 Use Cases" id="use-cases">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">1. <strong>Competitive Intelligence</strong></h3>
            <p>Automated monitoring of competitor websites, pricing changes, and product launches.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">2. <strong>Data Enrichment</strong></h3>
            <p>Enhance datasets by scraping additional information from web sources.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">3. <strong>Testing & QA</strong></h3>
            <p>Visual regression testing, end-to-end testing, and automated quality assurance.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">4. <strong>Content Generation</strong></h3>
            <p>Screenshot websites for social media, generate PDFs from web content, create visual documentation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">5. <strong>Lead Generation</strong></h3>
            <p>Scrape business directories, extract contact information, and build prospect lists.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">6. <strong>Market Research</strong></h3>
            <p>Gather product reviews, sentiment analysis from forums, and trend analysis.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">7. <strong>Monitoring & Alerts</strong></h3>
            <p>Track website changes, price monitoring, and availability alerts.</p>
          </div>
        </div>
      </Section>

      <Section title="🔐 Security & Best Practices" id="security-best-practices">
        <SubSection title="Token Management">
          <CodeBlock language="javascript">
            {`// Store tokens securely
const token = process.env.VIA_BROWSER_TOKEN;

// Use different tokens for different environments
const tokens = {
  development: process.env.VIA_DEV_TOKEN,
  production: process.env.VIA_PROD_TOKEN
};`}
          </CodeBlock>
        </SubSection>
        <SubSection title="Rate Limiting">
          <p>Via Browser implements automatic rate limiting. Handle gracefully:</p>
          <CodeBlock language="javascript">
            {`async function resilientRequest(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.message.includes('rate limit') && i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
        continue;
      }
      throw error;
    }
  }
}`}
          </CodeBlock>
        </SubSection>
        <SubSection title="Resource Cleanup">
          <p>Always close browsers to prevent resource leaks:</p>
          <CodeBlock language="javascript">
            {`let browser;
try {
  browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
  });

  // Your automation code

} finally {
  if (browser) {
    await browser.close();
  }
}`}
          </CodeBlock>
        </SubSection>
      </Section>

      <Section title="🚀 Advanced CDP Commands" id="advanced-cdp-commands">
        <p>Via Browser extends the standard CDP with custom commands:</p>
        <CodeBlock language={cdpCommandsSnippet.language}>{cdpCommandsSnippet.code}</CodeBlock>
      </Section>

      <Section title="📚 Additional Resources" id="additional-resources">
        <ul className="list-disc list-inside space-y-1">
          {resources.map(resource => (
            <li key={resource.label} className="text-zinc-200">
              <strong>{resource.label}</strong>:{' '}
              <a className="text-sky-400 underline" href={resource.href}>
                {resource.href}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="🤝 Contributing" id="contributing">
        <p>
          We welcome contributions! Check out our{' '}
          <a className="text-sky-400 underline" href="https://github.com/likhon29jan/via-browser/blob/main/CONTRIBUTING.md">
            Contributing Guide
          </a>{' '}
          to get started.
        </p>
      </Section>

      <Section title="📄 License" id="license">
        <p>
          Via Browser is licensed under the MIT License. See{' '}
          <a className="text-sky-400 underline" href="https://github.com/likhon29jan/via-browser/blob/main/LICENSE">
            LICENSE
          </a>{' '}
          for details.
        </p>
      </Section>

      <p className="mt-16 text-lg font-semibold text-zinc-100">
        Ready to build intelligent browser automation? Get started with Via Browser today and empower your AI agents with real
        browser capabilities.
      </p>
    </main>
  );
};

export default AgentsPage;
