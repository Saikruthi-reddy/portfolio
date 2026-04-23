import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Task Management Web App',
    category: 'Web Dev',
    period: 'Sep 2025 – Dec 2025',
    description: 'A responsive task management web application with multiple views, CRUD functionality, drag-and-drop scheduling, and calendar-based tracking.',
    highlights: [
      'Responsive UI with multiple task views (list, board, calendar)',
      'Full CRUD with filtering, drag-and-drop scheduling',
      'Calendar-based tracking with deadline management',
      'Modern animations and accessibility features',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Saikruthi-reddy/task-management',
    color: 'sage',
  },
  {
    id: 2,
    title: 'Automatic Subtitle Generator',
    category: 'AI / ML',
    period: 'Aug 2025 – Dec 2025',
    description: 'An end-to-end speech-to-text system that automatically generates .srt subtitle files from audio, supporting multilingual and noisy recordings.',
    highlights: [
      'Integrated Whisper / Wav2Vec2 models for transcription',
      'Audio preprocessing and timestamp alignment',
      'Automated .srt subtitle file generation',
      'Evaluated using Word Error Rate (WER) metric',
    ],
    tech: ['Python', 'Whisper', 'Wav2Vec2', 'NLP'],
    github: 'https://github.com/Saikruthi-reddy/subtitle-generator',
    color: 'light',
  },
];

function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="projects page-enter">

      {/* Hero */}
      <section className="proj-hero">
        <div className="proj-hero-bg"></div>
        <div className="container">
          <span className="section-label">My Work</span>
          <h1 className="section-title">
            <em>Featured</em> Projects
          </h1>
          <div className="divider"></div>
          <p className="proj-intro">
            A collection of projects built during my time at Mahindra University,
            spanning web development, machine learning, and AI research.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="proj-section">
        <div className="container">
          <div className="proj-grid">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className={`proj-card proj-card--${proj.color} ${active === proj.id ? 'expanded' : ''}`}
              >
                {/* Card header */}
                <div className="proj-card-header">
                  <div>
                    <span className="proj-category">{proj.category}</span>
                    <span className="proj-period">{proj.period}</span>
                  </div>
                  <span className="proj-num">0{proj.id}</span>
                </div>

                <h2 className="proj-title">{proj.title}</h2>
                <p className="proj-desc">{proj.description}</p>

                {/* Tech tags */}
                <div className="proj-tech">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Highlights — toggled */}
                {active === proj.id && (
                  <ul className="proj-highlights">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                {/* Actions */}
                <div className="proj-actions">
                  <button
                    className="btn-outline"
                    onClick={() => setActive(active === proj.id ? null : proj.id)}
                  >
                    {active === proj.id ? 'Show Less' : 'View Details'}
                  </button>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary github-btn"
                  >
                    <span className="github-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </span>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More coming */}
      <section className="more-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Stay Tuned</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            More projects <em>coming soon</em>
          </h2>
          <div className="divider" style={{ margin: '20px auto 32px' }}></div>
          <p style={{ color: 'var(--text-mid)', maxWidth: '400px', margin: '0 auto 32px' }}>
            Currently working on new AI and web projects. Follow on GitHub for updates.
          </p>
          <a
            href="https://github.com/Saikruthi-reddy"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Follow on GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Saikruthi · Mahindra University · Made with React</p>
      </footer>
    </div>
  );
}

export default Projects;