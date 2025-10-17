import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Via Browser</div>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#quick-start" className="hover:underline">Quick Start</a>
          <a href="#documentation" className="hover:underline">Documentation</a>
          <a href="https://github.com/likhon29jan/via-browser" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">A web browser for your AI</h1>
        <p className="text-xl mb-8">Via Browser powers web browsing capabilities for AI agents and applications.</p>
        <div className="space-x-4">
          <a href="#quick-start" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">Get Started</a>
          <a href="/" className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">Visit Website</a>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Via Browser?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">⚡ Fast and Efficient</h3>
              <p>Get the speed you deserve. Our efficiency-first design ensures a fast and enjoyable browsing experience—no waiting required.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">🎯 Minimalism</h3>
              <p>In a world saturated with information, we believe browsing should be simple and efficient. *"Less is more."*</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">🔒 Privacy Protection</h3>
              <p>Reclaim your online space. Enjoy powerful ad blocking, tracker prevention, and third-party cookie disabling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Quick Start</h2>
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">Install via npm, yarn, or pnpm:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg mb-8">
              <code>
                # Install via npm<br/>
                npm install via-browser<br/><br/>
                # Or using yarn<br/>
                yarn add via-browser<br/><br/>
                # Or using pnpm<br/>
                pnpm add via-browser
              </code>
            </pre>
            <p className="mb-4">Your first automation:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg">
              <code>
                import puppeteer from 'puppeteer-core';<br/><br/>

                const browser = await puppeteer.connect(&#123;<br/>
                &nbsp;&nbsp;browserWSEndpoint: 'wss://viabrowserai.vercel.app/chromium?token=YOUR_TOKEN'<br/>
                &#125;);<br/><br/>

                const page = await browser.newPage();<br/>
                await page.goto('https://example.com');<br/><br/>

                const title = await page.title();<br/>
                console.log('Page title:', title);<br/><br/>

                await browser.close();
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">📖 Documentation</h2>
          <p className="mb-8">Explore our comprehensive documentation to get the most out of Via Browser.</p>
          <a href="https://viabrowserai.vercel.app/docs" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">Read the Docs</a>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">🤖 AI Agent Integration</h2>
          <p className="mb-8">Via Browser is built for AI agents. Check out our comprehensive guide for patterns, integrations, and use cases.</p>
          <a href="/agents" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">AI Agents Guide</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Via Browser. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://github.com/likhon29jan/via-browser" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="/" className="hover:underline">Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
}