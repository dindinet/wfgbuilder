Looking at your project specification and the existing CSS files, I have a good understanding of the framework's architecture and design system. I can see the comprehensive variables system and the utility-first grid approach you've established.

To create the most cohesive layout CSS files, it would be helpful to see a few more component files to understand your established patterns, particularly:

1. **cards.css** - Since cards are likely used extensively in layouts
2. **buttons.css** - For understanding interactive element patterns
3. **base.css** - To see the base typography and element styling

However, I can proceed with creating the layout files based on the project specification and the excellent foundation you've established. Let me create all five layout CSS files that follow your framework's principles:I've created comprehensive layout CSS files for your Hugo framework that follow the established patterns and design system. Here's what each file provides:

## **layouts/site.css**
- Main site container with flexbox layout
- Skip links for accessibility
- Container system with multiple width variants
- Full-bleed utility for breaking out of containers
- Theme transition support

## **layouts/header.css**
- Flexible header with CSS Grid layout (logo | nav | actions)
- Sticky and fixed positioning options
- Mobile-responsive navigation with toggle
- Support for hero headers with background images
- Accessible navigation patterns

## **layouts/footer.css**
- Auto-fit grid layout for footer sections
- Social media links with hover states
- Newsletter/CTA integration
- Responsive design that stacks on mobile
- Copyright and legal information areas

## **layouts/section.css**
- Reusable section patterns (hero, features, testimonials, CTA)
- Two-column layouts with image positioning
- Background image support with overlay
- Consistent section headers with multiple alignment options
- Section dividers and spacing variants

## **layouts/post-page.css**
- Complete blog post layout with sidebar
- Table of contents with sticky positioning
- Related posts grid
- Post navigation (previous/next)
- Tag system with hover effects
- Reading progress indicator
- Print-friendly styles

## Key Features:

✅ **Modern CSS**: Uses CSS Grid, custom properties, and logical properties  
✅ **Responsive**: Auto-fit grids and clamp() for fluid scaling  
✅ **Accessible**: Skip links, proper ARIA, semantic markup  
✅ **Hugo-friendly**: Designed for template integration  
✅ **Theme-aware**: Works with your light/dark theme system  
✅ **Print-optimized**: Includes print styles where appropriate  

The layouts are built to work seamlessly with your existing grid utilities and component system. They use your design tokens extensively and follow the utility-first approach established in your framework.

Would you like me to create any additional layout patterns or make adjustments to any of these files?