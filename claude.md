# Tiger Data documentation

## Working relationship
- You can push back on ideas-this can lead to better documentation. Cite sources and explain your reasoning when you do so
- ALWAYS ask for clarification rather than making assumptions
- NEVER lie, guess, or make up information

## Project context
- Format: MDX files with YAML frontmatter
- Config: docs.json for navigation, theme, settings
- Components: Tiger Cloud, Tiger Console, TimescaleDB, Agentic Postgres

## Content strategy
- Document just enough for user success - not too much, not too little
- Prioritize accuracy and usability of information
- Make content evergreen when possible
- Search for existing information before adding new content. Avoid duplication unless it is done for a strategic reason
- Check existing patterns for consistency
- Start by making the smallest reasonable changes

## docs.json

- Refer to the [docs.json schema](https://mintlify.com/docs.json) when building the docs.json file and site navigation

## Frontmatter requirements for pages
- title: Clear, descriptive page title (meta title max 60 characters for SEO)
- description: Concise summary for SEO/navigation/search (under 200 characters)

## Page structure requirements

### Regular pages should include:
- Short intro paragraph that summarizes content in first sentence
- Visual illustration when helpful
- Descriptive headers using keywords
- Step-by-step procedures for actionable content
- Relevant internal and external links

### API pages should include:
- Function name as title
- Brief description
- Usage samples with code blocks
- Arguments table with format: | Name | Type | Default | Required | Description |
- Returns section

### Troubleshooting pages should include:
- Specific frontmatter fields (title, section, products/topics)
- Clear problem identification
- Step-by-step resolution procedures

## Writing standards
- Follow the Google Developer Documentation Style Guide with exceptions:
  - Do not capitalize the first word after a colon
  - Use semi-bold for UI elements
- Write clear, concise, and actionable documentation
- Second-person voice ("you")
- Prerequisites at start of procedural content
- Test all code examples before publishing
- Match style and formatting of existing pages
- Include both basic and advanced use cases
- Language tags on all code blocks
- Alt text on all images
- Relative paths for internal links
- If a product or concept is missing from the glossary, add it

## Content reuse and formatting

### Variables and links
- Use `{VARIABLE_NAME}` syntax for variables (reference snippets/vars.mdx for mappings)
- Internal links don't require full domain - use relative paths
- External links input as-is with full URLs

### Supported formatting
- Tabs for organizing related content
- Code blocks with language tags
- Multi-tab code blocks for multiple language examples
- Tags for categorization

### SEO optimization
- Use keywords in titles, headers, and intro paragraphs
- Summarize paragraph contents in first sentence
- Keep meta descriptions under 200 characters
- Keep meta titles under 60 characters

## Variables and snippets

### Variable import hierarchy
Variables follow a bottom-up import hierarchy:
- Snippets import their own variables directly
- Parent files MUST NOT duplicate variable imports that come from their snippets
- Only import variables in the main file if they are used directly in that file's content

### Checking for duplicate imports
Before finalizing any file migration, systematically check for duplicate variable imports:

1. **Read all imported snippets** to see what variables they import
2. **Compare with main file imports** to identify duplicates
3. **Remove duplicates from main file** - the snippet's variables are automatically available
4. **Verify all text** in the main file uses variables (not plain text)

Example workflow:
```
Main file uses: {CLOUD_LONG}, {SERVICE_LONG}
Snippet A imports: SERVICE_LONG, CONSOLE
Snippet B imports: CLOUD_LONG, VPC

Result: Main file should import NOTHING - all variables come from snippets
```

### Variable application checklist
For EVERY file migration, systematically check the vars.mdx file and apply ALL relevant variables:

**Core product variables:**
- CLOUD_LONG, SERVICE_LONG, SERVICE_SHORT, SELF_LONG, SELF_LONG_CAP
- CONSOLE, TIMESCALE_DB, PG, COMPANY

**Feature variables:**
- HYPERTABLE, HYPERTABLE_CAP (for "hypertable(s)" / "Hypertable(s)")
- HYPERCORE, HYPERCORE_CAP (for "hypercore" / "Hypercore")
- COLUMNSTORE, COLUMNSTORE_CAP (for "columnstore" / "Columnstore")
- ROWSTORE, ROWSTORE_CAP (for "rowstore" / "Rowstore")
- CAGG, CAGG_CAP (for "continuous aggregate(s)" / "Continuous aggregate(s)")
- MAT_HYPERTABLE, MAT_HYPERTABLE_CAP (for "materialized hypertable(s)")
- VPC (for "VPC")

**Pricing variables:**
- PRICING_PLAN, SCALE, ENTERPRISE

**Process:**
1. Read snippets/vars.mdx to see all available variables
2. Search the file content for terms that match variable values
3. Replace ALL occurrences with variables
4. Check that variables aren't imported twice (main file + snippets)

### Common patterns

**Pattern 1: Integration files**
```mdx
---
title: Integrate [Tool] with Tiger Cloud
sidebarTitle: [Tool]
description: [Tool description]
---

import IntegrationPrereqs from '/snippets/prerequisites/_integration-prereqs.mdx';
import OtherSnippet from '/snippets/path/_snippet.mdx';

[Tool][tool-link] does something with {SERVICE_LONG}.

## Prerequisites

<IntegrationPrereqs />

## Connect

Instructions with {CLOUD_LONG} and {SERVICE_SHORT} variables...

[tool-link]: https://example.com
```

Main file imports: NONE (if all variables come from snippets) or only those used directly in content

**Pattern 2: Snippet files**
```mdx
import { SERVICE_LONG, CONSOLE, VPC } from '/snippets/vars.mdx';

Content using {SERVICE_LONG}, {CONSOLE}, and {VPC}...
```

Snippets import only what they use directly

**Pattern 3: Nested snippets**
If snippet A imports snippet B:
- Snippet B imports its own variables
- Snippet A only imports variables it uses directly (not from B)
- Main file that imports snippet A gets variables from both A and B automatically

### Template literal syntax for Tab titles
When using variables in component props (like Tab titles), use template literal syntax:
```mdx
<Tab title={`${CLOUD_LONG}`}>
```

NOT:
```mdx
<Tab title="{CLOUD_LONG}">
```

## Git workflow
- NEVER use --no-verify when committing
- Ask how to handle uncommitted changes before starting
- Create a new branch when no clear branch exists for changes
- Commit frequently throughout development
- NEVER skip or disable pre-commit hooks

## Templates 

- For a new procedural page, use  .github/templates/procedure.md as a template
- For a new integration page, use .github/templates/integration.md as a template

## Do not
- Skip frontmatter on any MDX file
- Use absolute URLs for internal links
- Include untested code examples
- Make assumptions - always ask for clarification

# Migration

## Critical migration requirements

**ALWAYS follow these steps for EVERY file migration:**

1. **Apply ALL relevant variables** - Systematically check snippets/vars.mdx and apply every applicable variable (see "Variables and snippets" section above)
2. **Check for duplicate imports** - Read all imported snippets to see what variables they import, then ensure the main file doesn't duplicate those imports
3. **Verify variable usage** - Ensure all content uses variables, not plain text for product names and features

## Migration steps

- Check the directory that the files are to move into
- Update all ${VARIABLES} to use the mintlify variables (reference snippets/vars.mdx for mappings)
- **CRITICAL**: After migration, check that variables are not imported twice (see "Variables and snippets" section)
- replace references to import since`<version>` with `<Icon icon="circle-play" iconType="duotone" />` Since `<version>` on its own line after the frontmatter, followed by a newline before content begins
- replace references to import deprecated`<version>` with `<Icon icon="circle-pause" iconType="duotone" />` Deprecated `<version>` on its own line after the frontmatter, followed by a newline before content begins
- replace references to import DeprecationNotice with `<Icon icon="circle-pause" iconType="duotone" />` Deprecated on its own line after the frontmatter, followed by a newline before content begins
- replace references to import sunsetted`<version>` with `<Icon icon="sunset" iconType="duotone" />` Sunsetted `<version>` on its own line after the frontmatter, followed by a newline before content begins
- replace references to import EarlyAccess`<version>` with `<Icon icon="flask" />` Early access `<version>` on its own line after the frontmatter, followed by a newline before content begins. if there is no version number, don't add one
- replace references to import Experimental with `<Icon icon="flask" />` Early access on its own line after the frontmatter, followed by a newline before content begins. if there is no version number, don't add one
- Ask where the other imported files should go in the snippets directory (initially manual, but track patterns to automate over time)
- Update the metadata in each file, rename the excerpt metadata name as description, and api_name as title
- Remove api: and version: metadata sections, indent license and type under root level
- Put the value of stable in a since icon (e.gple., if stable: 1.0.0, add Since 1.0.0 icon), then remove the stable metadata item
- Remove the first # header from the content (title is handled by frontmatter)
- Replace `<Highlight>` blocks with `<Info>` blocks (with newlines between tags and text)
- Change ### Required arguments to ## Arguments with new table format: | Name | Type | Default | Required | Description |
- Required arguments get ✔ in Required column, - in Default column (unless default specified)
- Merge Optional arguments section into the same table with ✔ in Required column for optional args
- Change ### Samples to ## Samples
- Change **Returns:** to ## Returns with newline before text
- Update internal links to use the correct Mintlify repository structure
- Check all content so it will render correctly in Mintlify
- Update the docs.json to include the files in the structure. The docs.json structure reflects the folder structure - initially ask for placement, but learn patterns over time
