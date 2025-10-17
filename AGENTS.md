# 🤖 AGENTS.MD - AI Agent Integration Guide for Via Browser

## Overview

Via Browser is a powerful browser automation platform designed for AI agents, developers, and automation workflows. Built on Chrome DevTools Protocol (CDP) and supporting multiple browser engines, Via Browser provides the infrastructure needed for intelligent web automation at scale.

## 🎯 Core Architecture & Service Models

Via Browser offers multiple entry points for browser automation, each optimized for different use cases:

| Service Model | Primary Use-Case | Key Differentiator |
|--------------|------------------|-------------------|
| **CDP-Based API** | Cross-language automation with low-level control | Direct Chrome DevTools Protocol access for maximum flexibility |
| **Browsers as a Service (BaaS)** | Running custom scripts with Playwright/Puppeteer | Local development experience in the cloud |
| **REST APIs** | Simple tasks (PDFs, screenshots, scraping) | Stateless HTTP requests for quick integrations |
| **AI Agent SDK** | Intelligent automation with LLM integration | Built-in context management and decision-making |

## 🔧 Key Features

### 1. Hybrid Automation & Live Session Interactivity

Via Browser enables a human-in-the-loop approach where automated scripts can be monitored and controlled in real-time:

- **Live View**: Generate a live URL to watch browser sessions as they execute
- **Real-time Interaction**: Take control of sessions for debugging or handling CAPTCHAs
- **Quality Control**: Tune streaming quality with `quality` and `type` parameters

**Use Case**: Perfect for debugging complex automations or scenarios requiring human intervention.

### 2. Robust Session Management

Fine-grained control over browser lifecycle and state:

- **Connect & Reconnect**: Pause and resume sessions maintaining full state
- **Session Persistence**: Keep sessions alive across multiple operations
- **Resource Limits**: Set time, memory, and capability constraints
- **Kill Controls**: Terminate sessions programmatically or automatically

### 3. Chrome DevTools Protocol (CDP) API

Foundation for advanced browser control:

- **Cross-Language Support**: Works with any language that can send WebSocket messages
- **Custom Commands**: Extended CDP commands specific to Via Browser
- **Event Streaming**: Real-time events for monitoring automation progress
- **Network Interception**: Modify requests, responses, and inject custom logic

### 4. Advanced Infrastructure

- **Multi-Browser Support**: Chromium, Chrome, Firefox, and WebKit
- **Custom Extensions**: Upload and run your own browser extensions
- **Multiplexing**: Route multiple sessions through shared resources while maintaining isolation
- **Multi-Token Access Control**: Team-friendly API key management
- **Stealth Mode**: Advanced bot detection evasion techniques

## 💻 Technical Implementation

### Quick Start: BaaS with Puppeteer/Playwright

Connect via WebSocket for full programmatic control:

```javascript
// Puppeteer (Chromium)
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.connect({
  browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
});

const page = await browser.newPage();
await page.goto('https://example.com');
const content = await page.content();
await browser.close();
```

```javascript
// Playwright (Firefox)
import { firefox } from 'playwright';

const browser = await firefox.connect(
  'wss://viabrowserai.vercel.app/firefox?token=YOUR_TOKEN'
);

const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://example.com');
await browser.close();
```

```javascript
// Playwright (WebKit)
import { webkit } from 'playwright';

const browser = await webkit.connect(
  'wss://viabrowserai.vercel.app/webkit?token=YOUR_TOKEN'
);
```

### Live Session URL Generation

Create interactive, shareable browser sessions:

```javascript
import puppeteer from 'puppeteer-core';

async function createLiveSession() {
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
  });
  
  const page = await browser.newPage();
  const cdp = await page.createCDPSession();

  await page.goto('https://example.com');

  // Generate live URL for human monitoring
  const { liveURL } = await cdp.send('ViaBrowser.getLiveURL', {
    quality: 'high',  // Options: 'low', 'medium', 'high'
    type: 'view'      // Options: 'view', 'interact'
  });

  console.log('Watch live at:', liveURL);
  
  // Continue automation while session is observable
  await page.type('#search', 'AI automation');
  
  return liveURL;
}
```

### REST API Examples

#### Generate PDF

```bash
curl -X POST "https://viabrowserai.vercel.app/pdf?token=YOUR_TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{
    "url": "https://example.com",
    "options": {
      "format": "A4",
      "printBackground": true,
      "margin": {
        "top": "1cm",
        "bottom": "1cm"
      }
    }
  }' \
  -o output.pdf
```

#### Capture Screenshot

```bash
curl -X POST "https://viabrowserai.vercel.app/screenshot?token=YOUR_TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{
    "url": "https://example.com",
    "options": {
      "type": "png",
      "fullPage": true,
      "quality": 90
    }
  }' \
  -o screenshot.png
```

#### Web Scraping

```bash
curl -X POST "https://viabrowserai.vercel.app/content?token=YOUR_TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{
    "url": "https://example.com",
    "waitFor": "networkidle",
    "selector": "article"
  }'
```

