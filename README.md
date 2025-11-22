# Unified MCP Server for Lovable

A centralized Model Context Protocol (MCP) server hosted on Railway that combines multiple MCP providers in one place. Includes **Magic UI**, **Shadcn UI**, **Aceternity UI**, **8bitcn**, **Brand System (Design API)**, **AI Router**, and **Custom Components** - easily extensible to add more!

## 🎯 Purpose

This is a **unified MCP server** that hosts multiple MCP providers, giving you a single endpoint to access all your component libraries, design tokens, and AI tools. Perfect for Lovable development where you want consistent access to:

- **Component Libraries**: Magic UI (68), Shadcn UI (59), Aceternity UI (96), 8bitcn (55) - **278 total components**
- **Design System API**: Complete Brand System with design tokens, themes, and validation
- **AI Operations**: Decoupled AI router via n8n webhooks
- **Custom Components**: Your own component library

### Why Unified?

- **Single Connection**: Connect once to Lovable, access all your MCP servers
- **Easy Management**: All MCP servers in one codebase
- **Extensible**: Add new MCP providers easily with the modular architecture
- **Always Available**: Railway keeps it running 24/7

## 🚀 Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will run on `http://localhost:4001` (or the port specified in `PORT` environment variable).

### Deploy to Railway

1. **Connect your GitHub repository to Railway:**
   - Go to [Railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose this repository

2. **Railway will automatically:**
   - Detect the Node.js project
   - Install dependencies
   - Start the server using `npm start`
   - Assign a public URL

3. **Get your server URL:**
   - Railway will provide a public URL (e.g., `https://your-app.railway.app`)
   - Copy this URL for connecting to Lovable

## 🔌 Connecting to Lovable

1. **Get your Railway server URL** (e.g., `https://your-app.railway.app`)

2. **In Lovable, configure the MCP server:**
   - Go to your Lovable project settings
   - Find the MCP/External Services section
   - Add a new MCP server with:
     - **URL**: Your Railway server URL (e.g., `https://your-app.railway.app`)
     - **Type**: HTTP
     - **Endpoints**: 
       - Initialize: `/mcp/initialize`
       - Tools: `/mcp/tools/list` and `/mcp/tools/call`
       - Resources: `/mcp/resources/list` and `/mcp/resources/read`

3. **Test the connection:**
   - Use the health check endpoint: `https://your-app.railway.app/health`
   - Should return: `{"status":"ok","service":"mcp-server"}`

## 📡 API Endpoints

### MCP Protocol Endpoints

- `POST /mcp/initialize` - Initialize MCP connection
- `POST /mcp/tools/list` - List available tools
- `POST /mcp/tools/call` - Execute a tool
- `POST /mcp/resources/list` - List available resources
- `POST /mcp/resources/read` - Read a specific resource

### Utility Endpoints

- `GET /health` - Health check endpoint
- `GET /` - Server information

## 🛠️ Available Tools

### Component Library Tools

#### Magic UI (68 components)
- `magicui_get_component` - Get component by name
- `magicui_list_components` - List all components (filter by category)
- `magicui_search_components` - Search components by keyword
- `magicui_get_component_context` - Get detailed context, use cases, and examples

#### Shadcn UI (59 components)
- `shadcn_get_component` - Get component by name
- `shadcn_list_components` - List all components (filter by category)
- `shadcn_search_components` - Search components by keyword
- `shadcn_get_component_code` - Get full source code
- `shadcn_get_installation_command` - Get CLI install command
- `shadcn_get_component_context` - Get detailed context, use cases, and examples

#### Aceternity UI (96 components)
- `aceternity_get_component` - Get component by name
- `aceternity_list_components` - List all components
- `aceternity_search_components` - Search components by keyword
- `aceternity_get_component_context` - Get detailed context, use cases, and examples

#### 8bitcn (55 components)
- `eightbit_get_component` - Get component by name
- `eightbit_list_components` - List all components
- `eightbit_search_components` - Search components by keyword
- `eightbit_get_component_context` - Get detailed context, use cases, and examples

### Brand System (Design API) Tools

The Brand System provides a complete Design System API with **nested property access**, **validation**, and **helpful error messages**.

#### Color Tools
- `brand_get_color` - Get color value (supports nested: `"primary.500"` or simple: `"success"`)
  - **Parameters**: `colorName` (string), `theme` (optional, default: "default")
  - **Examples**: `"primary.500"`, `"secondary.600"`, `"success"`
  - **Features**: Nested access, validation, error suggestions

- `brand_list_colors` - List all available colors for a theme
  - **Parameters**: `theme` (optional)

#### Spacing Tools
- `brand_get_spacing` - Get spacing value (supports `scale.4` or `semantic.md`)
  - **Parameters**: `size` (string), `theme` (optional)
  - **Features**: Checks scale, semantic, and direct access

- `brand_list_spacing` - List all spacing values

#### Typography Tools
- `brand_get_typography` - Get typography value (supports nested: `"fontSizes.base"`)
  - **Parameters**: `property` (string), `theme` (optional)
  - **Examples**: `"fontSizes.base"`, `"fontFamilies.sans"`, `"fontWeights.bold"`
  - **Features**: Nested access, validation

- `brand_list_typography` - List all typography values

#### Other Design Tokens
- `brand_get_radius` - Get border radius value
- `brand_get_shadow` - Get shadow value
- `brand_get_theme` - Get complete theme configuration
- `brand_list_tokens` - List all design tokens for a theme

**Brand System Features:**
- ✅ Nested property access (`primary.500`, `fontSizes.base`)
- ✅ Token validation (color formats, CSS values)
- ✅ Helpful error messages with suggestions
- ✅ Multi-theme support (`default`, `rpg_8bit`)
- ✅ Automatic token discovery

### AI Router Tools

All AI operations route through n8n webhooks (decoupled architecture):

- `ai_call` - Generic AI operation via n8n
- `ai_summarize` - Summarize content via n8n
- `ai_extract` - Extract data via n8n
- `ai_generate` - Generate content via n8n

**Note**: These tools POST to n8n webhooks - AI logic is handled downstream, not directly in Lovable.

### Custom Component Tools

- `get_component` - Retrieve a custom component
- `list_components` - List all custom components
- `create_component` - Create a new custom component

## 📦 Available Resources

### Component Library Resources

All component libraries provide resources in the format:
- `magicui://<component-name>` - Magic UI components (68 available)
- `shadcn://<component-name>` - Shadcn UI components (59 available)
- `aceternity://<component-name>` - Aceternity UI components (96 available)
- `8bit://<component-name>` - 8bitcn components (55 available)
- `component://<component-name>` - Custom components

### Brand System Resources (Design API)

- `brand://colors` - Complete color palette (supports nested access)
- `brand://spacing` - Spacing scale (scale + semantic values)
- `brand://typography` - Typography system (fonts, sizes, weights, line heights)
- `brand://radii` - Border radius values
- `brand://shadows` - Shadow values
- `brand://themes` - Complete theme configurations

**Example Usage:**
```javascript
// Get nested color
brand_get_color({ colorName: "primary.500", theme: "default" })
// Returns: { color: "#0ea5e9", valid: true }

// Get typography
brand_get_typography({ property: "fontSizes.base", theme: "default" })
// Returns: { value: "1rem", valid: true }
```

## 🔧 Customization

### Adding a New MCP Provider

The server uses a modular architecture, making it easy to add new MCP providers:

1. **Create a new provider file** in `mcp-providers/`:
   ```javascript
   // mcp-providers/my-provider.mjs
   export const myProviderTools = [/* tool definitions */];
   export const myProviderResources = [/* resource definitions */];
   export async function handleMyProviderTool(name, args) { /* ... */ }
   export async function handleMyProviderResource(uri) { /* ... */ }
   ```

2. **Import and register in `server.mjs`**:
   ```javascript
   import { myProviderTools, ... } from "./mcp-providers/my-provider.mjs";
   ```

3. **Merge into unified endpoints**:
   - Add tools to the `allTools` array in `/mcp/tools/list`
   - Add resources to the `allResources` array in `/mcp/resources/list`
   - Route tool calls in `/mcp/tools/call`
   - Route resource reads in `/mcp/resources/read`

### Customizing Existing Providers

#### Component Library Providers
- **Magic UI**: `mcp-providers/magic-ui.mjs` - 68 components with full context metadata
- **Shadcn UI**: `mcp-providers/shadcn.mjs` - 59 components with full context metadata
- **Aceternity UI**: `mcp-providers/aceternity-ui.mjs` - 96 components with full context metadata
- **8bitcn**: `mcp-providers/eightbit.mjs` - 55 components with full context metadata

All component providers include:
- Component context metadata (use cases, patterns, examples)
- Search functionality across metadata
- `get_component_context` tools for detailed information

#### Brand System Provider
- **File**: `mcp-providers/brand-system.mjs`
- **Token Files**: `design-tokens/*.json`
- **Features**: Nested property access, validation, error handling
- **Themes**: `default`, `rpg_8bit`
- **Status**: ✅ Complete with all features implemented

#### AI Router Provider
- **File**: `mcp-providers/ai-router.mjs`
- **Purpose**: Routes AI operations to n8n webhooks
- **Configuration**: Set `N8N_WEBHOOK_URL` environment variable
- **Status**: ⏳ Scaffolding complete, needs n8n webhook URL configuration

#### Custom Components Provider
- **File**: `mcp-providers/custom-components.mjs`
- **Status**: ⏳ Placeholder - implement actual storage (database, file system, etc.)

### Environment Variables

- `PORT` - Server port (default: 4001, Railway sets this automatically)

## 🏗️ Project Structure

```
railway-mcp-test/
├── server.mjs                    # Main unified MCP server
├── mcp-providers/                # Modular MCP provider modules
│   ├── magic-ui.mjs             # Magic UI provider (68 components)
│   ├── shadcn.mjs               # Shadcn UI provider (59 components)
│   ├── aceternity-ui.mjs        # Aceternity UI provider (96 components)
│   ├── eightbit.mjs             # 8bitcn provider (55 components)
│   ├── brand-system.mjs         # Brand System/Design API provider
│   ├── ai-router.mjs            # AI Router provider (n8n webhooks)
│   └── custom-components.mjs    # Custom components provider
├── design-tokens/                # Design token JSON files
│   ├── colors.json              # Color palettes (default, rpg_8bit)
│   ├── spacing.json             # Spacing scales
│   ├── typography.json          # Typography systems
│   ├── radii.json               # Border radii
│   ├── shadows.json             # Shadow values
│   └── themes.json              # Theme configurations
├── package.json                 # Dependencies and scripts
├── railway.json                 # Railway deployment configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

### Architecture

The server uses a **modular provider architecture** with **decoupled AI**:

**Provider Pattern:**
- Each MCP server is a separate module in `mcp-providers/`
- The main server (`server.mjs`) merges all providers
- Tools and resources from all providers are unified into single endpoints
- Easy to add new providers without modifying core server code

**Decoupled AI Architecture:**
- All AI operations route through n8n webhooks
- Lovable → Edge Function → n8n Webhook → LLM + Tools → Return
- **No direct LLM API calls** from Lovable
- Centralized AI orchestration and cost control

**Component Context Enhancement:**
- All 278 components include rich metadata:
  - `useCases` - Common use cases
  - `commonPatterns` - Usage patterns
  - `whenToUse` / `whenNotToUse` - Guidance
  - `examples` - Code examples
  - `relatedComponents` - Related components
- Search functions search through all metadata fields
- `get_component_context` tools provide detailed component information

**Design System API:**
- Complete Brand System with nested property access
- Multi-theme support (default, rpg_8bit)
- Token validation and helpful error messages
- Automatic token discovery and suggestions

## 🔒 Security Notes

- CORS is currently set to allow all origins (`*`)
- For production, consider restricting CORS to specific domains
- Add authentication if needed for sensitive operations
- Consider rate limiting for public endpoints

## ✨ Features

### Component Libraries
- ✅ **278 Total Components** across 4 libraries
- ✅ **Rich Context Metadata** for all components (use cases, patterns, examples)
- ✅ **Enhanced Search** across metadata fields
- ✅ **Component Context Tools** for detailed component information

### Design System API (Brand System)
- ✅ **Nested Property Access** - `primary.500`, `fontSizes.base`
- ✅ **Token Validation** - Validates color formats and CSS values
- ✅ **Helpful Error Messages** - Suggests similar tokens on errors
- ✅ **Multi-Theme Support** - `default` and `rpg_8bit` themes
- ✅ **10 Tools** for complete design token access

### Architecture
- ✅ **Decoupled AI** - All AI operations via n8n webhooks
- ✅ **Modular Providers** - Easy to add new providers
- ✅ **Unified Endpoints** - Single connection for all providers

## 📝 Next Steps

1. **Configure n8n Webhooks** - Set up AI Router provider with actual n8n webhook URLs
2. **Implement Custom Components Storage** - Add database or file system for custom components
3. **Add More Providers** - Extend with other component libraries or tools
4. **Add Authentication** - If you need to restrict access
5. **Add Logging/Monitoring** - For production use
6. **Set up Component Caching** - For better performance
7. **Integrate Component Code APIs** - Connect to actual Magic UI/Shadcn APIs for code retrieval

## 🆘 Troubleshooting

### Server won't start
- Check that `PORT` environment variable is set (Railway sets this automatically)
- Verify all dependencies are installed: `npm install`

### Can't connect from Lovable
- Verify the Railway URL is publicly accessible
- Check the health endpoint: `https://your-app.railway.app/health`
- Ensure CORS is properly configured
- Check Railway logs for errors

### Tools not working
- Verify the tool name matches exactly
- Check that required parameters are provided
- Review server logs for error messages

## 📚 Learn More

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [Railway Documentation](https://docs.railway.app)
- [Lovable Documentation](https://docs.lovable.dev)

---

Built with ❤️ for consistent component development in Lovable

