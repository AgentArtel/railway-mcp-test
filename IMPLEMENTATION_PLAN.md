# Unified MCP Server - Implementation Plan
## Design/Dev API for Lovable & Cursor

## 📋 Document Purpose

This document outlines the architecture and implementation plan for a unified MCP server that serves as a **Design/Dev API** for both Lovable and Cursor, enforcing decoupled AI orchestration via n8n.

---

## 🏗️ ARCHITECTURAL OVERVIEW

### Decoupled AI Architecture (CRITICAL)

**Core Principle**: Lovable must NOT use Lovable AI Cloud. All AI features must route through n8n.

**Architecture Flow**:
```
Frontend → Edge Function → n8n Webhook → LLM + Tools → Return
```

**Key Rules**:
1. **No Direct LLM Calls**: This server does NOT call OpenAI/Anthropic APIs directly
2. **n8n Orchestration**: All AI operations are handled downstream in n8n workflows
3. **Proxy Pattern**: The AI Router provider only proxies requests to n8n webhooks
4. **Separation of Concerns**: 
   - Lovable handles: Frontend, Edge Functions, DB, Auth, Wiring
   - n8n handles: AI logic, LLM calls, tool orchestration
   - This server handles: Components, Design Tokens, Patterns, AI routing

---

## 🎯 ROLE DEFINITIONS

### Lovable's Responsibilities

Lovable is responsible for:
- **Frontend**: Pages, components, UI
- **Edge Functions**: Serverless functions for API endpoints
- **DB Modeling**: Database schema, migrations
- **Auth**: Authentication and authorization
- **Wiring**: Connecting backend → n8n → DB → frontend
- **MCP Integration**: Calling this unified MCP server for:
  - Components (Magic UI, Shadcn, Aceternity, 8bitcn)
  - Design rules (Brand System)
  - Patterns (Docs/Patterns provider)
  - Icons (Lucide)
  - Tokens (Tailwind, Brand System)

**Lovable is NOT the AI engine** - it's the application framework.

### n8n's Responsibilities

n8n is responsible for:
- **AI Orchestration**: All LLM calls and AI logic
- **Workflow Management**: Complex AI workflows
- **Tool Integration**: Connecting AI to external tools
- **Data Processing**: AI-powered data transformation

**n8n IS the AI engine** - all AI operations route through n8n webhooks.

### This Server's Responsibilities

This unified MCP server provides:
- **Component Library API**: Access to Magic UI, Shadcn, Aceternity, 8bitcn
- **Design System API**: Brand tokens, themes, design rules
- **Pattern Library**: Reusable patterns and best practices
- **AI Routing**: Proxy layer to n8n workflows (NOT direct AI calls)
- **Icon Library**: Lucide icons
- **Styling Reference**: Tailwind CSS utilities

---

## ✅ Current State

### Existing Providers

#### 1. **Magic UI Provider** (`mcp-providers/magic-ui.mjs`)
**Status**: ✅ Implemented (68 components)

**Style Domain**: `web_premium`  
**Preferred Theme**: `default`

**Tools** (4):
- `magicui_get_component` - Get a Magic UI component by name
- `magicui_list_components` - List all available Magic UI components (68 total)
- `magicui_search_components` - Search Magic UI components by keyword (searches through use cases, patterns, and examples)
- `magicui_get_component_context` - Get full context and use cases for a Magic UI component

**Resources** (68):
All Magic UI components organized by category:
- **Components** (16): marquee, terminal, hero-video-dialog, bento-grid, animated-list, dock, globe, tweet-card, orbiting-circles, avatar-circles, icon-cloud, lens, pointer, smooth-cursor, progressive-blur, dotted-map
- **Special Effects** (8): animated-beam, border-beam, shine-border, magic-card, meteors, confetti, particles, animated-theme-toggler
- **Animations** (1): blur-fade
- **Text Animations** (15): text-animate, typing-animation, line-shadow-text, aurora-text, video-text, number-ticker, animated-shiny-text, animated-gradient-text, text-reveal, hyper-text, word-rotate, scroll-based-velocity, sparkles-text, morphing-text, spinning-text, text-highlighter
- **Device Mocks** (3): safari, iphone, android
- **Buttons** (3): rainbow-button, shimmer-button, ripple-button
- **Backgrounds** (9): flickering-grid, animated-grid-pattern, retro-grid, ripple, dot-pattern, grid-pattern, striped-pattern, interactive-grid-pattern, light-rays
- **Community** (12): shiny-button, file-tree, code-comparison, scroll-progress, neon-gradient-card, comic-text, cool-mode, pixel-image, pulsating-button, warp-background, interactive-hover-button, animated-circular-progress-bar

