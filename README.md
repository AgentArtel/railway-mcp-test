# Railway MCP Server for Lovable

A dedicated Model Context Protocol (MCP) server hosted on Railway, designed to provide custom components and tools for Lovable development.

## 🎯 Purpose

This server hosts MCP servers that can be attached to Lovable, ensuring you always use the components you want during development. It provides a centralized component library and tools that Lovable's AI can access.

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

### 1. `get_component`
Retrieve a specific component from your component library.

**Parameters:**
- `componentName` (string, required): Name of the component

### 2. `list_components`
List all available components in your library.

**Parameters:**
- `category` (string, optional): Filter by category

### 3. `create_component`
Create a new component and add it to your library.

**Parameters:**
- `name` (string, required): Component name
- `code` (string, required): Component code/implementation
- `category` (string, optional): Component category

## 📦 Available Resources

- `component://button` - Button component
- `component://card` - Card component

## 🔧 Customization

### Adding Your Own Components

1. **Modify the component storage:**
   - Currently uses placeholder data
   - Implement actual storage (database, file system, etc.) in `server.mjs`

2. **Add new tools:**
   - Edit the `/mcp/tools/list` endpoint to add tool definitions
   - Implement the tool logic in `/mcp/tools/call`

3. **Add new resources:**
   - Edit the `/mcp/resources/list` endpoint
   - Implement resource retrieval in `/mcp/resources/read`

### Environment Variables

- `PORT` - Server port (default: 4001, Railway sets this automatically)

## 🏗️ Project Structure

```
railway-mcp-test/
├── server.mjs          # Main MCP server implementation
├── package.json        # Dependencies and scripts
├── railway.json        # Railway deployment configuration
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🔒 Security Notes

- CORS is currently set to allow all origins (`*`)
- For production, consider restricting CORS to specific domains
- Add authentication if needed for sensitive operations
- Consider rate limiting for public endpoints

## 📝 Next Steps

1. **Implement persistent storage** for components (database or file system)
2. **Add authentication** if you need to restrict access
3. **Customize tools and resources** for your specific component library
4. **Add logging and monitoring** for production use

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

