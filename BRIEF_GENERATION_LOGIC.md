# Brief Generation Logic Documentation

## Overview

The AutoBrief application uses a **simulated RAG (Retrieval-Augmented Generation)** system to generate structured company intelligence briefs. The system mimics how a real AI-powered competitive intelligence platform would retrieve and synthesize information from multiple data sources.

## Architecture

### Two-Phase Process

```
┌─────────────────┐
│  User Input     │
│  (Company Name, │
│   Industry,     │
│   Region)       │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  PHASE 1: RETRIEVAL                 │
│  ──────────────────────              │
│  1. Query Processing                │
│  2. Source Selection                │
│  3. Data Aggregation                │
└────────┬────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  PHASE 2: GENERATION                │
│  ──────────────────────              │
│  1. Content Synthesis               │
│  2. Relevance Scoring               │
│  3. Confidence Calculation          │
└────────┬────────────────────────────┘
         │
         ▼
┌─────────────────┐
│  Structured     │
│  Brief Output   │
└─────────────────┘
```

## Phase 1: Retrieval

### 1.1 Query Processing

**Function**: `findCompanyMatch()`

The system normalizes and processes the company name query using fuzzy matching:

- **Exact Match**: Direct lookup in database (confidence: 100%)
- **Partial Match**: Query contains database key or vice versa (confidence: 90%)
- **Fuzzy Match**: First word matching (e.g., "Apple" matches "Apple Inc") (confidence: 80%)
- **No Match**: Falls back to industry template (confidence: 70%)

**Example Matching**:
```
"Apple" → Matches "Apple Inc" (fuzzy)
"Microsoft" → Matches "Microsoft Corporation" (fuzzy)
"JPMorgan" → Matches "JPMorgan Chase" (fuzzy)
"Unknown Corp" → No match, uses template
```

### 1.2 Source Selection

**Function**: `retrieveData()`

The system retrieves data from multiple sources:

1. **Primary Database**: Company-specific data (if match found)
   - Contains detailed information for known companies
   - Includes: Overview, Developments, SWOT, Market Outlook

2. **Industry Templates**: Fallback for unknown companies
   - Industry-specific generic templates
   - Customized with company name

3. **Context Aggregation**: Combines primary data with industry context

### 1.3 Data Aggregation

The retrieval process simulates:
- **300ms**: Initial query processing
- **300ms**: Data fetching from sources
- **200ms**: Context aggregation

Total retrieval time: ~800ms (simulates real API/DB latency)

## Phase 2: Generation

### 2.1 Content Synthesis

**Function**: `synthesizeBrief()`

Transforms raw retrieved data into structured executive brief format:

#### Overview Section
- Uses company-specific overview if available
- Falls back to personalized industry template
- Format: `"[Company Name] is [industry description]"`

#### Recent Developments
- Sorts by date (most recent first)
- Selects 2-3 most relevant developments
- Includes: Date, Type, Description

#### SWOT Analysis
- Extracts one point from each category:
  - **Strengths**: Internal positive factors
  - **Weaknesses**: Internal challenges
  - **Opportunities**: External positive factors
  - **Threats**: External risks

#### Market Outlook
- Industry-specific market analysis
- Provides sector context and trends

### 2.2 Relevance Scoring

The system prioritizes:
- **Most Recent Developments**: Sorted by date
- **Balanced SWOT**: One point per category for comprehensive view
- **Complete Data**: All sections populated

### 2.3 Confidence Calculation

**Confidence Score Formula**:

```
Base Confidence = 
  - Database Match: 85-95% (based on match quality)
  - Template Match: 70-85% (randomized)

Completeness Score = 
  - Overview: 20%
  - Developments: 20%
  - Strengths: 20%
  - Weaknesses: 15%
  - Opportunities: 15%
  - Threats: 10%

Final Confidence = Base Confidence × Completeness Score
```

**Confidence Ranges**:
- **85-95%**: Known companies with complete data
- **70-85%**: Template-based with complete data
- **Lower**: Incomplete data sets

## Output Structure

```javascript
{
  companyName: string,           // Normalized company name
  industry: string,              // Selected industry
  region: string,                // Selected region
  overview: string,              // Executive summary
  recentDevelopments: [          // 2-3 items
    {
      date: string,              // ISO date
      type: string,              // Development type
      description: string        // Detailed description
    }
  ],
  swot: {
    strengths: [string],         // 1 item
    weaknesses: [string],        // 1 item
    opportunities: [string],     // 1 item
    threats: [string]           // 1 item
  },
  marketOutlook: string,        // Industry analysis
  confidenceScore: number,       // 0-100%
  generatedAt: string,          // ISO timestamp
  dataSource: string            // 'database' or 'template'
}
```

## Data Sources

### Primary Database

Contains detailed information for:
- Apple Inc
- Microsoft Corporation
- Johnson & Johnson
- JPMorgan Chase
- Amazon.com Inc

### Industry Templates

Generic templates for:
- Technology
- Healthcare
- Finance
- Retail
- Energy

## Error Handling

- **Invalid Input**: Validates company name (non-empty)
- **Missing Data**: Falls back to industry template
- **Incomplete Templates**: Uses Technology template as default
- **Storage Errors**: Gracefully handles localStorage failures

## Performance Characteristics

- **Retrieval Time**: ~800ms (simulated)
- **Generation Time**: <50ms (synchronous)
- **Total Time**: ~850ms per brief generation

## Future Enhancements

Potential improvements for a production system:

1. **Real Data Sources**: Integrate with actual APIs (Crunchbase, SEC filings, news APIs)
2. **Vector Search**: Use embeddings for semantic company matching
3. **Multi-Source Aggregation**: Combine data from multiple providers
4. **Caching**: Cache frequently requested companies
5. **Real-time Updates**: WebSocket connections for live data
6. **Custom Templates**: User-defined industry templates
7. **Export Features**: PDF/Excel export of briefs





