// Mock database of company information sources
const mockDatabase = {
  companies: {
    'Apple Inc': {
      industry: 'Technology',
      region: 'North America',
      overview: 'Apple Inc. is a multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services. Founded in 1976, Apple is known for its innovative products including the iPhone, iPad, Mac computers, and Apple Watch.',
      developments: [
        { date: '2024-01-15', type: 'Product Launch', description: 'Launched iPhone 15 Pro with advanced AI capabilities and titanium design' },
        { date: '2024-02-20', type: 'Partnership', description: 'Announced strategic partnership with major healthcare providers for Apple Watch health features' },
        { date: '2024-03-10', type: 'Market Expansion', description: 'Expanded services division with new subscription offerings in emerging markets' }
      ],
      strengths: ['Strong brand loyalty and premium positioning', 'Robust ecosystem of interconnected devices', 'High profit margins and cash reserves'],
      weaknesses: ['Heavy dependence on iPhone sales', 'Premium pricing limits market share', 'Supply chain vulnerabilities'],
      opportunities: ['Expansion into healthcare and automotive sectors', 'Growing services revenue stream', 'Emerging market penetration'],
      threats: ['Intense competition from Android manufacturers', 'Regulatory scrutiny in multiple regions', 'Economic downturn affecting premium purchases'],
      marketOutlook: 'The technology sector continues to show resilience with strong demand for premium devices. Apple maintains a leading position in the smartphone market, with growing emphasis on services and ecosystem integration.'
    },
    'Microsoft Corporation': {
      industry: 'Technology',
      region: 'North America',
      overview: 'Microsoft Corporation is a global technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, and personal computers. Founded in 1975, Microsoft is best known for its Windows operating system and Office productivity suite.',
      developments: [
        { date: '2024-01-22', type: 'Acquisition', description: 'Acquired AI startup to enhance Azure cloud AI capabilities' },
        { date: '2024-02-14', type: 'Product Launch', description: 'Released new version of Microsoft 365 with enhanced collaboration features' },
        { date: '2024-03-05', type: 'Partnership', description: 'Formed strategic alliance with major enterprise software providers' }
      ],
      strengths: ['Dominant position in enterprise software', 'Strong cloud infrastructure (Azure)', 'Diverse product portfolio'],
      weaknesses: ['Slower mobile market presence', 'Dependency on enterprise customers', 'Complex organizational structure'],
      opportunities: ['AI and machine learning integration', 'Cloud services growth', 'Gaming and entertainment expansion'],
      threats: ['Competition from AWS and Google Cloud', 'Open-source software adoption', 'Cybersecurity concerns'],
      marketOutlook: 'Enterprise software and cloud services remain strong growth drivers. Microsoft\'s focus on AI integration and hybrid work solutions positions it well for continued expansion.'
    },
    'Johnson & Johnson': {
      industry: 'Healthcare',
      region: 'North America',
      overview: 'Johnson & Johnson is an American multinational corporation founded in 1886 that develops medical devices, pharmaceutical, and consumer packaged goods. It is one of the world\'s largest and most comprehensive healthcare companies.',
      developments: [
        { date: '2024-01-30', type: 'Regulatory', description: 'Received FDA approval for new oncology treatment' },
        { date: '2024-02-18', type: 'Research', description: 'Announced breakthrough in medical device innovation for surgical procedures' },
        { date: '2024-03-12', type: 'Expansion', description: 'Expanded manufacturing facilities in Asia-Pacific region' }
      ],
      strengths: ['Diversified healthcare portfolio', 'Strong R&D capabilities', 'Global market presence'],
      weaknesses: ['Legal and regulatory challenges', 'Complex organizational structure', 'Patent expiration risks'],
      opportunities: ['Aging population driving demand', 'Emerging market growth', 'Digital health solutions'],
      threats: ['Regulatory scrutiny', 'Generic competition', 'Supply chain disruptions'],
      marketOutlook: 'Healthcare sector shows steady growth driven by demographic trends and innovation. J&J\'s diversified approach provides resilience across market cycles.'
    },
    'JPMorgan Chase': {
      industry: 'Finance',
      region: 'North America',
      overview: 'JPMorgan Chase & Co. is an American multinational investment bank and financial services holding company. It is the largest bank in the United States and one of the largest in the world by market capitalization.',
      developments: [
        { date: '2024-01-25', type: 'Digital Innovation', description: 'Launched new AI-powered fraud detection system' },
        { date: '2024-02-10', type: 'Expansion', description: 'Expanded wealth management services in key markets' },
        { date: '2024-03-08', type: 'Partnership', description: 'Partnered with fintech companies for digital payment solutions' }
      ],
      strengths: ['Market leadership in investment banking', 'Strong capital position', 'Diverse revenue streams'],
      weaknesses: ['Regulatory compliance costs', 'Exposure to economic cycles', 'Reputation risk management'],
      opportunities: ['Digital banking transformation', 'Wealth management growth', 'International expansion'],
      threats: ['Interest rate volatility', 'Regulatory changes', 'Fintech competition'],
      marketOutlook: 'Financial services sector is adapting to digital transformation while maintaining traditional strengths. JPMorgan\'s scale and diversification provide competitive advantages.'
    },
    'Amazon.com Inc': {
      industry: 'Retail',
      region: 'North America',
      overview: 'Amazon.com Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry.',
      developments: [
        { date: '2024-01-18', type: 'Technology', description: 'Enhanced AI capabilities for logistics and delivery optimization' },
        { date: '2024-02-22', type: 'Expansion', description: 'Expanded same-day delivery to 50 new metropolitan areas' },
        { date: '2024-03-15', type: 'Partnership', description: 'Formed strategic partnerships for sustainable packaging solutions' }
      ],
      strengths: ['Dominant e-commerce platform', 'AWS cloud leadership', 'Extensive logistics network'],
      weaknesses: ['Thin retail margins', 'Regulatory scrutiny', 'Labor relations challenges'],
      opportunities: ['International market expansion', 'Advertising revenue growth', 'Healthcare and pharmacy services'],
      threats: ['Competition from other e-commerce platforms', 'Regulatory pressure', 'Supply chain disruptions'],
      marketOutlook: 'E-commerce continues to grow, though at a more moderate pace. Amazon\'s diversification into cloud services and advertising provides additional revenue stability.'
    }
  },
  
  // Industry-specific templates for companies not in database
  industryTemplates: {
    'Technology': {
      overview: 'A leading technology company operating in the dynamic and rapidly evolving tech sector, focusing on innovation and digital transformation solutions.',
      developments: [
        { date: '2024-01-20', type: 'Innovation', description: 'Announced breakthrough in AI and machine learning applications' },
        { date: '2024-02-15', type: 'Partnership', description: 'Formed strategic technology partnerships to expand market reach' }
      ],
      strengths: ['Innovation-driven culture', 'Strong technical capabilities', 'Market adaptability'],
      weaknesses: ['Rapid technology obsolescence', 'Intense competition', 'Talent acquisition challenges'],
      opportunities: ['Digital transformation demand', 'Emerging technologies', 'Global market expansion'],
      threats: ['Cybersecurity risks', 'Regulatory changes', 'Economic downturns affecting IT spending'],
      marketOutlook: 'The technology sector remains dynamic with strong demand for digital solutions, cloud services, and AI-driven innovations.'
    },
    'Healthcare': {
      overview: 'A prominent healthcare organization dedicated to improving patient outcomes through innovative medical solutions, research, and care delivery.',
      developments: [
        { date: '2024-01-25', type: 'Research', description: 'Advanced clinical trials for new therapeutic treatments' },
        { date: '2024-02-20', type: 'Regulatory', description: 'Received regulatory approvals for expanded service offerings' }
      ],
      strengths: ['Regulatory expertise', 'Research and development capabilities', 'Patient care focus'],
      weaknesses: ['Regulatory compliance complexity', 'High R&D costs', 'Market access challenges'],
      opportunities: ['Aging population trends', 'Digital health solutions', 'Emerging market growth'],
      threats: ['Regulatory scrutiny', 'Generic competition', 'Healthcare policy changes'],
      marketOutlook: 'Healthcare sector shows steady growth driven by demographic trends, technological innovation, and increasing focus on preventive care.'
    },
    'Finance': {
      overview: 'A financial services institution providing comprehensive banking, investment, and advisory services to individuals and businesses.',
      developments: [
        { date: '2024-01-22', type: 'Digital', description: 'Launched enhanced digital banking platform with AI features' },
        { date: '2024-02-18', type: 'Service', description: 'Expanded wealth management and advisory services' }
      ],
      strengths: ['Financial stability', 'Customer relationships', 'Regulatory compliance'],
      weaknesses: ['Interest rate sensitivity', 'Regulatory burden', 'Cybersecurity risks'],
      opportunities: ['Digital transformation', 'Wealth management growth', 'Emerging market expansion'],
      threats: ['Economic volatility', 'Regulatory changes', 'Fintech competition'],
      marketOutlook: 'Financial services sector is navigating digital transformation while maintaining core banking strengths, with focus on customer experience and operational efficiency.'
    },
    'Retail': {
      overview: 'A retail organization serving customers through multiple channels, focusing on product innovation, customer experience, and operational excellence.',
      developments: [
        { date: '2024-01-28', type: 'Expansion', description: 'Opened new retail locations in key markets' },
        { date: '2024-02-25', type: 'Technology', description: 'Enhanced e-commerce platform with improved user experience' }
      ],
      strengths: ['Brand recognition', 'Customer loyalty', 'Supply chain efficiency'],
      weaknesses: ['Thin profit margins', 'Inventory management challenges', 'Competitive pricing pressure'],
      opportunities: ['E-commerce growth', 'Omnichannel integration', 'Emerging market expansion'],
      threats: ['Economic downturns', 'Changing consumer preferences', 'Supply chain disruptions'],
      marketOutlook: 'Retail sector is adapting to omnichannel strategies, with strong emphasis on digital transformation and customer experience enhancement.'
    },
    'Energy': {
      overview: 'An energy company engaged in exploration, production, and distribution of energy resources, with focus on sustainable and efficient operations.',
      developments: [
        { date: '2024-01-30', type: 'Investment', description: 'Announced major investments in renewable energy projects' },
        { date: '2024-02-28', type: 'Partnership', description: 'Formed partnerships for sustainable energy solutions' }
      ],
      strengths: ['Resource portfolio', 'Operational expertise', 'Market position'],
      weaknesses: ['Commodity price volatility', 'Environmental regulations', 'Capital intensity'],
      opportunities: ['Renewable energy transition', 'Energy efficiency demand', 'Global energy needs'],
      threats: ['Regulatory changes', 'Price volatility', 'Environmental concerns'],
      marketOutlook: 'Energy sector is undergoing transformation toward sustainability, with increasing focus on renewable sources and energy efficiency solutions.'
    }
  }
};

