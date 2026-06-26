# Design System Inspired by Trường THPT Demo Full 2025

## 1. Visual Theme & Atmosphere

This design system embodies a modern, professional educational platform with a clean, accessible interface. The visual language combines deep trust-building blues with warm accent oranges to create an inviting yet authoritative presence. The aesthetic emphasizes clarity and usability, with generous whitespace and purposeful typography hierarchy. The interface feels contemporary and accessible, designed to support students, parents, and educators in navigating school management tools and educational content with confidence. The overall mood is educational yet approachable—neither overly formal nor casual—striking a balance suitable for a comprehensive secondary school management platform.

**Key Characteristics:**
- Deep blue primary palette suggesting trust, education, and professionalism
- Warm orange accents providing visual interest and drawing attention to key actions
- Clean, minimal aesthetic with ample whitespace for clarity
- Rounded search inputs and soft shadows for approachability
- Clear visual hierarchy supporting multiple user types (students, parents, administrators)
- Contemporary sans-serif typography for legibility
- Emphasis on accessibility and inclusive design

## 2. Color Palette & Roles

### Primary
- **Deep Trust Blue** (`#094D8A`): Primary brand color used for buttons, navigation highlights, icons, and interactive elements. Creates the foundational identity across the platform.
- **Primary Light Blue** (`#D1E9FF`): Light tint of primary blue used for subtle backgrounds, hover states, or focus indicators to maintain visual continuity.

### Accent Colors
- **Warm Orange** (`#FF6A00`): Secondary accent used for highlights within cards, complementary icons, and secondary CTAs to provide visual contrast and energy.
- **Bright Orange** (`#F4951D`): Lighter orange variant for tertiary accents or badge highlights.
- **Purple Accent** (`#BBAACC`): Tertiary accent for decorative elements, badges, or secondary highlights to add visual variety.

### Interactive
- **Danger Red** (`#D9534F`): Used for destructive actions, error states, or warning indicators requiring user attention.
- **Success Green** (`#2CA01C`): Primary success indicator for completed actions, positive confirmations, or valid form states.
- **Success Green Secondary** (`#5CB85C`): Lighter success green for secondary success messaging or backgrounds.

### Neutral Scale
- **Text Primary** (`#212121`): Dominant text color used throughout body copy, headings, and primary UI text for maximum contrast and readability.
- **Text Secondary** (`#262626`): Slightly lighter variant for secondary text or reduced-emphasis labels.
- **Text Tertiary** (`#393A3B`): Tertiary text for helper text, captions, or de-emphasized information.
- **Text Muted** (`#777777`): Light gray text for placeholder content, disabled states, or auxiliary information.
- **Text Muted Light** (`#888888`): Lighter muted text for subtle UI elements or secondary navigation.
- **Text Muted Lightest** (`#5A5A5A`): Medium gray for borders, dividers, and subtle separators.
- **White** (`#FFFFFF`): Background and text on dark overlays; primary surface color.

### Surface & Borders
- **Border Subtle** (`#D0D5DD`): Soft border color for input fields, card separators, and subtle visual divisions.
- **Dark Gray** (`#2A3D58`): Dark background variant for sections or modal overlays.
- **Input Background** (`#F2F4F7`): Light neutral background for input fields and form containers, providing visual distinction from page background.

## 3. Typography Rules

### Font Family
**Primary:** Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

**Secondary:** Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display/Hero | Roboto | 32px | 700 | 40px | -0.5px | Large page headings, landing hero text |
| Heading 1 | Roboto | 28px | 700 | 36px | -0.3px | Section titles, major headings |
| Heading 2 | Roboto | 24px | 600 | 32px | -0.2px | Subsection titles, card headers |
| Heading 3 | Roboto | 20px | 600 | 28px | 0px | Feature section headers, modal titles |
| Heading 4 | Inter Bold | 18px | 400 | 19.8px | 0px | Medium-weight section headers |
| Body | Roboto | 14px | 400 | 22px | 0px | Default body text, list items, descriptions |
| Body Small | Roboto | 12px | 400 | 18px | 0px | Captions, helper text, meta information |
| Link | Roboto | 18px | 400 | 20px | 0px | Standalone link text, breadcrumbs |
| Link Small | Roboto | 14px | 400 | 18px | 0px | Inline links within body text |
| Button | Roboto | 14px | 600 | 18px | 0.3px | Action button text |
| Input | Roboto | 16px | 400 | 22.86px | 0px | Form input placeholder and value text |

