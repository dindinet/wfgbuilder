# Outline: Creating an Agent Skill to Automate Page Section Generation

This is an excellent question and a perfect example of how to leverage agentic capabilities to automate complex, repetitive development tasks.

An "Agent Skill" is essentially a pre-defined, multi-step workflow that an AI agent can execute to achieve a specific, high-level goal. Think of it as a function or a script for the agent. It combines understanding a user's intent, planning a series of actions, and using tools (like file creation) to get the job done.

Let's design an Agent Skill called `create_page_section` based on the instructions in your `DEVELOPER_GUIDE.md`.

### How to Create the `create_page_section` Agent Skill

Here is a conceptual breakdown of how we would define this skill.

#### 1. Define the Goal and Trigger

The skill's primary goal is to "Create all the necessary files for a new DecapCMS page builder section."

The agent would be trained to recognize this intent from natural language prompts like:
*   "Create a new page section called 'Team Bio'."
*   "Add a 'Call to Action' section to the page builder."
*   "Scaffold a new section named 'Pricing Table'."

#### 2. Define the Inputs (Parameters)

To be effective, the skill needs information from the user. We would define a "signature" that looks for these parameters:

*   `section_name` (Required, String): The name of the section (e.g., "Team Bio"). This is the core piece of information.
*   `fields` (Optional, Array of Objects): A list of fields for the CMS. If the user provides them, the skill can generate more complete boilerplate. For example: `with fields: title (string), and bio (markdown)`.

#### 3. Define the Plan (The Skill's Internal Logic)

This is the heart of the skill. When triggered, the agent executes a pre-defined plan. For this skill, the plan would be:

**Step A: Process Inputs**

1.  Take the user-provided `section_name` (e.g., "Team Bio").
2.  Generate different case variations of the name that are required by the project's conventions:
    *   **PascalCase**: `TeamBio` (Used for the Hugo Partial and JS Preview Component name).
    *   **kebab-case**: `team-bio` (Used for the YAML, CSS, and JS filenames).
    *   **Human-readable**: `Team Bio` (Used for the `label` in the YAML file).

**Step B: Generate File Content in Memory**

The agent now constructs the content for each of the four required files based on the processed names and the provided `fields`.

1.  **Generate YAML Content** (`data/decap/sections/team-bio.yml`):
    *   Use the PascalCase name for the `name` property.
    *   Use the Human-readable name for the `label`.
    *   If the user provided `fields`, iterate through them to create the field definitions. If not, generate a placeholder field.

    ```yaml
    name: TeamBio
    label: Team Bio
    widget: object
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Bio", name: "bio", widget: "markdown"}
    ```

2.  **Generate Hugo Partial Content** (`layouts/partials/TeamBio.html`):
    *   Create a basic HTML structure.
    *   Use the kebab-case name for a root CSS class (e.g., `section-team-bio`) for styling.
    *   Add comments and basic logic to show how to access the data.

    ```html
    {{ $section := . }}
    <section class="section section-team-bio">
      <div class="container">
        {{ with $section.title }}<h2>{{ . }}</h2>{{ end }}
        {{ with $section.bio }}{{ . | markdownify }}{{ end }}
      </div>
    </section>
    ```

3.  **Generate JS Preview Content** (`assets/js/decap-previews/TeamBioPreview.js`):
    *   Create a JavaScript function for the preview component named `TeamBioPreview`.
    *   Destructure the props based on the `fields` (e.g., `title`, `bio`).
    *   Use the `h()` hyperscript function to build a simple preview structure.

    ```javascript
    const TeamBioPreview = (props) => {
      const { title, bio, h } = props;

      return h('div', { className: 'p-4' },
        h('h2', { className: 'text-xl font-bold' }, title || 'Team Bio Section'),
        h('div', { className: 'prose' }, bio || 'Enter bio content here...')
      );
    };

    export default TeamBioPreview;
    ```

4.  **Generate CSS Content** (`assets/css/sections/team-bio.css`):
    *   Create an empty CSS file with a root selector to get the developer started.

    ```css
    .section-team-bio {
      /* Add styles for the Team Bio section here */
    }
    ```

**Step C: Use Tools to Create Files**

With the content for all four files generated, the agent's final step is to use its `CreateFile` tool for each one, writing the content to the correct path in the project.

*   `CreateFile(path="/home/papo/projects/hugo/wfgbuilder/data/decap/sections/team-bio.yml", content=...)`
*   `CreateFile(path="/home/papo/projects/hugo/wfgbuilder/layouts/partials/TeamBio.html", content=...)`
*   `CreateFile(path="/home/papo/projects/hugo/wfgbuilder/assets/js/decap-previews/TeamBioPreview.js", content=...)`
*   `CreateFile(path="/home/papo/projects/hugo/wfgbuilder/assets/css/sections/team-bio.css", content=...)`

### How a User Would Use the Skill

Once the skill is defined, a developer could simply ask:

> **"Create a new page section called 'Team Bio' with a string 'title' and markdown 'bio'."**

The agent would recognize the intent to use the `create_page_section` skill, parse the `section_name` and `fields`, and execute the entire plan, resulting in four new, perfectly structured files being added to the project instantly. This transforms a manual, error-prone, 10-minute task into a single, 5-second command.