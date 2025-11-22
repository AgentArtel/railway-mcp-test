# Unified MCP Server for Lovable

A centralized Model Context Protocol (MCP) server hosted on Railway that combines multiple MCP providers in one place. Currently includes **Magic UI**, **Shadcn UI**, and **Custom Components** - easily extensible to add more!

## 🎯 Purpose

This is a **unified MCP server** that hosts multiple MCP providers, giving you a single endpoint to access all your component libraries and tools. Perfect for Lovable development where you want consistent access to Magic UI, Shadcn UI, and your custom components.

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

### Magic UI Tools

#### 1. `magicui_get_component`
Get a Magic UI component by name (e.g., 'marquee', 'blur-fade', 'grid-background').

**Parameters:**
- `componentName` (string, required): Name of the Magic UI component

#### 2. `magicui_list_components`
List all available Magic UI components.

**Parameters:**
- `category` (string, optional): Filter by category (e.g., 'animations', 'effects', 'layouts')

#### 3. `magicui_search_components`
Search Magic UI components by keyword.

**Parameters:**
- `query` (string, required): Search query

### Shadcn UI Tools

#### 1. `shadcn_get_component`
Get a shadcn/ui component by name (e.g., 'button', 'card', 'dialog', 'dropdown-menu').

**Parameters:**
- `componentName` (string, required): Name of the shadcn/ui component

#### 2. `shadcn_list_components`
List all available shadcn/ui components.

**Parameters:**
- `category` (string, optional): Filter by category (e.g., 'form', 'overlay', 'layout', 'feedback')

#### 3. `shadcn_search_components`
Search shadcn/ui components by keyword.

**Parameters:**
- `query` (string, required): Search query

#### 4. `shadcn_get_component_code`
Get the full source code for a shadcn/ui component.

**Parameters:**
- `componentName` (string, required): Name of the component
- `variant` (string, optional): Optional variant name

#### 5. `shadcn_get_installation_command`
Get the CLI command to install a shadcn/ui component.

**Parameters:**
- `componentName` (string, required): Name of the component to install

### Custom Component Tools

#### 1. `get_component`
Retrieve a specific component from your custom component library.

**Parameters:**
- `componentName` (string, required): Name of the component

#### 2. `list_components`
List all available components in your custom library.

**Parameters:**
- `category` (string, optional): Filter by category

#### 3. `create_component`
Create a new component and add it to your library.

**Parameters:**
- `name` (string, required): Component name
- `code` (string, required): Component code/implementation
- `category` (string, optional): Component category

## 📦 Available Resources

### Magic UI Resources
- `magicui://marquee` - Animated marquee component
- `magicui://blur-fade` - Blur fade text animation
- `magicui://grid-background` - Animated grid background
- `magicui://shimmer` - Shimmer loading effect
- `magicui://animated-beam` - Animated beam connector

### Shadcn UI Resources
- `shadcn://button` - Button component
- `shadcn://card` - Card component
- `shadcn://dialog` - Dialog/modal component
- `shadcn://dropdown-menu` - Dropdown menu component
- `shadcn://input` - Input field component
- `shadcn://label` - Label component
- `shadcn://select` - Select dropdown component
- `shadcn://textarea` - Textarea component
- `shadcn://checkbox` - Checkbox component
- `shadcn://radio-group` - Radio group component
- `shadcn://switch` - Switch toggle component
- `shadcn://table` - Table component
- `shadcn://tabs` - Tabs component
- `shadcn://accordion` - Accordion component
- `shadcn://alert` - Alert component
- `shadcn://badge` - Badge component
- `shadcn://avatar` - Avatar component
- `shadcn://skeleton` - Skeleton loading component
- `shadcn://toast` - Toast notification component
- `shadcn://tooltip` - Tooltip component

### Custom Component Resources
- `component://button` - Button component
- `component://card` - Card component

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

#### Magic UI Provider
- Edit `mcp-providers/magic-ui.mjs`
- Currently uses placeholder data - integrate with Magic UI's actual API/component library
- Visit [magicui.design](https://magicui.design) for component documentation

#### Shadcn UI Provider
- Edit `mcp-providers/shadcn.mjs`
- Currently uses placeholder data - integrate with shadcn/ui's actual component library
- Visit [ui.shadcn.com](https://ui.shadcn.com) for component documentation
- Components are installed via CLI: `npx shadcn@latest add <component>`

#### Custom Components Provider
- Edit `mcp-providers/custom-components.mjs`
- Implement actual storage (database, file system, etc.)
- Add your component library logic

### Environment Variables

- `PORT` - Server port (default: 4001, Railway sets this automatically)

## 🏗️ Project Structure

```
railway-mcp-test/
├── server.mjs                    # Main unified MCP server
├── mcp-providers/                # Modular MCP provider modules
│   ├── magic-ui.mjs             # Magic UI MCP provider
│   ├── shadcn.mjs               # Shadcn UI MCP provider
│   └── custom-components.mjs     # Custom components provider
├── package.json                 # Dependencies and scripts
├── railway.json                 # Railway deployment configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

### Architecture

The server uses a **modular provider architecture**:
- Each MCP server is a separate module in `mcp-providers/`
- The main server (`server.mjs`) merges all providers
- Tools and resources from all providers are unified into single endpoints
- Easy to add new providers without modifying core server code

## 🔒 Security Notes

- CORS is currently set to allow all origins (`*`)
- For production, consider restricting CORS to specific domains
- Add authentication if needed for sensitive operations
- Consider rate limiting for public endpoints

## 📝 Next Steps

1. **Integrate Magic UI's actual component library** - Currently uses placeholders
2. **Integrate Shadcn UI's actual component library** - Currently uses placeholders
3. **Implement persistent storage** for custom components (database or file system)
4. **Add more MCP providers** - Extend with other component libraries or tools
5. **Add authentication** if you need to restrict access
6. **Add logging and monitoring** for production use
7. **Set up component caching** for better performance

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

