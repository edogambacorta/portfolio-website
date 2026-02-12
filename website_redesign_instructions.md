# Portfolio Website Redesign Instructions
## From Agency Site → Personal Portfolio for Edoardo Gambacorta

---

## OVERALL STRUCTURE CHANGES

### Current Structure to Remove:
- "Our Philosophy" section with carousel
- "Our Process" / "How We Work" section
- "Portfolio" carousel (duplicate content)
- "Insights" blog section
- "About Us" team section (multiple people)

### New Structure:
1. **Hero Section** (KEEP AS IS)
2. **Introduction Line** (NEW)
3. **Main 3 Projects** (REPLACES "Our Services")
4. **Interactive Timeline** (NEW - REPLACES "Portfolio", "Process", "Philosophy")
5. **Contact Form** (KEEP but simplify)

---

## SECTION-BY-SECTION REDESIGN INSTRUCTIONS

---

## 1. HERO SECTION
**ACTION:** Keep the exact same structure and styling
- Keep the navigation bar
- Keep the hero headline and subheader format
- Keep the CTA button styling
- Keep the background gradient/styling

**ONLY CHANGE THE TEXT:**
- Headline: "I engineer products. Then I make them profitable."
- Subheader: "Mechanical Engineer. Startup Builder. 24 years old."
- CTA Button: "See What I've Built" (scroll to projects section)

---

## 2. INTRODUCTION LINE
**ACTION:** Replace the animated text "TheAIRevolutionishereWemakesureyou'realwaysonestepahead"

**NEW CONTENT:**
```
I'm Edoardo Gambacorta
```

**STYLING:**
- Center aligned
- Large, clean typography (similar to current animated text size)
- Perhaps a subtle fade-in animation on scroll
- Add subtle bottom border or underline accent
- Background: clean white or very light gray
- Padding: 60px top, 40px bottom

---

## 3. MAIN 3 PROJECTS SECTION
**ACTION:** Replace "Our Services" section (the 6-card grid)

**KEEP THE LAYOUT STRUCTURE:**
- Keep the section container styling
- Keep the card layout (but change from 6 cards to 3 cards)
- Keep the image + text overlay format
- Keep hover effects

**NEW CONTENT:**

**Section Headline:** "Active Ventures"
**Section Subheader:** "Currently building, scaling, and advising"

**Card 1 - MomMirror:**
- Image: Screenshot of MomMirror app or logo
- Headline: "MomMirror"
- Subheadline: "Co-founder & Head of Distribution"
- Description: "AI-powered mental health companion for expecting mothers. Generated 10M+ organic views and built entire go-to-market engine from zero."
- Badge/Tag: "Active • Health Tech"
- Link: Opens mommirror.com in new tab

**Card 2 - TheFactoryByEdo:**
- Image: Photo of art pieces or Etsy shop screenshot
- Headline: "TheFactoryByEdo"
- Subheadline: "Founder"
- Description: "Digital art business scaled to 2,300+ sales across 50+ countries. CHF 60,000+ revenue, now fully automated to <5 hours/week."
- Badge/Tag: "Automated • E-commerce"
- Link: Opens thefactorybyedo.etsy.com in new tab

**Card 3 - Picorn:**
- Image: Picorn product screenshot or logo
- Headline: "Picorn"
- Subheadline: "Advisor - Marketing & Distribution"
- Description: "Next-generation AI creative automation tools for digital artists. Building workflows that eliminate repetitive creative work."
- Badge/Tag: "In Development • AI Tools"
- Link: Opens picorn.com in new tab

**LAYOUT:**
```
┌─────────────────────────────────────────────────────────────────┐
│                       ACTIVE VENTURES                           │
│              Currently building, scaling, and advising          │
│                                                                 │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐     │
│  │              │    │              │    │              │     │
│  │  [MomMirror  │    │ [TheFactory  │    │   [Picorn    │     │
│  │   Screenshot]│    │  ByEdo Art]  │    │  Screenshot] │     │
│  │              │    │              │    │              │     │
│  ├──────────────┤    ├──────────────┤    ├──────────────┤     │
│  │  MomMirror   │    │TheFactoryBy  │    │   Picorn     │     │
│  │Co-founder &  │    │    Edo       │    │   Advisor    │     │
│  │Head of Dist. │    │   Founder    │    │Marketing &   │     │
│  │              │    │              │    │Distribution  │     │
│  │AI mental     │    │Digital art   │    │AI creative   │     │
│  │health app... │    │business...   │    │automation... │     │
│  │              │    │              │    │              │     │
│  │[Active•Health│    │[Automated•   │    │[Development• │     │
│  │    Tech]     │    │E-commerce]   │    │  AI Tools]   │     │
│  └──────────────┘    └──────────────┘    └──────────────┘     │
└─────────────────────────────────────────────────────────────────┘
```

