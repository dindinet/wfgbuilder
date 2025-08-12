# Hugo Site Builder Project Specification

## 1. Introduction & Project Overview
### 1.1. Project Goals
This project aims to develop a modern, flexible, and extensible site builder using Hugo as the static site generator, powered by a utility-first CSS framework, and integrated with Decap CMS for intuitive content management. The primary goal is to empower website developers and content creators to easily build pages from pre-defined sections.

### 1.2. Key Principles
- **Utility-First CSS**: Most layouts and styling achievable with utility classes.
- **Custom Property Driven**: Easy theming and customization through CSS custom properties.
- **Modern CSS**: Embracing latest CSS features (Grid, `clamp()`, logical properties) over legacy techniques.
- **Hugo-Native**: Designed specifically for Hugo's template system and asset pipeline.
- **Performance-Focused**: Single CSS bundle, minimal custom CSS, optimized image handling.
- **Accessible**: Semantic HTML, logical properties, proper contrast.
- **Maintainable**: Clear file organization, naming conventions, and modular components.
- **Extensible**: Easy for developers to add new page sections and components.

## 2. CSS Framework Specification
### 2.1. Core Principles
(As above, detailed in 1.2)

### 2.2. Architecture
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

### 2.3. Hugo Integration
- CSS bundled via Hugo Pipes: `{{ ($css | resources.Concat "css/bundle.css" | resources.Minify | resources.Fingerprint).RelPermalink }}`
- Custom CSS from partials collected via Hugo `.Site.Store` (using `universal-css-collector.html`).
- Custom CSS injected in `<head>` after main stylesheet.

### 2.4. Technical Decisions
- **Grid System Approach**: Utility-based grid system using CSS Grid (`auto-fit`, `minmax()`, `calc()`) for maximum flexibility and responsiveness without traditional media queries.
- **Modern CSS Techniques**: Extensive use of CSS Custom Properties for theming, Logical Properties for internationalization, and `clamp()` for fluid typography.
- **Theme System**: Light/dark theme capability using CSS custom properties, with a color system designed for easy switching.

### 2.5. Design Tokens & Variables (`variables.css` requirements)
#### 2.5.1. Color System
- Primary, secondary, accent color families.
- Neutral color scale (grays).
- Semantic colors (success, warning, error, info).
- Light and dark theme variants.
- Background and text color relationships defined as custom properties.

#### 2.5.2. Typography Scale
- Responsive font sizes using `clamp()` with sensible defaults.
- Support for various heading sizes and body text.
- Font family stack for body text and headings.
- Line height and letter spacing values defined as custom properties.

#### 2.5.3. Spacing System
- Consistent spacing scale (e.g., xs, sm, md, lg, xl, xxl) using custom properties.
- Component-specific spacing values.
- Grid gap values.
- Container padding and margin values.

#### 2.5.4. Layout Values
- Grid breakpoints.
- Container sizes (e.g., `--content-width`, `--container-narrow`, `--container-wide`).

#### 2.5.5. Component Values
- Specific values for components like button sizes, card padding, etc., defined as custom properties where appropriate.

## 3. Hugo Page Builder Architecture
### 3.1. Page Structure
Pages intended for the page builder will use a specific front matter structure, typically including a `sections` field (e.g., in `content/_index.md` or other content files). This `sections` field will be a list of objects, where each object represents a page section and defines its type and content.

### 3.2. Advanced Layout
The `layouts/_default/advanced.html` template will serve as the primary layout for pages utilizing the page builder. This layout will iterate through the `sections` defined in the page's front matter and dynamically render the corresponding Hugo partial for each section.

### 3.3. Section Partials (`layouts/partials/**`)
Each page section (e.g., Hero, Features, Blog Feed, CTA) will have its own dedicated Hugo partial (e.g., `layouts/partials/hero_section.html`).
#### 3.3.1. Data Input
Partials will accept a dictionary (`dict`) as input, containing all the necessary data for rendering that specific section. This promotes modularity and reusability.
#### 3.3.2. HTML Output
Each partial will be responsible for outputting the complete HTML structure for its section, adhering to the project's CSS framework and semantic HTML best practices.
#### 3.3.3. Bespoke CSS Collection
If a partial requires bespoke CSS (i.e., CSS not provided by the main project CSS framework), it will store this CSS in Hugo's `.Site.Store` using a predefined key (e.g., `css_collection_partial_name`). The `layouts/partials/baseof/universal-css-collector.html` partial will then collect all such bespoke CSS from the store and bundle it into the final stylesheet.

### 3.4. Responsive Image Handling
The project utilizes a suite of responsive image partials (`layouts/partials/responsive/**`) to ensure optimal image delivery across various devices and screen sizes. These partials leverage Hugo's image processing capabilities (resizing, WebP conversion) and the `<picture>` element for responsive image sources.

## 4. Decap CMS Integration
### 4.1. Configuration (`static/admin/config.yml`)
The Decap CMS configuration defines the content collections and their respective fields.
#### 4.1.1. Collections
- **Pages**: Manages pages that use the advanced layout, allowing content creators to build pages using sections.
- **Posts**: Standard blog post management.
- **Authors**: Manages author profiles.
- **Categories**: Manages blog post categories.
#### 4.1.2. Page Sections Widget
The `sections` field within the "Pages" collection is configured as a `list` widget with `types`. Each `type` corresponds to a specific page section (e.g., `hero_section`, `features_section`), allowing content creators to add, reorder, and configure sections visually within the CMS.

