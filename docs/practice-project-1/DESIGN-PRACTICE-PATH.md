# Design-First Web Dev Practice Path (HTML + CSS + Tailwind + Bootstrap)

This path is built around **one “ideal practical project”** that you build multiple times:
1) Plain HTML/CSS (to learn fundamentals)
2) Tailwind version (utility-first + component composition)
3) Bootstrap version (framework components + layout + theming)

You’ll end with the core UI skills used in real projects: responsive layouts, accessible forms, reusable components, consistent spacing/typography, and a maintainable UI system.

---

## The Ideal Practice Project (Capstone Spec)
Build a small product called **“TaskFlow”** (or any name). It’s a realistic UI-only project.

**Pages (UI only):**
- **Landing page** (hero, features, testimonials, pricing, FAQ, footer)
- **Auth pages**: Sign in + Sign up
- **Dashboard shell**: sidebar + topbar + content area
- **Dashboard pages**:
  - Overview (stats cards, chart placeholder, recent activity table)
  - Projects list (table/list + empty state)
  - Project detail (tabs, info cards)
  - Settings (form-heavy page)

**Core components:**
- Responsive navbar (mobile menu)
- Buttons (primary/secondary/danger/ghost)
- Form fields (text, email, password, select, checkbox, radio)
- Alerts (success/error/info)
- Cards, badges, table, pagination
- Modal dialog + dropdown menu
- Toast notification (optional)

**UI standards you must meet:**
- Mobile-first responsive design (min 3 breakpoints)
- Accessible semantics (headings, labels, focus states)
- Consistent spacing + typography scale
- Reusable component patterns (not copy/paste chaos)
- Fast iteration: should be easy to add a new page/component

---

## How to Study (Simple Loop)
For each module:
1) **Read the notes** (below)
2) **Build a small feature** in the capstone
3) **Refactor** (reduce duplication, improve naming, improve a11y)
4) **Review with a checklist**

Time suggestion: 60–90 mins/day, 5 days/week.

---

## Phase 0 — Setup + Visual Fundamentals (0.5–1 day)
**Goal:** Build a design eye and a consistent UI baseline.

### What to learn (notes)
- Spacing systems: 4px/8px grid thinking
- Typography basics: sizes, line-height, measure (line length), hierarchy
- Color basics: contrast, neutral palettes, accents, semantic colors (success/warn/error)
- Layout rhythm: consistent vertical spacing

### Build (in your capstone)
- Pick a simple neutral palette + one accent
- Define a basic typography scale (H1/H2/H3/body/small)
- Define button styles (primary/secondary)

### Definition of done
- You can explain why your spacing is consistent
- Your headings look clearly hierarchical

---

## Phase 1 — HTML that Real Projects Use (2–4 days)
**Goal:** Write semantic, accessible HTML that is easy to style.