### Principles
- **Hierarchy Clarity:** Font size and weight create distinct visual layers ensuring users quickly understand content priority and structure.
- **Accessibility First:** Minimum 14px for body text ensures readability across devices; line height ratio of 1.5–1.6 improves comprehension.
- **Consistency:** Limited type scale prevents visual chaos and maintains professional appearance across all pages.
- **Contrast:** Dark text (`#212121`) on light backgrounds meets WCAG AA standards; sufficient weight differentiation between hierarchy levels.

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#094D8A`
- Text Color: `#FFFFFF`
- Font Size: `14px`
- Font Weight: `600`
- Font Family: Roboto
- Padding: `12px 24px`
- Border Radius: `4px`
- Border: `none`
- Box Shadow: `0px 1px 2px rgba(0, 0, 0, 0.05)`
- Height: `auto`
- Line Height: `18px`
- Hover State: Background `#073A63`, text `#FFFFFF`
- Active State: Background `#052847`, box shadow `0px 2px 4px rgba(0, 0, 0, 0.1)`
- Disabled State: Background `#D0D5DD`, text `#888888`, cursor not-allowed

**Secondary Button**
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `#212121`
- Font Size: `14px`
- Font Weight: `400`
- Font Family: Roboto
- Padding: `9px 10px`
- Border Radius: `4px`
- Border: `1px solid #DDDDDD`
- Box Shadow: `none`
- Height: `auto`
- Line Height: `18px`
- Hover State: Background `#F2F4F7`, border color `#094D8A`
- Active State: Background `#E3E8EF`, border color `#052847`
- Disabled State: Background `rgba(0, 0, 0, 0)`, text `#888888`, border `1px solid #D0D5DD`

**Ghost Button**
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `#393A3B`
- Font Size: `14px`
- Font Weight: `400`
- Font Family: Roboto
- Padding: `0px`
- Border Radius: `0px`
- Border: `none`
- Box Shadow: `none`
- Height: `auto`
- Line Height: `18px`
- Hover State: Text color `#094D8A`, text-decoration underline
- Active State: Text color `#073A63`

### Cards & Containers

**Standard Card**
- Background: `#FFFFFF`
- Border: `1px solid #D0D5DD`
- Border Radius: `8px`
- Padding: `24px`
- Box Shadow: `0px 1px 2px rgba(0, 0, 0, 0.05)`
- Hover State: Box shadow `0px 2px 8px rgba(0, 0, 0, 0.1)`, border color `#094D8A`

**Elevated Card**
- Background: `#FFFFFF`
- Border: `none`
- Border Radius: `8px`
- Padding: `24px`
- Box Shadow: `0px 4px 12px rgba(0, 0, 0, 0.08)`
- Hover State: Box shadow `0px 8px 20px rgba(0, 0, 0, 0.12)`

**Feature Card with Icon**
- Background: `#FFFFFF`
- Border: `1px solid #D0D5DD`
- Border Radius: `8px`
- Padding: `20px`
- Icon Background: `#D1E9FF`
- Icon Color: `#094D8A`
- Title Font Size: `16px`, weight `600`, color `#212121`
- Description Font Size: `14px`, weight `400`, color `#777777`
- Hover State: Background `#F9FAFB`, border `1px solid #094D8A`

### Inputs & Forms

**Standard Text Input**
- Background: `#F2F4F7`
- Text Color: `#101828`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: Roboto
- Padding: `6px 40px 6px 40px` (horizontal padding for icons/search)
- Border Radius: `30px`
- Border: `1px solid #094D8A`
- Box Shadow: `none`
- Height: `56px`
- Line Height: `22.86px`
- Placeholder Color: `#999999`
- Focus State: Border `2px solid #094D8A`, background `#FFFFFF`, box shadow `0px 0px 0px 3px rgba(9, 77, 138, 0.1)`
- Disabled State: Background `#E8EAED`, border `1px solid #D0D5DD`, text color `#888888`, cursor not-allowed
- Error State: Border `2px solid #D9534F`, box shadow `0px 0px 0px 3px rgba(217, 83, 79, 0.1)`

