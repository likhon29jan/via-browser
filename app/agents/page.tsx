import React from 'react';

const AgentsPage = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">AI Agent Integration Guide for Via Browser</h1>
      <div className="prose lg:prose-xl">
        <h2 className="text-2xl font-bold mt-8 mb-4">Overview</h2>
        <p>
          Via Browser is a powerful browser automation platform designed for AI agents, developers, and automation workflows. Built on Chrome DevTools Protocol (CDP) and supporting multiple browser engines, Via Browser provides the infrastructure needed for intelligent web automation at scale.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">🎯 Core Architecture & Service Models</h2>
        <p>Via Browser offers multiple entry points for browser automation, each optimized for different use cases:</p>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 py-2">Service Model</th>
              <th className="border-b-2 py-2">Primary Use-Case</th>
              <th className="border-b-2 py-2">Key Differentiator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2"><strong>CDP-Based API</strong></td>
              <td className="border-b py-2">Cross-language automation with low-level control</td>
              <td className="border-b py-2">Direct Chrome DevTools Protocol access for maximum flexibility</td>
            </tr>
            <tr>
              <td className="border-b py-2"><strong>Browsers as a Service (BaaS)</strong></td>
              <td className="border-b py-2">Running custom scripts with Playwright/Puppeteer</td>
              <td className="border-b py-2">Local development experience in the cloud</td>
            </tr>
            <tr>
              <td className="border-b py-2"><strong>REST APIs</strong></td>
              <td className="border-b py-2">Simple tasks (PDFs, screenshots, scraping)</td>
              <td className="border-b py-2">Stateless HTTP requests for quick integrations</td>
            </tr>
            <tr>
              <td className="border-b py-2"><strong>AI Agent SDK</strong></td>
              <td className="border-b py-2">Intelligent automation with LLM integration</td>
              <td className="border-b py-2">Built-in context management and decision-making</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-bold mt-8 mb-4">🔧 Key Features</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">1. Hybrid Automation & Live Session Interactivity</h3>
        <p>Via Browser enables a human-in-the-loop approach where automated scripts can be monitored and controlled in real-time:</p>
        <ul className="list-disc list-inside">
          <li><strong>Live View</strong>: Generate a live URL to watch browser sessions as they execute</li>
          <li><strong>Real-time Interaction</strong>: Take control of sessions for debugging or handling CAPTCHAs</li>
          <li><strong>Quality Control</strong>: Tune streaming quality with <code>quality</code> and <code>type</code> parameters</li>
        </ul>
        <p><strong>Use Case</strong>: Perfect for debugging complex automations or scenarios requiring human intervention.</p>

        <h3 className="text-xl font-bold mt-4 mb-2">2. Robust Session Management</h3>
        <ul className="list-disc list-inside">
          <li><strong>Connect & Reconnect</strong>: Pause and resume sessions maintaining full state</li>
          <li><strong>Session Persistence</strong>: Keep sessions alive across multiple operations</li>
          <li><strong>Resource Limits</strong>: Set time, memory, and capability constraints</li>
          <li><strong>Kill Controls</strong>: Terminate sessions programmatically or automatically</li>
        </ul>
      </div>
    </div>
  );
};

export default AgentsPage;