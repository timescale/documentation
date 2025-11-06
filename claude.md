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
- **IMPORTANT**: Variables do NOT work in frontmatter/metadata - only use them in the page content after the `---` closing tag
- **Variables must be imported**: Add `import { VARIABLE_NAME, OTHER_VAR } from '/snippets/vars.mdx';` after the frontmatter to use variables in the page
- Variables are NOT automatically available - each file must import the specific variables it needs
- Example:
  ```mdx
  ---
  title: My Page
  ---

  import { TOOLKIT_LONG, TIMESCALE_DB } from '/snippets/vars.mdx';

  {TOOLKIT_LONG} extends {TIMESCALE_DB} with additional functionality.
  ```
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
- **ALWAYS keep imported partials as snippets**: When migrating files that import other MDX files (partials), ALWAYS migrate those partials to the snippets/ directory and import them as snippets in the new file. NEVER inline the content directly.
- Ask where the other imported files should go in the snippets directory (initially manual, but track patterns to automate over time). For manage-data content, use snippets/manage-data/; for API reference content, use snippets/api-reference/[component]/
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

## Content reuse and snippets

- Check for existing snippets in the snippets/ directory that can be reused before creating new content
- Content from ~/timescale/source/docs/_partials/ in the old docs should be migrated as snippets in the new repo
- Place snippets in the appropriate directory under snippets/. For API reference content, use snippets/api-reference/[component]/
- If you are not sure which folder to place a snippet in, ask the user
- To use snippets:
  1. Add an import statement after the frontmatter: `import SnippetName from '/snippets/path/to/snippet.mdx';`
  2. Use the imported component in your content: `<SnippetName />`
  3. Example:
     ```
     ---
     title: My Page
     ---

     import TwoStepAggregation from '/snippets/api-reference/hyperfunctions/two-step-aggregation.mdx';

     ## Two-step aggregation

     <TwoStepAggregation />
     ```
- **Variable imports in snippets**: Snippets should NOT include their own variable import statements when used as components. The parent file must import all variables needed by both itself and any snippets it includes. This prevents duplicate variable declarations which cause SyntaxError.
  - ❌ BAD: Snippet has `import { VARIABLE } from '/snippets/vars.mdx';`
  - ✅ GOOD: Snippet uses `{VARIABLE}` directly, parent file imports all variables
  - Example:
    ```mdx
    // Parent file (index.mdx)
    import { VAR1, VAR2, VAR3 } from '/snippets/vars.mdx';  // All vars for parent AND snippets
    import MySnippet from '/snippets/my-snippet.mdx';

    // Snippet file (my-snippet.mdx)
    // No import statement - uses {VAR2} and {VAR3} from parent scope
    ```
- When a snippet is used, remove any duplicate reference links from the parent page that are defined in the snippet

## Migrating hyperfunction groups

When migrating a hyperfunction group (e.g., candlestick_agg, state_agg, time_weight) from ~/timescale/source/docs/api/_hyperfunctions/:

### Directory structure
1. Create a subdirectory in api-reference/timescaledb/hyperfunctions/ matching the source directory name
2. Each hyperfunction group becomes its own subdirectory with multiple files

### Index page (intro.md → index.mdx)
1. Migrate intro.md to index.mdx (this becomes the landing page for the group)
2. Set the title to "[Group Name] overview" (e.g., "Financial analysis overview")
3. Add `sidebarTitle: Overview` to the frontmatter to control how it appears in the navigation
4. Keep the description from the intro content
5. Convert text to active voice
6. Use reference-style markdown links `[link text][link-ref]` throughout
7. Place all reference-style markdown link definitions at the bottom of the file
8. Merge content from examples.md into index.mdx (see section ordering below)

### Two-step aggregation groups
For hyperfunction groups that use the two-step aggregation pattern, add these sections to index.mdx in this order:

1. **Two-step aggregation section**:
   - Import the snippet after the frontmatter: `import TwoStepAggregation from '/snippets/api-reference/hyperfunctions/two-step-aggregation.mdx';`
   - Add `## Two-step aggregation` heading followed by `<TwoStepAggregation />`

2. **Samples section**: Add `## Samples` with subsections for each example (e.g., `### Get candlestick values from tick data`)

3. **Available functions section**: Add `## Available functions` with subsections organized by function type:
   - ### Aggregate
   - ### Pseudo-aggregate (if applicable)
   - ### Alternate aggregate (if applicable)
   - ### Accessors
   - ### Rollup
   - ### Mutator (if applicable)

   Format: `- [function_name][link-ref]: lowercase description`
   Example: `- [\`open()\`][open]: get the opening price from a candlestick aggregate`

4. **Markdown reference links**: Add all markdown reference-style link definitions at the bottom of the file (note: `[blog-two-step-aggregates]` is defined in the two-step aggregation snippet):
   ```
   [two-step-aggregation]: #two-step-aggregation
   [function_name]: /api-reference/timescaledb/hyperfunctions/group_name/function_name
   ```

### Individual function files
1. Migrate each .md file to .mdx with the same name
2. Follow standard migration rules (api_name → title, excerpt → description, etc.)
3. Convert text to active voice
4. Keep all metadata (hyperfunction, tags, topics, etc.)

### docs.json updates
Update docs.json to list all files in the subdirectory:
```json
{
  "group": "Group Name",
  "pages": [
    "api-reference/timescaledb/hyperfunctions/group_name/index",
    "api-reference/timescaledb/hyperfunctions/group_name/function1",
    "api-reference/timescaledb/hyperfunctions/group_name/function2"
  ]
}
```

Note: To customize how the index page appears in the sidebar, use `sidebarTitle` in the page's frontmatter, not in docs.json.
