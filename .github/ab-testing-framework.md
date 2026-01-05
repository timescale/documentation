# A/B Testing Framework for Documentation Site Re-architecture

This document provides a comprehensive framework for A/B testing the old documentation site against the new re-architected site. It includes measurement criteria, implementation guidance, dashboard specifications, and tracking procedures.

**Testing Categories:**
1. User Engagement Metrics
2. Search & Findability
3. User Satisfaction
4. Performance Metrics
5. Business Impact
6. Navigation & Architecture-Specific

---

## 1. Measurement Framework

### 1.1 User Engagement Metrics

**Primary Metrics:**

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| Average Time on Page | Mean time users spend on documentation pages | 2-4 minutes (varies by page type) | GA4: `engagement_time` / `page_views` |
| Bounce Rate | % of single-page sessions | <40% overall, <30% for key pages | GA4: `bounces` / `sessions` |
| Pages per Session | Average number of pages viewed per session | >3.5 pages | GA4: `page_views` / `sessions` |
| Return Visitor Rate | % of users who return within 30 days | >30% | GA4: New vs Returning Users dimension |
| Scroll Depth | % of users reaching 25%, 50%, 75%, 90% of page | >60% reach 75% on key pages | GA4: Custom event tracking |
| Engaged Sessions Rate | % of sessions lasting >10s or with 2+ pageviews | >70% | GA4: `engaged_sessions` / `sessions` |

**Segmentation:**
- New vs returning users
- Mobile vs desktop vs tablet
- Geographic region
- Referral source (organic, direct, product, community)

**Success Criteria:**
- Improvement of >10% in engaged sessions rate
- Bounce rate reduction of >15%
- Pages per session increase of >20%

---

### 1.2 Search & Findability

**Primary Metrics:**

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| Internal Search Usage Rate | % of sessions using site search | <30% (lower is better - indicates good navigation) | GA4: `view_search_results` events / `sessions` |
| Search Success Rate | % of searches leading to page click within 30s | >75% | GA4: Custom event tracking |
| Search Refinement Rate | % of searches followed by modified query | <20% | GA4: Sequential search events analysis |
| Zero-Result Searches | % of searches returning no results | <5% | GA4: Custom event with result count parameter |
| Average Search Results Clicked | Position of clicked result (lower is better) | <3 (users click top 3 results) | GA4: Custom parameter on search result clicks |
| Time from Search to Click | Average time between search and result click | <15 seconds | GA4: Time between events |

**Top Search Queries Tracking:**
- Track top 100 search queries weekly
- Categorize by intent (how-to, reference, troubleshooting, concept)
- Monitor query trends over time
- Identify gaps in content coverage

**Success Criteria:**
- Search usage rate decrease of >10% (indicates better navigation)
- Search success rate increase of >15%
- Zero-result searches decrease of >50%

---

### 1.3 User Satisfaction

**Primary Metrics:**

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| Page Helpfulness Score | "Was this page helpful?" Yes/No ratio | >75% positive | GA4: Custom event tracking |
| Documentation NPS | Net Promoter Score from quarterly survey | >40 | Survey tool + GA4 integration |
| Qualitative Feedback Volume | Number of written feedback submissions | Track trend, not absolute number | Feedback widget + GA4 events |
| Average Satisfaction Rating | 1-5 star rating on key pages | >4.2/5 | GA4: Custom event with rating parameter |
| Negative Feedback Response Time | Time to acknowledge/address negative feedback | <48 hours | Manual tracking initially |

**Survey Questions (Quarterly):**
1. How likely are you to recommend Tiger Data documentation to a colleague? (0-10 NPS)
2. How easy was it to find what you were looking for? (1-5)
3. How clear and understandable was the documentation? (1-5)
4. How complete was the information you found? (1-5)
5. What could we improve? (Open text)

**Feedback Collection Points:**
- Bottom of every documentation page: "Was this helpful?" thumbs up/down
- After 3+ page views: Slide-out survey prompt
- Exit intent: "Before you go, help us improve" quick survey
- Post-search: "Did you find what you were looking for?"

**Success Criteria:**
- Helpfulness score increase of >10 percentage points
- NPS improvement of >8 points
- Reduction in negative feedback themes

---

### 1.4 Performance Metrics

**Primary Metrics:**

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| Page Load Time (LCP) | Largest Contentful Paint | <2.5s (good), <4.0s (acceptable) | GA4: Web Vitals events + Chrome UX Report |
| First Input Delay (FID) | Time to first interaction | <100ms (good), <300ms (acceptable) | GA4: Web Vitals events |
| Cumulative Layout Shift (CLS) | Visual stability score | <0.1 (good), <0.25 (acceptable) | GA4: Web Vitals events |
| Time to First Byte (TTFB) | Server response time | <600ms | GA4: Navigation Timing API |
| First Contentful Paint (FCP) | Time to first content render | <1.8s (good), <3.0s (acceptable) | GA4: Web Vitals events |
| Total Page Size | Total bytes transferred | <1MB for most pages | GA4: Custom dimension + server logs |