/**
 * Simulated RAG Engine - Brief Generation Logic
 * 
 * This engine mimics a real Retrieval-Augmented Generation system with:
 * 
 * PHASE 1: RETRIEVAL
 * - Query Processing: Normalizes and matches company names using fuzzy matching
 * - Source Selection: Retrieves from primary database or falls back to industry templates
 * - Data Aggregation: Combines multiple data sources (company-specific + industry context)
 * 
 * PHASE 2: GENERATION
 * - Content Synthesis: Transforms raw data into structured executive brief format
 * - Relevance Scoring: Selects most relevant developments and SWOT points
 * - Confidence Calculation: Computes AI confidence based on data quality and completeness
 * 
 * OUTPUT: Structured brief with Overview, Developments, SWOT, Market Outlook, and Confidence Score
 */

/**
 * Fuzzy matching algorithm for company name matching
 * Handles variations like "Apple" matching "Apple Inc", "Microsoft" matching "Microsoft Corporation"
 */
const findCompanyMatch = (query, database) => {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Exact match
  if (database[query]) {
    return { key: query, matchType: 'exact', confidence: 1.0 };
  }
  
  // Partial match - check if query is contained in key or vice versa
  for (const key of Object.keys(database)) {
    const normalizedKey = key.toLowerCase();
    
    // Check if query contains key's first word or key contains query
    const keyFirstWord = normalizedKey.split(' ')[0];
    const queryFirstWord = normalizedQuery.split(' ')[0];
    
    if (normalizedKey.includes(normalizedQuery) || normalizedQuery.includes(normalizedKey)) {
      return { key, matchType: 'partial', confidence: 0.9 };
    }
    
    if (keyFirstWord === queryFirstWord || normalizedQuery.includes(keyFirstWord)) {
      return { key, matchType: 'fuzzy', confidence: 0.8 };
    }
  }
  
  return null;
};

