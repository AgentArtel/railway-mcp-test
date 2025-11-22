# Unified MCP Server - Implementation Plan

## 📋 Document Purpose

This document outlines the current state of the unified MCP server and details the planned additions for review and approval.

---

## ✅ Current State

### Existing Providers

#### 1. **Magic UI Provider** (`mcp-providers/magic-ui.mjs`)
**Status**: ✅ Implemented

**Tools** (3):
- `magicui_get_component` - Get a Magic UI component by name
- `magicui_list_components` - List all available Magic UI components
- `magicui_search_components` - Search Magic UI components by keyword

**Resources** (60+):
All Magic UI components organized by category:
- **Components** (16): marquee, terminal, hero-video-dialog, bento-grid, animated-list, dock, globe, tweet-card, orbiting-circles, avatar-circles, icon-cloud, lens, pointer, smooth-cursor, progressive-blur, dotted-map
- **Special Effects** (8): animated-beam, border-beam, shine-border, magic-card, meteors, confetti, particles, animated-theme-toggler
- **Animations** (1): blur-fade
- **Text Animations** (15): text-animate, typing-animation, line-shadow-text, aurora-text, video-text, number-ticker, animated-shiny-text, animated-gradient-text, text-reveal, hyper-text, word-rotate, scroll-based-velocity, sparkles-text, morphing-text, spinning-text, text-highlighter
- **Device Mocks** (3): safari, iphone, android
- **Buttons** (3): rainbow-button, shimmer-button, ripple-button
- **Backgrounds** (9): flickering-grid, animated-grid-pattern, retro-grid, ripple, dot-pattern, grid-pattern, striped-pattern, interactive-grid-pattern, light-rays
- **Community** (12): shiny-button, file-tree, code-comparison, scroll-progress, neon-gradient-card, comic-text, cool-mode, pixel-image, pulsating-button, warp-background, interactive-hover-button, animated-circular-progress-bar

