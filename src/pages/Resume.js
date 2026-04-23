import React from 'react';
import './Resume.css';

function Resume() {
  // ⬇️  Replace this with the actual path to your resume PDF.
  // Option A — put your resume PDF in the /public folder and set:
  //   const RESUME_PDF = process.env.PUBLIC_URL + '/resume.pdf';
  // Option B — use a Google Drive shareable link (see note in COMMANDS.md)
  const RESUME_PDF = process.env.PUBLIC_URL + '/resume.pdf';

  return (
    <div className="resume-page page-enter">

      {/* ── HERO ── */}
      <section className="resume-hero">
        <div className="rh-deco rh-deco--dot-filled"></div>
        <div className="rh-deco rh-deco--circle"></div>
        <div className="container">
          <div className="rh-label">
            <span className="rh-line"></span>
            <span className="rh-label-text">Curriculum Vitae</span>
          </div>
          <h1 className="rh-title">
            Résumé<span className="rh-dot">.</span>
          </h1>
          <div className="rh-actions">
            <a
              href={RESUME_PDF}
              download="Saikruthi_Resume.pdf"
              className="btn-primary"
            >
              Download PDF
            </a>
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Open in New Tab
            </a>
          </div>
        </div>
      </section>

      {/* ── PDF VIEWER ── */}
      <section className="resume-viewer-section">
        <div className="container">
          <div className="pdf-window">
            {/* Fake browser chrome — matches the reference image */}
            <div className="pdf-window-bar">
              <span className="pdf-dot pdf-dot--orange"></span>
              <span className="pdf-dot pdf-dot--grey"></span>
              <span className="pdf-dot pdf-dot--grey"></span>
              <span className="pdf-filename">resume.pdf</span>
            </div>

            {/* Actual PDF embed — #zoom=page-width forces full-width single view */}
            <div className="pdf-embed-wrap">
              <iframe
                src={`${RESUME_PDF}#zoom=page-width&toolbar=1&navpanes=0&scrollbar=1`}
                title="Saikruthi Resume"
                className="pdf-iframe"
              >
                {/* Fallback for browsers that can't embed PDFs */}
                <div className="pdf-fallback">
                  <p>Your browser cannot display the PDF inline.</p>
                  <a href={RESUME_PDF} download="Saikruthi_Resume.pdf" className="btn-primary">
                    Download Resume
                  </a>
                </div>
              </iframe>
            </div>
          </div>

          {/* Note about adding the PDF */}
          <p className="pdf-note">
            ⚠️ Place your <strong>resume.pdf</strong> inside the <code>public/</code> folder of your React project to make it appear here.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Saikruthi · Mahindra University · Made with React</p>
      </footer>
    </div>
  );
}

export default Resume;