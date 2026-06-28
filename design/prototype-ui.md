# Design System: DevStudio Enterprise

## Visual Identity
A professional, enterprise-grade SaaS aesthetic characterized by clean lines, a sophisticated blue-centric palette, and high information density with clear hierarchy.

## Color Palette

### Primary Colors
- **Primary (Core Blue):** `#00458B` - Used for primary actions, active navigation states, and brand presence.
- **On Primary:** `#FFFFFF` - High contrast text/icons on primary backgrounds.
- **Primary Container:** `#D1E4FF` - Subtle background for related elements.

### Surface & Neutral Colors
- **Surface:** `#FCF9F8` - Main background for screens and large containers.
- **Surface Container Low:** `#F6F3F2` - Secondary backgrounds for grouping content.
- **Outline:** `#79747E` - Standard borders for inputs and dividers.
- **Outline Variant:** `#C4C7C5` - Softer dividers for subtle separation.

### Status Colors
- **Success (Published):** `#4CAF50` (Green) - Used for 'Published' status and successful validation.
- **Warning (Draft):** `#FF9800` (Orange) - Used for 'Draft' or 'Pending' states.
- **Error (Rejected):** `#F44336` (Red) - Used for 'Rejected' or destructive actions like 'Delete'.

## Typography
- **Primary Font Family:** Inter (Sans-serif)
- **Scale:**
  - **Headline Large:** 32px, Semi-bold (Page titles)
  - **Title Medium:** 18px, Bold (Section headers, card titles)
  - **Body Medium:** 14px, Regular (Standard content, table data)
  - **Label Small:** 12px, Medium (Tags, metadata, micro-copy)

## Component Library

### Navigation
- **Side Navigation Bar:**
  - Fixed width (260px).
  - Features brand logo at the top.
  - Consistent icon + label pair for navigation items.
  - Active state: Background fill with rounded corners and bold text.
- **Top App Bar:**
  - Fixed height (64px).
  - Breadcrumb support for deep navigation.
  - Right-aligned utility area for Search, Notifications, and User Profile.

### Tables & Lists
- **Data Table:**
  - Clean layout with horizontal borders only.
  - Status tags with soft background fills.
  - Action column with text-based links (Sửa, Xóa).
  - Summary cards (Statistic widgets) placed above tables for context.

### Form Elements
- **Input Fields:** Outlined style with clear labels above the field.
- **Buttons:**
  - **Primary:** Filled background (Primary Blue).
  - **Secondary:** Outlined or ghost style.
  - **Danger:** Red text or background for destructive actions.
- **Modals/Popups:** Centered overlay with a header (Title + Close X), content area, and footer for actions (Cancel/Confirm).

### Overlays
- **Drawers:** Slide-in from the right, used for detailed previews or configuration without losing context.
- **Popups:** Modal dialogs for focused tasks like adding/editing users or confirmation steps.

## Spacing & Layout
- **Page Margin:** 32px (Desktop).
- **Component Padding:** 16px to 24px within cards and modals.
- **Border Radius:** 4px (Standard) to 8px (Cards and active states).
