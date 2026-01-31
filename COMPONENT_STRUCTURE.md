# AutoBrief - Component Structure

## 🧩 Component Architecture

```
AutoBrief Application
│
├── App.jsx (Main Application Container)
│   ├── Header Component (Logo, Title, Tagline)
│   └── Main Layout (3-Column Grid)
│       ├── CompanyInputPanel (Left)
│       ├── AIBriefPanel (Center)
│       └── HistorySidebar (Right)
│
├── Components/
│   ├── CompanyInputPanel.jsx
│   │   ├── Panel Header
│   │   └── Input Form
│   │       ├── Company Name Input
│   │       ├── Industry Dropdown
│   │       ├── Region Dropdown
│   │       └── Generate Button
│   │
│   ├── AIBriefPanel.jsx
│   │   ├── Brief Header
│   │   │   ├── Company Name
│   │   │   ├── Meta Badges (Industry, Region)
│   │   │   └── Confidence Score (📊)
│   │   └── Brief Content
│   │       ├── Overview Section (🧭)
│   │       ├── Recent Developments Section (⚙️)
│   │       │   └── Development Cards (2-3 items)
│   │       ├── SWOT Analysis Section (💹)
│   │       │   └── SWOT Grid (2x2)
│   │       │       ├── Strengths Card
│   │       │       ├── Weaknesses Card
│   │       │       ├── Opportunities Card
│   │       │       └── Threats Card
│   │       └── Market Outlook Section (📈)
│   │
│   └── HistorySidebar.jsx
│       ├── Sidebar Header
│       │   ├── Title
│       │   └── Clear Button
│       └── History List
│           └── History Items (from localStorage)
│
└── Utilities/
    ├── ragEngine.js (RAG Logic)
    └── examples/
        ├── sampleOutputs.js
        └── OutputPreview.jsx
```

## 📦 Component Details

### 1. App.jsx
**Purpose**: Main application container and state management

**Responsibilities**:
- Manages current brief state
- Handles brief generation
- Manages localStorage for history
- Provides layout structure

**State**:
- `currentBrief`: Currently displayed brief object
- `isLoading`: Loading state for generation

**Props**: None (root component)

**Key Functions**:
- `handleGenerate(companyName, industry, region)`: Generates new brief
- `handleSelectBrief(brief)`: Restores brief from history

---

### 2. CompanyInputPanel.jsx
**Purpose**: User input form for generating briefs

**Location**: Left panel (320px width)

**Props**:
- `onGenerate(companyName, industry, region)`: Callback function

**State**:
- `companyName`: Text input value
- `industry`: Selected industry (default: 'Technology')
- `region`: Selected region (default: 'North America')
- `isGenerating`: Loading state

**Features**:
- Form validation
- Loading spinner during generation
- Disabled state during generation
- Smooth transitions

