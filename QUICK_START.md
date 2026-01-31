# AutoBrief - Quick Start Guide

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm start
```

or

```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

---

## ✅ Complete Feature Checklist

### Core Features
- ✅ Company input form (name, industry, region)
- ✅ AI-powered brief generation with RAG simulation
- ✅ Structured brief display (Overview, Developments, SWOT, Market Outlook)
- ✅ Confidence score display
- ✅ History sidebar with localStorage persistence
- ✅ Click to restore previous briefs

### UI/UX Features
- ✅ Professional consulting-style design
- ✅ Navy blue (#0A2540) and sky blue (#2196F3) color scheme
- ✅ Inter & Poppins fonts
- ✅ Smooth fade-in animations
- ✅ 2-second loading overlay with "Retrieving intelligence..." message
- ✅ Responsive 3-column layout
- ✅ Rounded cards with light shadows
- ✅ Footer with copyright and tagline

### Technical Features
- ✅ React 18 with hooks
- ✅ Vite build tool
- ✅ localStorage for data persistence
- ✅ Simulated RAG engine with mock database
- ✅ Fuzzy company name matching
- ✅ Industry template fallbacks
- ✅ Automatic history updates

---

## 📁 Project Structure

```
Autobrief/
├── src/
│   ├── App.jsx              # Main application
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   ├── ragEngine.js         # RAG logic & mock database
│   │
│   ├── components/
│   │   ├── CompanyInputPanel.jsx/css
│   │   ├── AIBriefPanel.jsx/css
│   │   ├── HistorySidebar.jsx/css
│   │   ├── LoadingOverlay.jsx/css
│   │   └── Footer.jsx/css
│   │
│   └── examples/
│       ├── sampleOutputs.js
│       └── OutputPreview.jsx
│
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # Documentation
```

---

## 🎯 How to Use

1. **Enter Company Information**
   - Type company name (e.g., "Apple", "Microsoft")
   - Select industry from dropdown
   - Select region from dropdown

2. **Generate Brief**
   - Click "Generate Brief" button
   - Wait for 2-second loading animation
   - View generated brief in center panel

3. **View History**
   - Generated briefs appear in right sidebar
   - Click any history item to restore it
   - History persists across page refreshes

4. **Explore Features**
   - Try known companies (Apple, Microsoft, J&J, JPMorgan, Amazon)
   - Try unknown companies (uses industry templates)
   - Notice confidence scores (higher for known companies)

---

## 🎨 Design System

**Colors:**
- Navy: `#0A2540`
- Sky Blue: `#2196F3`
- Background: `#F4F7FB → #E8F0FE` gradient

**Fonts:**
- Headings: Poppins
- Body: Inter

**Layout:**
- Desktop: 3-column (320px | flex | 280px)
- Mobile: Single column stack

---

## 🔧 Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

---

## 📝 Notes

- All data is stored in browser localStorage
- Mock database includes 5 companies (Apple, Microsoft, J&J, JPMorgan, Amazon)
- Unknown companies use industry-specific templates
- History limited to 50 most recent briefs

---

## 🐛 Troubleshooting

**Port already in use?**
- Vite will automatically try the next available port
- Check terminal output for the actual URL

**Styles not loading?**
- Ensure fonts are loading (check network tab)
- Clear browser cache

**History not saving?**
- Check browser localStorage is enabled
- Open DevTools → Application → Local Storage

---

## ✨ Ready to Run!

Everything is implemented and ready. Just run:

```bash
npm install && npm start
```

Enjoy your AI-Powered Competitive Intelligence Dashboard! 🚀





