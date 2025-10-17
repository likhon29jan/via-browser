# Via Browser 🚀

<div align="center">

![Via Browser](public/via-browser-apk-mod.png)

**Fast, Simple, and Secure Browser Automation**

[![GitHub](https://img.shields.io/badge/GitHub-likhon29jan%2Fvia--browser-blue?style=flat&logo=github)](https://github.com/likhon29jan/via-browser)
[![Website](https://img.shields.io/badge/Website-viabrowserai.vercel.app-green?style=flat&logo=vercel)](https://viabrowserai.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Empower your AI agents with real browser capabilities**

[Get Started](#-quick-start) • [Features](#-features) • [Documentation](#-documentation) • [Examples](#-examples) • [AI Agents](AGENTS.md)

</div>

---

## 🌟 Why Via Browser?

### ⚡ Fast and Efficient
Get the speed you deserve. Our efficiency-first design ensures a fast and enjoyable browsing experience—no waiting required. Built for developers and AI agents who demand performance.

### 🎯 Minimalism
In a world saturated with information, we believe browsing should be simple and efficient. As Mies van der Rohe said, *"Less is more."* Via Browser strips away complexity while delivering powerful automation.

### 🔒 Privacy Protection
Reclaim your online space. Enjoy powerful ad blocking, tracker prevention, and third-party cookie disabling—all designed to protect your privacy and put you in control.

### 🎨 Unlimited Possibilities
Unleash the full potential of the web. Via Browser empowers you with:
- 🚫 Advanced ad blocking
- 📜 Custom script support
- 🏠 Homepage customization
- ⚙️ Granular website settings
- 🤖 AI agent integration
- 🌐 Multi-browser support (Chrome, Firefox, WebKit)

![Via Browser Features](public/via-browser-fast-light-geek-best-choice-1.jpg)

---

## 🚀 Quick Start

### Installation

```bash
# Install via npm
npm install via-browser

# Or using yarn
yarn add via-browser

# Or using pnpm
pnpm add via-browser
```

### Your First Automation

```javascript
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.connect({
  browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
});

const page = await browser.newPage();
await page.goto('https://example.com');

const title = await page.title();
console.log('Page title:', title);

await browser.close();
```

**That's it!** Simple, powerful, and ready for production.

---

## ✨ Features

### 🎭 Multiple Browser Engines
- **Chromium** - Fast and modern
- **Firefox** - Privacy-focused
- **WebKit** - Apple ecosystem compatibility

### 🔌 Flexible APIs
- **WebSocket API** - Real-time browser control with Puppeteer/Playwright
- **REST API** - Simple HTTP endpoints for screenshots, PDFs, and scraping
- **CDP API** - Low-level Chrome DevTools Protocol access

### 🤖 AI-Ready
- Native integration with Claude, GPT, and other LLMs
- Pre-built patterns for research, scraping, and automation
- Vision API support for visual understanding
- Context management for multi-step workflows

### 🛡️ Enterprise Features
- **Session Management** - Pause, resume, and persist browser sessions
- **Stealth Mode** - Advanced bot detection evasion
- **Custom Extensions** - Load your own browser extensions
- **Resource Limits** - Control memory, CPU, and timeout constraints
- **Multi-Token Access** - Team-friendly API key management

---

## 📖 Documentation

### Core Concepts

**Browser as a Service (BaaS)**
Connect your favorite automation library to our cloud browsers:

```javascript
// Puppeteer
const browser = await puppeteer.connect({
  browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
});

// Playwright
const browser = await playwright.chromium.connect(
  'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
);
```

**REST API**
Simple HTTP requests for common tasks:

```bash
# Take a screenshot
curl -X POST "https://viabrowserai.vercel.app/screenshot?token=YOUR_TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{"url": "https://example.com"}' \
  -o screenshot.png

# Generate PDF
curl -X POST "https://viabrowserai.vercel.app/pdf?token=YOUR_TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{"url": "https://example.com"}' \
  -o document.pdf
```

**CDP API**
Advanced control with Chrome DevTools Protocol:

```javascript
const cdp = await page.createCDPSession();

// Get live session URL
const { liveURL } = await cdp.send('ViaBrowser.getLiveURL', {
  quality: 'high',
  type: 'interact'
});

console.log('Watch live:', liveURL);
```

---

## 🎯 Examples

### Screenshot Automation

```javascript
import puppeteer from 'puppeteer-core';

async function captureScreenshot(url) {
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
  });
  
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  
  await browser.close();
}

captureScreenshot('https://example.com');
```

### Web Scraping

```javascript
async function scrapeData(url) {
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN&stealth=true'
  });
  
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  const data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('h2')).map(h => h.textContent);
  });
  
  await browser.close();
  return data;
}
```

### AI-Powered Automation

```javascript
import { Anthropic } from '@anthropic-ai/sdk';
import puppeteer from 'puppeteer-core';

async function aiResearch(topic) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
  });
  
  const page = await browser.newPage();
  await page.goto(`https://www.google.com/search?q=${encodeURIComponent(topic)}`);
  
  const results = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.g')).slice(0, 5).map(el => ({
      title: el.querySelector('h3')?.textContent,
      snippet: el.querySelector('.VwiC3b')?.textContent
    }));
  });
  
  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    messages: [{
      role: 'user',
      content: `Summarize these search results about ${topic}: ${JSON.stringify(results)}`
    }]
  });
  
  await browser.close();
  return response.content[0].text;
}
```

**More examples:** [View all examples →](https://github.com/likhon29jan/via-browser/tree/main/examples)

---

## 🤖 AI Agent Integration

Via Browser is built for AI agents. Check out our comprehensive [AI Agents Guide](AGENTS.md) for:

- 🔍 Web research agents
- 👁️ Visual understanding with vision models
- 🔄 Multi-step workflow automation
- 🔌 Pre-built integrations (n8n, LangChain, Vercel AI SDK)
- 📊 Real-world use cases and patterns

**[Read the AI Agents Guide →](AGENTS.md)**

---

## 🛠️ Use Cases

| Use Case | Description |
|----------|-------------|
| 🕵️ **Competitive Intelligence** | Monitor competitor websites, pricing, and product launches |
| 📊 **Data Enrichment** | Enhance datasets with web-scraped information |
| ✅ **Testing & QA** | Visual regression testing and E2E automation |
| 📸 **Content Generation** | Screenshots for social media, PDF reports, documentation |
| 🎯 **Lead Generation** | Extract contacts from directories and business listings |
| 📈 **Market Research** | Gather reviews, sentiment, and trend analysis |
| 🔔 **Monitoring & Alerts** | Track changes, prices, and availability |
| 🤖 **AI Automation** | Power LLM agents with real browser capabilities |

---

## 🔐 Security & Best Practices

### Environment Variables

```bash
# .env
VIA_BROWSER_TOKEN=your_token_here
VIA_BROWSER_DEV_TOKEN=dev_token_here
VIA_BROWSER_PROD_TOKEN=prod_token_here
```

### Resource Cleanup

```javascript
let browser;
try {
  browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'
  });
  
  // Your automation
  
} finally {
  if (browser) await browser.close();
}
```

### Rate Limiting

```javascript
async function withRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.message.includes('rate limit') && i < maxRetries - 1) {
        await new Promise(r => setTimeout(r, 2000 * (i + 1)));
        continue;
      }
      throw error;
    }
  }
}
```

---

## 🌐 API Reference

### REST Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/screenshot` | POST | Capture webpage screenshots |
| `/pdf` | POST | Generate PDF documents |
| `/content` | POST | Extract page content |
| `/scrape` | POST | Scrape structured data |

