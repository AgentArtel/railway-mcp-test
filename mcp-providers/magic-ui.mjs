/**
 * Magic UI MCP Server Provider
 * Integrates Magic UI components into the unified MCP server
 */

// Magic UI component tools and resources
export const magicUITools = [
  {
    name: "magicui_get_component",
    description: "Get a Magic UI component by name (e.g., 'marquee', 'blur-fade', 'grid-background')",
    inputSchema: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the Magic UI component to retrieve"
        }
      },
      required: ["componentName"]
    }
  },
  {
    name: "magicui_list_components",
    description: "List all available Magic UI components",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter (e.g., 'animations', 'effects', 'layouts')"
        }
      }
    }
  },
  {
    name: "magicui_search_components",
    description: "Search Magic UI components by keyword",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query to find components"
        }
      },
      required: ["query"]
    }
  }
];

// All Magic UI components organized by category
// Source: https://magicui.design/docs/components
export const allMagicUIComponents = [
  // Components (General)
  { name: "marquee", category: "components", description: "Animated marquee component for logos or text" },
  { name: "terminal", category: "components", description: "Terminal component with command line interface" },
  { name: "hero-video-dialog", category: "components", description: "Hero section with video dialog" },
  { name: "bento-grid", category: "components", description: "Bento grid layout component" },
  { name: "animated-list", category: "components", description: "Animated list component" },
  { name: "dock", category: "components", description: "Dock navigation component" },
  { name: "globe", category: "components", description: "3D globe component" },
  { name: "tweet-card", category: "components", description: "Twitter/X tweet card component" },
  { name: "orbiting-circles", category: "components", description: "Orbiting circles animation" },
  { name: "avatar-circles", category: "components", description: "Avatar circles component" },
  { name: "icon-cloud", category: "components", description: "Icon cloud visualization" },
  { name: "lens", category: "components", description: "Lens/magnifying glass effect" },
  { name: "pointer", category: "components", description: "Custom pointer component" },
  { name: "smooth-cursor", category: "components", description: "Smooth cursor animation" },
  { name: "progressive-blur", category: "components", description: "Progressive blur effect" },
  { name: "dotted-map", category: "components", description: "Dotted map visualization" },
  
  // Special Effects
  { name: "animated-beam", category: "special-effects", description: "Animated beam connecting elements" },
  { name: "border-beam", category: "special-effects", description: "Animated border beam effect" },
  { name: "shine-border", category: "special-effects", description: "Shine border animation" },
  { name: "magic-card", category: "special-effects", description: "Magic card with hover effects" },
  { name: "meteors", category: "special-effects", description: "Meteor shower animation" },
  { name: "confetti", category: "special-effects", description: "Confetti animation" },
  { name: "particles", category: "special-effects", description: "Particle effects" },
  { name: "animated-theme-toggler", category: "special-effects", description: "Animated theme toggle component" },
  
  // Animations
  { name: "blur-fade", category: "animations", description: "Blur fade text animation" },
  
  // Text Animations
  { name: "text-animate", category: "text-animations", description: "Text animation component" },
  { name: "typing-animation", category: "text-animations", description: "Typing animation effect" },
  { name: "line-shadow-text", category: "text-animations", description: "Line shadow text effect" },
  { name: "aurora-text", category: "text-animations", description: "Aurora text animation" },
  { name: "video-text", category: "text-animations", description: "Video text effect" },
  { name: "number-ticker", category: "text-animations", description: "Number ticker animation" },
  { name: "animated-shiny-text", category: "text-animations", description: "Animated shiny text" },
  { name: "animated-gradient-text", category: "text-animations", description: "Animated gradient text" },
  { name: "text-reveal", category: "text-animations", description: "Text reveal animation" },
  { name: "hyper-text", category: "text-animations", description: "Hyper text effect" },
  { name: "word-rotate", category: "text-animations", description: "Word rotation animation" },
  { name: "scroll-based-velocity", category: "text-animations", description: "Scroll-based velocity text" },
  { name: "sparkles-text", category: "text-animations", description: "Sparkles text effect" },
  { name: "morphing-text", category: "text-animations", description: "Morphing text animation" },
  { name: "spinning-text", category: "text-animations", description: "Spinning text animation" },
  { name: "text-highlighter", category: "text-animations", description: "Text highlighter effect" },
  
  // Device Mocks
  { name: "safari", category: "device-mocks", description: "Safari browser mock" },
  { name: "iphone", category: "device-mocks", description: "iPhone device mock" },
  { name: "android", category: "device-mocks", description: "Android device mock" },
  
  // Buttons
  { name: "rainbow-button", category: "buttons", description: "Rainbow button component" },
  { name: "shimmer-button", category: "buttons", description: "Shimmer button effect" },
  { name: "ripple-button", category: "buttons", description: "Ripple button effect" },
  
  // Backgrounds
  { name: "flickering-grid", category: "backgrounds", description: "Flickering grid background" },
  { name: "animated-grid-pattern", category: "backgrounds", description: "Animated grid pattern" },
  { name: "retro-grid", category: "backgrounds", description: "Retro grid background" },
  { name: "ripple", category: "backgrounds", description: "Ripple background effect" },
  { name: "dot-pattern", category: "backgrounds", description: "Dot pattern background" },
  { name: "grid-pattern", category: "backgrounds", description: "Grid pattern background" },
  { name: "striped-pattern", category: "backgrounds", description: "Striped pattern background" },
  { name: "interactive-grid-pattern", category: "backgrounds", description: "Interactive grid pattern" },
  { name: "light-rays", category: "backgrounds", description: "Light rays background" },
  
  // Community Components
  { name: "shiny-button", category: "community", description: "Shiny button component" },
  { name: "file-tree", category: "community", description: "File tree component" },
  { name: "code-comparison", category: "community", description: "Code comparison component" },
  { name: "scroll-progress", category: "community", description: "Scroll progress indicator" },
  { name: "neon-gradient-card", category: "community", description: "Neon gradient card" },
  { name: "comic-text", category: "community", description: "Comic text effect" },
  { name: "cool-mode", category: "community", description: "Cool mode effect" },
  { name: "pixel-image", category: "community", description: "Pixel image effect" },
  { name: "pulsating-button", category: "community", description: "Pulsating button" },
  { name: "warp-background", category: "community", description: "Warp background effect" },
  { name: "interactive-hover-button", category: "community", description: "Interactive hover button" },
  { name: "animated-circular-progress-bar", category: "community", description: "Animated circular progress bar" }
];

