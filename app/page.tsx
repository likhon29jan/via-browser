import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">Via Browser</div>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#quick-start" className="hover:underline">
            Quick Start
          </a>
          <a href="#documentation" className="hover:underline">
            Documentation
          </a>
          <a
            href="https://github.com/likhon29jan/via-browser"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 text-center">
        <h1 className="mb-4 text-5xl font-bold">Via Browser</h1>
        <p className="mb-8 text-xl">
          Fast, Simple, and Secure Browser Automation
        </p>
        <div className="space-x-4">
          <a
            href="#quick-start"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Get Started
          </a>
          <Link
            href="/"
            className="rounded-full border border-gray-400 px-6 py-3 font-semibold hover:bg-gray-100"
          >
            Visit Website
          </Link>
        </div>
      </main>

      {/* New URL Section */}
      <section id="live-scrape" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Scrape and Automate Any Site
          </h2>
          <div className="mx-auto max-w-2xl">
            <div className="flex rounded-lg border border-gray-300">
              <input
                type="text"
                placeholder="Enter a URL to scrape or automate"
                className="w-full rounded-l-lg p-4"
              />
              <button className="rounded-r-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                Start
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Via Browser?
          </h2>
          <div className="grid gap-12 md:grid-cols-4">
            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold">
                Get past CAPTCHAs and bot detectors with BrowserQL
              </h3>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold">
                Scale your 1st party automations with our Browsers as a Service
              </h3>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold">
                Enterprise grade self-hosted or private deployment options
              </h3>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold">
                Run browser scraping with the full power of Puppeteer and
                Playwright
              </h3>
              <p>
                Unlike many scraping tools, you can also use the standard
                Puppeteer and Playwright libraries to run any script for browser
                scraping. You can click buttons, navigate dynamic content or
                anything else. Just host the scripts in your servers and connect
                them to our browsers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            🚀 Quick Start
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="mb-4">Install via npm, yarn, or pnpm:</p>
            <pre className="mb-8 rounded-lg bg-gray-800 p-4 text-white">
              <code>
                # Install via npm
                <br />
                npm install via-browser
                <br />
                <br />
                # Or using yarn
                <br />
                yarn add via-browser
                <br />
                <br />
                # Or using pnpm
                <br />
                pnpm add via-browser
              </code>
            </pre>
            <p className="mb-4">Your first automation:</p>
            <pre className="rounded-lg bg-gray-800 p-4 text-white">
              <code>
                import puppeteer from &apos;puppeteer-core&apos;;
                <br />
                <br />
                const browser = await puppeteer.connect(&#123;
                <br />
                &nbsp;&nbsp;browserWSEndpoint:
                &apos;wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN&apos;
                <br />
                &#125;);
                <br />
                <br />
                const page = await browser.newPage();
                <br />
                await page.goto(&apos;https://example.com&apos;);
                <br />
                <br />
                const title = await page.title();
                <br />
                console.log(&apos;Page title:&apos;, title);
                <br />
                <br />
                await browser.close();
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold">📖 Documentation</h2>
          <p className="mb-8">
            Explore our comprehensive documentation to get the most out of Via
            Browser.
          </p>
          <a
            href="https://viabrowserai.vercel.app/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Read the Docs
          </a>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold">🤖 AI Agent Integration</h2>
          <p className="mb-8">
            Via Browser is built for AI agents. Check out our comprehensive
            guide for patterns, integrations, and use cases.
          </p>
          <Link
            href="/agents"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            AI Agents Guide
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-10 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Via Browser. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a
              href="https://github.com/likhon29jan/via-browser"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <Link href="/" className="hover:underline">
              Website
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
