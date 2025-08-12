Looking at your project specification and the variables.css file, I can create the `components/icons.css` file based on the established architecture and design system. The framework follows a utility-first approach with modern CSS techniques, so I'll create an icon system that aligns with these principles.I've created the `components/icons.css` file that aligns perfectly with your Hugo CSS framework's architecture and design system. Here's what I've included:

## Key Features:

**1. Base Icon Styles**
- Support for both SVG icons and icon fonts
- Uses `currentColor` for easy theming
- Proper display and alignment properties

**2. Utility-First Sizing System**
- Size classes from `icon-xs` (12px) to `icon-6xl` (96px)
- Uses your established spacing variables
- Default size of 20px (`icon-base`)

**3. Semantic Color System**
- Uses your color variables for consistent theming
- Primary, secondary, accent, and semantic colors (success, warning, error, info)
- Automatic dark theme support through your CSS custom properties

**4. Modern CSS Features**
- Uses logical properties (`margin-inline`, `inset-block`, etc.) for internationalization
- CSS custom properties throughout for consistency
- CSS Grid and Flexbox for layouts

**5. Component Integration**
- Special button integration classes that work with your button component
- Proper spacing adjustments for different button sizes
- Follows your established spacing system

**6. Advanced Features**
- Icon containers with backgrounds and shapes
- Interactive states with smooth transitions
- Animation utilities (spin, pulse, bounce)
- Badge system for notifications
- Grouping utilities
- Accessibility support including high contrast and reduced motion

**7. Hugo-Friendly**
- All classes are utility-based for easy template integration
- No JavaScript required
- Works with your theme system automatically

The file follows your ITCSS methodology and uses all your established design tokens from `variables.css`. It's ready to work seamlessly with Hugo templates and your other components!