**Performance by Device:**
- Desktop vs Mobile vs Tablet
- Connection type (4G, 3G, WiFi)
- Geographic region (CDN effectiveness)

**Performance by Page Type:**
- API reference pages
- Tutorial/guide pages
- Concept/overview pages
- Search results pages

**Success Criteria:**
- >90% of page loads meet "good" Core Web Vitals thresholds
- Mobile LCP improvement of >20%
- Consistent performance across geographic regions

---

### 1.5 Business Impact

**Primary Metrics:**

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| Docs-to-Signup Conversion | % of doc visitors who sign up | >5% | GA4: Conversion tracking |
| Docs-to-Service-Creation | % who create a service after visiting docs | >3% | Product analytics + GA4 integration |
| Time to First Service Creation | Days from first doc visit to service creation | <7 days | Product analytics + GA4 cohort analysis |
| Feature Adoption Rate | % of users adopting features after visiting docs | Track per feature | Product analytics correlation |
| Support Ticket Reduction | % decrease in docs-related support tickets | >25% reduction | Support system integration |
| Community Forum Questions | Docs-related questions volume | >20% reduction | Forum analytics |
| Product Retention (30-day) | User retention correlated with doc engagement | >60% | Product analytics cohort analysis |

**Attribution Windows:**
- 7-day click: Primary attribution window
- 30-day view: Secondary attribution window
- First-touch and last-touch attribution models

**High-Value User Journeys:**
1. Docs → Sign up → Create service → Enable features
2. Docs → Existing user → Feature adoption
3. Search (external) → Docs → Problem solved (no support ticket)

**Success Criteria:**
- Conversion rate improvement of >15%
- Support ticket reduction of >25%
- Time to value decrease of >30%

---

### 1.6 Navigation & Architecture-Specific

**Primary Metrics:**

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| Navigation Element CTR | Click-through rate on nav elements | >40% for primary nav | GA4: Custom link tracking |
| Common User Journey Completion | % completing expected paths | >60% | GA4: Path exploration |
| Entry Page Distribution | Diversity of entry points | Monitor for over-reliance on few pages | GA4: Landing page report |
| Exit Page Concentration | Pages with high exit rates | <30% exit on any single page | GA4: Exit page report |
| Cross-Reference Click Rate | % of internal links clicked | >25% of users click internal links | GA4: Custom link tracking |
| Navigation Depth | Average clicks from entry to target | <3 clicks for key content | GA4: Custom dimension tracking |
| Breadcrumb Usage | % of users clicking breadcrumbs | >15% | GA4: Custom event tracking |
| Table of Contents Usage | % clicking ToC links on long pages | >40% on pages with ToC | GA4: Custom event tracking |

**Navigation Patterns to Track:**
- Top-down browsing (following nav structure)
- Search-first behavior (immediate search usage)
- Link-hopping (following internal links)
- Backtracking (using browser back button)

**Content Discoverability:**
- Pages with <10 views per week (orphaned content)
- Pages with no incoming internal links
- Pages never reached via navigation (search-only pages)
- Average path length to reach key content

**Success Criteria:**
- Navigation element CTR increase of >20%
- Reduction in orphaned pages by >50%
- Common user journey completion improvement of >25%

---

## 2. Analytics Tools & Instrumentation

### 2.1 Google Analytics 4 Setup

**Required Configuration:**

1. **Enhanced Measurement (verify enabled):**
   - Page views
   - Scrolls (10%, 25%, 50%, 75%, 90%)
   - Outbound clicks
   - Site search
   - Video engagement (if applicable)
   - File downloads

2. **Custom Events to Implement:**

```javascript
// Search tracking
gtag('event', 'search', {
  search_term: searchQuery,
  search_results_count: resultsCount,
  search_location: 'header' // or 'inline', 'page'
});

// Search result click
gtag('event', 'search_result_click', {
  search_term: searchQuery,
  result_position: clickPosition,
  result_url: clickedUrl,
  time_to_click: timeInSeconds
});

// Page helpfulness
gtag('event', 'page_feedback', {
  feedback_type: 'helpful', // or 'not_helpful'
  page_title: pageTitle,
  page_path: pagePath,
  user_comment: optionalComment // if provided
});

// Navigation element clicks
gtag('event', 'navigation_click', {
  nav_element: 'sidebar', // or 'breadcrumb', 'toc', 'footer'
  link_text: linkText,
  link_url: linkUrl,
  link_position: position
});

// Internal link clicks
gtag('event', 'internal_link_click', {
  link_text: linkText,
  link_url: linkUrl,
  source_page: currentPage,
  link_context: 'content' // or 'related', 'see_also'
});

// Code snippet copy
gtag('event', 'code_copy', {
  code_language: language,
  code_length: codeLength,
  page_title: pageTitle
});

// External link clicks (automatic with enhanced measurement)
// Video plays (if applicable)
// File downloads (automatic with enhanced measurement)
```

