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

### Troubleshoot pages should include:
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

**Variables:**
- Use `{VARIABLE_NAME}` syntax for variables (reference snippets/vars.mdx for mappings)
- **IMPORTANT**: Variables do NOT work in frontmatter/metadata - only use them in the page content after the `---` closing tag
- **Variables must be imported**: Add `import { VARIABLE_NAME, OTHER_VAR } from '/snippets/vars.mdx';` after the frontmatter to use variables in the page
- Variables are NOT automatically available - each file must import the specific variables it needs
- **Import order**: Place snippet/component imports BEFORE variable imports
- Basic example:
  ```mdx
  ---
  title: My Page
  ---

  import { TOOLKIT_LONG, TIMESCALE_DB } from '/snippets/vars.mdx';

  {TOOLKIT_LONG} extends {TIMESCALE_DB} with additional functionality.
  ```

**Variable scoping with snippets:**
- In Mintlify, imported snippets render in their own scope and do NOT have access to the parent's variable imports
- ✅ REQUIRED: Each snippet file must import the specific variables it uses
- ✅ REQUIRED: Parent files must import ONLY the variables they use in their own content (not variables used only in snippets)
- ⚠️ CRITICAL: Do NOT import variables in the parent that are only used by imported snippets - this causes duplicate declarations and rendering failures
- Example with snippets:
  ```mdx
  ---
  title: My Page
  ---

  import MySnippet from '/snippets/my-snippet.mdx';
  import { VAR1, VAR2 } from '/snippets/vars.mdx';  // ONLY vars used directly in parent content

  Content using {VAR1} and {VAR2}...
  <MySnippet />
  ```

  Snippet file (my-snippet.mdx):
  ```mdx
  import { VAR3, VAR4 } from '/snippets/vars.mdx';  // ONLY vars used in this snippet

  Content using {VAR3} and {VAR4}...
  ```