**Styling**: `CompanyInputPanel.css`
- Rounded cards (16px border-radius)
- Light shadows
- Sky blue accent (#2196F3) for buttons
- Inter font for body text
- Poppins font for headings

---

### 3. AIBriefPanel.jsx
**Purpose**: Displays generated AI brief with all sections

**Location**: Center panel (flexible width)

**Props**:
- `brief`: Brief object or null

**Sections**:
1. **Header**
   - Company name (Poppins, large)
   - Industry/Region badges
   - Confidence score with 📊 icon

2. **Overview** 🧭
   - Company description paragraph
   - Fade-in animation

3. **Recent Developments** ⚙️
   - 2-3 development cards
   - Each card shows: Type badge, Date, Description
   - Hover effects

4. **SWOT Analysis** 💹
   - 2x2 grid layout
   - Color-coded cards:
     - Strengths: Green
     - Weaknesses: Red
     - Opportunities: Blue
     - Threats: Orange
   - One point per category

5. **Market Outlook** 📈
   - Industry analysis paragraph

**Empty State**:
- Shows when `brief` is null
- Centered message with icon
- Helpful instructions

**Styling**: `AIBriefPanel.css`
- Fade-in animations (staggered delays)
- Smooth transitions
- Scrollable content
- Rounded corners (16px)

---

### 4. HistorySidebar.jsx
**Purpose**: Displays and manages recent brief history

**Location**: Right panel (280px width)

**Props**:
- `onSelectBrief(brief)`: Callback to restore brief
- `currentBrief`: Currently active brief (for highlighting)

**Features**:
- Loads from localStorage on mount
- Sorts by most recent first
- Click to restore brief
- Active state highlighting
- Clear all functionality
- Relative time display (e.g., "2h ago")

**Styling**: `HistorySidebar.css`
- Card-based history items
- Active state with sky blue highlight
- Hover effects with slide animation
- Scrollable list

---

## 🎨 Design System

### Colors
- **Navy Blue**: `#0A2540` (Primary text, headings)
- **Sky Blue**: `#2196F3` (Accents, buttons, highlights)
- **White**: `#FFFFFF` (Card backgrounds)
- **Light Gray**: `#f8fafc` (Card backgrounds, subtle areas)
- **Border Gray**: `#e2e8f0` (Borders, dividers)
- **Text Gray**: `#64748b` (Secondary text)

### Typography
- **Headings**: Poppins (400, 500, 600, 700, 800)
- **Body**: Inter (300, 400, 500, 600, 700)
- **Sizes**:
  - H1: 32px (Logo)
  - H2: 28px (Company name)
  - H3: 20px (Section headers)
  - Body: 15px
  - Small: 12-14px

### Spacing
- **Card Padding**: 32px (main panels), 24px (sidebar)
- **Section Gap**: 32px
- **Form Gap**: 24px
- **Grid Gap**: 24px (layout), 16px (SWOT grid)

### Border Radius
- **Cards**: 16px
- **Buttons**: 10px
- **Badges**: 8px
- **Inputs**: 10px

### Shadows
- **Card Shadow**: `0 2px 12px rgba(10, 37, 64, 0.08)`
- **Hover Shadow**: `0 4px 16px rgba(10, 37, 64, 0.12)`
- **Button Shadow**: `0 6px 20px rgba(33, 150, 243, 0.4)`

### Animations
- **Fade In**: 0.5s ease-out
- **Staggered Sections**: 0.1s delay increments
- **Hover Transitions**: 0.3s ease
- **Button Hover**: translateY(-2px)

---

## 📱 Responsive Layout

### Desktop (≥1200px)
```
┌──────────┬──────────────────────────┬──────────┐
│  320px   │        Flexible          │  280px   │
│  Input   │        Brief Panel       │ History  │
└──────────┴──────────────────────────┴──────────┘
```

### Tablet (968px - 1200px)
```
┌────────┬──────────────────────┬──────┐
│ 280px  │      Flexible        │240px │
│ Input  │    Brief Panel       │History│
└────────┴──────────────────────┴──────┘
```

### Mobile (<968px)
```
┌────────────────────┐
│     Input Panel    │
├────────────────────┤
│    Brief Panel     │
├────────────────────┤
│   History Sidebar  │
└────────────────────┘
```

---

## 🔄 Data Flow

```
User Input
    ↓
CompanyInputPanel
    ↓ (onGenerate)
App.handleGenerate()
    ↓
ragEngine.generateBrief()
    ↓
Brief Object
    ↓
App.setState(currentBrief)
    ↓
AIBriefPanel (displays)
    ↓
localStorage (saves to history)
    ↓
HistorySidebar (shows in list)
```

---

## 🗂️ File Structure

```
src/
├── App.jsx                    # Main app component
├── App.css                    # App-level styles
├── main.jsx                   # Entry point
├── index.css                  # Global styles
│
├── components/
│   ├── CompanyInputPanel.jsx
│   ├── CompanyInputPanel.css
│   ├── AIBriefPanel.jsx
│   ├── AIBriefPanel.css
│   ├── HistorySidebar.jsx
│   └── HistorySidebar.css
│
├── ragEngine.js               # RAG logic
│
└── examples/
    ├── sampleOutputs.js
    └── OutputPreview.jsx
```

---

## 🎯 Key Features

### 1. **State Management**
- React useState hooks
- localStorage for persistence
- No external state management library

### 2. **Animations**
- Fade-in for brief sections
- Staggered delays for visual appeal
- Smooth hover transitions
- Button press feedback

### 3. **Accessibility**
- Focus-visible styles
- Semantic HTML
- ARIA-friendly structure
- Keyboard navigation support

### 4. **Performance**
- Lazy loading ready
- Optimized re-renders
- Efficient localStorage usage
- Smooth 60fps animations

---

## 🔧 Component Props Interface

### CompanyInputPanel
```typescript
interface CompanyInputPanelProps {
  onGenerate: (companyName: string, industry: string, region: string) => Promise<void>;
}
```

### AIBriefPanel
```typescript
interface AIBriefPanelProps {
  brief: Brief | null;
}

interface Brief {
  companyName: string;
  industry: string;
  region: string;
  overview: string;
  recentDevelopments: Development[];
  swot: SWOT;
  marketOutlook: string;
  confidenceScore: number;
  generatedAt: string;
  dataSource: 'database' | 'template';
}
```

### HistorySidebar
```typescript
interface HistorySidebarProps {
  onSelectBrief: (brief: Brief) => void;
  currentBrief: Brief | null;
}
```

---

## 🚀 Future Enhancements

1. **Component Splitting**
   - Extract SWOT grid to separate component
   - Extract Development cards to separate component
   - Create reusable Badge component

2. **State Management**
   - Consider Context API for global state
   - Add Redux/Zustand if complexity grows

3. **Performance**
   - Memoize expensive computations
   - Virtual scrolling for long history
   - Code splitting for routes

4. **Features**
   - Export to PDF
   - Share brief functionality
   - Custom templates
   - Brief editing