**SPACING:** 
- Each card takes up 1/3 width on desktop
- Stack vertically on mobile
- 40px gap between cards
- Cards have subtle shadow on hover
- Image height: ~300px
- Total section padding: 100px top, 100px bottom

---

## 4. INTERACTIVE TIMELINE SECTION
**ACTION:** This is completely NEW - replaces "Portfolio", "Our Process", "Our Philosophy" sections

**SECTION HEADLINE:** "5 Years in 60 Seconds"
**SECTION SUBHEADER:** "Age is just a number. Output is what matters."

**TIMELINE STRUCTURE:**
Vertical timeline with alternating left/right cards

**TIMELINE ITEMS (9 items total):**

### 2022:
1. **LoCare - Hip Recovery Tracker**
   - Photo: Device prototype or app screenshot
   - Year tag: "2022"
   - Text: "Collaborated with DePuy Synthes to design IoT wearable for elderly hip replacement patients. Led user interviews and prototyped Arduino-based hardware."

2. **Launched TheFactoryByEdo**
   - Photo: Early art pieces or studio setup
   - Year tag: "2022"
   - Text: "Started selling digital art online. Built e-commerce infrastructure from scratch. Year 1 revenue: CHF 15,000."

### 2023:
3. **MSc Thesis: Breathe - Sensory Light**
   - Photo: The sensory light installation (from portfolio)
   - Year tag: "2023"
   - Text: "Developed fluid-mechanics-based lighting for public spaces. Engineered two-chamber water/oil system with rotating mechanics. Grade: Distinction."

4. **RootSlice - Autonomous Weeding Robot**
   - Photo: Robot prototype or CAD model
   - Year tag: "2023"
   - Text: "Led mechanical design for agricultural robot targeting Andean potato farms. Designed helical auger system with Arduino-controlled positioning."

5. **Graduated MSc Mechanical Engineering**
   - Photo: Graduation photo or UCL campus
   - Year tag: "2023"
   - Text: "First-class honors from University College London. Specialized in entrepreneurial finance, renewable energy, and advanced CAD."

### 2024:
6. **Junior Technical Advisor - BIS**
   - Photo: BIS building or data visualization
   - Year tag: "2024"
   - Text: "Cleaned central bank balance sheet datasets. Resolved decades of data discrepancies across 15+ central bank archives."

7. **Exhibited at Kunst in Reinach**
   - Photo: Exhibition photo (from portfolio)
   - Year tag: "2024"
   - Text: "Showcased large-scale acrylic paintings alongside professional artists. 'In My Head' - 100x120cm."

### 2025:
8. **Co-founded MomMirror**
   - Photo: App screenshot or team photo
   - Year tag: "2025"
   - Text: "Launched AI mental health companion for mothers. Achieved 10M+ organic impressions through TikTok/Instagram campaigns. Tech: Flutter, Firebase, Claude API."

9. **Completed 70.3 Ironman**
   - Photo: Race photo or finish line
   - Year tag: "2025"
   - Text: "1.9km swim, 90km bike, 21.1km run. September 2025. Mental toughness compounds everywhere."

