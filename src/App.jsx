import { useState } from 'react'
import './App.css'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Connect', href: '#connect' },
]

const SKILLS = [
  {
    title: 'AI & Agent Tooling',
    tags: ['Anthropic Claude API', 'Model Context Protocol', 'Claude Code', 'Multi-Agent Workflows', 'Pinecone', 'Vector Embeddings'],
  },
  {
    title: 'Cloud & Data',
    tags: ['Snowflake', 'Databricks', 'Azure', 'dbt', 'Data Vault 2.0', 'FastAPI'],
  },
  {
    title: 'Languages',
    tags: ['Python', 'TypeScript', 'SQL', 'C#'],
  },
  {
    title: 'Visualization',
    tags: ['Power BI', 'Sigma', 'Streamlit'],
  },
]

const PROJECTS = [
  {
    title: 'AI Swim Coach',
    description: 'Full-stack AI app using Claude Vision API to analyze swimming technique from video. Multi-frame analysis, conversational coaching, and rate limiting.',
    tech: ['React/Vite', 'FastAPI', 'Claude Vision API', 'Snowflake', 'Cloudflare Pages', 'Fly.io'],
    links: [
      { label: 'Live App', href: 'https://ai-swim-coach.pages.dev' },
      { label: 'Medium Article', href: 'https://medium.com/@paul.ccarson/building-an-ai-powered-video-coaching-app-a-technical-deep-dive-4424779ba053?sk=a8a105b5778700a818af82478868db8a' },
    ],
  },
  {
    title: 'PrivacyGuardMCP',
    description: 'One of the first production MCP servers — AI-powered data broker scanning and removal. 50+ data broker sources with free scan available.',
    tech: ['Cloudflare Workers', 'TypeScript', 'Claude API', 'Stripe', 'Clerk Auth', 'MCP'],
    links: [
      { label: 'Try Free Scan', href: 'https://privacyguardmcp.com/scan' },
      { label: 'Medium Article', href: 'https://medium.com/@paul.ccarson/building-a-privacy-first-ai-platform-with-claude-mcp-c6a9b8216ae4?sk=51a53fb4ae00970d486ba5ee4c4a0f08' },
    ],
  },
  {
    title: 'LLM-Driven Analytics — USAID',
    description: 'Cortex Analyst + Snowflake for conversational NLP queries on global health supply chain data. Public Streamlit demo.',
    tech: ['Snowflake Cortex Analyst', 'Streamlit', 'NLP', 'Supply Chain Data'],
    links: [
      { label: 'Medium Article', href: 'https://medium.com/@paul.ccarson/building-an-ai-powered-business-intelligence-dashboard-with-snowflake-cortex-nlp-and-streamlit-1ed64937644e?sk=6019434d628f83bbd0485c108550c12a' },
      { label: 'Live Demo', href: 'https://paulliec-usaid-shipment-data-usaid-q8on5x.streamlit.app/' },
    ],
  },
  {
    title: 'Sentiment Analysis — Google Reviews',
    description: 'End-to-end NLP pipeline ingesting Google Places API review data into Snowflake via Azure Functions. VADER sentiment scoring plus unstructured data analysis to surface market insights by business category and location.',
    tech: ['Python', 'Azure Functions', 'Snowflake', 'NLP', 'VADER', 'Streamlit'],
    links: [
      { label: 'Medium Article', href: 'https://medium.com/python-in-plain-english/step-by-step-sentiment-analysis-unveiling-market-mood-to-uncover-business-insights-c13bb3d63aa2?sk=acc5e4ab52df81ab9464bf668d5cec73' },
    ],
  },
]

const ARTICLES = [
  { title: 'When \'Analyze This Video\' Stopped Being One API Call: Swim Coach App Follow-Up', href: 'https://medium.com/@paul.ccarson/when-analyze-this-video-stopped-being-one-api-call-swim-coach-app-follow-up-bff1f42cb258?sk=e54149135f95170033cef253adada8c7' },
  { title: 'Building an AI-Powered Video Coaching App: A Technical Deep Dive', href: 'https://medium.com/@paul.ccarson/building-an-ai-powered-video-coaching-app-a-technical-deep-dive-4424779ba053?sk=a8a105b5778700a818af82478868db8a' },
  { title: 'Building a Privacy-First AI Platform with Claude MCP', href: 'https://medium.com/@paul.ccarson/building-a-privacy-first-ai-platform-with-claude-mcp-c6a9b8216ae4?sk=51a53fb4ae00970d486ba5ee4c4a0f08' },
  { title: 'Building an AI-Powered Business Intelligence Dashboard with Snowflake Cortex, NLP and Streamlit', href: 'https://medium.com/@paul.ccarson/building-an-ai-powered-business-intelligence-dashboard-with-snowflake-cortex-nlp-and-streamlit-1ed64937644e?sk=6019434d628f83bbd0485c108550c12a' },
  { title: 'Step-by-Step Guide: Automating Google Reviews ETL with Azure Functions', href: 'https://medium.com/towardsdev/step-by-step-guide-automating-google-reviews-etl-with-azure-functions-f09cac27e32b?sk=110e9a1285112f4a28f02cdf38df5591' },
  { title: 'Making Unstructured Data Work for You: Insights from Google Reviews with NLP', href: 'https://medium.com/@paul.ccarson/making-unstructured-data-work-for-you-insights-from-google-reviews-with-nlp-767d3fccb1f3?sk=a7b223242bdcb8bb5cc7959a5ec047b0' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">Paul Carson</a>
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Paul Carson
            </h1>
            <p className="hero-subtitle">AI Engineer & Senior Data Engineer</p>
            <p className="hero-tagline">
              Building production AI systems, data pipelines, and agentic tools
              at the intersection of enterprise data infrastructure and modern AI.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#connect" className="btn btn-outline">Connect</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <p>
              10+ years building cloud data platforms, pipelines, and analytics
              solutions across financial services, federal contracting (global health supply chain distribution), and aviation.
              Currently focused on AI/ML engineering, agentic workflow development,
              and production LLM systems. Principal consultant at Data Dogs Consulting.
            </p>
            <p>
              I learned to swim as an adult and now compete on a masters swim team — I
              approach both training and engineering the same way: analytically, with
              attention to technique and a belief that fundamentals compound over time.
            </p>
            <div className="credentials">
              <span className="credential-tag">MBA</span>
              <span className="credential-tag">Azure Data Engineer</span>
              <span className="credential-tag">Lean Six Sigma Black Belt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title">Core Skills</h2>
          <div className="skills-grid">
            {SKILLS.map(skill => (
              <div key={skill.title} className="skill-card">
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.tags.map(tag => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map(project => (
              <div key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map(link => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing">
        <div className="container">
          <h2 className="section-title">Writing</h2>
          <div className="articles-list">
            {ARTICLES.map(article => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="article-card"
              >
                <span className="article-title">{article.title}</span>
                <span className="article-link">Read on Medium →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section id="connect">
        <div className="container">
          <h2 className="section-title">Connect</h2>
          <div className="connect-grid">
            <a
              href="https://linkedin.com/in/paul-carson"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
            >
              <svg className="connect-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://medium.com/@paul.ccarson"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
            >
              <svg className="connect-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              Medium
            </a>
            <a href="mailto:paul@paulcarsonmba.com" className="connect-link">
              <svg className="connect-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          &copy; {new Date().getFullYear()} Paul Carson. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
