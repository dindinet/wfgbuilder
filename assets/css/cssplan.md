# Hugo Modern CSS Framework - Project Specification

## Project Overview

This project creates a modern, utility-first CSS framework specifically designed for Hugo static site generator. The framework emphasizes modern CSS techniques without JavaScript or traditional media queries.

### Core Goals
- **Hugo Integration**: Seamless integration with Hugo's template system and partials
- **Modern CSS Only**: No JavaScript, no traditional media queries
- **Utility-First Grid System**: Flexible, reusable utility classes for layouts
- **Developer-Friendly**: Easy for Hugo developers to create custom partials and components
- **Responsive by Design**: Using CSS Grid auto-fit, minmax, clamp, and logical properties
- **Theme System**: Built-in light/dark theme capability with extensive custom properties

## Technical Architecture

### CSS Architecture Pattern
Following ITCSS (Inverted Triangle CSS) methodology with modular file organization:

```
assets/css/
├── abstracts/
│   └── variables.css
├── base/
│   ├── base.css
│   ├── helpers.css
│   └── reset.css
├── components/
│   ├── banner.css
│   ├── buttons.css
│   ├── cards.css
│   ├── forms.css
│   ├── grids.css
│   ├── icons.css
│   ├── inverse.css
│   ├── menus.css
│   └── tables.css
├── layouts/
│   ├── footer.css
│   ├── header.css
│   ├── post-page.css
│   ├── section.css
│   └── site.css
└── main.css
```


### Hugo Integration
- CSS bundled via Hugo Pipes: `{{ ($css | resources.Concat "css/bundle.css" | resources.Minify | resources.Fingerprint).RelPermalink }}`
- Custom CSS from partials collected via Hugo .site.Store
- Custom CSS injected in `<head>` after main stylesheet

## Key Technical Decisions

### 1. Grid System Approach: Utility-Based
**Chosen**: Utility-based grid system
**Rationale**: Maximum flexibility for Hugo developers creating partials, reduces need for custom CSS, better template integration

Example utility usage:
```html
<div class="grid grid-cols-auto-fit grid-gap-md grid-min-300">
  <article class="card span-2">Content</article>
  <aside class="sidebar span-1">Sidebar</aside>
</div>
```

### 2. Modern CSS Techniques
- **CSS Grid**: Using `auto-fit`, `minmax()`, `calc()` instead of media queries
- **CSS Custom Properties**: Extensive use throughout for theming and flexibility
- **Logical Properties**: `margin-inline`, `padding-block`, etc. for internationalization
- **Responsive Typography**: `clamp()` for fluid font sizing
- **CSS Grid Areas**: For complex layouts without media queries

### 3. Theme System
- Light/dark theme capability using CSS custom properties
- Color system designed for theme switching
- All colors, spacing, and typography defined as custom properties
