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
// Support URL-encoded form data for OAuth2 token endpoint
app.use(express.urlencoded({ extended: true }));

// Request logging middleware (for debugging)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Body:', JSON.stringify(req.body).substring(0, 200));
  }
  next();
});

// MCP Protocol Implementation
// This follows the Model Context Protocol specification
// Unified server that merges multiple MCP providers

// Helper to extract Bearer token from Authorization header
function getBearerToken(req) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  return null;
}

// Initialize handler function (shared by both /mcp/initialize and /initialize)
function handleInitialize(req, res) {
  const { protocolVersion, capabilities, clientInfo } = req.body;
  
  // Get base URL for absolute OAuth endpoints
  const protocol = req.get('x-forwarded-proto') || req.protocol || 'https';
  const baseUrl = `${protocol}://${req.get('host')}`;
  
  // Check if Bearer token is provided (alternative to OAuth)
  const bearerToken = getBearerToken(req);
  
  // Build authentication response - support both methods
  let authResponse;
  if (bearerToken) {
    // Bearer token provided - use bearer auth
    authResponse = {
      method: "bearer"
    };
  } else {
    // No bearer token - offer OAuth2 with absolute URLs
    authResponse = {
      method: "oauth2",
      oauth2: {
        authorizationEndpoint: `${baseUrl}/oauth2/authorize`,
        tokenEndpoint: `${baseUrl}/oauth2/token`,
        scopes: ["mcp:read", "mcp:write"]
      }
    };
  }
  
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
    },
    authentication: authResponse
  });
}

// Initialize endpoint - called when client connects
app.post("/mcp/initialize", handleInitialize);
// Alternative path without /mcp/ prefix
app.post("/initialize", handleInitialize);

// OAuth2 Authorization endpoint (simplified - for Lovable compatibility)
app.get("/oauth2/authorize", (req, res) => {
  const { client_id, redirect_uri, response_type, scope, state } = req.query;
  
  // For simplicity, we'll auto-approve and redirect back
  // In production, you'd show an authorization page
  if (response_type === "code" && redirect_uri) {
    // Generate a simple authorization code
    const authCode = Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
    
    // Store the code temporarily (in production, use a proper session store)
    // For now, we'll redirect with the code
    const redirectUrl = new URL(redirect_uri);
    redirectUrl.searchParams.set('code', authCode);
    if (state) redirectUrl.searchParams.set('state', state);
    
    return res.redirect(redirectUrl.toString());
  }
  
  res.status(400).json({ error: "Invalid request" });
});

// OAuth2 Token endpoint
app.post("/oauth2/token", (req, res) => {
  const { grant_type, code, client_id, client_secret, redirect_uri } = req.body;
  
  // Set proper content type for OAuth2 token response
  res.setHeader('Content-Type', 'application/json');
  
  // Simplified token issuance - in production, validate the code properly
  if (grant_type === "authorization_code" && code) {
    // Generate a simple access token
    const accessToken = Buffer.from(`token-${Date.now()}-${Math.random()}`).toString('base64');
    
    res.json({
      access_token: accessToken,
      token_type: "Bearer",
      expires_in: 3600,
      scope: "mcp:read mcp:write"
    });
  } else if (grant_type === "client_credentials") {
    // Support client credentials flow as well
    const accessToken = Buffer.from(`token-${Date.now()}-${Math.random()}`).toString('base64');
    res.json({
      access_token: accessToken,
      token_type: "Bearer",
      expires_in: 3600,
      scope: "mcp:read mcp:write"
    });
  } else {
    res.status(400).json({ 
      error: "invalid_grant", 
      error_description: grant_type ? "Invalid authorization code" : "Missing grant_type"
    });
  }
});

// List available tools handler (shared)
function handleToolsList(req, res) {
  // Bearer token is optional - if provided, we accept it
  const bearerToken = getBearerToken(req);
  // (In production, you'd validate the token here)
  
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
}

// List available tools - merges tools from all providers
app.post("/mcp/tools/list", handleToolsList);
// Alternative path
app.post("/tools/list", handleToolsList);

// Call a specific tool handler (shared)
async function handleToolsCall(req, res) {
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
}

// Call a specific tool - routes to appropriate provider
app.post("/mcp/tools/call", handleToolsCall);
// Alternative path
app.post("/tools/call", handleToolsCall);

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

// OAuth2 Discovery endpoint (RFC 8414)
app.get("/.well-known/oauth-authorization-server", (req, res) => {
  // Use HTTPS if available (Railway provides it)
  const protocol = req.get('x-forwarded-proto') || req.protocol || 'https';
  const baseUrl = `${protocol}://${req.get('host')}`;
  res.json({
    issuer: baseUrl,
    authorization_endpoint: `${baseUrl}/oauth2/authorize`,
    token_endpoint: `${baseUrl}/oauth2/token`,
    response_types_supported: ["code"],
    grant_types_supported: ["authorization_code", "client_credentials"],
    token_endpoint_auth_methods_supported: ["client_secret_post", "client_secret_basic"],
    scopes_supported: ["mcp:read", "mcp:write"]
  });
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

// Alternative endpoint paths (some MCP clients use paths without /mcp/ prefix)
// These duplicate the handlers above for compatibility
app.post("/initialize", handleInitialize);
app.post("/tools/list", handleToolsList);
app.post("/tools/call", handleToolsCall);
app.post("/resources/list", (req, res) => {
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
app.post("/resources/read", async (req, res) => {
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
    
    return res.status(404).json({
      error: {
        code: -32601,
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

// 404 handler for undefined routes
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.path}`);
  res.status(404).json({
    error: {
      code: 404,
      message: "Route not found",
      path: req.path,
      method: req.method,
      availableEndpoints: [
        "POST /mcp/initialize",
        "POST /mcp/tools/list",
        "POST /mcp/tools/call",
        "POST /mcp/resources/list",
        "POST /mcp/resources/read",
        "GET /health",
        "GET /",
        "GET /oauth2/authorize",
        "POST /oauth2/token",
        "GET /.well-known/oauth-authorization-server"
      ]
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
