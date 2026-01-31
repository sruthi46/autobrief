import React, { useState } from 'react';
import './CompanyInputPanel.css';

const CompanyInputPanel = ({ onGenerate }) => {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('Technology');
  const [region, setRegion] = useState('North America');
  const [isGenerating, setIsGenerating] = useState(false);

  const industries = ['Technology', 'Healthcare', 'Finance', 'Retail', 'Energy'];
  const regions = ['North America', 'Europe', 'Asia-Pacific', 'Global'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!companyName.trim()) {
      alert('Please enter a company name');
      return;
    }

    setIsGenerating(true);
    
    try {
      await onGenerate(companyName, industry, region);
    } catch (error) {
      console.error('Error generating brief:', error);
      alert('Failed to generate brief. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="company-input-panel">
      <div className="panel-header">
        <h2>Company Input</h2>
        <p className="panel-subtitle">Enter company details to generate an AI-powered brief</p>
      </div>
      
      <form onSubmit={handleSubmit} className="input-form">
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g., Apple Inc, Microsoft"
            className="form-input"
            disabled={isGenerating}
          />
        </div>

        <div className="form-group">
          <label htmlFor="industry">Industry</label>
          <select
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="form-select"
            disabled={isGenerating}
          >
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="region">Region</label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="form-select"
            disabled={isGenerating}
          >
            {regions.map(reg => (
              <option key={reg} value={reg}>{reg}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="generate-button"
          disabled={isGenerating || !companyName.trim()}
        >
          {isGenerating ? (
            <>
              <span className="spinner"></span>
              Generating...
            </>
          ) : (
            'Generate Brief'
          )}
        </button>
      </form>
    </div>
  );
};

export default CompanyInputPanel;