- To check which variables are used: `grep -o "{[A-Z_]*}" file.mdx | sort -u` (this shows variables in the file's own content, excluding imported snippets)

**Links:**
- Internal links don't require full domain - use relative paths
- External links input as-is with full URLs

### Supported formatting
- Tabs for organizing related content
- Code blocks with language tags
- Multi-tab code blocks for multiple language examples
- Tags for categorization

### Price plan availability badge

Use the `PricePlanBadge` component to display which price plans a feature is available on.

**Frontmatter metadata:**
Add `price_plans` to frontmatter for documentation (note: not accessible via JavaScript in Mintlify)
```yaml
price_plans: [performance, scale, enterprise, free]
```

**Usage in content:**
```mdx
import { PricePlanBadge } from '/snippets/Availability.jsx';

<PricePlanBadge plans={['scale', 'enterprise', 'performance']} />
```

**Supported values:**
- **Plans:** `free`, `performance`, `scale`, `enterprise`

**Display:**
- Shows a green badge with checkmark icon
- Clickable link to `/deploy-and-operate/tiger-cloud/understand/pricing-and-account-management`
- Displays text: "Available on: Scale, Enterprise, Performance"
- Place at the top of the page content after imports

**Component location:** `/snippets/Availability.jsx`

### Mermaid diagrams

Use Mermaid diagrams to visualize workflows and processes. All diagrams must follow the established theme for consistency.

**Location:**
- Store diagram files in `images/manage-data/` directory
- Name files descriptively (e.g., `hypercore-workflow.mdx`, `continuous-aggregate-workflow.mdx`)

**Theme configuration:**
All mermaid diagrams must use this exact theme configuration:
```mdx
```mermaid
%%{init: {
  'theme':'base',
  'themeVariables': {
    'primaryColor':'#fff',
    'primaryTextColor':'#1a1a1a',
    'primaryBorderColor':'#333',
    'lineColor':'#666',
    'secondaryColor':'#fff',
    'secondaryTextColor':'#1a1a1a',
    'secondaryBorderColor':'#333',
    'tertiaryColor':'#fff',
    'tertiaryTextColor':'#1a1a1a',
    'tertiaryBorderColor':'#333',
    'noteBkgColor':'#fff',
    'noteTextColor':'#1a1a1a',
    'noteBorderColor':'#333',
    'background':'#fff',
    'mainBkg':'#fff',
    'fontFamily': "'Geist Mono', monospace",
    'edgeLabelBackground':'#fff',
    'labelColor':'#333',
    'labelTextColor':'#333'
  },
  'flowchart': { 'padding': 30, 'htmlLabels': true, 'curve': 'stepAfter' },

  /* Hover tint (best-effort; renderer may ignore themeCSS) */
  'themeCSS': `
    .node rect:hover,
    .node polygon:hover,
    .node path:hover {
      fill: rgba(244, 255, 97, 0.18) !important;
      transition: fill 120ms ease-in-out;
    }
  `
}}%%
graph TB
    [Your flowchart here]
```
```

**Node styling:**
Apply border-based visual hierarchy to nodes:
- **Primary nodes** (thicker border, 3px): Key actions like `CREATE`, `ALTER`, policy scheduling
  ```
  style NodeName fill:#fff,stroke:#333,stroke-width:3px,color:#1a1a1a,rx:4,ry:4
  ```
- **Standard nodes** (normal border, 2px): Regular workflow steps
  ```
  style NodeName fill:#fff,stroke:#333,stroke-width:2px,color:#1a1a1a,rx:4,ry:4
  ```
- **Optional nodes** (dashed border, 1.5px): Alternative or management operations
  ```
  style NodeName fill:#fff,stroke:#666,stroke-width:1.5px,stroke-dasharray: 5 5,color:#1a1a1a,rx:4,ry:4
  ```
- **Decision nodes** (diamond): Use stroke-width:2px without rx:4,ry:4
  ```
  style NodeName fill:#fff,stroke:#333,stroke-width:2px,color:#1a1a1a
  ```

**Connectors:**
Use consistent connector styling:
```
linkStyle default stroke:#777,stroke-width:1px
```

**Clickable nodes:**
Add click handlers linking to relevant API or concept pages:
```
click NodeName "/api-reference/path/to/api" "API reference tooltip"
click NodeName "/manage-data/path/to/concept" "Concept page tooltip"
```

**Usage in content:**
Import the diagram file where you need it:
```mdx
import DiagramName from '/images/manage-data/diagram-name.mdx';

<DiagramName />
```

**Node labeling:**
- Add `&nbsp;&nbsp;` (2 non-breaking spaces) to the end of node labels to provide padding within nodes
- This ensures text doesn't touch the node borders

**Examples:**
- See `/images/manage-data/continuous-aggregate-workflow.mdx` for continuous aggregate workflow
- See `/images/manage-data/hypercore-workflow.mdx` for hypercore workflow

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
- Do not use variables in headers (##, ###, etc.) - use plain text instead
- replace references to import since`<version>` with `<Icon icon="circle-play" iconType="duotone" />` Since `<version>` on its own line after the frontmatter, followed by a newline before content begins
- replace references to import deprecated`<version>` with `<Icon icon="archive" iconType="duotone" />` Deprecated `<version>` on its own line after the frontmatter, followed by a newline before content begins
- replace references to import DeprecationNotice with `<Icon icon="archive" iconType="duotone" />` Deprecated on its own line after the frontmatter, followed by a newline before content begins
- replace references to import sunsetted`<version>` with `<Icon icon="sunset" iconType="duotone" />` Sunsetted `<version>` on its own line after the frontmatter, followed by a newline before content begins
- replace references to import EarlyAccess`<version>` with `<Icon icon="flask" />` Early access on its own line after the frontmatter:
  - **For TimescaleDB functions**: Use format `<Icon icon="flask" /> Early access <Icon icon="tag" iconType="duotone" /> Since [version][tsdb-version]`
  - **For Toolkit functions**: Use format `<Icon icon="flask" /> Early access [version][toolkit-version]`
  - **Without version**: Use `<Icon icon="flask" />` Early access (no version number)
  - **IMPORTANT**: Add markdown reference link at the end of the file:
    - TimescaleDB: `[tsdb-X.X.X]: https://github.com/timescale/timescaledb/releases/tag/X.X.X`
    - Toolkit: `[toolkit-X.X.X]: https://github.com/timescale/timescaledb-toolkit/releases/tag/X.X.X`
    - Ensure there is a blank line before the markdown reference link
- replace references to import Experimental with `<Icon icon="flask" />` Early access on its own line after the frontmatter, followed by a newline before content begins. Follow the same version linking rules as above.
- **ALWAYS keep imported partials as snippets**: When migrating files that import other MDX files (partials), ALWAYS migrate those partials to the snippets/ directory and import them as snippets in the new file. NEVER inline the content directly.
- Ask where the other imported files should go in the snippets directory (initially manual, but track patterns to automate over time). For manage-data content, use snippets/manage-data/; for API reference content, use snippets/api-reference/[component]/
- Update the metadata in each file, rename the excerpt metadata name as description, and api_name as title
- Update description frontmatter to be action-oriented about what you can do with the service you are integrating with, and ensure it fits into one line
- Remove products: metadata from frontmatter (products are not used in Mintlify structure)
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

     import TwoStepAggregation from '/snippets/reference/timescaledb/hyperfunctions/two-step-aggregation.mdx';

     ## Two-step aggregation

     <TwoStepAggregation />
     ```
- **Important**: Remember that snippets must import their own variables - see the "Variables and links" section above for details on variable scoping with snippets
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
   - Import the snippet after the frontmatter: `import TwoStepAggregation from '/snippets/reference/timescaledb/hyperfunctions/two-step-aggregation.mdx';`
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
