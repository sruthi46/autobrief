import React, { useState, useEffect } from 'react';
import './HistorySidebar.css';

const HistorySidebar = ({ onSelectBrief, currentBrief }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
    
    // Listen for storage changes to update history when new briefs are added
    const handleStorageChange = () => {
      loadHistory();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically for changes (since storage event only fires in other tabs)
    const interval = setInterval(loadHistory, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [currentBrief]); // Re-run when currentBrief changes

  const loadHistory = () => {
    try {
      const stored = localStorage.getItem('autobrief_history');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Sort by most recent first
        const sorted = parsed.sort((a, b) => 
          new Date(b.generatedAt) - new Date(a.generatedAt)
        );
        setHistory(sorted);
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  const handleSelect = (brief) => {
    onSelectBrief(brief);
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      localStorage.removeItem('autobrief_history');
      setHistory([]);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="history-sidebar">
      <div className="sidebar-header">
        <h2>Recent Briefs</h2>
        {history.length > 0 && (
          <button onClick={handleClear} className="clear-button" title="Clear history">
            Clear
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="empty-history">
          <div className="empty-icon">📋</div>
          <p>No recent briefs</p>
          <span className="empty-hint">Generated briefs will appear here</span>
        </div>
      ) : (
        <div className="history-list">
          {history.map((brief, index) => {
            const isActive = currentBrief && 
              currentBrief.companyName === brief.companyName &&
              currentBrief.generatedAt === brief.generatedAt;
            
            return (
              <div
                key={index}
                className={`history-item ${isActive ? 'active' : ''}`}
                onClick={() => handleSelect(brief)}
              >
                <div className="history-item-header">
                  <h3 className="history-company">{brief.companyName}</h3>
                  <span className="history-time">{formatDate(brief.generatedAt)}</span>
                </div>
                <div className="history-item-meta">
                  <span className="history-badge">{brief.industry}</span>
                  <span className="history-badge">{brief.region}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HistorySidebar;

