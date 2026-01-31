import React from 'react';
import './LoadingOverlay.css';

const LoadingOverlay = ({ message = 'Retrieving intelligence...' }) => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p className="loading-text">{message}</p>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;