**TIMELINE LAYOUT:**
```
┌────────────────────────────────────────────────────────────────┐
│                    5 YEARS IN 60 SECONDS                       │
│              Age is just a number. Output is what matters.     │
│                                                                │
│                            │                                   │
│    ┌───────────────┐       │  2022                            │
│    │   [LoCare     │       ●──────────────────                │
│    │    Photo]     │       │  LoCare - Hip Recovery           │
│    └───────────────┘       │  Collaborated with DePuy...      │
│                            │                                   │
│                     2022   │       ┌───────────────┐          │
│  ──────────────────●       │       │ [TheFactory   │          │
│   Launched TheFactory      │       │   Photo]      │          │
│   Started selling...       │       └───────────────┘          │
│                            │                                   │
│    ┌───────────────┐       │  2023                            │
│    │   [Breathe    │       ●──────────────────                │
│    │    Photo]     │       │  MSc Thesis: Breathe             │
│    └───────────────┘       │  Developed fluid-mechanics...    │
│                            │                                   │
│                     2023   │       ┌───────────────┐          │
│  ──────────────────●       │       │  [RootSlice   │          │
│   RootSlice Robot          │       │    Photo]     │          │
│   Led mechanical...        │       └───────────────┘          │
│                            │                                   │
│    ┌───────────────┐       │  2023                            │
│    │  [Graduation  │       ●──────────────────                │
│    │    Photo]     │       │  Graduated MSc                   │
│    └───────────────┘       │  First-class honors...           │
│                            │                                   │
│                     2024   │       ┌───────────────┐          │
│  ──────────────────●       │       │    [BIS       │          │
│   Junior Technical Advisor │       │    Photo]     │          │
│   Cleaned central bank...  │       └───────────────┘          │
│                            │                                   │
│    ┌───────────────┐       │  2024                            │
│    │  [Exhibition  │       ●──────────────────                │
│    │    Photo]     │       │  Kunst in Reinach                │
│    └───────────────┘       │  Showcased large-scale...        │
│                            │                                   │
│                     2025   │       ┌───────────────┐          │
│  ──────────────────●       │       │  [MomMirror   │          │
│   Co-founded MomMirror     │       │    Photo]     │          │
│   Launched AI mental...    │       └───────────────┘          │
│                            │                                   │
│    ┌───────────────┐       │  2025                            │
│    │   [Ironman    │       ●──────────────────                │
│    │    Photo]     │       │  Completed 70.3 Ironman          │
│    └───────────────┘       │  1.9km swim, 90km bike...        │
│                            │                                   │
└────────────────────────────────────────────────────────────────┘
```

**TIMELINE INTERACTION:**
- On scroll, each timeline item fades in sequentially
- Year markers (●) are highlighted in accent color
- Vertical line connects all dots
- Photo cards have subtle shadow
- On hover, cards slightly scale up (1.02x)
- Year tags are sticky on scroll (optional)

**STYLING DETAILS:**
- Timeline line: 4px solid, accent color (blue/teal)
- Dots: 20px diameter circles
- Photo cards: 400px width, 250px height
- Card text: 16px body, 18px headline
- Alternating left/right creates visual rhythm
- Mobile: Stack everything vertically, timeline on left edge
- Section padding: 120px top, 120px bottom
- Card gap: 80px vertical spacing between items

---

## 5. CLOSING CALL-TO-ACTION
**ACTION:** Add new section before contact form

**CONTENT:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│          LET'S BUILD SOMETHING TOGETHER                │
│                                                        │
│   I've spent the last 5 years building businesses,    │
│   shipping products, and automating systems.          │
│            Now I want to join a team.                 │
│                                                        │
│   Looking for a Swiss AI or robotics startup that     │
│   values execution speed, systems thinking, and       │
│   ambitious goals with supportive teams.              │
│                                                        │
│        [Book a Call]    [Send Email]                  │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**STYLING:**
- Background: Light accent color (very subtle blue/gray)
- Text: Center aligned
- Headline: 42px, bold
- Body: 20px, regular weight
- Buttons: Primary CTA style (same as hero)
- Padding: 80px top/bottom, 40px left/right

---

## 6. CONTACT FORM
**ACTION:** Simplify the existing contact form

**KEEP:**
- Form layout (Name, Email, Message fields)
- Send button styling
- Form validation

**REMOVE:**
- "About Us" section with team members
- "Or book a call with our expert team" duplicate CTA
- Any agency-related text

**NEW HEADLINE:** "Get in Touch"
**NEW SUBHEADER:** "Have a role in mind? Let's talk about it."

**FORM UPDATES:**
- Name (required)
- Email (required)
- Company (optional) - NEW FIELD
- Message (required) - Placeholder: "Tell me about what you're building..."

**BELOW FORM:**
```
Or reach me directly:
📧 edoardo.gambacorta@gmail.com
📱 +41 76 775 20 97
📍 Basel, Switzerland
```