**Search Input**
- Background: `#F2F4F7`
- Text Color: `#101828`
- Font Size: `16px`
- Padding: `6px 40px 6px 40px`
- Border Radius: `30px`
- Border: `1px solid #094D8A`
- Icon Position: Absolute left `12px`
- Height: `56px`
- Placeholder: "Tìm kiếm ứng dụng" color `#999999`

**Form Label**
- Font Size: `14px`
- Font Weight: `600`
- Color: `#212121`
- Margin Bottom: `8px`
- Required Indicator: Color `#D9534F`, margin left `2px`

**Form Helper Text**
- Font Size: `12px`
- Font Weight: `400`
- Color: `#777777`
- Margin Top: `6px`

### Navigation

**Top Navigation Bar**
- Background: `#FFFFFF`
- Height: `69px`
- Border Bottom: `1px solid #D0D5DD`
- Padding: `0px 40px`
- Display: flex, align-items center, justify-content space-between
- Logo: Font size `18px`, font weight `700`, color `#212121`

**Navigation Links**
- Font Size: `14px`
- Font Weight: `400`
- Color: `#212121`
- Padding: `12px 16px`
- Border Radius: `0px`
- Hover State: Color `#094D8A`, background `rgba(9, 77, 138, 0.05)`
- Active State: Color `#094D8A`, border bottom `3px solid #094D8A`

**Login Button (Outline)**
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `#094D8A`
- Font Size: `14px`
- Font Weight: `600`
- Padding: `9px 20px`
- Border: `1.5px solid #094D8A`
- Border Radius: `20px`
- Hover State: Background `#D1E9FF`, text color `#073A63`

**Navigation Tab**
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `#777777`
- Font Size: `14px`
- Padding: `16px 20px`
- Border Bottom: `2px solid transparent`
- Hover State: Color `#393A3B`, border bottom `2px solid #D0D5DD`
- Active State: Color `#094D8A`, border bottom `2px solid #094D8A`

### Badges

**Badge Neutral**
- Background: `#E8EAED`
- Text Color: `#212121`
- Font Size: `12px`
- Font Weight: `600`
- Padding: `4px 12px`
- Border Radius: `16px`
- Border: `none`

**Badge Success**
- Background: `#E6F4EA`
- Text Color: `#2CA01C`
- Font Size: `12px`
- Font Weight: `600`
- Padding: `4px 12px`
- Border Radius: `16px`

**Badge Danger**
- Background: `#FADBD8`
- Text Color: `#D9534F`
- Font Size: `12px`
- Font Weight: `600`
- Padding: `4px 12px`
- Border Radius: `16px`

### Icons

**Icon Primary**
- Color: `#094D8A`
- Size: `24px` (standard), `32px` (large), `16px` (small)
- Background (with container): `#D1E9FF`
- Container Padding: `12px`
- Container Border Radius: `8px`

**Icon Orange**
- Color: `#FF6A00`
- Size: `24px`
- Background: `#FFE8CC`
- Container Padding: `12px`

## 5. Layout Principles

### Spacing System
**Base Unit:** `4px`

