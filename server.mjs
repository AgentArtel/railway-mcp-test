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
import { 
  shadcnTools, 
  shadcnResources, 
  handleShadcnTool, 
  handleShadcnResource 
} from "./mcp-providers/shadcn.mjs";
import { 
  aiRouterTools, 
  aiRouterResources, 
  handleAIRouterTool, 
  handleAIRouterResource 
} from "./mcp-providers/ai-router.mjs";
import { 
  brandSystemTools, 
  brandSystemResources, 
  handleBrandSystemTool, 
  handleBrandSystemResource 
} from "./mcp-providers/brand-system.mjs";
import { 
  aceternityUITools, 
  aceternityUIResources, 
  handleAceternityUITool, 
  handleAceternityUIResource 
} from "./mcp-providers/aceternity-ui.mjs";
import { 
  eightbitTools, 
  eightbitResources, 
  handleEightbitTool, 
  handleEightbitResource 
} from "./mcp-providers/eightbit.mjs";

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
      providers: [
        "magic-ui",
        "shadcn",
        "custom-components",
        "ai-router",
        "brand-system",
        "aceternity-ui",
        "eightbit"
      ],
      architecture: "decoupled-ai",
      aiOrchestration: "n8n"
    }
  });
});

// List available tools - merges tools from all providers
app.post("/mcp/tools/list", (req, res) => {
  // Merge tools from all MCP providers
  const allTools = [
    ...magicUITools,
    ...shadcnTools,
    ...customComponentTools,
    ...aiRouterTools,
    ...brandSystemTools,
    ...aceternityUITools,
    ...eightbitTools
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
    
    // Route to AI Router provider
    if (name.startsWith("ai_")) {
      result = await handleAIRouterTool(name, args);
    }
    // Route to Brand System provider
    else if (name.startsWith("brand_")) {
      result = await handleBrandSystemTool(name, args);
    }
    // Route to Magic UI provider
    else if (name.startsWith("magicui_")) {
      result = await handleMagicUITool(name, args);
    }
    // Route to Shadcn UI provider
    else if (name.startsWith("shadcn_")) {
      result = await handleShadcnTool(name, args);
    }
    // Route to Aceternity UI provider
    else if (name.startsWith("aceternity_")) {
      result = await handleAceternityUITool(name, args);
    }
    // Route to 8bitcn provider
    else if (name.startsWith("eightbit_")) {
      result = await handleEightbitTool(name, args);
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
    ...shadcnResources,
    ...customComponentResources,
    ...aiRouterResources,
    ...brandSystemResources,
    ...aceternityUIResources,
    ...eightbitResources
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
    
    // Try AI Router provider first
    result = await handleAIRouterResource(uri);
    if (result) {
      return res.json(result);
    }
    
    // Try Brand System provider
    result = await handleBrandSystemResource(uri);
    if (result) {
      return res.json(result);
    }
    
    // Try Magic UI provider
    result = await handleMagicUIResource(uri);
    if (result) {
      return res.json(result);
    }
    
    // Try Shadcn UI provider
    result = await handleShadcnResource(uri);
    if (result) {
      return res.json(result);
    }
    
    // Try Aceternity UI provider
    result = await handleAceternityUIResource(uri);
    if (result) {
      return res.json(result);
    }
    
    // Try 8bitcn provider
    result = await handleEightbitResource(uri);
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
    service: "Unified MCP Server - Design/Dev API for Lovable & Cursor",
    version: "1.0.0",
    architecture: {
      type: "decoupled-ai",
      aiOrchestration: "n8n",
      description: "All AI operations route through n8n webhooks, not directly to LLM APIs"
    },
    providers: [
      {
        name: "Magic UI",
        description: "Magic UI component library integration (68 components)",
        styleDomain: "web_premium",
        preferredTheme: "default",
        tools: magicUITools.length,
        resources: magicUIResources.length
      },
      {
        name: "Shadcn UI",
        description: "shadcn/ui component library integration",
        styleDomain: "web_premium",
        preferredTheme: "default",
        tools: shadcnTools.length,
        resources: shadcnResources.length
      },
      {
        name: "Aceternity UI",
        description: "Premium animated Tailwind components",
        styleDomain: "web_premium",
        preferredTheme: "default",
        tools: aceternityUITools.length,
        resources: aceternityUIResources.length
      },
      {
        name: "8bitcn",
        description: "Retro 8-bit pixel-art components for RPG UI",
        styleDomain: "rpg_8bit",
        preferredTheme: "rpg_8bit",
        tools: eightbitTools.length,
        resources: eightbitResources.length
      },
      {
        name: "Brand System",
        description: "Design tokens and themes API",
        styleDomain: "all",
        preferredTheme: "default",
        tools: brandSystemTools.length,
        resources: brandSystemResources.length
      },
      {
        name: "AI Router",
        description: "Decoupled AI operations via n8n webhooks",
        styleDomain: "all",
        preferredTheme: "n/a",
        tools: aiRouterTools.length,
        resources: aiRouterResources.length
      },
      {
        name: "Custom Components",
        description: "Your custom component library",
        styleDomain: "web_premium",
        preferredTheme: "default",
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
  console.log(`📡 Ready for Lovable & Cursor connections`);
  console.log(`🏗️  Architecture: Decoupled AI via n8n`);
  console.log(`✨ Providers loaded:`);
  console.log(`   - Magic UI (${magicUITools.length} tools, ${magicUIResources.length} resources) [web_premium/default]`);
  console.log(`   - Shadcn UI (${shadcnTools.length} tools, ${shadcnResources.length} resources) [web_premium/default]`);
  console.log(`   - Aceternity UI (${aceternityUITools.length} tools, ${aceternityUIResources.length} resources) [web_premium/default]`);
  console.log(`   - 8bitcn (${eightbitTools.length} tools, ${eightbitResources.length} resources) [rpg_8bit/rpg_8bit]`);
  console.log(`   - Brand System (${brandSystemTools.length} tools, ${brandSystemResources.length} resources) [all]`);
  console.log(`   - AI Router (${aiRouterTools.length} tools, ${aiRouterResources.length} resources) [n8n]`);
  console.log(`   - Custom Components (${customComponentTools.length} tools, ${customComponentResources.length} resources) [web_premium/default]`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});
