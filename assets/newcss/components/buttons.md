Perfect! Your variables.css is comprehensive and well-structured. Now I'll create a `buttons.css` component that leverages your design system. Based on your variables, I can see you have a complete color palette, spacing system, typography, and component values ready.Perfect! I've created a comprehensive `buttons.css` component that leverages your design system. Here's what I've included:

## Key Features:

**Base Button System:**
- Foundation `.btn` class with proper flexbox layout, typography from your variables
- Focus-visible support with your border-focus color
- Disabled states with opacity
- Smooth transitions using your duration and easing values

**Button Variants:**
- **Primary/Secondary**: Using your primary-600/secondary-600 colors
- **Outline**: Transparent background with primary border
- **Ghost**: Minimal styling for subtle actions
- **Semantic**: Success, Warning, Danger, Info using your semantic colors

**Size System:**
- `.btn-xs`, `.btn-sm`, `.btn-lg`, `.btn-xl` using your spacing scale
- Proper gap and border-radius adjustments for each size

**Modifiers:**
- **Full width**: `.btn-full` and `.btn-block`
- **Square/Circle**: For icon-only buttons with proper aspect ratios
- **Loading state**: With CSS-only spinner animation

**Button Groups:**
- Seamless connected buttons with proper border handling
- Focus management within groups
- Size variants for groups

**Dark Theme Support:**
- Automatic adaptation via `prefers-color-scheme`
- Manual theme class support (`.dark` or `data-theme="dark"`)
- Proper outline button contrast adjustments

## Usage Examples:

```html
<!-- Basic buttons -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Subtle</button>

<!-- Sizes -->
<button class="btn btn-primary btn-xs">Extra Small</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- Semantic variants -->
<button class="btn btn-success">Save</button>
<button class="btn btn-danger">Delete</button>

<!-- Button group -->
<div class="btn-group">
  <button class="btn btn-outline">Left</button>
  <button class="btn btn-outline">Middle</button>
  <button class="btn btn-outline">Right</button>
</div>
```

The component fully integrates with your design system and will automatically adapt to your light/dark themes. Ready for the next component? I'd suggest either `cards.css` or `forms.css` next!