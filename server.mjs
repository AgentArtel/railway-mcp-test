import express from "express";
import cors from "cors";

// Import MCP providers
import { 
  magicUITools, 
  magicUIResources, 
  handleMagicUITool, 
  handleMagicUIResource 
} from "./mcp-providers/magic-ui.mjs";
import { 
  customComponentTools, 
  customComponentResources, 
  handleCustomComponentTool, 
  handleCustomComponentResource 
} from "./mcp-providers/custom-components.mjs";

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
// Unified server that merges multiple MCP providers

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
      name: "unified-mcp-server",
      version: "1.0.0",
      providers: ["magic-ui", "custom-components"]
    }
  });
});

// List available tools - merges tools from all providers
app.post("/mcp/tools/list", (req, res) => {
  // Merge tools from all MCP providers
  const allTools = [
    ...magicUITools,
    ...customComponentTools
  ];
  
  res.json({
    tools: allTools
  });
});

// Call a specific tool - routes to appropriate provider
app.post("/mcp/tools/call", async (req, res) => {
  const { name, arguments: args } = req.body;
  
  try {
    let result;
    
    // Route to Magic UI provider
    if (name.startsWith("magicui_")) {
      result = await handleMagicUITool(name, args);
    }
    // Route to custom components provider
    else if (name === "get_component" || name === "list_components" || name === "create_component") {
      result = await handleCustomComponentTool(name, args);
    }
    else {
      return res.status(400).json({
        error: {
          code: -32601,
          message: `Unknown tool: ${name}`
        }
      });
    }
    
    return res.json(result);
  } catch (error) {
    console.error(`Error calling tool ${name}:`, error);
    return res.status(500).json({
      error: {
        code: -32603,
        message: error.message
      }
    });
  }
});

// List available resources - merges resources from all providers
app.post("/mcp/resources/list", (req, res) => {
  // Merge resources from all MCP providers
  const allResources = [
    ...magicUIResources,
    ...customComponentResources
  ];
  
  res.json({
    resources: allResources
  });
});

// Get a specific resource - routes to appropriate provider
app.post("/mcp/resources/read", async (req, res) => {
  const { uri } = req.body;
  
  try {
    let result;
    
    // Try Magic UI provider first
    result = await handleMagicUIResource(uri);
    if (result) {
      return res.json(result);
    }
    
    // Try custom components provider
    result = await handleCustomComponentResource(uri);
    if (result) {
      return res.json(result);
    }
    
    // Resource not found in any provider
    return res.status(404).json({
      error: {
        code: -32602,
        message: `Resource not found: ${uri}`
      }
    });
  } catch (error) {
    console.error(`Error reading resource ${uri}:`, error);
    return res.status(500).json({
      error: {
        code: -32603,
        message: error.message
      }
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "mcp-server" });
});

// Root endpoint with info
app.get("/", (req, res) => {
  res.json({
    service: "Unified MCP Server for Lovable",
    version: "1.0.0",
    providers: [
      {
        name: "Magic UI",
        description: "Magic UI component library integration",
        tools: magicUITools.length,
        resources: magicUIResources.length
      },
      {
        name: "Custom Components",
        description: "Your custom component library",
        tools: customComponentTools.length,
        resources: customComponentResources.length
      }
    ],
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
  console.log(`🚀 Unified MCP Server listening on port ${PORT}`);
  console.log(`📡 Ready for Lovable connections`);
  console.log(`✨ Providers loaded:`);
  console.log(`   - Magic UI (${magicUITools.length} tools, ${magicUIResources.length} resources)`);
  console.log(`   - Custom Components (${customComponentTools.length} tools, ${customComponentResources.length} resources)`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});
