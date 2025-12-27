# Bootstrap 5 Learning Reference 🚀

A comprehensive, interactive learning reference demonstrating Bootstrap 5 components, utilities, and best practices.

## 📋 Overview

This project serves as a complete guide to Bootstrap 5, showcasing all major components and utilities with live examples. Perfect for learning, reference, or quick prototyping.

## 🛠️ Technologies Used

- **Bootstrap 5.3.2** - CSS Framework
- **Bootstrap Icons 1.11.1** - Icon Library
- **Custom CSS** - Enhanced styling & animations
- **Vanilla JavaScript** - Component initialization & interactivity

## 📁 Project Structure

```
bootstrap-practice/
├── index.html      # Main HTML with all component demos
├── style.css       # Custom CSS enhancements
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## 🎯 Components Covered

### Layout & Grid
- **Grid System** - 12-column responsive grid
- **Breakpoints** - xs, sm, md, lg, xl, xxl
- **Gutters** - Row and column spacing
- **Offset & Order** - Column positioning
- **Row Columns** - Auto-layout columns

### Flexbox Utilities
- Direction (row, column, reverse)
- Justify & Align content
- Wrap & No-wrap
- Grow & Shrink
- Gap utilities

### Typography
- Headings (h1-h6, display headings)
- Lead paragraphs
- Blockquotes
- Lists (unstyled, inline)
- Text utilities

### Colors
- Background colors
- Text colors
- Subtle backgrounds
- Gradients
- Opacity utilities

### Buttons
- Solid variants
- Outline variants
- Sizes (sm, lg)
- States (active, disabled)
- Button groups & toolbars

### Cards
- Basic cards
- Cards with images
- Horizontal cards
- Card overlays
- Colored & bordered cards
- Card groups

### Forms
- Input types
- Floating labels
- Select & Textarea
- Checkboxes & Radios
- Switches
- Input groups
- Range & Color pickers
- File inputs
- Validation states

### Tables
- Basic tables
- Striped & Hover
- Bordered & Small
- Contextual classes
- Dark theme
- Responsive tables

### Components
- **Alerts** - All color variants, dismissible
- **Badges** - Colors, pills, positioned
- **Progress** - Basic, striped, animated
- **Spinners** - Border, grow, sizes, colors
- **List Groups** - Basic, flush, badges, links, contextual
- **Accordion** - Collapsible panels, flush variant
- **Tabs & Pills** - Navigation variants, vertical
- **Breadcrumb** - Navigation path
- **Pagination** - Page navigation
- **Modals** - Dialog boxes, sizes
- **Tooltips** - Hover information
- **Popovers** - Click information
- **Toast** - Notifications
- **Offcanvas** - Slide-out panels
- **Dropdowns** - Menu triggers
- **Collapse** - Show/hide content
- **Carousel** - Image slider

### Utilities
- **Spacing** - Margins & Padding (0-5, auto)
- **Sizing** - Width & Height (25, 50, 75, 100, auto)
- **Borders** - Styles, colors, radius
- **Display** - none, block, flex, inline, etc.
- **Position** - static, relative, absolute, fixed, sticky
- **Shadows** - sm, default, lg
- **Overflow** - visible, hidden, scroll, auto
- **Visibility** - visible, invisible
- **Opacity** - 0, 25, 50, 75, 100
- **Z-index** - Stacking order
- **Object-fit** - Image fitting
- **Interactions** - Selection, pointer events
- **Vertical Align** - Text alignment

### Helpers
- **Aspect Ratios** - 1x1, 4x3, 16x9, 21x9
- **Stacks** - Vertical & Horizontal
- **Visually Hidden** - Accessibility
- **Stretched Link** - Clickable areas
- **Icon Links** - Bootstrap Icons integration
- **Float & Clearfix** - Legacy layout

## ✨ Custom Features

### Theme Toggle
- Light/Dark mode switch
- Persists preference in localStorage
- Press `T` key to toggle

### Back to Top Button
- Appears after scrolling 300px
- Smooth scroll animation

### Scroll Animations
- Cards fade in on scroll
- Uses Intersection Observer API

### Code Copy
- Copy buttons on code blocks
- Clipboard API integration

### Smart Navigation
- Active state updates on scroll
- Auto-closes mobile menu
- Smooth scroll to sections

## 🚀 Quick Start

1. **Open in Browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

2. **Or use Live Server**
   ```bash
   # With VS Code Live Server extension
   # Right-click index.html → Open with Live Server
   ```

## 📚 Learning Path

1. **Start with Layout** - Understand the grid system
2. **Explore Utilities** - Learn spacing, sizing, colors
3. **Study Components** - See how Bootstrap builds UI
4. **Practice Forms** - Build form layouts
5. **Add Interactivity** - Use modals, dropdowns, tooltips

## 🎨 Customization Tips

### Override Bootstrap Variables
```css
:root {
    --bs-primary: #your-color;
    --bs-body-font-family: 'Your Font', sans-serif;
}
```

### Extend Components
```css
.btn-custom {
    /* Your custom button styles */
}
```

### Dark Mode Support
```css
[data-bs-theme="dark"] .your-class {
    /* Dark mode specific styles */
}
```

## 📖 Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
- [Bootstrap Blog](https://blog.getbootstrap.com/)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `T` | Toggle dark/light mode |
| `Home` | Scroll to top |

## 🔄 Related Projects

- `css-practice/` - Vanilla CSS learning reference
- `tailwind-practice/` - Tailwind CSS learning reference

## 📝 Notes

- All components are self-contained in a single HTML file
- Custom CSS enhances without overriding Bootstrap
- JavaScript initializes tooltips, popovers, and adds interactivity
- Fully responsive - works on all device sizes

---

**Happy Learning! 🎉**

*Part of the Comparative Learning Web Design Suite*