**Current Implementation**: All 68 components from [magicui.design](https://magicui.design/docs/components) included with full context metadata (use cases, patterns, examples). Placeholder data (needs integration with actual Magic UI API for component code)

---

#### 2. **Shadcn UI Provider** (`mcp-providers/shadcn.mjs`)
**Status**: ✅ Implemented

**Style Domain**: `web_premium`  
**Preferred Theme**: `default`

**Tools** (6):
- `shadcn_get_component` - Get a shadcn/ui component by name
- `shadcn_list_components` - List all available shadcn/ui components
- `shadcn_search_components` - Search shadcn/ui components by keyword (searches through use cases, patterns, and examples)
- `shadcn_get_component_code` - Get the full source code for a component
- `shadcn_get_installation_command` - Get the CLI command to install a component
- `shadcn_get_component_context` - Get full context and use cases for a shadcn/ui component

**Resources** (20+):
- Form components: button, input, label, select, textarea, checkbox, radio-group, switch
- Overlay components: dialog, dropdown-menu, popover, sheet
- Layout components: card, tabs, accordion, separator
- Feedback components: alert, toast, progress, skeleton
- Display components: avatar, badge, table, calendar

**Current Implementation**: All 59 components from [ui.shadcn.com](https://ui.shadcn.com/docs/components) included with full context metadata (use cases, patterns, examples). Placeholder data (needs integration with actual shadcn/ui API)

---

#### 3. **Custom Components Provider** (`mcp-providers/custom-components.mjs`)
**Status**: ✅ Implemented

**Style Domain**: `web_premium`  
**Preferred Theme**: `default`

**Tools** (3):
- `get_component` - Retrieve a specific component from your custom component library
- `list_components` - List all available components in your custom library
- `create_component` - Create a new component and add it to your library

**Resources** (2):
- `component://button` - Button component
- `component://card` - Card component

**Current Implementation**: Placeholder data (needs actual storage implementation)

---

## 🚀 New Providers (Scaffolding Complete)

### 4. **AI Router Provider** (`mcp-providers/ai-router.mjs`)
**Status**: ✅ Scaffolding Complete

**Style Domain**: `all`  
**Preferred Theme**: `n/a`

**Purpose**: Enforces decoupled AI architecture. All AI operations MUST route through n8n webhooks, NOT directly to LLM APIs.

**Tools** (4):
1. `ai_call` - Call an n8n workflow for AI operations
   - Parameters: `workflow` (string), `payload` (object)
   - **Note**: POSTs to n8n webhook - AI logic handled in n8n
   
2. `ai_summarize` - Summarize text via n8n workflow
   - Parameters: `text` (string), `maxLength` (number, optional)
   - **Note**: POSTs to n8n webhook - AI logic handled in n8n
   
3. `ai_extract` - Extract structured data from text via n8n workflow
   - Parameters: `text` (string), `schema` (object)
   - **Note**: POSTs to n8n webhook - AI logic handled in n8n
   
4. `ai_generate` - Generate content via n8n workflow
   - Parameters: `prompt` (string), `context` (object, optional)
   - **Note**: POSTs to n8n webhook - AI logic handled in n8n

**Resources** (2):
- `ai://workflows` - Available n8n workflows
- `ai://architecture` - AI architecture documentation

**Implementation Status**: 
- ✅ Scaffolding complete
- ⏳ TODO: Implement n8n webhook POST logic
- ⏳ TODO: Add error handling for n8n webhook failures
- ⏳ TODO: Add retry logic for failed requests
- ⏳ TODO: Add n8n webhook URL configuration

**Architecture Note**: This provider ONLY proxies to n8n - it does NOT call LLM APIs directly.

---

### 5. **Brand System Provider** (`mcp-providers/brand-system.mjs`)
**Status**: ✅ Scaffolding Complete

**Style Domain**: `all`  
**Preferred Theme**: `default` (supports `rpg_8bit`)

**Purpose**: Provides design tokens and themes consistently across all projects. Acts as the "Design System API" for both Lovable and Cursor.

**Tools** (10):
1. `brand_get_color` - Get a color value from the design system
2. `brand_list_colors` - List all available colors
3. `brand_get_spacing` - Get a spacing value
4. `brand_list_spacing` - List all available spacing values
5. `brand_get_typography` - Get typography values
6. `brand_list_typography` - List all typography values
7. `brand_get_radius` - Get border radius value
8. `brand_get_shadow` - Get shadow value
9. `brand_get_theme` - Get complete theme configuration
10. `brand_list_tokens` - List all available design tokens

**Resources** (6):
- `brand://colors` - Color palette
- `brand://spacing` - Spacing scale
- `brand://typography` - Typography system
- `brand://radii` - Border radii
- `brand://shadows` - Shadows
- `brand://themes` - Theme configurations

**Token Storage**: `design-tokens/` folder with JSON files:
- `colors.json` - Color palettes (default, rpg_8bit)
- `spacing.json` - Spacing scales (default, rpg_8bit)
- `typography.json` - Typography systems (default, rpg_8bit)
- `radii.json` - Border radii (default, rpg_8bit)
- `shadows.json` - Shadow values (default, rpg_8bit)
- `themes.json` - Theme configurations and provider mappings

**Theme Support**:
- `default`: Modern, clean design system
- `rpg_8bit`: Retro pixel-art design system

**Provider Theme Mapping**:
- Magic UI → `default`
- Shadcn → `default`
- Aceternity UI → `default`
- 8bitcn → `rpg_8bit`

**Implementation Status**:
- ✅ Scaffolding complete
- ✅ Token files created with placeholder data
- ⏳ TODO: Implement nested property access (e.g., "primary.500")
- ⏳ TODO: Add token validation
- ⏳ TODO: Add theme switching logic

---

### 6. **Aceternity UI Provider** (`mcp-providers/aceternity-ui.mjs`)
**Status**: ✅ Implemented (96 components)

**Style Domain**: `web_premium`  
**Preferred Theme**: `default`

**Purpose**: Premium animated Tailwind component provider. Source: [ui.aceternity.com/components](https://ui.aceternity.com/components)

**Tools** (4):
1. `aceternity_get_component` - Get an Aceternity UI component by name
2. `aceternity_list_components` - List all available Aceternity UI components (96 total)
3. `aceternity_search_components` - Search Aceternity UI components by keyword (searches through use cases, patterns, and examples)
4. `aceternity_get_component_context` - Get full context and use cases for an Aceternity UI component

**Resources** (96):
All Aceternity UI components organized by category:
- **Backgrounds** (24): dotted-glow-background, background-ripple-effect, sparkles, background-gradient, gradient-animation, wavy-background, background-boxes, background-beams, background-beams-with-collision, background-lines, aurora-background, meteors, glowing-stars, shooting-stars, vortex, spotlight, spotlight-new, canvas-reveal-effect, svg-mask-effect, tracing-beam, lamp-effect, grid-and-dot-backgrounds, glowing-effect, google-gemini-effect
- **Cards** (15): tooltip-card, pixelated-canvas, 3d-card-effect, evervault-card, card-stack, card-hover-effect, wobble-card, expandable-card, card-spotlight, focus-cards, infinite-moving-cards, draggable-card, comet-card, glare-card, direction-aware-hover
- **Scroll** (6): parallax-scroll, sticky-scroll-reveal, macbook-scroll, container-scroll-animation, hero-parallax, parallax-grid-scroll
- **Text** (10): encrypted-text, layout-text-flip, colourful-text, text-generate-effect, typewriter-effect, flip-words, text-hover-effect, container-text-flip, hero-highlight, text-reveal-card
- **Buttons** (4): tailwind-css-buttons, hover-border-gradient, moving-border, stateful-button
- **Loaders** (2): multi-step-loader, loader
- **Navigation** (7): floating-navbar, navbar-menu, sidebar, floating-dock, tabs, resizable-navbar, sticky-banner
- **Forms** (3): signup-form, placeholders-and-vanish-input, file-upload
- **Overlays** (3): animated-modal, animated-tooltip, link-preview
- **Carousels** (5): images-slider, carousel, apple-cards-carousel, testimonials, animated-testimonials
- **Layout** (3): layout-grid, bento-grid, container-cover
- **Data** (5): github-globe, world-map, timeline, compare, codeblock
- **Cursor** (3): following-pointer, pointer-highlight, lens
- **3D** (3): 3d-pin, 3d-marquee, 3d-animated-pin
- **Sections** (3): feature-sections, cards-sections, hero-sections

**Current Implementation**: All 96 components from [ui.aceternity.com](https://ui.aceternity.com/components) included with full context metadata (use cases, patterns, examples). Placeholder data (needs integration with actual Aceternity UI API for component code)

**Implementation Status**:
- ✅ Scaffolding complete
- ⏳ TODO: Populate with actual Aceternity UI components from website
- ⏳ TODO: Implement component code retrieval
- ⏳ TODO: Add component categories

---

### 7. **8bitcn Provider** (`mcp-providers/eightbit.mjs`)
**Status**: ✅ Implemented (55 components)

**Style Domain**: `rpg_8bit`  
**Preferred Theme**: `rpg_8bit`

**Purpose**: Retro 8-bit pixel-art components for RPG UI projects. Source: [8bitcn.com/docs/components](https://www.8bitcn.com/docs/components)

**Tools** (4):
1. `eightbit_get_component` - Get an 8bitcn component by name
2. `eightbit_list_components` - List all available 8bitcn components (55 total)
3. `eightbit_search_components` - Search 8bitcn components by keyword (searches through use cases, patterns, and examples)
4. `eightbit_get_component_context` - Get full context and use cases for an 8bitcn component

**Resources** (55):
All 8bitcn components organized by category:
- **Form** (18): button, calendar, checkbox, combo-box, date-picker, input, input-otp, label, radio-group, retro-switcher, select, slider, switch, textarea, theme-selector, toggle, toggle-group, field
- **Layout** (9): accordion, card, collapsible, resizable, scroll-area, separator, sidebar, tabs, aspect-ratio
- **Overlay** (7): alert-dialog, context-menu, dialog, drawer, dropdown-menu, hover-card, popover, sheet, tooltip
- **Display** (10): avatar, badge, carousel, chart, empty, item, kbd, table, typography, data-table
- **Feedback** (4): alert, progress, skeleton, spinner, toast
- **Navigation** (4): breadcrumb, command, menubar, navigation-menu, pagination
- **RPG** (3): enemy-health, health-bar, mana-bar

**Current Implementation**: All 55 components from [8bitcn.com](https://www.8bitcn.com/docs/components) included with full context metadata (use cases, patterns, examples) tailored for RPG/8-bit style projects. Placeholder data (needs integration with actual 8bitcn API for component code)

**Implementation Status**:
- ✅ Scaffolding complete
- ⏳ TODO: Populate with actual 8bitcn components from website
- ⏳ TODO: Implement component code retrieval
- ⏳ TODO: Add component categories

---

## 📁 File Structure

```
railway-mcp-test/
├── server.mjs                    # Main unified MCP server
├── mcp-providers/                # Modular MCP provider modules
│   ├── magic-ui.mjs             # Magic UI (68 components) ✅
│   ├── shadcn.mjs               # Shadcn UI ✅
│   ├── custom-components.mjs     # Custom components ✅
│   ├── ai-router.mjs            # AI Router (n8n proxy) 🆕 ✅
│   ├── brand-system.mjs         # Brand System (Design Tokens) 🆕 ✅
│   ├── aceternity-ui.mjs        # Aceternity UI 🆕 ✅
│   ├── eightbit.mjs             # 8bitcn 🆕 ✅
│   ├── logging.mjs              # Logging/Introspection ⏳ (Planned)
│   ├── lucide-icons.mjs         # Lucide Icons ⏳ (Planned)
│   ├── tailwind.mjs             # Tailwind CSS ⏳ (Planned)
│   └── docs-patterns.mjs        # Docs/Patterns ⏳ (Planned)
├── design-tokens/                # Design token storage 🆕 ✅
│   ├── colors.json              # Color palettes
│   ├── spacing.json             # Spacing scales
│   ├── typography.json          # Typography systems
│   ├── radii.json               # Border radii
│   ├── shadows.json             # Shadow values
│   └── themes.json               # Theme configurations
├── patterns/                     # Pattern storage ⏳ (Planned)
├── logs/                         # Log storage ⏳ (Planned)
├── package.json                  # Dependencies
├── railway.json                  # Railway deployment config
├── .gitignore                    # Git ignore rules
├── README.md                     # Main documentation
├── IMPLEMENTATION_PLAN.md        # This file
└── MCP_SERVER_RECOMMENDATIONS.md # Recommendations document
```

---

## 🔧 Server Architecture

### Provider Registration

All providers are registered in `server.mjs` with:
- **Import**: Provider tools, resources, handlers
- **Tool Merging**: All tools merged into unified `/mcp/tools/list` endpoint
- **Resource Merging**: All resources merged into unified `/mcp/resources/list` endpoint
- **Routing**: Automatic routing to appropriate provider based on tool name prefix or URI scheme
- **Metadata**: Each provider has `styleDomain` and `preferredTheme` assigned

### Provider Metadata

Each provider includes:
- `styleDomain`: Design style domain (`web_premium`, `rpg_8bit`, `all`)
- `preferredTheme`: Default theme (`default`, `rpg_8bit`, `n/a`)

**Current Provider Configuration**:
- Magic UI: `web_premium` / `default`
- Shadcn UI: `web_premium` / `default`
- Aceternity UI: `web_premium` / `default`
- 8bitcn: `rpg_8bit` / `rpg_8bit`
- Brand System: `all` / `default`
- AI Router: `all` / `n/a`
- Custom Components: `web_premium` / `default`

---

## 📊 Provider Summary

### Current Status

| Provider | Status | Tools | Resources | Style Domain | Theme |
|----------|--------|-------|-----------|--------------|-------|
| Magic UI | ✅ Complete | 4 | 68 | web_premium | default |
| Shadcn UI | ✅ Complete | 6 | 59 | web_premium | default |
| Custom Components | ✅ Complete | 3 | 2 | web_premium | default |
| AI Router | ✅ Scaffolding | 4 | 2 | all | n/a |
| Brand System | ✅ Scaffolding | 10 | 6 | all | default |
| Aceternity UI | ✅ Complete | 4 | 96 | web_premium | default |
| 8bitcn | ✅ Complete | 4 | 55 | rpg_8bit | rpg_8bit |
| **TOTAL** | **7 Providers** | **35 Tools** | **290 Resources** | | |

### Planned Providers

| Provider | Status | Priority |
|----------|--------|----------|
| Logging/Introspection | ⏳ Planned | High |
| Lucide Icons | ⏳ Planned | High |
| Tailwind CSS | ⏳ Planned | High |
| Docs/Patterns | ⏳ Planned | Medium |

---

## 🎯 Implementation Priorities

### Phase 1: Core Architecture ✅ COMPLETE
- [x] Decoupled AI architecture defined
- [x] AI Router provider scaffolding
- [x] Brand System provider scaffolding
- [x] Aceternity UI provider scaffolding
- [x] 8bitcn provider scaffolding
- [x] Design tokens structure
- [x] Server provider registration

### Phase 2: AI Router Implementation ⏳ NEXT
- [ ] Implement n8n webhook POST logic
- [ ] Add n8n webhook URL configuration
- [ ] Add error handling and retry logic
- [ ] Add workflow discovery
- [ ] Test with actual n8n workflows

### Phase 3: Brand System Enhancement ⏳ NEXT
- [ ] Implement nested property access
- [ ] Add token validation
- [ ] Add theme switching logic
- [ ] Populate with production tokens
- [ ] Add token versioning

### Phase 4: Component Libraries ⏳ NEXT
- [ ] Populate Aceternity UI components
- [ ] Populate 8bitcn components
- [ ] Integrate actual Magic UI API
- [ ] Integrate actual Shadcn UI API

### Phase 5: Additional Providers ⏳ PLANNED
- [ ] Logging/Introspection provider
- [ ] Lucide Icons provider
- [ ] Tailwind CSS provider
- [ ] Docs/Patterns provider

---

## 🎯 Component Context Enhancement

### Overview

All component providers (Magic UI, Shadcn UI, Aceternity UI, 8bitcn) have been enhanced with rich metadata to help AI assistants make better component selection decisions. Each component now includes:

- **useCases**: Array of common use cases for the component
- **commonPatterns**: Array of typical usage patterns
- **whenToUse**: Array of scenarios when the component is appropriate
- **whenNotToUse**: Array of scenarios when the component should NOT be used
- **examples**: Array of real-world usage examples
- **relatedComponents**: Array of related component names

### New Tools

Each provider now includes a `get_component_context` tool:
- `magicui_get_component_context` - Get full context for a Magic UI component
- `shadcn_get_component_context` - Get full context for a Shadcn UI component
- `aceternity_get_component_context` - Get full context for an Aceternity UI component
- `eightbit_get_component_context` - Get full context for an 8bitcn component

### Enhanced Search

All search functions now search through:
- Component names
- Categories
- Descriptions
- Use cases
- Common patterns
- Examples

This enables semantic search that finds components based on use case queries like "I need a button for form submission" or "Show me components for displaying data".

### Enhanced Resources

Resource read handlers now include full context metadata in their responses, providing AI assistants with comprehensive information about when and how to use each component.

### Implementation Status

- ✅ **Shadcn UI**: All 59 components enhanced with context
- ✅ **Magic UI**: All 68 components enhanced with context
- ✅ **Aceternity UI**: All 96 components enhanced with context
- ✅ **8bitcn**: All 55 components enhanced with context
- **Total**: 278 components with full context metadata

### Example Enhanced Component

```javascript
{
  name: "dialog",
  category: "overlay",
  description: "A window overlaid on either the primary window or another dialog",
  useCases: [
    "Confirm destructive actions",
    "Display detailed information",
    "Collect user input in a focused context",
    "Show alerts or notifications"
  ],
  commonPatterns: [
    "Confirmation dialogs (Yes/No)",
    "Form dialogs (collect data)",
    "Information dialogs (read-only)",
    "Multi-step wizards"
  ],
  whenToUse: [
    "User needs to confirm an action",
    "Displaying critical information",
    "Collecting focused input",
    "Interrupting workflow for attention"
  ],
  whenNotToUse: [
    "Simple notifications (use Toast)",
    "Non-blocking information (use Popover)",
    "Navigation (use Sheet or Drawer)",
    "Quick actions (use Dropdown Menu)"
  ],
  examples: [
    "Delete confirmation: 'Are you sure you want to delete this item?'",
    "Edit form: Modal with form fields",
    "Error display: 'Something went wrong'",
    "Image preview: Full-screen image viewer"
  ],
  relatedComponents: ["alert-dialog", "sheet", "drawer", "popover"]
}
```

---

## 🔒 Architecture Rules

### AI Operations

1. **NO Direct LLM Calls**: This server MUST NOT call OpenAI/Anthropic APIs directly
2. **n8n Only**: All AI operations MUST route through n8n webhooks
3. **Proxy Pattern**: AI Router provider only proxies requests, doesn't execute AI
4. **Error Handling**: Failed n8n requests should be logged and retried

### Component Selection

1. **Theme Awareness**: Components should respect theme preferences
2. **Style Domain**: Components should match project style domain
3. **Provider Priority**: Use preferred provider for each theme

### Design Tokens

1. **Single Source of Truth**: All tokens stored in `design-tokens/` JSON files
2. **Theme Support**: All tokens support multiple themes
3. **Provider Mapping**: Each provider mapped to preferred theme

---

## 📝 Next Steps

1. **Implement n8n Integration**: Complete AI Router provider with actual webhook calls
2. **Populate Component Libraries**: Add real components from Aceternity and 8bitcn
3. **Enhance Brand System**: Add nested property access and validation
4. **Add Logging**: Implement logging provider for visibility
5. **Add Icons**: Implement Lucide Icons provider
6. **Add Tailwind**: Implement Tailwind CSS provider
7. **Add Patterns**: Implement Docs/Patterns provider

---

## 🎓 Key Concepts

### Decoupled AI Architecture

**Why**: Separates application logic from AI orchestration, enabling:
- Better control over AI costs
- Centralized AI workflow management
- Easier testing and debugging
- Flexible AI provider switching

**How**: All AI requests go through n8n webhooks, not direct API calls.

### Design System API

**Why**: Ensures consistency across all projects by providing:
- Centralized design tokens
- Theme management
- Provider-specific styling rules

**How**: Brand System provider exposes tokens via MCP protocol.

### Style Domains

**Why**: Different projects need different design styles:
- `web_premium`: Modern web applications
- `rpg_8bit`: Retro game interfaces

**How**: Providers tagged with style domains, components filtered accordingly.

---

**Last Updated**: Current implementation status as of latest commit
**Status**: Core architecture complete, implementation in progress