3. **Custom Dimensions to Create:**

| Dimension Name | Scope | Description | Example Value |
|----------------|-------|-------------|---------------|
| `docs_section` | Event | Top-level docs section | "API Reference", "Guides", "Get Started" |
| `docs_subsection` | Event | Second-level section | "TimescaleDB", "Tiger Cloud" |
| `content_type` | Event | Type of documentation page | "tutorial", "reference", "concept", "troubleshooting" |
| `user_type` | User | User category based on behavior | "new", "returning", "power_user" |
| `authentication_status` | User | Whether user is logged in | "authenticated", "anonymous" |
| `experiment_variant` | User | A/B test variant | "old_site", "new_site" |
| `page_word_count` | Event | Approximate page length | "short", "medium", "long" |
| `has_code_examples` | Event | Whether page has code | "yes", "no" |

4. **Conversions to Configure:**
   - Sign-up initiated from docs
   - Service creation (if trackable)
   - Feature adoption (if trackable)
   - Newsletter subscription
   - Community forum registration
   - Feedback submission

5. **Audiences to Create:**
   - High-engagement users (5+ pages in session)
   - Search-heavy users (3+ searches per session)
   - Bounced users (single page session <10s)
   - Mobile users
   - Returning users (2+ sessions)
   - Converted users (completed sign-up)

### 2.2 A/B Testing Implementation

**Recommended Approach: Server-Side with Cookie-Based Persistence**

```javascript
// Example implementation (pseudo-code)
function assignVariant(userId) {
  // Check for existing assignment
  const existingVariant = getCookie('docs_variant');
  if (existingVariant) {
    return existingVariant;
  }

  // Assign new variant (50/50 split)
  const variant = Math.random() < 0.5 ? 'old_site' : 'new_site';

  // Persist assignment (30-day cookie)
  setCookie('docs_variant', variant, 30);

  // Track assignment in GA4
  gtag('set', 'user_properties', {
    experiment_variant: variant
  });

  return variant;
}

// On page load
const variant = assignVariant();
if (variant === 'new_site') {
  // Serve new architecture
} else {
  // Serve old architecture
}
```

**Key Considerations:**
- Use consistent hashing based on user ID (if available) or anonymous ID
- Persist variant assignment across sessions
- Ensure variant is sent with every GA4 event
- Document start/end dates of test
- Plan for minimum 2-4 week test duration
- Calculate required sample size before starting

**Sample Size Calculator:**
- Baseline conversion rate: [your current rate]
- Minimum detectable effect: 10% relative improvement
- Statistical power: 80%
- Significance level: 95%
- Use: https://www.optimizely.com/sample-size-calculator/

### 2.3 Additional Instrumentation

**Site Search Integration:**
- Ensure Mintlify search sends events to GA4
- Capture search query, results count, and click-through
- Track refinement behavior

**Performance Monitoring:**
```javascript
// Web Vitals tracking
import {getCLS, getFID, getLCP, getFCP, getTTFB} from 'web-vitals';

function sendToGA4(metric) {
  gtag('event', metric.name, {
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
  });
}

getCLS(sendToGA4);
getFID(sendToGA4);
getLCP(sendToGA4);
getFCP(sendToGA4);
getTTFB(sendToGA4);
```

**Error Tracking:**
```javascript
// Track 404s and errors
window.addEventListener('error', (event) => {
  gtag('event', 'exception', {
    description: event.message,
    fatal: false
  });
});

// Track 404 pages
if (is404Page) {
  gtag('event', 'page_not_found', {
    page_path: window.location.pathname,
    referrer: document.referrer
  });
}
```

**Feedback Widget:**
- Implement at bottom of every page
- Capture positive/negative feedback
- Optional comment field for negative feedback
- Send to GA4 and (optionally) dedicated feedback database

---

## 3. Looker Studio Dashboard Structure

### 3.1 Dashboard Overview

**Dashboard Organization (Recommended Pages):**

1. **Executive Summary** (Single-page overview)
2. **User Engagement Deep Dive**
3. **Search & Findability Analysis**
4. **User Satisfaction Tracking**
5. **Performance Monitoring**
6. **Business Impact Metrics**
7. **Navigation & Architecture Analysis**
8. **A/B Test Comparison** (Side-by-side variant comparison)

### 3.2 Page 1: Executive Summary

**Purpose:** High-level view for stakeholders

**Components:**