### Stealth Mode Configuration

Enable advanced bot detection evasion:

```javascript
const browser = await puppeteer.connect({
  browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN&stealth=true'
});

// Or via REST API
const launchOptions = encodeURIComponent(JSON.stringify({
  stealth: true,
  blockAds: true,
  timezone: 'America/New_York'
}));

const url = `https://viabrowserai.vercel.app/screenshot?token=YOUR_TOKEN&launch=${launchOptions}`;
```

## 🤖 AI Agent Integration Patterns

### Pattern 1: Web Research Agent

AI agents can orchestrate browsers to gather intelligence:

```javascript
import { Anthropic } from '@anthropic-ai/sdk';
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
}
```

### Pattern 2: Visual Understanding Agent

Combine screenshots with vision models:

```javascript
import Anthropic from '@anthropic-ai/sdk';

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
}
```

### Pattern 3: Workflow Automation Agent

Multi-step automation with decision-making:

```javascript
import { Anthropic } from '@anthropic-ai/sdk';
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
      content: `Create a step-by-step plan to: ${task}\n\nRespond with JSON: {"steps": ["step1", "step2", ...]}`
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
    
    const code = response.content[0].text.match(/```javascript\n([\s\S]*?)\n```/)?.[1];
    
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
}
```

## 🔌 Pre-built Integrations

### n8n Workflow Integration

Via Browser provides native n8n nodes for visual automation:

```javascript
// n8n workflow example
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
}
```

### Vercel AI SDK Integration

```typescript
import { createAI } from 'ai';
import { viaBrowserTool } from '@via-browser/ai-sdk';

const ai = createAI({
  tools: {
    browser: viaBrowserTool({
      token: process.env.VIA_BROWSER_TOKEN
    })
  }
});

// AI can now use browser autonomously
const result = await ai.chat('Find the latest AI research papers and summarize them');
```

### LangChain Integration

```python
from langchain.tools import ViaBrowserTool
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

result = agent.run("Navigate to GitHub trending and extract top 5 repositories")
```

## 📊 Use Cases

### 1. **Competitive Intelligence**
Automated monitoring of competitor websites, pricing changes, and product launches.

### 2. **Data Enrichment**
Enhance datasets by scraping additional information from web sources.

### 3. **Testing & QA**
Visual regression testing, end-to-end testing, and automated quality assurance.

### 4. **Content Generation**
Screenshot websites for social media, generate PDFs from web content, create visual documentation.

### 5. **Lead Generation**
Scrape business directories, extract contact information, and build prospect lists.

### 6. **Market Research**
Gather product reviews, sentiment analysis from forums, and trend analysis.

### 7. **Monitoring & Alerts**
Track website changes, price monitoring, and availability alerts.

## 🔐 Security & Best Practices

### Token Management

```javascript
// Store tokens securely
const token = process.env.VIA_BROWSER_TOKEN;

// Use different tokens for different environments
const tokens = {
  development: process.env.VIA_DEV_TOKEN,
  production: process.env.VIA_PROD_TOKEN
};
```

### Rate Limiting

Via Browser implements automatic rate limiting. Handle gracefully:

```javascript
async function resilientRequest(fn, maxRetries = 3) {
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
}
```

### Resource Cleanup

Always close browsers to prevent resource leaks:

```javascript
let browser;
try {
  browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
  });
  
  // Your automation code
  
} finally {
  if (browser) {
    await browser.close();
  }
}
```

## 🚀 Advanced CDP Commands

Via Browser extends the standard CDP with custom commands:

```javascript
const cdp = await page.createCDPSession();

// Get live session URL
const { liveURL } = await cdp.send('ViaBrowser.getLiveURL', {
  quality: 'high',
  type: 'interact'
});

// Set session timeout
await cdp.send('ViaBrowser.setSessionTimeout', {
  timeout: 300000  // 5 minutes
});

// Get session stats
const stats = await cdp.send('ViaBrowser.getSessionStats');
console.log(stats);  // { memory, cpu, networkRequests, ... }

// Inject custom extension
await cdp.send('ViaBrowser.loadExtension', {
  path: 'path/to/extension',
  persistent: true
});
```

## 📚 Additional Resources

- **GitHub Repository**: https://github.com/likhon29jan/via-browser
- **Live Platform**: https://viabrowserai.vercel.app/
- **API Documentation**: https://viabrowserai.vercel.app/docs
- **Discord Community**: [Join our community](#)
- **Example Projects**: https://github.com/likhon29jan/via-browser/tree/main/examples

## 🤝 Contributing

We welcome contributions! Check out our [Contributing Guide](https://github.com/likhon29jan/via-browser/blob/main/CONTRIBUTING.md) to get started.

## 📄 License

Via Browser is licensed under the MIT License. See [LICENSE](https://github.com/likhon29jan/via-browser/blob/main/LICENSE) for details.

---

**Ready to build intelligent browser automation?** Get started with Via Browser today and empower your AI agents with real browser capabilities.
