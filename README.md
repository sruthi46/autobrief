# AutoBrief - AI-Powered Competitive Intelligence Dashboard

A modern React web application that simulates an AI-powered business brief generator using RAG (Retrieval-Augmented Generation) logic to compile structured company summaries.

## Features

- **Company Input Panel**: Enter company details (name, industry, region) to generate briefs
- **AI Brief Panel**: Displays comprehensive company analysis including:
  - Overview
  - Recent Developments
  - SWOT Analysis
  - Market Outlook
  - Confidence Score
- **History Sidebar**: View and restore previously generated briefs (persisted in localStorage)

## Design

- Modern consulting-style design with clean, professional aesthetics
- Color scheme: White + Navy (#1a365d) + Accent Blue (#3182ce)
- Smooth card-based layout with responsive design
- Professional typography and spacing

## Technology Stack

- React 18
- Vite (build tool)
- CSS3 (no external CSS frameworks)
- localStorage for data persistence

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/
  │   ├── CompanyInputPanel.jsx
  │   ├── CompanyInputPanel.css
  │   ├── AIBriefPanel.jsx
  │   ├── AIBriefPanel.css
  │   ├── HistorySidebar.jsx
  │   └── HistorySidebar.css
  ├── ragEngine.js          # Simulated RAG logic with mock database
  ├── App.jsx
  ├── App.css
  ├── main.jsx
  └── index.css
```

## How It Works

1. **Retrieval Phase**: The RAG engine searches a mock database of company information
2. **Generation Phase**: Synthesizes retrieved data into structured briefs
3. **Storage**: Generated briefs are automatically saved to localStorage
4. **History**: Users can view and restore any previously generated brief

## Mock Database

The application includes a mock database with information for several major companies:
- Apple Inc.
- Microsoft Corporation
- Johnson & Johnson
- JPMorgan Chase
- Amazon.com Inc.

For companies not in the database, the system uses industry-specific templates to generate relevant briefs.

## Browser Support

Modern browsers that support:
- ES6+
- CSS Grid
- localStorage API