1. **Scorecard Row (Top):**
   - Total Sessions (vs previous period)
   - Engaged Session Rate (vs previous period)
   - Avg Pages/Session (vs previous period)
   - Conversion Rate (vs previous period)
   - Page Helpfulness Score (vs previous period)
   - Avg LCP (vs previous period)

2. **A/B Test Variant Comparison Table:**
   - Metric | Old Site | New Site | Change | Statistical Significance
   - Show key metrics only (10-12 rows max)

3. **Trend Line Charts (2 columns):**
   - Left: Sessions over time (with variant breakdown)
   - Right: Conversion rate over time (with variant breakdown)

4. **Key Findings Text Box:**
   - Manual summary of top 3-5 insights
   - Updated weekly

**Filters:**
- Date range (default: last 30 days)
- Device category
- User type (new vs returning)
- Experiment variant

### 3.3 Page 2: User Engagement Deep Dive

**Components:**

1. **Engagement Metrics Scorecard:**
   - Sessions, Users, New Users, Engaged Sessions, Avg Engagement Time
   - All with vs previous period comparison

2. **Engagement Over Time (Line Chart):**
   - X-axis: Date
   - Y-axis: Engaged Session Rate
   - Breakdown: Experiment Variant
   - Goal line at 70%

3. **Bounce Rate by Landing Page (Table):**
   - Columns: Landing Page, Sessions, Bounce Rate, Variant
   - Sort by Sessions (descending)
   - Conditional formatting: Red >60%, Yellow 40-60%, Green <40%

4. **Pages per Session Distribution (Bar Chart):**
   - X-axis: Pages per Session buckets (1, 2-3, 4-5, 6-10, 10+)
   - Y-axis: % of Sessions
   - Breakdown: Variant

5. **Scroll Depth Heatmap (Table):**
   - Rows: Top 20 pages by traffic
   - Columns: % reaching 25%, 50%, 75%, 90%
   - Conditional formatting: Green >60%, Yellow 40-60%, Red <40%

6. **Return Visitor Trend (Time Series):**
   - X-axis: Date
   - Y-axis: % Return Visitors
   - Breakdown: Variant

**Filters:**
- Date range
- Device category
- Docs section
- Experiment variant

### 3.4 Page 3: Search & Findability Analysis

**Components:**

1. **Search Metrics Scorecard:**
   - Search Usage Rate, Search Success Rate, Zero-Result Rate
   - With vs previous period

2. **Search Volume Trend (Line Chart):**
   - X-axis: Date
   - Y-axis: Number of searches
   - Breakdown: Variant

3. **Top Search Queries (Table):**
   - Columns: Search Term, Searches, Success Rate, Avg Time to Click, Variant
   - Sort by Searches (descending)
   - Top 50 queries

4. **Zero-Result Searches (Table):**
   - Columns: Search Term, Searches, Variant
   - Sort by Searches (descending)
   - Flag for content gaps

5. **Search Success Funnel:**
   - Stage 1: Searches
   - Stage 2: Searches with results
   - Stage 3: Searches with clicks
   - Stage 4: Searches with engagement (2+ pages after search)
   - Breakdown by variant

6. **Search Result Position Clicked (Bar Chart):**
   - X-axis: Result Position (1, 2, 3, 4-5, 6-10, 10+)
   - Y-axis: % of Clicks
   - Breakdown: Variant

**Filters:**
- Date range
- Search location (header, inline)
- Experiment variant

### 3.5 Page 4: User Satisfaction Tracking

**Components:**

1. **Satisfaction Scorecard:**
   - Helpfulness Score %, NPS Score, Avg Star Rating
   - With vs previous period

2. **Helpfulness Trend (Line Chart):**
   - X-axis: Date
   - Y-axis: % Helpful votes
   - Breakdown: Variant
   - Goal line at 75%

3. **Feedback by Page (Table):**
   - Columns: Page, Total Feedback, % Helpful, Variant
   - Sort by Total Feedback (descending)
   - Filter: Show pages with <50% helpful

4. **Feedback Volume Over Time (Combo Chart):**
   - X-axis: Date
   - Y-axis (left): Number of feedback submissions
   - Y-axis (right): % Positive
   - Breakdown: Variant

5. **NPS Distribution (Bar Chart):**
   - X-axis: NPS Score (0-10)
   - Y-axis: Count
   - Breakdown: Variant
   - Color: Detractors (0-6) Red, Passives (7-8) Yellow, Promoters (9-10) Green

6. **Qualitative Feedback Word Cloud:**
   - Source: Open-ended feedback comments
   - Size by frequency
   - Color by sentiment (if analyzed)

7. **Top Improvement Themes (Table):**
   - Manual categorization of feedback
   - Columns: Theme, Mentions, Variant
   - Updated weekly

**Filters:**
- Date range
- Feedback type (helpful/not helpful)
- Docs section
- Experiment variant

