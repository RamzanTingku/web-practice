# Tailwind CSS Learning Reference

A comprehensive, interactive learning reference for Tailwind CSS — part of the **Comparative Learning Web Design Suite**.

## 🎯 Overview

This project provides a hands-on, visual reference for learning Tailwind CSS, featuring all major utilities and components with live examples. It's designed to complement the CSS and Bootstrap practice projects in this suite, enabling comparative learning across different styling approaches.

## 📁 Project Structure

```
tailwind-practice/
├── index.html      # Main HTML file with all Tailwind examples
├── style.css       # Custom CSS enhancements
├── script.js       # Interactive functionality
└── README.md       # This file
```

## ✨ Features

### Core Utilities

| Section | Description |
|---------|-------------|
| **Typography** | Font sizes (xs-5xl), weights, alignment, decoration, transform, line-height, letter-spacing |
| **Colors** | Complete color palette, text colors, backgrounds, gradients, opacity |
| **Flexbox** | Direction, justify, align, wrap, grow/shrink, gap |
| **CSS Grid** | Columns, rows, spans, responsive layouts |
| **Spacing** | Padding, margin, space-between utilities |
| **Sizing** | Width, height, min/max constraints |

### Components

- **Buttons** — Solid, outline, ghost styles; sizes; states; icon buttons; button groups
- **Cards** — Basic, image, badge, icon, footer, hover effects, gradient borders
- **Forms** — Inputs, selects, textareas, checkboxes, radios, toggles, file inputs
- **Tables** — Basic, striped, hover effects, with actions
- **Alerts** — Info, success, warning, error variants
- **Badges** — Solid, soft, pill, with indicators
- **Progress Bars** — Various colors and styles
- **Spinners** — Border, dots, button loading states
- **Avatars** — Sizes, status indicators, avatar groups
- **Breadcrumb** — Navigation breadcrumbs
- **Pagination** — Page navigation
- **Tabs** — Standard and pill-style tabs
- **Accordion** — Collapsible sections using `<details>`
- **Dropdown** — CSS-only hover dropdowns
- **Modal** — Functional dialog with overlay
- **Toast** — Notification examples
- **Tooltips** — CSS hover tooltips

### Utility Classes

- Borders and border radius
- Shadows (sm to 2xl)
- Display properties
- Position utilities
- Overflow control
- Z-index layering
- Transitions and transforms
- Cursor styles
- Responsive breakpoints reference

## 🚀 Getting Started

### Option 1: Direct Browser

Simply open `index.html` in any modern web browser:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Option 2: VS Code Live Server

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → "Open with Live Server"
3. Browser opens automatically with hot reload

### Option 3: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

## 🎨 Theme Support

The project includes full dark mode support:

- Click the **sun/moon icon** in the navigation to toggle
- Theme preference is saved to localStorage
- Respects system preference on first visit

## 📱 Responsive Design

All examples are fully responsive:

| Breakpoint | Min Width | Prefix |
|------------|-----------|--------|
| Default | 0px | (none) |
| Small | 640px | `sm:` |
| Medium | 768px | `md:` |
| Large | 1024px | `lg:` |
| Extra Large | 1280px | `xl:` |
| 2XL | 1536px | `2xl:` |

## 🔧 Customization

### Tailwind Config

The CDN version includes a custom configuration:

```javascript
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: { /* blue palette */ }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                // ... more custom animations
            }
        }
    }
}
```

### Custom CSS

`style.css` adds:
- Custom scrollbar styling
- Selection colors
- Additional animations (shimmer, float, shake, gradient)
- Skeleton loading styles
- Print styles
- Accessibility improvements

## 📚 Learning Path

### Recommended Order

1. **Typography** — Understand text styling
2. **Colors** — Learn the color system
3. **Spacing** — Master padding and margin
4. **Flexbox** — One-dimensional layouts
5. **Grid** — Two-dimensional layouts
6. **Sizing** — Width and height control
7. **Components** — Build real UI elements
8. **Utilities** — Polish with borders, shadows, etc.

### Comparison with Other Frameworks

| Concept | Pure CSS | Bootstrap | Tailwind |
|---------|----------|-----------|----------|
| Approach | Semantic classes | Component classes | Utility classes |
| Customization | Full control | Variables | Config file |
| File size | Minimal | Large | Purged in build |
| Learning curve | Steep | Moderate | Moderate |

## 🔗 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com) — Premium components
- [Heroicons](https://heroicons.com) — SVG icons by Tailwind team
- [Headless UI](https://headlessui.com) — Accessible UI components
- [Tailwind Play](https://play.tailwindcss.com) — Online playground

## 📝 Cheat Sheet

### Common Patterns

```html
<!-- Centered flex container -->
<div class="flex items-center justify-center">

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<!-- Card pattern -->
<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">

<!-- Button pattern -->
<button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">

<!-- Input pattern -->
<input class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
```

### Spacing Scale Reference

| Class | Size |
|-------|------|
| `0` | 0px |
| `1` | 0.25rem (4px) |
| `2` | 0.5rem (8px) |
| `4` | 1rem (16px) |
| `6` | 1.5rem (24px) |
| `8` | 2rem (32px) |
| `12` | 3rem (48px) |
| `16` | 4rem (64px) |

## 🤝 Part of the Suite

This project is part of the **Comparative Learning Web Design Suite**:

- 📁 `css-practice/` — Pure CSS fundamentals
- 📁 `bootstrap-practice/` — Bootstrap framework
- 📁 `tailwind-practice/` — **You are here** — Tailwind CSS
- 📁 `flex-practice/` — Flexbox deep dive
- 📁 `grid-practice/` — CSS Grid deep dive

## 📄 License

This is a learning resource. Feel free to use, modify, and share.

---

**Happy Learning!** 🚀

Built with ❤️ using Tailwind CSS
