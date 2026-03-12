---
description: Create a new page section component (Agent Skill for Non-Developers)
---

# Create a New Page Section Workflow

This workflow is designed to safely guide a non-developer through creating a complete Page Section in the Hugo + Decap CMS site without needing to manually write any code.

## 1. Discovery Phase
You as the AI Assistant must ask the user the following questions. Present them as a checklist or ask them conversationally. **Do not proceed to write code until all properties are defined:**
- **Name:** What is the name of this section? (e.g., Features, Hero, Pricing)
- **Purpose:** What is the goal or purpose of this section?
- **Parts:** What specific elements belong in this section? (e.g., A title, a description, an image, a call-to-action link)
- **Layout:** Which container layout should it use? `[Full width, Wide, Narrow]`
- **Columns:** How many columns does the section need? `[1 Column, 2 Columns, 3 Columns, 4 Columns]`

## 2. Planning and Validation (Guard Rails)
Once the user provides the answers, you MUST validate them using the following Guard Rails:
- **Slugification**: Generate a web-safe `slug` for filenames/CSS classes (lowercase, no spaces, hyphens only). Generate a `PascalCase` name for the JS/HTML files.
- **Columns Constraint**: If the user asks for more than 4 columns, you MUST enforce the guard rail: inform them that the system only supports up to 4 columns and ask them to revise.
- **Layout Constraint**: Ensure the chosen layout maps exactly to `Full width, Wide,` or `Narrow`.
- **Field Mapping**: Pre-map the user's requested "Parts" into valid Decap CMS widgets (e.g., `string`, `text`, `image`, `list`, `boolean`).

**Action:** Print out a quick summary of the section data structure you are about to create. Ask the user: *"Does this look correct?"*

## 3. Execution Phase
Once the user confirms the plan, you MUST automatically generate all 4 files simultaneously, following the architectural pattern documented in the `DEVELOPER_GUIDE.md` stored alongside this skill file:

1. **CMS Configuration**: Create `data/decap/sections/{slug}.yml`.
2. **Hugo Template**: Create `layouts/partials/{PascalCase}.html`. (Ensure the wrapper uses `<section class="section-{slug}">` and applies the layout/column specifications).
3. **CMS Preview**: Create `assets/js/decap-previews/{PascalCase}Preview.js`. (Ensure it perfectly mirrors the HTML output, using the `h()` hyperscript function).
4. **CSS Styles**: Create `assets/css/sections/{slug}.css`. (Include base styling to support the requested column structure).

*Inform the user when the code is fully generated that they can test it instantly by running their Hugo server.*

## 4. Integration Instructions
If the user is developing this section inside a Component Library repository (rather than their main website), provide them with the following snippet to paste into their target website's `hugo.toml` or `hugo.yaml` to mount these generated files:

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