### 3.6 Page 5: Performance Monitoring

**Components:**

1. **Core Web Vitals Scorecard:**
   - LCP (median), FID (median), CLS (median)
   - With "Good" threshold indicators

2. **Core Web Vitals Over Time (Line Chart):**
   - X-axis: Date
   - Y-axis: Metric value
   - Three lines: LCP, FID, CLS (scaled appropriately)
   - Breakdown: Variant

3. **Web Vitals Distribution (Stacked Bar Chart):**
   - X-axis: Metric (LCP, FID, CLS)
   - Y-axis: % of Page Loads
   - Stacks: Good (green), Needs Improvement (yellow), Poor (red)
   - Breakdown: Variant

4. **Performance by Device (Table):**
   - Columns: Device, LCP, FID, CLS, Variant
   - Conditional formatting for thresholds

5. **Performance by Page Type (Table):**
   - Columns: Content Type, Pages, LCP, FID, CLS, Variant
   - Sort by LCP (descending) to find problem areas

6. **Slow Pages Report (Table):**
   - Columns: Page, LCP, FID, CLS, Sessions, Variant
   - Filter: Only show pages with LCP >2.5s
   - Sort by Sessions (show high-traffic slow pages)

7. **Geographic Performance (Geo Chart):**
   - Color by median LCP
   - Shows CDN effectiveness by region

**Filters:**
- Date range
- Device category
- Connection type
- Geographic region
- Experiment variant

### 3.7 Page 6: Business Impact Metrics

**Components:**

1. **Conversion Scorecard:**
   - Docs-to-Signup Rate, Docs-to-Service Rate, Avg Time to First Service
   - With vs previous period

2. **Conversion Funnel:**
   - Stage 1: Doc visitors
   - Stage 2: Signed-up users
   - Stage 3: Service created
   - Stage 4: Active users (30-day)
   - Breakdown by variant with drop-off rates

3. **Conversion Rate Over Time (Line Chart):**
   - X-axis: Date
   - Y-axis: Conversion Rate
   - Breakdown: Variant
   - Separate lines for each conversion type

4. **High-Value User Journeys (Sankey Diagram):**
   - Flow: Entry page → Page 2 → Page 3 → Conversion
   - Compare old vs new site

5. **Feature Adoption Correlation (Scatter Plot):**
   - X-axis: Doc page views for feature
   - Y-axis: Feature adoption rate
   - Point size: Number of users
   - Color: Variant

6. **Support Ticket Volume (Combo Chart):**
   - X-axis: Date (weekly)
   - Y-axis (left): Number of docs-related tickets
   - Y-axis (right): Docs sessions
   - Shows correlation between docs traffic and support load

7. **Content ROI Table:**
   - Columns: Doc Page, Views, Conversion Rate, Estimated Value, Variant
   - Sort by Estimated Value
   - Shows which content drives most business value

**Filters:**
- Date range
- Attribution window (7-day, 30-day)
- User segment
- Experiment variant

**Data Blending Required:**
- Connect product analytics data source (user sign-ups, service creation)
- Connect support system data (if possible)
- Join on user ID or date range

### 3.8 Page 7: Navigation & Architecture Analysis

**Components:**

1. **Navigation Metrics Scorecard:**
   - Avg Navigation Depth, Nav Element CTR, Internal Link CTR
   - With vs previous period

2. **User Journey Flow (Sankey Diagram):**
   - Shows most common 3-step paths
   - Starting from top entry pages
   - Breakdown by variant

3. **Navigation Element Performance (Table):**
   - Columns: Nav Element, Location, Impressions, Clicks, CTR, Variant
   - Sort by Impressions (descending)
   - Shows what navigation is actually used

4. **Entry Page Distribution (Pie Chart):**
   - Shows diversity of entry points
   - Flag if >40% entering through single page

5. **Exit Page Concentration (Bar Chart):**
   - X-axis: Top 20 exit pages
   - Y-axis: % of total exits
   - Breakdown: Variant

6. **Internal Link Click Heatmap (Table):**
   - Rows: Source page
   - Columns: Destination page (top 10)
   - Values: Number of clicks
   - Shows cross-linking effectiveness

7. **Orphaned Content Report (Table):**
   - Columns: Page, Views, Incoming Links, Traffic Sources, Variant
   - Filter: Pages with <10 views per week OR no nav path
   - Sort by Views (ascending)

8. **Breadcrumb & ToC Usage (Bar Chart):**
   - X-axis: Element type (breadcrumb, ToC, sidebar nav, footer)
   - Y-axis: CTR %
   - Breakdown: Variant

**Filters:**
- Date range
- Docs section
- User type (new vs returning)
- Experiment variant

### 3.9 Page 8: A/B Test Comparison

