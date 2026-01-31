/**
 * Sample Output Examples
 * These are example outputs that demonstrate what the brief generation produces
 */

export const sampleOutputs = {
  // Example 1: Known company with high confidence
  apple: {
    companyName: "Apple",
    industry: "Technology",
    region: "North America",
    overview: "Apple Inc. is a multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services. Founded in 1976, Apple is known for its innovative products including the iPhone, iPad, Mac computers, and Apple Watch.",
    recentDevelopments: [
      {
        date: "2024-03-10",
        type: "Market Expansion",
        description: "Expanded services division with new subscription offerings in emerging markets"
      },
      {
        date: "2024-02-20",
        type: "Partnership",
        description: "Announced strategic partnership with major healthcare providers for Apple Watch health features"
      },
      {
        date: "2024-01-15",
        type: "Product Launch",
        description: "Launched iPhone 15 Pro with advanced AI capabilities and titanium design"
      }
    ],
    swot: {
      strengths: ["Strong brand loyalty and premium positioning"],
      weaknesses: ["Heavy dependence on iPhone sales"],
      opportunities: ["Expansion into healthcare and automotive sectors"],
      threats: ["Intense competition from Android manufacturers"]
    },
    marketOutlook: "The technology sector continues to show resilience with strong demand for premium devices. Apple maintains a leading position in the smartphone market, with growing emphasis on services and ecosystem integration.",
    confidenceScore: 92,
    generatedAt: "2024-03-20T14:32:15.123Z",
    dataSource: "database"
  },

  // Example 2: Template-based company with medium confidence
  techStart: {
    companyName: "TechStart Solutions",
    industry: "Technology",
    region: "Europe",
    overview: "TechStart Solutions is a leading technology company operating in the dynamic and rapidly evolving tech sector, focusing on innovation and digital transformation solutions.",
    recentDevelopments: [
      {
        date: "2024-02-15",
        type: "Partnership",
        description: "Formed strategic technology partnerships to expand market reach"
      },
      {
        date: "2024-01-20",
        type: "Innovation",
        description: "Announced breakthrough in AI and machine learning applications"
      }
    ],
    swot: {
      strengths: ["Innovation-driven culture"],
      weaknesses: ["Rapid technology obsolescence"],
      opportunities: ["Digital transformation demand"],
      threats: ["Cybersecurity risks"]
    },
    marketOutlook: "The technology sector remains dynamic with strong demand for digital solutions, cloud services, and AI-driven innovations.",
    confidenceScore: 78,
    generatedAt: "2024-03-20T15:45:30.456Z",
    dataSource: "template"
  },

  // Example 3: Healthcare company
  jnj: {
    companyName: "Johnson & Johnson",
    industry: "Healthcare",
    region: "North America",
    overview: "Johnson & Johnson is an American multinational corporation founded in 1886 that develops medical devices, pharmaceutical, and consumer packaged goods. It is one of the world's largest and most comprehensive healthcare companies.",
    recentDevelopments: [
      {
        date: "2024-03-12",
        type: "Expansion",
        description: "Expanded manufacturing facilities in Asia-Pacific region"
      },
      {
        date: "2024-02-18",
        type: "Research",
        description: "Announced breakthrough in medical device innovation for surgical procedures"
      }
    ],
    swot: {
      strengths: ["Diversified healthcare portfolio"],
      weaknesses: ["Legal and regulatory challenges"],
      opportunities: ["Aging population driving demand"],
      threats: ["Regulatory scrutiny"]
    },
    marketOutlook: "Healthcare sector shows steady growth driven by demographic trends and innovation. J&J's diversified approach provides resilience across market cycles.",
    confidenceScore: 89,
    generatedAt: "2024-03-20T16:10:22.789Z",
    dataSource: "database"
  },

  // Example 4: Finance company (template)
  financeCorp: {
    companyName: "Global Finance Corp",
    industry: "Finance",
    region: "Asia-Pacific",
    overview: "Global Finance Corp is a financial services institution providing comprehensive banking, investment, and advisory services to individuals and businesses.",
    recentDevelopments: [
      {
        date: "2024-02-18",
        type: "Service",
        description: "Expanded wealth management and advisory services"
      },
      {
        date: "2024-01-22",
        type: "Digital",
        description: "Launched enhanced digital banking platform with AI features"
      }
    ],
    swot: {
      strengths: ["Financial stability"],
      weaknesses: ["Interest rate sensitivity"],
      opportunities: ["Digital transformation"],
      threats: ["Economic volatility"]
    },
    marketOutlook: "Financial services sector is navigating digital transformation while maintaining core banking strengths, with focus on customer experience and operational efficiency.",
    confidenceScore: 75,
    generatedAt: "2024-03-20T16:25:10.234Z",
    dataSource: "template"
  },

  // Example 5: Retail company
  amazon: {
    companyName: "Amazon",
    industry: "Retail",
    region: "North America",
    overview: "Amazon.com Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry.",
    recentDevelopments: [
      {
        date: "2024-03-15",
        type: "Partnership",
        description: "Formed strategic partnerships for sustainable packaging solutions"
      },
      {
        date: "2024-02-22",
        type: "Expansion",
        description: "Expanded same-day delivery to 50 new metropolitan areas"
      },
      {
        date: "2024-01-18",
        type: "Technology",
        description: "Enhanced AI capabilities for logistics and delivery optimization"
      }
    ],
    swot: {
      strengths: ["Dominant e-commerce platform"],
      weaknesses: ["Thin retail margins"],
      opportunities: ["International market expansion"],
      threats: ["Competition from other e-commerce platforms"]
    },
    marketOutlook: "E-commerce continues to grow, though at a more moderate pace. Amazon's diversification into cloud services and advertising provides additional revenue stability.",
    confidenceScore: 91,
    generatedAt: "2024-03-20T17:00:45.678Z",
    dataSource: "database"
  }
};

