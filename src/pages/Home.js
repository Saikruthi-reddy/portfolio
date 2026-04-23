import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
  const skills = ['Python', 'Java', 'C', 'MySQL', 'React', 'HTML/CSS', 'JavaScript',  'NLP'];

  const categories = [
    { label: 'AI & ML', icon: '⚙️' },
    { label: 'Web Dev', icon: '🌿' },
    { label: 'Research', icon: '◈' },
  ];

  return (
    <div className="home page-enter">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-leaf hero-bg-leaf--left"></div>
        <div className="hero-bg-leaf hero-bg-leaf--right"></div>
        <div className="hero-inner container">
          <div className="hero-text">
            <span className="section-label">est. 2023 · Mahindra University</span>
            <h1 className="hero-title">
              <em>Hello, I'm</em><br />
              Saikruthi
            </h1>
            <p className="hero-tagline">AI Engineering Student</p>
            <p className="hero-desc">
              Passionate about building intelligent systems and beautiful interfaces.
              Currently pursuing B.Tech in AI Engineering at Mahindra University, Hyderabad.
            </p>
            <div className="hero-cta">
              <NavLink to="/projects" className="btn-primary">View Projects</NavLink>
              <a href="mailto:Saikruthi209@gmail.com" className="btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="profile-avatar">
  <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Saikruthi" />
</div>
            <div className="hero-card-info">
              <div className="info-chip"> Hyderabad, India</div>
              <div className="info-chip"> B.Tech AI Engineering</div>
              <div className="info-chip"> CGPA: 6.9 </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY TILES ── */}
      <section className="categories">
        <div className="container">
          <div className="category-grid">
            {categories.map((cat) => (
              <div key={cat.label} className="category-tile">
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-label">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section className="about">
        <div className="hero-bg-leaf hero-bg-leaf--about"></div>
        <div className="container about-inner">
          <div className="about-text">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Building the <em>future</em><br />with code & creativity</h2>
            <div className="divider"></div>
            <p>
              I'm Saikruthi, an AI Engineering student at École Centrale School of Engineering,
              Mahindra University. My passion lies at the intersection of Artificial Intelligence
              and UI/UX Design — building systems that are both intelligent and beautiful.
            </p>
            <p style={{ marginTop: '16px' }}>
              I enjoy solving complex problems through elegant code, from developing
              end-to-end ML pipelines to crafting responsive web interfaces. Outside of
              academics, I actively participate in sports and design competitions.
            </p>
          </div>
          <div className="about-interests">
            <div className="interest-block">
              <span className="section-label">Research Interests</span>
              <ul className="interest-list">
                <li>Natural Language Processing</li>
                <li>Speech Recognition & Transcription</li>
                <li>Human-Computer Interaction</li>
                <li>UI/UX Design Systems</li>
                <li>Machine Learning Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFECT GIFT BANNER (inspired by template) ── */}
      <section className="banner-section">
        <div className="banner-inner">
          <div className="banner-text">
            <span className="banner-sublabel">explore my</span>
            <h2 className="banner-title">PROJECTS</h2>
            <p className="banner-script">built with passion & purpose</p>
          </div>
          <div className="banner-deco">
            <div className="deco-circle"></div>
            <div className="deco-leaf">🌿</div>
          </div>
        </div>
        <NavLink to="/projects" className="btn-primary" style={{ marginTop: '28px', display: 'inline-block' }}>
          View All Projects
        </NavLink>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills-section">
        <div className="container">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">My <em>Toolkit</em></h2>
          <div className="divider"></div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS & CONTACT ── */}
      <section className="bottom-sections" id="contact">

          <div className="contact-box">
            <span className="section-label">Contact Details</span>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Let's <em>Connect</em></h2>
            <div className="divider"></div>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p>saikruthi209@gmail.com</p>
                  <p>se23uari037@mahindrauniversity.edu.in</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <p>+91 93903 68058</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>Bahadurpally, Hyderabad — 500043</p>
              </div>
              <a
                href="https://github.com/Saikruthi-reddy"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ marginTop: '20px', display: 'inline-block' }}
              >
                GitHub Profile
              </a>
            </div>
          </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2026 Saikruthi · Mahindra University · Made with React</p>
      </footer>

    </div>
  );
}

export default Home;