**Scale:** `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `36px`, `40px`, `48px`, `56px`, `64px`

**Usage Contexts:**
- `4px`: Micro-spacing between elements, internal button padding variations
- `8px`: Tight spacing between related items, small gaps between UI elements
- `12px`: Spacing within form groups, internal padding for small components
- `16px`: Standard spacing between navigation items, padding around cards
- `20px`: Spacing between major content sections, margin below headings
- `24px`: Standard card padding, section margins, vertical rhythm baseline
- `32px`: Large spacing between feature blocks, major section separators
- `36px`: Form row spacing, large vertical separators
- `40px`: Page margins, container padding, large horizontal gutters
- `48px+`: Hero spacing, full-width section gaps, major layout divisions

### Grid & Container
- **Max Width Container:** `1440px` (full viewport width for navigation), content container `1380px` (with 30px padding on each side)
- **Column Strategy:** 12-column flexible grid system with `16px` gutters
- **Horizontal Padding:** `40px` on desktop, `24px` on tablet, `16px` on mobile
- **Section Pattern:** Alternating full-width (background color extends edge-to-edge) and constrained content sections

### Whitespace Philosophy
Generous whitespace creates breathing room and reduces cognitive load. Vertical rhythm is maintained through consistent `24px` margins between sections. Card spacing uses `24px` internal padding with `16px–20px` gaps between cards in grids. Top navigation features balanced padding for a premium feel without excessive height. Search and input fields are given ample surrounding space to draw focus.

### Border Radius Scale
- `4px`: Buttons, small interactive elements, minor form controls
- `8px`: Cards, containers, modal bodies, larger input fields
- `16px`: Medium badges, rounded button variants, section containers
- `20px`: Pill buttons, strong CTA variants
- `24px`: Large rounded cards, hero sections
- `30px`: Search inputs, oversized form controls, prominent input fields

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | `none` | Text, icons, flat badges, disabled states |
| Raised (Sm) | `0px 1px 2px rgba(0, 0, 0, 0.05)` | Standard buttons, cards, subtle surfaces |
| Raised (Md) | `0px 2px 8px rgba(0, 0, 0, 0.1)` | Hovered cards, dropdown menus, light overlays |
| Elevated (Lg) | `0px 4px 12px rgba(0, 0, 0, 0.08)` | Feature cards, modals, important containers |
| Deep (Xl) | `0px 8px 20px rgba(0, 0, 0, 0.12)` | Modal backdrops, full-page overlays, top-level alerts |
| Dropdown Shadow | `rgb(204, 204, 204) 1px 1px 2px 0px` | Dropdown lists, floating menus (legacy) |

**Shadow Philosophy:** Shadows are subtle and purposeful, using low opacity (5–12% black) to create gentle depth without heaviness. Elevation increases progressively with component importance: static content uses no shadow, interactive elements use small shadows, modals and overlays use prominent shadows. All shadows use neutral grays to avoid color-cast and maintain interface cleanliness. Shadows enhance usability by creating clear visual hierarchy and indicating interactive surfaces.

## 7. Do's and Don'ts

### Do
- Use the primary blue (`#094D8A`) for all primary CTAs and trusted interactive elements.
- Apply warm orange (`#FF6A00`) sparingly as an accent to draw attention to secondary actions or highlights.
- Maintain `14px` minimum font size for all body text to ensure accessibility across devices.
- Use `24px` as the baseline vertical spacing between sections for consistent rhythm.
- Apply soft shadows (opacity 5–10%) to cards and containers to create gentle elevation.
- Include ample whitespace around form inputs and CTAs to reduce cognitive friction.
- Use rounded corners (`30px`) on search and primary input fields to convey approachability.
- Prioritize clear visual hierarchy through size, weight, and color contrast.
- Test all interactive elements with focus states for keyboard navigation accessibility.
- Use semantic colors: green for success, red for danger, blue for neutral actions.

### Don't
- Avoid using orange and blue together in small, tightly-spaced elements—contrast may feel jarring.
- Don't apply dark text (`#212121`) on dark backgrounds; minimum contrast ratio must be 4.5:1 for AA compliance.
- Never use font sizes below `12px` for body text; it harms readability and accessibility.
- Avoid excessive shadows (opacity >15%); they create visual weight and clutter.
- Don't nest cards more than two levels deep—it creates confusing visual hierarchy.
- Avoid mixing multiple accent colors in a single component; use one accent per element.
- Don't disable form inputs without clear helper text explaining why.
- Never truncate important information without a tooltip or expanded view option.
- Avoid auto-playing animations or transitions longer than `300ms`; they feel sluggish.
- Don't use placeholder text as a label substitute; always include proper labels above inputs.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | 320px–479px | Single column, full-width cards, stacked navigation, `16px` padding, font sizes reduced by 2px |
| Small Mobile | 480px–639px | Single column with wider gutters, full-width cards, `20px` padding |
| Tablet | 640px–1023px | 2-column grid for cards, sidebar collapses to hamburger, `24px` padding, navigation wraps to secondary row |
| Small Desktop | 1024px–1279px | 3-column grid, sticky sidebar, full navigation visible, `32px` padding |
| Desktop | 1280px–1919px | Full 3- or 4-column layouts, expanded sidebars, `40px` padding, optimal line lengths maintained |
| Large Desktop | 1920px+ | Centered content with max-width `1440px`, balanced side margins, additional whitespace |