**Purpose:** Side-by-side comparison of old vs new site

**Components:**

1. **Test Overview Scorecard:**
   - Test Start Date, Days Running, Total Sessions (per variant), Statistical Power

2. **Variant Comparison Table (Main Component):**
   - Rows: All key metrics from categories 1-6
   - Columns: Metric, Old Site Value, New Site Value, Absolute Change, % Change, Statistical Significance (✓/✗), Winner
   - Conditional formatting: Green for winning variant
   - Sort by Statistical Significance (significant first)

3. **Metric Trends Comparison (Multi-line Chart):**
   - Dropdown to select metric
   - X-axis: Date
   - Y-axis: Metric value
   - Two lines: Old Site (blue), New Site (green)
   - Vertical line showing test start date

4. **Engagement Comparison Radar Chart:**
   - Axes: Bounce Rate, Pages/Session, Time on Page, Return Rate, Engaged Session Rate
   - Two shapes: Old Site, New Site
   - Shows engagement profile at a glance

5. **User Segment Breakdown (Table):**
   - Rows: Segment (New Users, Return Users, Mobile, Desktop)
   - Columns: Metric, Old Site, New Site, Winner
   - Shows which segments benefit most from new site

6. **Statistical Significance Timeline (Gantt Chart):**
   - Shows when each key metric reached statistical significance
   - X-axis: Date
   - Y-axis: Metric
   - Color: Old Site Winner (red), New Site Winner (green), Not Significant (gray)

7. **Recommendation Box (Text):**
   - Manual summary: "Continue test", "Ship new site", "Iterate and retest"
   - Key risks and opportunities
   - Next steps

**Filters:**
- Date range (defaults to full test period)
- Minimum confidence level (90%, 95%, 99%)

### 3.10 Dashboard Setup Instructions

**Data Source Connection:**

1. **Google Analytics 4:**
   - Add data source → Google Analytics
   - Select your GA4 property
   - Authorize access

2. **Product Analytics (Optional):**
   - If using Segment, Amplitude, or Mixpanel
   - Export data to BigQuery
   - Connect BigQuery as data source to Looker Studio
   - Blend with GA4 data on user ID or date

3. **Support System (Optional):**
   - Export ticket data to Google Sheets or BigQuery
   - Connect as secondary data source
   - Join on date range

**Calculated Fields to Create:**

```sql
-- Engaged Session Rate
Engaged Sessions / Sessions

-- Bounce Rate (if not automatically available)
Bounces / Sessions

-- Search Success Rate
Search Result Clicks / Searches

-- Zero-Result Search Rate
Zero Result Searches / Total Searches

-- Helpfulness Score
Helpful Votes / (Helpful Votes + Not Helpful Votes)

-- Core Web Vitals "Good" Rate
COUNT(CASE WHEN LCP < 2500 AND FID < 100 AND CLS < 0.1 THEN 1 END) / COUNT(*)

-- Conversion Rate
Conversions / Sessions

-- Statistical Significance (simplified)
-- Use CASE statement with Z-test or Chi-square test
-- For proper implementation, export to BigQuery and use SQL
```

**Sharing and Permissions:**
- Share dashboard with stakeholders (view-only)
- Set up email delivery of executive summary (weekly)
- Create public link for broader team access (if appropriate)
- Schedule data refresh (daily)

---

## 4. A/B Testing Process & Documentation

### 4.1 Pre-Test Checklist

**Before Starting the A/B Test:**

- [ ] Define primary success metric (choose 1)
- [ ] Define secondary metrics (choose 3-5)
- [ ] Calculate required sample size
- [ ] Determine test duration (minimum 2 weeks, recommend 4 weeks)
- [ ] Set significance level (95% recommended)
- [ ] Verify GA4 tracking is working correctly for both variants
- [ ] Test variant assignment logic (ensure 50/50 split)
- [ ] Verify variant persistence across sessions
- [ ] Document current baseline metrics
- [ ] Create Looker Studio dashboard pages
- [ ] Brief team on test goals and timeline
- [ ] Set up automated alerts for technical issues
- [ ] Plan for "no-winner" scenario (what if results are inconclusive?)

**Sample Size Calculation:**

```
Given:
- Baseline conversion rate: [e.g., 3.5%]
- Minimum detectable effect: [e.g., 10% relative = 3.85%]
- Statistical power: 80%
- Significance level: 95%

Required sample size per variant: [calculate using online calculator]
Estimated time to reach sample size: [calculate based on current traffic]
```

### 4.2 During Test Monitoring

**Daily Checks (Automated):**
- Verify variant split remains 50/50
- Check for tracking errors or missing data
- Monitor for technical issues (errors, performance problems)