### WebSocket Endpoints

| Endpoint | Browser | Library |
|----------|---------|---------|
| `/chromium` | Chrome | Puppeteer/Playwright |
| `/firefox` | Firefox | Playwright |
| `/webkit` | WebKit | Playwright |

**[Full API Documentation →](https://viabrowserai.vercel.app/docs)**

---

## 🤝 Contributing

We welcome contributions! Whether it's:

- 🐛 Bug reports
- 💡 Feature requests
- 📝 Documentation improvements
- 🔧 Code contributions

**[Read Contributing Guide →](CONTRIBUTING.md)**

---

## 📚 Resources

- 📖 **Documentation**: [https://viabrowserai.vercel.app/docs](https://viabrowserai.vercel.app/docs)
- 🤖 **AI Agents Guide**: [AGENTS.md](AGENTS.md)
- 💬 **Discord Community**: [Join us](#)
- 📧 **Email**: support@viabrowser.io
- 🐙 **GitHub**: [likhon29jan/via-browser](https://github.com/likhon29jan/via-browser)

---

## 📄 License

Via Browser is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## ⭐ Show Your Support

If Via Browser helps your project, please consider:

- ⭐ Starring the repo
- 🐦 Sharing on social media
- 📝 Writing about your experience
- 🤝 Contributing to the project

---

<div align="center">

**Ready to build intelligent browser automation?**

[Get Started](https://viabrowserai.vercel.app/) • [View Documentation](https://viabrowserai.vercel.app/docs) • [AI Agents Guide](AGENTS.md)

Made with ❤️ by the Via Browser team

</div>