### Touch Targets
- **Minimum Size:** `48px × 48px` for interactive elements (buttons, links, icon buttons)
- **Recommended Size:** `56px × 56px` for primary CTAs and form inputs
- **Spacing:** Minimum `8px` padding between adjacent touch targets to prevent accidental selection
- **Link Text:** Minimum `14px` with line height `1.5` for comfortable reading on small screens

### Collapsing Strategy
- **Navigation:** Hamburger menu on devices below `1024px`; horizontal tabs show only 3–4 items on tablet, full menu on desktop
- **Cards:** Single column on mobile, 2 columns on tablet, 3–4 columns on desktop with flexible sizing
- **Forms:** Full-width inputs on mobile (`100%` width), side-by-side pairs on desktop
- **Sidebars:** Hidden behind toggle on mobile, slide-out drawer on tablet, sticky sidebar on desktop
- **Images:** Responsive scaling with `max-width: 100%`, reduced sizes on mobile
- **Typography:** Headings reduce by 2–4px on mobile; body text stays minimum `14px`
- **Padding:** Halved from `40px` to `16px–20px` on mobile to maximize content area
- **Hero Sections:** Full-height on desktop, reduced to 50vh on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Deep Trust Blue (`#094D8A`)
- **Secondary CTA:** Warm Orange (`#FF6A00`)
- **Background:** White (`#FFFFFF`)
- **Body Text:** Text Primary (`#212121`)
- **Secondary Text:** Text Muted (`#777777`)
- **Input Background:** Input Background (`#F2F4F7`)
- **Input Border (Focus):** Deep Trust Blue (`#094D8A`)
- **Success:** Success Green (`#2CA01C`)
- **Error:** Danger Red (`#D9534F`)
- **Disabled:** Text Muted Light (`#888888`)

### Iteration Guide

1. **Primary Actions** use `#094D8A` background with white text, `14px` weight `600`, padding `12px 24px`, border-radius `4px`, with hover state background `#073A63`.

2. **Search Inputs** are `56px` tall with rounded border-radius `30px`, padding `6px 40px`, background `#F2F4F7`, border `1px solid #094D8A`, font size `16px`.

3. **Navigation** is `69px` tall with white background, border-bottom `1px solid #D0D5DD`, and active tabs have `#094D8A` text with bottom border accent.

4. **Cards** have minimum padding `24px`, border-radius `8px`, subtle border `1px solid #D0D5DD`, and box-shadow `0px 1px 2px rgba(0, 0, 0, 0.05)` with hover elevation.

5. **Spacing baseline** is `24px` for vertical section margins, `40px` for container horizontal padding; adjust down 50% on tablet (`24px`–`32px`), mobile (`16px`–`20px`).

6. **Typography defaults** are Roboto family, body text `14px` weight `400` line-height `22px`, headings scale from `18px` (`24px` preferred) to `32px` with weight `600`–`700`.

7. **Form labels** are `14px` weight `600` color `#212121`, placed above inputs with `8px` margin-bottom; helper text is `12px` weight `400` color `#777777` below input.

8. **Icons** use `#094D8A` color with optional `#D1E9FF` background container (`12px` padding, `8px` border-radius); alternate icon color `#FF6A00` for accents.

9. **Accessibility:** All interactive elements include `:focus` states with `2px` border and `3px` rgba shadow; text contrast minimum `4.5:1` AA; font-size minimum `14px` body, `12px` captions.

10. **Disabled states** use text color `#888888`, background `#E8EAED` or `rgba(0,0,0,0)`, border `1px solid #D0D5DD`, cursor `not-allowed`, no hover or active state changes.