import React from 'react';
import './AIBriefPanel.css';

const AIBriefPanel = ({ brief }) => {
  if (!brief) {
    return (
      <div className="ai-brief-panel empty-state">
        <div className="empty-content">
          <div className="empty-icon">📊</div>
          <h3>No Brief Generated</h3>
          <p>Enter a company name and click "Generate Brief" to create an AI-powered competitive intelligence report.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-brief-panel">
      <div className="brief-header">
        <div>
          <h2>{brief.companyName}</h2>
          <div className="brief-meta">
            <span className="meta-badge">{brief.industry}</span>
            <span className="meta-badge">{brief.region}</span>
          </div>
        </div>
        <div className="confidence-score">
          <div className="confidence-label">
            <span className="confidence-icon">📊</span> Confidence
          </div>
          <div className="confidence-value">{brief.confidenceScore}%</div>
        </div>
      </div>

      <div className="brief-content">
        <section className="brief-section">
          <div className="section-header">
            <span className="section-icon">🧭</span>
            <h3>Overview</h3>
          </div>
          <p className="section-content">{brief.overview}</p>
        </section>

        <section className="brief-section">
          <div className="section-header">
            <span className="section-icon">⚙️</span>
            <h3>Recent Developments</h3>
          </div>
          <div className="developments-list">
            {brief.recentDevelopments.map((dev, index) => (
              <div key={index} className="development-item">
                <div className="development-header">
                  <span className="development-type">{dev.type}</span>
                  <span className="development-date">{new Date(dev.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <p className="development-description">{dev.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="brief-section">
          <div className="section-header">
            <span className="section-icon">💹</span>
            <h3>SWOT Analysis</h3>
          </div>
          <div className="swot-grid">
            <div className="swot-item swot-strength">
              <div className="swot-label">Strengths</div>
              <ul className="swot-list">
                {brief.swot.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="swot-item swot-weakness">
              <div className="swot-label">Weaknesses</div>
              <ul className="swot-list">
                {brief.swot.weaknesses.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="swot-item swot-opportunity">
              <div className="swot-label">Opportunities</div>
              <ul className="swot-list">
                {brief.swot.opportunities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="swot-item swot-threat">
              <div className="swot-label">Threats</div>
              <ul className="swot-list">
                {brief.swot.threats.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="brief-section">
          <div className="section-header">
            <span className="section-icon">📈</span>
            <h3>Market Outlook</h3>
          </div>
          <p className="section-content">{brief.marketOutlook}</p>
        </section>
      </div>

      <div className="brief-footer">
        <span className="generated-time">
          Generated on {new Date(brief.generatedAt).toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>
    </div>
  );
};

export default AIBriefPanel;