**Current Implementation**: All 60+ components from [magicui.design](https://magicui.design/docs/components) are now included. Placeholder data (needs integration with actual Magic UI API for component code)

---

#### 2. **Shadcn UI Provider** (`mcp-providers/shadcn.mjs`)
**Status**: ✅ Implemented

**Tools** (5):
- `shadcn_get_component` - Get a shadcn/ui component by name
- `shadcn_list_components` - List all available shadcn/ui components
- `shadcn_search_components` - Search shadcn/ui components by keyword
- `shadcn_get_component_code` - Get the full source code for a component
- `shadcn_get_installation_command` - Get the CLI command to install a component

**Resources** (20+):
- Form components: button, input, label, select, textarea, checkbox, radio-group, switch
- Overlay components: dialog, dropdown-menu, popover, sheet
- Layout components: card, tabs, accordion, separator
- Feedback components: alert, toast, progress, skeleton
- Display components: avatar, badge, table, calendar

**Current Implementation**: Placeholder data (needs integration with actual shadcn/ui API)

---

#### 3. **Custom Components Provider** (`mcp-providers/custom-components.mjs`)
**Status**: ✅ Implemented

**Tools** (3):
- `get_component` - Retrieve a specific component from your custom component library
- `list_components` - List all available components in your custom library
- `create_component` - Create a new component and add it to your library

**Resources** (2):
- `component://button` - Button component
- `component://card` - Card component

**Current Implementation**: Placeholder data (needs actual storage implementation)

---

### Current Server Architecture

**Main Server** (`server.mjs`):
- Express.js HTTP server
- CORS enabled for external access
- Unified MCP protocol endpoints
- Modular provider system
- Automatic routing to appropriate providers

**Endpoints**:
- `POST /mcp/initialize` - Initialize MCP connection
- `POST /mcp/tools/list` - List all tools from all providers
- `POST /mcp/tools/call` - Execute a tool (routes to appropriate provider)
- `POST /mcp/resources/list` - List all resources from all providers
- `POST /mcp/resources/read` - Read a resource (routes to appropriate provider)
- `GET /health` - Health check
- `GET /` - Server information

**Current Dependencies**:
- `express` ^5.1.0
- `cors` ^2.8.5
- `@magicuidesign/mcp` ^1.0.6
- `@jpisnice/shadcn-ui-mcp-server` ^1.1.4

---

## 🚀 Planned Additions

### Phase 1: Visibility + Consistency Foundation

#### 1. **Logging/Introspection Provider** 
**Priority**: 🔴 Highest (Solves "I don't know what Lovable is doing" problem)

**File**: `mcp-providers/logging.mjs`

**Purpose**: 
- Track all actions Lovable takes
- Provide visibility into component usage
- Enable debugging and pattern analysis
- Create audit trail

**Tools to Implement** (7):
1. `log_action` - Log an action (auto-called by other tools)
   - Parameters: `action` (string), `details` (object), `timestamp` (auto)
   - Returns: Log entry ID
   
2. `log_get_recent` - Get recent activity
   - Parameters: `limit` (number, default: 50), `filter` (object, optional)
   - Returns: Array of recent log entries
   
3. `log_search` - Search logs by criteria
   - Parameters: `query` (string), `startDate` (date, optional), `endDate` (date, optional)
   - Returns: Matching log entries
   
4. `log_get_component_usage` - Track component usage statistics
   - Parameters: `componentName` (string, optional), `timeRange` (string, optional)
   - Returns: Usage statistics
   
5. `log_get_statistics` - Get usage analytics
   - Parameters: `timeRange` (string, optional)
   - Returns: Aggregated statistics
   
6. `introspect_get_state` - Get current server state
   - Parameters: None
   - Returns: Current server state, active connections, tool usage
   
7. `introspect_get_tool_history` - Get tool usage history
   - Parameters: `toolName` (string, optional), `limit` (number, optional)
   - Returns: Tool usage history

**Resources** (2):
- `log://recent` - Recent activity log
- `log://statistics` - Usage statistics

**Storage**: 
- File-based logging (JSON files in `logs/` directory)
- Daily log rotation
- Optional: Database storage for production

**What Gets Logged**:
- Component selections
- Tool calls (which tool, parameters, result)
- Resource accesses
- Errors/warnings
- Decision points
- Timestamps and metadata

**Implementation Notes**:
- Auto-log all tool calls via middleware
- Log rotation to prevent file bloat
- Searchable log format
- Privacy: Can filter sensitive data

---

#### 2. **Lucide Icons Provider**
**Priority**: 🟡 High (Quick consistency win)

**File**: `mcp-providers/lucide-icons.mjs`

**Purpose**:
- Standardize icon usage across all projects
- Provide icon search and discovery
- Ensure consistent icon library
- Type-safe icon imports

**Tools to Implement** (4):
1. `lucide_search_icons` - Search icons by name/keyword
   - Parameters: `query` (string), `category` (string, optional)
   - Returns: Array of matching icons with metadata
   
2. `lucide_get_icon` - Get icon code/import statement
   - Parameters: `iconName` (string), `format` (string: 'import' | 'component' | 'svg', default: 'import')
   - Returns: Icon code/import statement
   
3. `lucide_list_categories` - Browse icons by category
   - Parameters: `category` (string, optional)
   - Returns: Icons grouped by category
   
4. `lucide_get_icon_info` - Get icon metadata
   - Parameters: `iconName` (string)
   - Returns: Icon metadata (name, category, tags, aliases)

**Resources** (10+ popular icons):
- `lucide://arrow-right` - Arrow right icon
- `lucide://check` - Check icon
- `lucide://x` - X/close icon
- `lucide://search` - Search icon
- `lucide://user` - User icon
- `lucide://settings` - Settings icon
- `lucide://home` - Home icon
- `lucide://heart` - Heart icon
- `lucide://star` - Star icon
- `lucide://menu` - Menu icon

**Data Source**:
- Lucide icon list (can fetch from npm package or API)
- Icon metadata and categories
- Search functionality

**Implementation Notes**:
- Use `lucide-react` package data
- Icon search with fuzzy matching
- Category organization
- Import statement generation

---

#### 3. **Tailwind CSS Provider**
**Priority**: 🟡 High (Styling consistency)

**File**: `mcp-providers/tailwind.mjs`

**Purpose**:
- Ensure consistent Tailwind class usage
- Provide Tailwind class reference
- Standardize spacing, colors, typography
- Reduce custom CSS when Tailwind has it

**Tools to Implement** (6):
1. `tailwind_search_classes` - Search for Tailwind classes
   - Parameters: `query` (string), `category` (string, optional)
   - Returns: Matching Tailwind classes with documentation
   
2. `tailwind_get_class_info` - Get class documentation
   - Parameters: `className` (string)
   - Returns: Class documentation, examples, related classes
   
3. `tailwind_get_color` - Get color from palette
   - Parameters: `colorName` (string), `shade` (number, optional)
   - Returns: Color value, usage examples
   
4. `tailwind_get_spacing` - Get spacing scale values
   - Parameters: `size` (string/number, optional)
   - Returns: Spacing values from scale
   
5. `tailwind_get_breakpoint` - Get responsive breakpoints
   - Parameters: `breakpoint` (string, optional)
   - Returns: Breakpoint values, usage examples
   
6. `tailwind_get_typography` - Get typography utilities
   - Parameters: `type` (string: 'size' | 'weight' | 'line-height', optional)
   - Returns: Typography utilities

**Resources** (5):
- `tailwind://colors` - Color palette reference
- `tailwind://spacing` - Spacing scale
- `tailwind://breakpoints` - Responsive breakpoints
- `tailwind://typography` - Typography utilities
- `tailwind://common-patterns` - Common Tailwind patterns

**Data Source**:
- Tailwind CSS documentation
- Default Tailwind config
- Custom config (if provided)
- Class reference data

**Implementation Notes**:
- Tailwind class reference data
- Support for custom Tailwind config
- Common pattern examples
- Responsive utilities reference

---

### Phase 2: Knowledge Base

#### 4. **Docs/Pattern Provider**
**Priority**: 🟡 High (Your knowledge base)

**File**: `mcp-providers/docs-patterns.mjs`

**Purpose**:
- Your own library of proven component patterns
- Centralize best practices
- Reusable patterns documentation
- Pattern search and discovery

**Tools to Implement** (5):
1. `docs_get_pattern` - Get a specific pattern
   - Parameters: `patternName` (string), `version` (string, optional)
   - Returns: Pattern code, documentation, examples
   
2. `docs_search_patterns` - Search patterns
   - Parameters: `query` (string), `category` (string, optional), `tags` (array, optional)
   - Returns: Matching patterns
   
3. `docs_list_by_category` - Browse patterns by category
   - Parameters: `category` (string, optional)
   - Returns: Patterns grouped by category
   
4. `docs_get_example` - Get usage examples for a pattern
   - Parameters: `patternName` (string), `exampleType` (string, optional)
   - Returns: Usage examples
   
5. `docs_add_pattern` - Add new pattern (for manual addition)
   - Parameters: `name` (string), `code` (string), `category` (string), `tags` (array), `description` (string)
   - Returns: Pattern ID

**Resources** (Initial patterns to include):
- `pattern://form-handling` - Form handling patterns
- `pattern://data-fetching` - Data fetching patterns
- `pattern://state-management` - State management patterns
- `pattern://error-handling` - Error handling patterns
- `pattern://loading-states` - Loading state patterns
- `pattern://component-composition` - Component composition patterns

**Storage**:
- File-based (JSON files in `patterns/` directory)
- Each pattern: code, docs, examples, metadata
- Optional: Database storage for production

**Pattern Categories**:
- Forms
- Data Fetching
- State Management
- UI Patterns
- Error Handling
- Performance
- Accessibility

**Implementation Notes**:
- Start with file-based storage
- Pattern versioning
- Search functionality
- Example code included
- Can expand to database later

---

## 📊 Summary

### Current State
- **3 Providers**: Magic UI, Shadcn UI, Custom Components
- **11 Tools** total
- **27+ Resources** total
- **Modular architecture** ready for expansion

### Planned Additions
- **4 New Providers**: Logging/Introspection, Lucide Icons, Tailwind CSS, Docs/Patterns
- **22 New Tools** total
- **17+ New Resources** total

### After Implementation
- **7 Providers** total
- **33 Tools** total
- **44+ Resources** total

---

## 🛠️ Implementation Details

### File Structure (After Implementation)
```
railway-mcp-test/
├── server.mjs
├── mcp-providers/
│   ├── magic-ui.mjs          ✅ Existing
│   ├── shadcn.mjs            ✅ Existing
│   ├── custom-components.mjs ✅ Existing
│   ├── logging.mjs           🆕 New
│   ├── lucide-icons.mjs      🆕 New
│   ├── tailwind.mjs          🆕 New
│   └── docs-patterns.mjs     🆕 New
├── logs/                     🆕 New (for logging)
├── patterns/                 🆕 New (for pattern storage)
├── package.json
└── README.md
```

### New Dependencies Needed
- `lucide-react` - For Lucide icons data
- (Optional) Database package if moving to DB storage

### Implementation Order
1. **Logging/Introspection** (2-3 hours) - Highest priority
2. **Lucide Icons** (1-2 hours) - Quick win
3. **Tailwind CSS** (2-3 hours) - Consistency
4. **Docs/Patterns** (3-4 hours) - Knowledge base

**Total Estimated Time**: 8-12 hours

---

## ✅ Review Checklist

Please review and confirm:

- [ ] **Logging/Introspection Provider** - Do you want all the tools listed?
- [ ] **Lucide Icons Provider** - Are the tools sufficient?
- [ ] **Tailwind CSS Provider** - Do you need custom Tailwind config support?
- [ ] **Docs/Pattern Provider** - What initial patterns should we include?
- [ ] **Storage** - File-based OK, or prefer database from start?
- [ ] **Implementation Order** - Does the order work for you?
- [ ] **Any additions/changes** - Anything else to include?

---

## 🎯 Expected Outcomes

After implementation, you'll have:

1. **Visibility**: See exactly what Lovable is doing via logging
2. **Consistency**: Standardized icons (Lucide) and styling (Tailwind)
3. **Knowledge Base**: Your own pattern library for reuse
4. **Control**: Track component usage and enforce standards
5. **Debugging**: Understand why certain decisions were made

---

## 📝 Notes

- All new providers follow the same modular pattern
- Easy to add more providers later
- File-based storage can be upgraded to database
- Each provider is independent and can be modified separately
- All tools/resources automatically merged into unified endpoints

---

**Ready for Review** - Please let me know if you'd like any changes before implementation begins!

