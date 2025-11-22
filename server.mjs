import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for external access (Lovable needs this)
app.use(cors({
  origin: '*', // In production, you might want to restrict this
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// MCP Protocol Implementation
// This follows the Model Context Protocol specification

// Initialize endpoint - called when client connects
app.post("/mcp/initialize", (req, res) => {
  const { protocolVersion, capabilities, clientInfo } = req.body;
  
  res.json({
    protocolVersion: "2024-11-05",
    capabilities: {
      tools: {},
      resources: {},
      prompts: {}
    },
    serverInfo: {
      name: "railway-mcp-server",
      version: "1.0.0"
    }
  });
});

// List available tools
app.post("/mcp/tools/list", (req, res) => {
  res.json({
    tools: [
      {
        name: "get_component",
        description: "Retrieve a specific component from the component library",
        inputSchema: {
          type: "object",
          properties: {
            componentName: {
              type: "string",
              description: "The name of the component to retrieve"
            }
          },
          required: ["componentName"]
        }
      },
      {
        name: "list_components",
        description: "List all available components in the library",
        inputSchema: {
          type: "object",
          properties: {
            category: {
              type: "string",
              description: "Optional category filter"
            }
          }
        }
      },
      {
        name: "create_component",
        description: "Create a new component and add it to the library",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Component name"
            },
            code: {
              type: "string",
              description: "Component code/implementation"
            },
            category: {
              type: "string",
              description: "Component category"
            }
          },
          required: ["name", "code"]
        }
      }
    ]
  });
});

// Call a specific tool
app.post("/mcp/tools/call", (req, res) => {
  const { name, arguments: args } = req.body;
  
  try {
    switch (name) {
      case "get_component":
        // In a real implementation, this would fetch from a database or file system
        const componentName = args?.componentName || "unknown";
        return res.json({
          content: [
            {
              type: "text",
              text: `Component "${componentName}" retrieved. This is a placeholder - implement actual component storage.`
            }
          ]
        });
        
      case "list_components":
        // Return list of available components
        return res.json({
          content: [
            {
              type: "text",
              text: JSON.stringify({
                components: [
                  { name: "Button", category: "ui" },
                  { name: "Card", category: "ui" },
                  { name: "Modal", category: "ui" }
                ]
              }, null, 2)
            }
          ]
        });
        
      case "create_component":
        const { name: compName, code, category } = args || {};
        // In production, save this to a database or file system
        return res.json({
          content: [
            {
              type: "text",
              text: `Component "${compName}" created successfully. Add persistence logic to save components.`
            }
          ]
        });
        
      default:
        return res.status(400).json({
          error: {
            code: -32601,
            message: `Unknown tool: ${name}`
          }
        });
    }
  } catch (error) {
    return res.status(500).json({
      error: {
        code: -32603,
        message: error.message
      }
    });
  }
});

// List available resources
app.post("/mcp/resources/list", (req, res) => {
  res.json({
    resources: [
      {
        uri: "component://button",
        name: "Button Component",
        description: "Reusable button component",
        mimeType: "text/plain"
      },
      {
        uri: "component://card",
        name: "Card Component",
        description: "Reusable card component",
        mimeType: "text/plain"
      }
    ]
  });
});

// Get a specific resource
app.post("/mcp/resources/read", (req, res) => {
  const { uri } = req.body;
  
  // In production, fetch actual component code from storage
  if (uri.startsWith("component://")) {
    const componentName = uri.replace("component://", "");
    return res.json({
      contents: [
        {
          uri,
          mimeType: "text/plain",
          text: `// ${componentName} component placeholder\n// Implement actual component retrieval here`
        }
      ]
    });
  }
  
  return res.status(404).json({
    error: {
      code: -32602,
      message: `Resource not found: ${uri}`
    }
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "mcp-server" });
});

// Root endpoint with info
app.get("/", (req, res) => {
  res.json({
    service: "MCP Server for Lovable",
    version: "1.0.0",
    endpoints: {
      initialize: "POST /mcp/initialize",
      listTools: "POST /mcp/tools/list",
      callTool: "POST /mcp/tools/call",
      listResources: "POST /mcp/resources/list",
      readResource: "POST /mcp/resources/read"
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    error: {
      code: -32603,
      message: "Internal error",
      data: err.message
    }
  });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`🚀 MCP Server listening on port ${PORT}`);
  console.log(`📡 Ready for Lovable connections`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});