/**
 * Get a formatted display string for a brief
 * Useful for console logging or debugging
 */
export const formatBriefForDisplay = (brief) => {
  if (!brief) return "No brief available";
  
  return `
╔═══════════════════════════════════════════════════════════════╗
║ ${brief.companyName.padEnd(45)} Confidence: ${brief.confidenceScore}% ║
║ ${brief.industry}  ${brief.region.padEnd(40)} ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║ 🧭 Overview                                                   ║
║ ${brief.overview}                                            ║
║                                                               ║
║ ⚙️ Recent Developments                                         ║
${brief.recentDevelopments.map(dev => 
  `║ ┌─────────────────────────────────────────────────────┐     ║
║ │ ${dev.type.toUpperCase().padEnd(20)} ${new Date(dev.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).padEnd(20)} │     ║
║ │ ${dev.description}                                    │     ║
║ └─────────────────────────────────────────────────────┘     ║`
).join('\n')}
║                                                               ║
║ 💹 SWOT Analysis                                              ║
║ ┌──────────────────┐  ┌──────────────────┐                ║
║ │ Strengths        │  │ Weaknesses       │                ║
║ │ • ${brief.swot.strengths[0]?.substring(0, 40).padEnd(40)} │  │ • ${brief.swot.weaknesses[0]?.substring(0, 40).padEnd(40)} │                ║
║ └──────────────────┘  └──────────────────┘                ║
║ ┌──────────────────┐  ┌──────────────────┐                ║
║ │ Opportunities   │  │ Threats          │                ║
║ │ • ${brief.swot.opportunities[0]?.substring(0, 40).padEnd(40)} │  │ • ${brief.swot.threats[0]?.substring(0, 40).padEnd(40)} │                ║
║ └──────────────────┘  └──────────────────┘                ║
║                                                               ║
║ 📈 Market Outlook                                             ║
║ ${brief.marketOutlook}                                       ║
║                                                               ║
║ Generated on ${new Date(brief.generatedAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}                    ║
╚═══════════════════════════════════════════════════════════════╝
  `.trim();
};





