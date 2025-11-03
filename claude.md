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

- Check the directory that the files are to move into
- Update all ${VARIABLES} to use the mintlify variables (reference snippets/vars.mdx for mappings)
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
