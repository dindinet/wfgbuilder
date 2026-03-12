---
description: Create a new page section component from an image (Agent Skill for Non-Developers)
---

# Create a New Page Section from Image Workflow

This workflow is designed to safely guide a non-developer through creating a complete Page Section in the Hugo + Decap CMS site by analyzing an uploaded image/screenshot of a layout design.

## 1. Discovery Phase (Visual Analysis)
The user provides an image of the desired UI section. You as the AI Assistant must visually analyze the image and automatically infer the following properties. **Do not proceed to write code until you have mapped all visual elements:**
- **Name & Purpose:** Infer a semantic name (e.g., "HeroImageRight", "PricingThreeCol", "FeatureGrid") and purpose based on the visual context.
- **Parts:** Identify all visual elements and map them to standard Decap CMS widgets (e.g., heading -> `string`, description -> `text` or `markdown`, image -> `image`, list of cards -> `list` of `object`s). 
- **Layout:** Determine the container layout required (`[Full width, Wide, Narrow]`) based on how the content uses horizontal space.
- **Columns:** Determine the grid/column structure (`[1 Column, 2 Columns, 3 Columns, 4 Columns]`).
- **Styling:** Visually map typography, spacing, colors, and layout patterns to the existing utility classes defined in the project's CSS framework (refer to `project_specification.md` and style guide).

## 2. Planning and Validation (Guard Rails)
Once you have analyzed the image, you MUST validate your inferences using the following Guard Rails and present a plan to the user:
- **Slugification**: Generate a web-safe `slug` for filenames/CSS classes (lowercase, no spaces, hyphens only). Generate a `PascalCase` name for the JS/HTML files.
- **Columns Constraint**: Ensure the layout does not exceed the system's maximum of 4 columns.
- **Layout Constraint**: Ensure the chosen layout maps exactly to `Full width, Wide,` or `Narrow`.
- **Field Mapping**: Ensure all visual "parts" are mapped exactly to valid Decap CMS widgets (`string`, `text`, `image`, `list`, `boolean`, `object`, etc.).

**Action:** Print out a clear summary of the section data structure and layout plan you derived from the image. Ask the user: *"Does this architectural plan look correct based on your image?"*

## 3. Execution Phase
Once the user confirms the visual plan, you MUST automatically generate all 4 files simultaneously, following the architectural pattern documented in the `DEVELOPER_GUIDE.md` stored alongside this skill file:

1. **CMS Configuration**: Create `data/decap/sections/{slug}.yml`.
2. **Hugo Template**: Create `layouts/partials/{PascalCase}.html`. (Ensure the wrapper uses `<section class="section-{slug}">`, applies the layout/column specifications, and leverages the project's utility CSS for layout/styling).
3. **CMS Preview**: Create `assets/js/decap-previews/{PascalCase}Preview.js`. (Ensure it perfectly mirrors the HTML output, using the `h()` hyperscript function and custom properties/utility classes).
4. **CSS Styles**: Create `assets/css/sections/{slug}.css`. (Only include bespoke CSS if the design absolutely cannot be achieved with existing utility classes. Ensure it is collected via `.Site.Store`).

*Inform the user when the code is fully generated that they can test it instantly by running their Hugo server.*

## 4. Integration Instructions
If the user is developing this section inside a Component Library repository (rather than their main website), provide them with the appropriate snippet to paste into their target website's configuration file to mount these generated files:

**For `hugo.toml`:**
```toml
[module]
  [[module.imports]]
    path = "github.com/your-org/page-section-library" # Replace with actual repository path

  # Core mount for HTML layouts
  [[module.mounts]]
    source = "layouts/partials"
    target = "layouts/partials"

  # Data structure mounts for CMS config generation
  [[module.mounts]]
    source = "data/decap/sections"
    target = "data/decap/sections"

  # JS and CSS Asset mounts for bundling
  [[module.mounts]]
    source = "assets/js/decap-previews"
    target = "assets/js/decap-previews"
  [[module.mounts]]
    source = "assets/css/sections"
    target = "assets/css/sections"
```

**For `hugo.yaml`:**
```yaml
module:
  imports:
    - path: "github.com/your-org/page-section-library" # Replace with actual repository path
  mounts:
    # Core mount for HTML layouts
    - source: "layouts/partials"
      target: "layouts/partials"
    # Data structure mounts for CMS config generation
    - source: "data/decap/sections"
      target: "data/decap/sections"
    # JS and CSS Asset mounts for bundling
    - source: "assets/js/decap-previews"
      target: "assets/js/decap-previews"
    - source: "assets/css/sections"
      target: "assets/css/sections"
```