import express from "express";

const app = express();
app.use(express.json());

// Simple MCP-style endpoint
app.post("/mcp", (req, res) => {
  const { method, params } = req.body || {};

  // Very simple "tool"
  if (method === "tools/hello") {
    const name = params?.name || "world";
    return res.json({
      result: {
        content: [
          {
            type: "text",
            text: `Hello, ${name}! (from Railway MCP test server)`
          }
        ]
      }
    });
  }

  // Fallback for unknown methods
  return res.json({
    error: {
      message: "Unknown method",
      method
    }
  });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`MCP-style test server listening on port ${PORT}`);
});