// Generate resources from all components
export const magicUIResources = allMagicUIComponents.map(comp => ({
  uri: `magicui://${comp.name}`,
  name: comp.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  description: comp.description,
  mimeType: "text/plain"
}));

/**
 * Handle Magic UI tool calls
 */
export async function handleMagicUITool(name, args) {
  switch (name) {
    case "magicui_get_component": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      // In production, fetch from Magic UI's actual component library
      // For now, return a placeholder that indicates Magic UI integration
      return {
        content: [
          {
            type: "text",
            text: `// Magic UI Component: ${componentName}\n` +
                  `// This component is available from Magic UI\n` +
                  `// Visit https://magicui.design to see the full component\n\n` +
                  `// To get the actual component code, integrate with Magic UI's API or component library\n` +
                  `// Example usage: import { ${componentName} } from '@magicui/react'`
          }
        ]
      };
    }
    
    case "magicui_list_components": {
      const category = args?.category;
      
      const filtered = category 
        ? allMagicUIComponents.filter(c => c.category === category)
        : allMagicUIComponents;
      
      // Also include available categories
      const categories = [...new Set(allMagicUIComponents.map(c => c.category))];
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ 
              components: filtered,
              total: allMagicUIComponents.length,
              categories: categories,
              filtered: filtered.length
            }, null, 2)
          }
        ]
      };
    }
    
    case "magicui_search_components": {
      const query = args?.query?.toLowerCase() || "";
      
      const results = allMagicUIComponents.filter(c => 
        c.name.toLowerCase().includes(query) || 
        c.category.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
      );
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ 
              results,
              query,
              count: results.length,
              total: allMagicUIComponents.length
            }, null, 2)
          }
        ]
      };
    }
    
    default:
      throw new Error(`Unknown Magic UI tool: ${name}`);
  }
}

/**
 * Handle Magic UI resource reads
 */
export async function handleMagicUIResource(uri) {
  if (!uri.startsWith("magicui://")) {
    return null;
  }
  
  const componentName = uri.replace("magicui://", "");
  
  // In production, fetch actual component code from Magic UI
  return {
    contents: [
      {
        uri,
        mimeType: "text/plain",
        text: `// Magic UI Component: ${componentName}\n` +
              `// Full component code available at https://magicui.design/components/${componentName}\n` +
              `// Install: npm install @magicui/react\n` +
              `// Usage: import { ${componentName} } from '@magicui/react'`
      }
    ]
  };
}

