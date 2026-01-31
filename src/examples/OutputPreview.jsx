import React from 'react';
import { sampleOutputs, formatBriefForDisplay } from './sampleOutputs';
import '../components/AIBriefPanel.css';
import AIBriefPanel from '../components/AIBriefPanel';

/**
 * Output Preview Component
 * Displays example outputs for documentation/testing purposes
 */
const OutputPreview = () => {
  const [selectedExample, setSelectedExample] = React.useState('apple');

  const examples = [
    { key: 'apple', label: 'Apple Inc (Database Match)', brief: sampleOutputs.apple },
    { key: 'techStart', label: 'TechStart Solutions (Template)', brief: sampleOutputs.techStart },
    { key: 'jnj', label: 'Johnson & Johnson (Database)', brief: sampleOutputs.jnj },
    { key: 'financeCorp', label: 'Global Finance Corp (Template)', brief: sampleOutputs.financeCorp },
    { key: 'amazon', label: 'Amazon (Database Match)', brief: sampleOutputs.amazon }
  ];

  const currentExample = examples.find(e => e.key === selectedExample);

  return (
    <div style={{ padding: '40px', background: '#f5f7fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#1a365d', marginBottom: '8px' }}>AutoBrief Output Examples</h1>
        <p style={{ color: '#64748b', marginBottom: '32px' }}>
          Select an example below to see how different briefs are displayed in the UI
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}>
          {examples.map(example => (
            <button
              key={example.key}
              onClick={() => setSelectedExample(example.key)}
              style={{
                padding: '12px 20px',
                background: selectedExample === example.key 
                  ? '#3182ce' 
                  : 'white',
                color: selectedExample === example.key 
                  ? 'white' 
                  : '#1a365d',
                border: `2px solid ${selectedExample === example.key ? '#3182ce' : '#e2e8f0'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: selectedExample === example.key ? '600' : '400',
                transition: 'all 0.2s ease'
              }}
            >
              {example.label}
            </button>
          ))}
        </div>

        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '2px solid #e2e8f0' }}>
            <h3 style={{ color: '#1a365d', margin: '0 0 8px 0' }}>
              {currentExample.label}
            </h3>
            <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>
              Confidence: {currentExample.brief.confidenceScore}% | 
              Source: {currentExample.brief.dataSource} | 
              Generated: {new Date(currentExample.brief.generatedAt).toLocaleString()}
            </p>
          </div>
          <AIBriefPanel brief={currentExample.brief} />
        </div>

        <div style={{ 
          marginTop: '32px',
          background: '#1a365d',
          color: 'white',
          padding: '24px',
          borderRadius: '12px',
          fontFamily: 'monospace',
          fontSize: '12px',
          overflow: 'auto'
        }}>
          <h3 style={{ marginTop: 0, marginBottom: '16px' }}>JSON Output:</h3>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {JSON.stringify(currentExample.brief, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default OutputPreview;