/**
 * Simulates retrieval from multiple data sources
 * In a real RAG system, this would query vector databases, APIs, etc.
 */
const retrieveData = async (companyName, industry, region) => {
  // Simulate multi-step retrieval process
  await new Promise(resolve => setTimeout(resolve, 300)); // Initial query processing
  
  const match = findCompanyMatch(companyName, mockDatabase.companies);
  
  await new Promise(resolve => setTimeout(resolve, 300)); // Data fetching
  
  let primaryData = null;
  let dataSource = 'template';
  let retrievalConfidence = 0.7;
  
  if (match) {
    primaryData = { ...mockDatabase.companies[match.key] };
    dataSource = 'database';
    retrievalConfidence = match.confidence;
  }
  
  await new Promise(resolve => setTimeout(resolve, 200)); // Context aggregation
  
  // Retrieve industry context (always available)
  const industryTemplate = mockDatabase.industryTemplates[industry] || 
                          mockDatabase.industryTemplates['Technology'];
  
  return {
    primaryData,
    industryTemplate,
    dataSource,
    retrievalConfidence,
    matchType: match?.matchType || 'none'
  };
};

/**
 * Synthesizes retrieved data into structured brief
 * Applies business logic to format and prioritize information
 */
const synthesizeBrief = (retrievedData, companyName, industry, region) => {
  const { primaryData, industryTemplate, dataSource, retrievalConfidence } = retrievedData;
  
  let companyData;
  
  if (primaryData) {
    // Use primary data, but enhance with industry context if needed
    companyData = { ...primaryData };
    if (industry) companyData.industry = industry;
    if (region) companyData.region = region;
  } else {
    // Generate from template with company name personalization
    companyData = {
      industry: industry || 'Technology',
      region: region || 'Global',
      ...industryTemplate
    };
    // Personalize overview
    companyData.overview = `${companyName} is ${industryTemplate.overview.toLowerCase()}`;
  }
  
  // Calculate confidence score based on data quality
  let baseConfidence = dataSource === 'database' 
    ? Math.floor(85 + retrievalConfidence * 10) // 85-95% for database matches
    : Math.floor(70 + Math.random() * 15); // 70-85% for templates
  
  // Adjust confidence based on data completeness
  const completenessScore = (
    (companyData.overview ? 0.2 : 0) +
    (companyData.developments?.length > 0 ? 0.2 : 0) +
    (companyData.strengths?.length > 0 ? 0.2 : 0) +
    (companyData.weaknesses?.length > 0 ? 0.15 : 0) +
    (companyData.opportunities?.length > 0 ? 0.15 : 0) +
    (companyData.threats?.length > 0 ? 0.1 : 0)
  );
  
  const confidenceScore = Math.min(100, Math.floor(baseConfidence * completenessScore));
  
  // Select most relevant developments (prioritize recent)
  const sortedDevelopments = [...(companyData.developments || [])]
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const numDevelopments = Math.min(2 + Math.floor(Math.random() * 2), sortedDevelopments.length);
  const selectedDevelopments = sortedDevelopments.slice(0, numDevelopments);
  
  // Select balanced SWOT points (one from each category)
  const swot = {
    strengths: (companyData.strengths || []).slice(0, 1),
    weaknesses: (companyData.weaknesses || []).slice(0, 1),
    opportunities: (companyData.opportunities || []).slice(0, 1),
    threats: (companyData.threats || []).slice(0, 1)
  };
  
  return {
    companyName: companyName.trim(),
    industry: companyData.industry,
    region: companyData.region,
    overview: companyData.overview,
    recentDevelopments: selectedDevelopments,
    swot: swot,
    marketOutlook: companyData.marketOutlook,
    confidenceScore: confidenceScore,
    generatedAt: new Date().toISOString(),
    dataSource: dataSource // For debugging/transparency
  };
};

/**
 * Main RAG generation function
 * Orchestrates retrieval and generation phases
 */
export const generateBrief = async (companyName, industry, region) => {
  // Phase 1: Retrieval
  const retrievedData = await retrieveData(companyName, industry, region);
  
  // Phase 2: Generation
  const brief = synthesizeBrief(retrievedData, companyName, industry, region);
  
  return brief;
};