**Weekly Review (Manual):**
- Review Looker Studio dashboard
- Document interim results (but don't make decisions yet)
- Check for anomalies or unexpected behavior
- Identify any segment-specific patterns
- Update stakeholders on progress

**Red Flags to Watch For:**
- >55/45 split between variants (indicates assignment problem)
- Sudden drop in traffic to one variant
- Error rate >2% on either variant
- Page load time >5s on either variant
- Negative feedback spike on new variant

### 4.3 Post-Test Analysis

**When Test Concludes:**

1. **Export Final Data:**
   - Pull complete dataset from GA4
   - Export Looker Studio tables to Google Sheets
   - Save dashboard state (PDF/screenshots)

2. **Statistical Analysis:**
   - Calculate significance for all key metrics
   - Use Chi-square test for proportions (conversion rate, bounce rate)
   - Use t-test for continuous metrics (time on page, pages per session)
   - Document p-values and confidence intervals
   - Check for multiple comparison issues (Bonferroni correction if testing many metrics)

3. **Segment Analysis:**
   - Break down results by:
     - Device type (mobile vs desktop)
     - User type (new vs returning)
     - Geographic region
     - Traffic source
     - Docs section
   - Identify which segments benefit most from new architecture

4. **Qualitative Analysis:**
   - Review all feedback comments
   - Categorize feedback themes
   - Compare sentiment between variants
   - Identify specific pain points in new site

5. **Business Impact Assessment:**
   - Calculate ROI of new architecture
   - Estimate impact on support costs
   - Project impact on user retention
   - Consider development/maintenance costs

### 4.4 Decision Framework

**Criteria for Shipping New Site:**

**Strong Ship Signal (2+ required):**
- Primary metric improves by >10% with p<0.05
- 3+ secondary metrics improve significantly
- No significant regressions in any metric
- Positive qualitative feedback outweighs negative >3:1
- Support ticket reduction >20%

**Caution Signals (1+ requires discussion):**
- Mixed results (some metrics up, some down)
- Significant improvement in only 1 metric
- Strong segment-specific regression (e.g., mobile users worse off)
- Negative feedback themes reveal architectural issues
- Technical performance degradation

**Don't Ship Signals (1+ is blocking):**
- Primary metric significantly regresses
- Conversion rate drops
- Multiple metrics regress significantly
- Page performance >25% worse
- Critical bugs or errors affecting >5% of users

**If Results are Inconclusive:**
- Extend test duration (add 2 more weeks)
- Analyze qualitative feedback for hypotheses
- Consider targeted improvements to new site
- Retest with refined version
- Consider hybrid approach (new architecture for some sections)

### 4.5 Documentation Template

**Create Post-Test Report (Copy template below):**

---

## A/B Test Results Report

**Test Details:**
- Start Date: [YYYY-MM-DD]
- End Date: [YYYY-MM-DD]
- Duration: [X weeks]
- Sessions per Variant: Old Site [X], New Site [Y]

**Primary Success Metric:**
- Metric: [e.g., Docs-to-Signup Conversion Rate]
- Old Site: [X%]
- New Site: [Y%]
- Change: [+/-Z%] ([+/-A] percentage points)
- Statistical Significance: [Yes/No] (p=[value])

**Secondary Metrics:**

| Metric | Old Site | New Site | Change | p-value | Significant? |
|--------|----------|----------|--------|---------|--------------|
| Engaged Session Rate | X% | Y% | +/-Z% | 0.XX | Yes/No |
| Pages per Session | X.X | Y.Y | +/-Z% | 0.XX | Yes/No |
| Search Success Rate | X% | Y% | +/-Z% | 0.XX | Yes/No |
| Helpfulness Score | X% | Y% | +/-Z% | 0.XX | Yes/No |
| Median LCP | Xs | Ys | +/-Z% | 0.XX | Yes/No |

**Segment Analysis:**

| Segment | Primary Metric (Old) | Primary Metric (New) | Winner |
|---------|---------------------|---------------------|--------|
| New Users | X% | Y% | Old/New/Tie |
| Returning Users | X% | Y% | Old/New/Tie |
| Mobile | X% | Y% | Old/New/Tie |
| Desktop | X% | Y% | Old/New/Tie |

**Qualitative Feedback Summary:**
- Total Feedback Submissions: [X old, Y new]
- Positive Feedback: [X% old, Y% new]
- Top Themes (New Site): [list 3-5]
- Top Complaints (New Site): [list 3-5]

**Key Findings:**
1. [Finding 1]
2. [Finding 2]
3. [Finding 3]

**Recommendation:**
[Ship / Don't Ship / Iterate and Retest / Hybrid Approach]

**Rationale:**
[2-3 paragraphs explaining the recommendation]

**Risks & Mitigations:**
- Risk 1: [description] → Mitigation: [action]
- Risk 2: [description] → Mitigation: [action]

**Next Steps:**
1. [Action 1]
2. [Action 2]
3. [Action 3]

**Appendix:**
- Link to Looker Studio dashboard: [URL]
- Link to raw data export: [URL]
- Link to qualitative feedback: [URL]

---

### 4.6 Post-Launch Monitoring

**If New Site Ships:**

**Week 1-2 After Launch (Daily Monitoring):**
- Monitor error rates
- Check performance metrics
- Review support ticket volume
- Respond to user feedback

**Week 3-4 After Launch (Weekly Monitoring):**
- Compare to A/B test results (are improvements sustained?)
- Analyze any regressions
- Identify optimization opportunities

**Month 2-3 After Launch (Bi-weekly Monitoring):**
- Continue tracking all metrics
- Measure long-term impact on retention
- Conduct user interviews (5-10 users)
- Plan next iteration

**Continuous Improvement:**
- Use feedback to inform next improvements
- Run follow-up A/B tests on specific features
- Update documentation based on user behavior
- Optimize for discovered pain points

---

## 5. Quick Reference

### 5.1 GA4 Custom Events Summary

| Event Name | Parameters | When to Fire |
|------------|------------|--------------|
| `search` | `search_term`, `search_results_count`, `search_location` | User performs search |
| `search_result_click` | `search_term`, `result_position`, `result_url`, `time_to_click` | User clicks search result |
| `page_feedback` | `feedback_type`, `page_title`, `page_path`, `user_comment` | User submits helpful/not helpful |
| `navigation_click` | `nav_element`, `link_text`, `link_url`, `link_position` | User clicks nav element |
| `internal_link_click` | `link_text`, `link_url`, `source_page`, `link_context` | User clicks internal link |
| `code_copy` | `code_language`, `code_length`, `page_title` | User copies code snippet |

### 5.2 Key Metrics Targets

| Metric | Target | Stretch Goal |
|--------|--------|--------------|
| Engaged Session Rate | >70% | >80% |
| Bounce Rate | <40% | <30% |
| Pages per Session | >3.5 | >5.0 |
| Search Success Rate | >75% | >85% |
| Helpfulness Score | >75% | >85% |
| LCP (Median) | <2.5s | <2.0s |
| Docs-to-Signup Rate | >5% | >7% |

### 5.3 Dashboard Links

- Executive Summary: [Link to Looker Studio page]
- User Engagement: [Link]
- Search Analysis: [Link]
- User Satisfaction: [Link]
- Performance: [Link]
- Business Impact: [Link]
- Navigation Analysis: [Link]
- A/B Test Comparison: [Link]

### 5.4 Contacts

- Analytics Owner: [Name, Email]
- Product Manager: [Name, Email]
- Engineering Lead: [Name, Email]
- UX Research: [Name, Email]

---

## Appendix: Statistical Significance Testing

### A.1 Chi-Square Test for Proportions

Use for metrics like conversion rate, bounce rate, search success rate.

```python
from scipy.stats import chi2_contingency
import numpy as np

# Example: Testing conversion rate
old_site = {'conversions': 150, 'sessions': 5000}
new_site = {'conversions': 180, 'sessions': 5000}

# Create contingency table
observed = np.array([
    [old_site['conversions'], old_site['sessions'] - old_site['conversions']],
    [new_site['conversions'], new_site['sessions'] - new_site['conversions']]
])

chi2, p_value, dof, expected = chi2_contingency(observed)

print(f"Chi-square statistic: {chi2}")
print(f"P-value: {p_value}")
print(f"Significant at 95% level: {p_value < 0.05}")
```

### A.2 T-Test for Continuous Metrics

Use for metrics like time on page, pages per session, LCP.

```python
from scipy.stats import ttest_ind

# Example: Testing average pages per session
old_site_pages = [3.2, 4.1, 2.8, ...]  # array of values
new_site_pages = [3.8, 4.5, 3.2, ...]  # array of values

t_statistic, p_value = ttest_ind(old_site_pages, new_site_pages)

print(f"T-statistic: {t_statistic}")
print(f"P-value: {p_value}")
print(f"Significant at 95% level: {p_value < 0.05}")
```

### A.3 Sample Size Calculator

```python
from statsmodels.stats.power import zt_ind_solve_power

# Example: Required sample size for conversion rate test
baseline_rate = 0.035  # 3.5%
mde = 0.10  # 10% relative improvement
new_rate = baseline_rate * (1 + mde)  # 3.85%

effect_size = (new_rate - baseline_rate) / np.sqrt(baseline_rate * (1 - baseline_rate))

sample_size = zt_ind_solve_power(
    effect_size=effect_size,
    alpha=0.05,  # 95% confidence
    power=0.80,  # 80% power
    alternative='two-sided'
)

print(f"Required sample size per variant: {int(sample_size)}")
```

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial framework created |

---

**End of A/B Testing Framework**