### Learn (notes)
- Document structure: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`
- Headings: one H1 per page, logical nesting
- Lists for navigation/menus
- Images: `alt` text rules (decorative vs informative)
- Forms: `label` + `for`, `fieldset`/`legend`, required indicators
- Buttons vs links: actions are buttons, navigation is links

### Build
- Landing page HTML only (no CSS yet)
- Auth page HTML only
- Dashboard shell HTML only

### Checklist
- Every input has a label
- Landmarks exist (`main`, `nav`)
- Buttons are not used as links and vice versa

---

## Phase 2 — CSS Core (the 20% that gives 80% results) (1–2 weeks)
**Goal:** Be confident with layout, responsiveness, and component styling.

### Module 2.1 — CSS Box Model + Sizing
**Learn**
- `box-sizing: border-box`
- margin collapse basics
- `max-width`, `min-height`, `aspect-ratio`

**Build**
- Container system: centered layout with max-width
- Card component with padding + border + radius

### Module 2.2 — Typography + Rhythm
**Learn**
- `line-height`, `letter-spacing` (use sparingly)
- font stacks, `font-weight`
- controlling vertical spacing with consistent margins

**Build**
- Landing page typography
- Button text alignment and sizing

### Module 2.3 — Layout: Flexbox
**Learn**
- common patterns: navbar, centered content, equal-height cards
- `gap` > margin hacks

**Build**
- Responsive navbar (desktop horizontal)
- Feature section with icon + text

### Module 2.4 — Layout: CSS Grid
**Learn**
- 2D layout, grids that change at breakpoints
- `grid-template-columns: repeat(auto-fit, minmax(...))`

**Build**
- Pricing section grid
- Dashboard cards grid

### Module 2.5 — Responsive Design (Mobile-first)
**Learn**
- start mobile layout first
- breakpoints based on layout needs, not devices
- fluid sizing: `%`, `rem`, `clamp()` (optional)

**Build**
- Make landing page responsive at 3 widths

### Module 2.6 — Forms + States
**Learn**
- focus styles (`:focus-visible`)
- validation states (error text + red border)
- disabled styles

**Build**
- Sign in + Sign up forms with error states

### Module 2.7 — Component Architecture (Plain CSS)
**Learn**
- naming conventions (BEM-ish or your own consistent approach)
- avoid over-specific selectors
- build components: button, input, card, badge, alert

**Build**
- Create a small component library in CSS

### Definition of done (Phase 2)
- You can build a responsive page without copying random snippets
- Your components look consistent across pages

---

## Phase 3 — Tailwind (Utility-First, Real-World Workflow) (1–2 weeks)
**Goal:** Build fast, consistent UIs with a design system mindset.

### Learn (notes)
- Utility-first mental model: compose small classes into components
- Consistent spacing and typography using Tailwind scale
- Responsive variants: `sm:`, `md:`, `lg:`
- States: `hover:`, `focus-visible:`, `disabled:`
- Layout utilities: flex/grid/container
- Extracting reuse:
  - Component files (React components) OR
  - Reusable class strings (careful) OR
  - `@apply` (use selectively)

### Tailwind practice steps
1) Rebuild **Landing page** with Tailwind
2) Rebuild **Auth pages** with Tailwind
3) Rebuild **Dashboard shell** with Tailwind

### Tailwind component checklist
- Buttons share a consistent base style
- Focus ring is visible and not removed
- Spacing uses Tailwind scale (avoid random inline styles)

### Mini-challenges
- Add dark-mode styling (optional)
- Build a responsive sidebar that collapses (UI only)

---

## Phase 4 — Bootstrap (Framework Components + Layout + Theming) (4–8 days)
**Goal:** Ship UI quickly using a component framework, while understanding its limits.

### Learn (notes)
- Grid system + responsive utilities
- Bootstrap components: navbar, buttons, forms, alerts, cards, modals
- Customizing:
  - prefer variables/theme configuration over overriding random selectors
- When to use Bootstrap:
  - quick admin dashboards
  - internal tools
  - teams that want consistent defaults

### Bootstrap practice steps
1) Rebuild **Dashboard** using Bootstrap components
2) Add modal + dropdowns (Bootstrap JS behavior)
3) Implement forms with validation styling

### Bootstrap checklist
- You rely on Bootstrap’s spacing/typography utilities consistently
- You avoid heavy custom CSS unless necessary

---

## Phase 5 — “Professional UI” Topics (Pick as needed) (1–2 weeks total, optional)
These are what make your UI feel real.

### Accessibility (high-value)
- keyboard navigation (tab order)
- visible focus indicators
- semantic HTML first
- `aria-*` only when needed

### UI states
- loading, empty, error, success
- skeleton placeholders (optional)

### Responsive images
- object-fit, responsive containers

### Layout patterns
- sticky header
- fixed sidebar
- scroll containers inside dashboards

---

## Daily / Weekly Practice Plan (Suggested)
### Week 1 (HTML + CSS foundations)
- Day 1: semantic HTML + landing skeleton
- Day 2: CSS base (container, typography)
- Day 3: flexbox patterns (navbar, feature rows)
- Day 4: grid patterns (pricing, dashboard cards)
- Day 5: forms + validation states

### Week 2 (CSS components + polish)
- Day 1: buttons, alerts, badges
- Day 2: cards, tables, empty states
- Day 3: responsive dashboard shell
- Day 4: refactor CSS (reduce duplication)
- Day 5: accessibility pass

### Week 3 (Tailwind rebuild)
- Day 1–2: landing
- Day 3: auth pages
- Day 4–5: dashboard shell + components

### Week 4 (Bootstrap rebuild)
- Day 1–2: dashboard + navbar/sidebar
- Day 3: forms + validation
- Day 4: modal + dropdown
- Day 5: refactor + polish

---

## Practical Checklists (Use Every Time)
### Layout checklist
- Consistent container width
- Spacing uses a clear scale
- Sections align vertically and horizontally
- Breakpoints fix layout issues (not cosmetic)

### Typography checklist
- One H1 per page
- Clear hierarchy (H2 for sections, H3 for subsections)
- Body text readable (line-height not cramped)

### Form checklist
- Label for every input
- Error messages appear next to fields
- Focus visible for keyboard users

---

## What “Good” Looks Like (Fast Self-Review)
If your UI feels off, check these first:
- Spacing: are margins/paddings consistent?
- Alignment: are items aligned to a grid?
- Typography: is there enough contrast between headings and body?
- Color: is contrast high enough and accent used consistently?

---

## How to Use Your Current Workspace
You already have:
- `html/index.html` (good for Phase 1–2)
- a Vite React project under `react-crash-cource/react-crash-cource/` (great for Tailwind phase)

Recommended approach:
- Use `html/` for **pure HTML/CSS** versions.
- Use the React + Vite project for **Tailwind** components (buttons, forms, layout shells).
- Use a separate HTML page (or a simple Vite page) for **Bootstrap** practice.

---

## If You Want, I Can Set This Up For You
I can also scaffold the folders/pages for the capstone (landing/auth/dashboard) inside your existing `html/` folder and/or your Vite project, but I didn’t change any code yet because you asked for the practice path + notes first.
