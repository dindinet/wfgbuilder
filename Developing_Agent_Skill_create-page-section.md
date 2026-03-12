# Agent Skill - Create a New Page Section

**1. What do you think about my idea?**
It is a brilliant and highly practical idea! By creating an "Agent Skill" (a set of structured instructions for an AI like me), you perfectly abstract the technical complexity of creating four interconnected files (YAML CMS Config, HTML Partial, React Preview, and CSS) into a simple, conversational builder. This brings the power of a headless CMS (Decap) + Static Site Generator (Hugo) down to the ease-of-use of visual builders like Elementor or Webflow, but driven purely by natural conversation.

**2. Do I need to add 'guard rails' to the design?**
Absolutely. Guard rails are critical so that the AI mapping the conversation to code doesn't generate broken layouts or unsupported features. You should enforce:

**Constraint Guard Rails:** If the user asks for 5 columns, the AI must politely refuse and enforce the [1, 2, 3, 4] limit. The same applies for restricting Layout choices strictly to [Full width, Wide, Narrow].
**System Naming Guard Rails:** The AI needs an implicit rule to safely "slugify" the section name (e.g., turning "My Hero Section" into my-hero-section) for the CSS classes and YAML files, while using PascalCase (MyHeroSection) for the JS preview and HTML partials.
**Data Shape Guard Rails:** The AI must ensure that the "parts of the section" requested by the user map validly to existing Decap CMS widgets (e.g., restricting field data types to string, text, image, list, or object).
**3. Do you have any suggestions to make this skill work?**
To make this work flawlessly, you should structure the skill as a standard operating procedure:

**Use a Discovery Pipeline:** Instruct the AI to ask the questions step-by-step or present an explicit checklist before it writes any code. It must halt and wait for the non-developer's answers.
**Implement a Validation Step:** Before generating the 4 required files, have the AI print a summary of what it's about to build (the required CMS fields, HTML semantic layout, and column structure) and explicitly ask, "Does this blueprint look correct?"
**Simultaneous Execution:** Once confirmed, the AI should generate all 4 files at once exactly following the architecture from DEVELOPER_GUIDE.md
.