**LAYOUT:**
```
┌────────────────────────────────────────────────────────┐
│                   GET IN TOUCH                         │
│          Have a role in mind? Let's talk about it.     │
│                                                        │
│  ┌──────────────────────────────────────────────┐     │
│  │ Name                                         │     │
│  │ [__________________________________]         │     │
│  │                                              │     │
│  │ Email                                        │     │
│  │ [__________________________________]         │     │
│  │                                              │     │
│  │ Company (optional)                           │     │
│  │ [__________________________________]         │     │
│  │                                              │     │
│  │ Message                                      │     │
│  │ [                                  ]         │     │
│  │ [                                  ]         │     │
│  │ [                                  ]         │     │
│  │                                              │     │
│  │              [Send Message]                  │     │
│  └──────────────────────────────────────────────┘     │
│                                                        │
│               Or reach me directly:                    │
│         📧 edoardo.gambacorta@gmail.com                │
│              📱 +41 76 775 20 97                       │
│              📍 Basel, Switzerland                     │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## FOOTER
**ACTION:** Simplify footer

**KEEP:**
- Copyright notice
- Basic footer structure

**REMOVE:**
- "Powered by Swiss Innovation"
- Multiple footer links

**NEW FOOTER:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  [LinkedIn] [GitHub] [CV Download] [Portfolio PDF]    │
│                                                        │
│       © 2026 Edoardo Gambacorta. All rights reserved. │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## FULL PAGE LAYOUT (ASCII ART)

```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo/Name]              [Navigation]           [Book Call]     │ ← Nav Bar
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                                                                 │
│         I ENGINEER PRODUCTS. THEN I MAKE THEM PROFITABLE.      │ ← Hero
│                                                                 │
│           Mechanical Engineer. Startup Builder. 24.            │
│                                                                 │
│                   [See What I've Built ↓]                       │
│                                                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    I'm Edoardo Gambacorta                       │ ← Intro Line
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                       ACTIVE VENTURES                           │ ← Projects
│              Currently building, scaling, and advising          │
│                                                                 │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐     │
│  │              │    │              │    │              │     │
│  │  [MomMirror  │    │ [TheFactory  │    │   [Picorn    │     │
│  │   Screenshot]│    │  ByEdo Art]  │    │  Screenshot] │     │
│  │              │    │              │    │              │     │
│  ├──────────────┤    ├──────────────┤    ├──────────────┤     │
│  │  MomMirror   │    │TheFactoryBy  │    │   Picorn     │     │
│  │ Co-founder & │    │    Edo       │    │   Advisor    │     │
│  │Head of Dist. │    │   Founder    │    │Marketing &   │     │
│  │              │    │              │    │Distribution  │     │
│  │AI mental     │    │Digital art   │    │AI creative   │     │
│  │health app... │    │business...   │    │automation... │     │
│  │              │    │              │    │              │     │
│  │[Active•Health│    │[Automated•   │    │[Development• │     │
│  │    Tech]     │    │E-commerce]   │    │  AI Tools]   │     │
│  └──────────────┘    └──────────────┘    └──────────────┘     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    5 YEARS IN 60 SECONDS                        │ ← Timeline
│              Age is just a number. Output is what matters.      │
│                                                                 │
│                            │                                    │
│    ┌───────────────┐       │  2022                             │
│    │   [Photo]     │       ●──────── LoCare                    │
│    └───────────────┘       │  Hip recovery tracker...          │
│                            │                                    │
│                     2022   │       ┌───────────────┐           │
│  ──────────────────●       │       │   [Photo]     │           │
│   TheFactoryByEdo          │       └───────────────┘           │
│                            │                                    │
│    ┌───────────────┐       │  2023                             │
│    │   [Photo]     │       ●──────── MSc Thesis: Breathe       │
│    └───────────────┘       │  Sensory light system...          │
│                            │                                    │
│                     2023   │       ┌───────────────┐           │
│  ──────────────────●       │       │   [Photo]     │           │
│   RootSlice Robot          │       └───────────────┘           │
│                            │                                    │
│    ┌───────────────┐       │  2023                             │
│    │   [Photo]     │       ●──────── Graduated MSc             │
│    └───────────────┘       │  First-class honors...            │
│                            │                                    │
│                     2024   │       ┌───────────────┐           │
│  ──────────────────●       │       │   [Photo]     │           │
│   Junior Technical Advisor │       └───────────────┘           │
│                            │                                    │
│    ┌───────────────┐       │  2024                             │
│    │   [Photo]     │       ●──────── Kunst in Reinach          │
│    └───────────────┘       │  Art exhibition...                │
│                            │                                    │
│                     2025   │       ┌───────────────┐           │
│  ──────────────────●       │       │   [Photo]     │           │
│   Co-founded MomMirror     │       └───────────────┘           │
│                            │                                    │
│    ┌───────────────┐       │  2025                             │
│    │   [Photo]     │       ●──────── Completed 70.3 Ironman    │
│    └───────────────┘       │  Mental toughness...              │
│                            │                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                 LET'S BUILD SOMETHING TOGETHER                  │ ← CTA
│                                                                 │
│   I've spent the last 5 years building businesses,             │
│   shipping products, and automating systems.                   │
│            Now I want to join a team.                          │
│                                                                 │
│              [Book a Call]    [Send Email]                     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                        GET IN TOUCH                             │ ← Contact
│                Have a role in mind? Let's talk.                │
│                                                                 │
│  ┌──────────────────────────────────────────────────────┐      │
│  │ [Name]                                               │      │
│  │ [Email]                                              │      │
│  │ [Company - optional]                                 │      │
│  │ [Message]                                            │      │
│  │                                                      │      │
│  │              [Send Message]                          │      │
│  └──────────────────────────────────────────────────────┘      │
│                                                                 │
│                   Or reach me directly:                         │
│              📧 edoardo.gambacorta@gmail.com                    │
│                   📱 +41 76 775 20 97                           │
│                   📍 Basel, Switzerland                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [LinkedIn] [GitHub] [CV Download] [Portfolio PDF]             │ ← Footer
│                                                                 │
│       © 2026 Edoardo Gambacorta. All rights reserved.          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## DESIGN SYSTEM TO MAINTAIN

### Colors:
- Keep existing color scheme from current site
- Primary accent: Use current button color
- Background: White/light gray sections
- Timeline accent: Use primary color for dots and line

### Typography:
- Keep existing font family
- Hero: Keep current sizing
- Body text: 16-18px
- Headlines: 36-48px

### Spacing:
- Section padding: 100-120px vertical
- Component gap: 40-80px
- Card padding: 32px
- Mobile: Reduce padding by 50%

### Components to Reuse:
- Button styles (from hero CTA)
- Card styles (from services section)
- Form inputs (from contact form)
- Navigation bar (keep as is)

### Animations:
- Keep smooth scroll behavior
- Add fade-in on scroll for timeline items
- Keep hover effects on cards/buttons
- Consider parallax on hero section (optional)

---

## MOBILE RESPONSIVE CHANGES

### Hero: 
- Stack headline into 2 lines
- Reduce font size by 30%

### Projects:
- Stack cards vertically
- Full width cards
- 24px gap between

### Timeline:
- Timeline line moves to left edge
- All cards align left
- Photo above text
- Reduce photo size to 280px width

### Contact Form:
- Full width inputs
- Stack everything vertically

---

## TECHNICAL IMPLEMENTATION NOTES

1. **Remove these components:**
   - Philosophy carousel section
   - Process tabs section
   - Portfolio carousel
   - Insights blog grid
   - About Us team section

2. **Create these new components:**
   - `IntroLine.jsx` - Simple centered text with animation
   - `ProjectCards.jsx` - 3-card grid for active ventures
   - `Timeline.jsx` - Vertical timeline with alternating cards
   - `CTASection.jsx` - Call to action before contact form

3. **Modify these components:**
   - `Hero.jsx` - Update text only
   - `ContactForm.jsx` - Simplify, add company field, update copy
   - `Footer.jsx` - Reduce links, update copy

4. **Page structure:**
```javascript
<Layout>
  <Navigation />
  <Hero />
  <IntroLine />
  <ProjectCards />
  <Timeline />
  <CTASection />
  <ContactForm />
  <Footer />
</Layout>
```

---

## CONTENT SOURCES FOR IMAGES

1. **MomMirror**: App screenshots from actual product
2. **TheFactoryByEdo**: Art pieces from portfolio PDF (page 24-26)
3. **Picorn**: Logo or product mockup
4. **LoCare**: Device photos from portfolio PDF (page 8-9)
5. **Breathe**: Installation photos from portfolio PDF (page 4-6)
6. **RootSlice**: Robot CAD model or prototype photos
7. **Graduation**: Personal photo or UCL campus
8. **BIS**: BIS building or generic data visualization
9. **Exhibition**: Photos from portfolio PDF (page 24)
10. **MomMirror timeline**: App interface or team photo
11. **Ironman**: Race finish photo

---

## FINAL NOTES

**The key transformation:**
- FROM: "We are an AI agency that helps you"
- TO: "I am a builder looking to join your team"

**Personality shift:**
- FROM: Corporate, agency-speak, plural "we"
- TO: Personal, confident, singular "I"

**Focus shift:**
- FROM: Selling services to potential clients
- TO: Showcasing track record to potential employers

**Proof points:**
- Every section shows execution: revenue numbers, view counts, specific achievements
- Timeline creates narrative arc: steady builder for 5 years
- Projects show breadth: hardware, software, marketing, business

**The subliminal message:**
"I've successfully built multiple businesses. I'm choosing to join your team because I want to build something bigger than I can alone. You'd be lucky to have me, and I know it—but I also want to be part of something special."
