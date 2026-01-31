import React, { useState, useEffect } from 'react';
import CompanyInputPanel from './components/CompanyInputPanel';
import AIBriefPanel from './components/AIBriefPanel';
import HistorySidebar from './components/HistorySidebar';
import LoadingOverlay from './components/LoadingOverlay';
import Footer from './components/Footer';
import { generateBrief } from './ragEngine';
import './App.css';

function App() {
  const [currentBrief, setCurrentBrief] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load most recent brief on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('autobrief_history');
      if (stored) {
        const history = JSON.parse(stored);
        if (history.length > 0) {
          // Show most recent brief
          const mostRecent = history.sort((a, b) => 
            new Date(b.generatedAt) - new Date(a.generatedAt)
          )[0];
          setCurrentBrief(mostRecent);
        }
      }
    } catch (error) {
      console.error('Error loading recent brief:', error);
    }
  }, []);

  const handleGenerate = async (companyName, industry, region) => {
    setIsLoading(true);
    
    try {
      // Ensure minimum 2-second loading time for "Retrieving intelligence..." animation
      const [brief] = await Promise.all([
        generateBrief(companyName, industry, region),
        new Promise(resolve => setTimeout(resolve, 2000)) // Minimum 2 seconds
      ]);
      
      setCurrentBrief(brief);
      
      // Save to history
      try {
        const stored = localStorage.getItem('autobrief_history');
        let history = stored ? JSON.parse(stored) : [];
        
        // Remove duplicate if exists (same company and similar timestamp)
        history = history.filter(b => 
          !(b.companyName === brief.companyName && 
            Math.abs(new Date(b.generatedAt) - new Date(brief.generatedAt)) < 1000)
        );
        
        // Add new brief at the beginning
        history.unshift(brief);
        
        // Keep only last 50 briefs
        if (history.length > 50) {
          history = history.slice(0, 50);
        }
        
        localStorage.setItem('autobrief_history', JSON.stringify(history));
        
        // Trigger custom event to notify HistorySidebar
        window.dispatchEvent(new Event('storage'));
      } catch (error) {
        console.error('Error saving to history:', error);
      }
    } catch (error) {
      console.error('Error generating brief:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectBrief = (brief) => {
    setCurrentBrief(brief);
  };

  return (
    <div className="app">
      {isLoading && <LoadingOverlay />}
      
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🤖</span>
            <h1>AutoBrief</h1>
          </div>
          <p className="tagline">AI-Powered Competitive Intelligence Dashboard</p>
        </div>
      </header>

      <main className="app-main">
        <div className="app-layout">
          <aside className="left-panel">
            <CompanyInputPanel onGenerate={handleGenerate} />
          </aside>

          <section className="center-panel">
            <AIBriefPanel brief={currentBrief} />
          </section>

          <aside className="right-panel">
            <HistorySidebar 
              onSelectBrief={handleSelectBrief}
              currentBrief={currentBrief}
            />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