### 4.2. Custom Preview Templates (`static/admin/cms.js`)
Custom JavaScript preview templates are implemented to provide a real-time, high-fidelity representation of the content within the Decap CMS editorial workflow.
#### 4.2.1. Preview Component Structure
Each page section has a corresponding JavaScript preview component (e.g., `HeroSectionPreview`, `FeaturesSectionPreview`) that uses the Preact `h()` function (or similar) to render the section's HTML.
#### 4.2.2. High-Fidelity Rendering
A critical aspect is ensuring that the HTML structure and CSS class names generated by the JavaScript preview components precisely match those output by their corresponding Hugo partials. This guarantees that the preview accurately reflects the final published page.
#### 4.2.3. External Data Fetching
For sections that display dynamic content (e.g., the Blog Feed section), the preview component will utilize `CMS.getCollection()` to asynchronously fetch and display relevant data from other collections (e.g., recent blog posts). This ensures the preview is as accurate as possible.

### 4.3. Preview CSS Integration (`CMS.registerPreviewStyle()`)
To ensure the Decap CMS previews are styled correctly, the project's compiled CSS bundle will be loaded into the preview pane using `CMS.registerPreviewStyle()`. This will apply the full CSS framework, including utility classes and custom properties, to the preview content. Consistency in the CSS bundle's filename will be maintained to avoid cache-busting issues.

## 5. Developer Guide: Extending the Site Builder
### 5.1. How to Add a New Page Section
To add a new, custom page section to the site builder:
#### 5.1.1. Create Hugo Partial
Create a new Hugo partial (e.g., `layouts/partials/my_new_section.html`) that defines the HTML structure for the new section. This partial should accept a `dict` of data as input and adhere to the project's CSS framework. If bespoke CSS is needed, use the `.Site.Store` mechanism.
#### 5.1.2. Update Decap CMS `config.yml`
Add a new `type` entry to the `sections` widget in `static/admin/config.yml` for the new section. Define the fields that content creators will use to configure this section.
#### 5.1.3. Create Decap CMS Preview Component
Create a corresponding JavaScript preview component in `static/admin/cms.js` (e.g., `MyNewSectionPreview`). This component should render HTML that precisely matches the output of the Hugo partial, using the `h()` function and the data passed from the CMS.
#### 5.1.4. Register Preview Component
Register the new preview component within the `PagePreview` component's `switch` statement in `static/admin/cms.js` to ensure it is rendered correctly in the CMS.

### 5.2. Best Practices for Section Development
#### 5.2.1. Using Utility Classes
Prioritize the use of the project's utility classes for layout and styling. This ensures consistency, reduces CSS bloat, and leverages the framework's strengths.
#### 5.2.2. When to Write Bespoke CSS
Only write bespoke CSS when a specific design cannot be achieved with existing utility classes. Ensure this CSS is minimal, well-scoped, and collected via the `.Site.Store` mechanism.
#### 5.2.3. Data Structure Consistency
Maintain consistency in the data structures passed to Hugo partials and used by Decap CMS preview components. This simplifies development and reduces potential errors.

## 6. Testing & Quality Assurance
### 6.1. CSS Framework Testing
The CSS framework will be visually tested to ensure all utility classes and components render as expected across different browsers and devices.
### 6.2. Style Guide (`content/style-guide.md`)
#### 6.2.1. Purpose
The `content/style-guide.md` page will serve as a comprehensive visual test bed and documentation for the CSS framework. It will display all components, utility classes, and design tokens in various states and combinations.
#### 6.2.2. Content Requirements
The style guide will include examples of:
- All typography styles (headings, body text, lists).
- Color palette (primary, secondary, accent, neutrals, semantic colors).
- Spacing scale.
- Buttons (all styles, sizes, states).
- Forms (all input types, states).
- Cards and other complex components.
- Grid layouts and utility class combinations.
- Responsive behaviors.
### 6.3. Hugo Build Verification
Regularly verify that the Hugo build process completes without errors and that all assets (CSS, images) are correctly processed and linked.
### 6.4. Decap CMS Preview Verification
Ensure that the Decap CMS previews accurately reflect the final published output, verifying both HTML structure and styling.

## 7. Current Progress Status
### 7.1. Completed Tasks
- Project architecture and technical decisions finalized.
- HTML structure template created.
- CSS file organization structure defined.
- Hugo integration strategy established.
- Core CSS files created: `base/reset.css`, `base/base.css`, `base/helpers.css`.
- Component CSS files created: `components/grids.css`, `components/cards.css`, `components/buttons.css`, `components/forms.css`, `components/menus.css`, `components/tables.css`, `components/icons.css`, `components/banner.css`, `components/inverse.css`.
- Layout CSS files created: `layouts/site.css`, `layouts/header.css`, `layouts/footer.css`, `layouts/section.css`, `layouts/post-page.css`.
- Initial Hugo partials for page sections (Hero, Features, Blog Feed, CTA) created.
- Decap CMS `config.yml` configured for page sections.
- Initial Decap CMS preview components (`cms.js`) created.

### 7.2. Remaining Tasks
- Final integration testing and documentation.
- Implement comprehensive `variables.css` based on design tokens.
- Refine Hugo partials to fully utilize the new CSS framework.
- Develop the `content/style-guide.md` to showcase all CSS components and utilities.
- Implement `CMS.registerPreviewStyle()` for Decap CMS previews.
- Enhance Decap CMS preview components for high-fidelity rendering, including external data fetching for the Blog Feed section.
- Document the "How to Add a New Page Section" guide within this specification.

## 8. Future Considerations (Optional)
- Further performance optimizations (e.g., critical CSS, image lazy loading beyond current implementation).
- Advanced features like A/B testing integration or personalization capabilities.
- Integration with a dedicated design system tool.
