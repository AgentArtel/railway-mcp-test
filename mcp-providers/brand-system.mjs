/**
 * Brand System Provider (Design System API)
 * 
 * Provides design tokens and themes consistently across all projects.
 * Acts as the "Design System API" for both Lovable and Cursor.
 * 
 * Supports multiple themes:
 * - default: Modern, clean design system
 * - rpg_8bit: Retro pixel-art design system
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load design tokens
function loadTokenFile(filename) {
  try {
    const path = join(__dirname, '..', 'design-tokens', filename);
    return JSON.parse(readFileSync(path, 'utf-8'));
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return {};
  }
}

// Brand System tools
export const brandSystemTools = [
  {
    name: "brand_get_color",
    description: "Get a color value from the design system",
    inputSchema: {
      type: "object",
      properties: {
        colorName: {
          type: "string",
          description: "Color name (e.g., 'primary.500', 'success')"
        },
        theme: {
          type: "string",
          description: "Theme name (default: 'default')",
          enum: ["default", "rpg_8bit"]
        }
      },
      required: ["colorName"]
    }
  },
  {
    name: "brand_list_colors",
    description: "List all available colors in the design system",
    inputSchema: {
      type: "object",
      properties: {
        theme: {
          type: "string",
          description: "Theme name (default: 'default')",
          enum: ["default", "rpg_8bit"]
        }
      }
    }
  },
  {
    name: "brand_get_spacing",
    description: "Get a spacing value from the design system",
    inputSchema: {
      type: "object",
      properties: {
        size: {
          type: "string",
          description: "Spacing size (e.g., '4', 'md', 'lg')"
        },
        theme: {
          type: "string",
          description: "Theme name (default: 'default')",
          enum: ["default", "rpg_8bit"]
        }
      },
      required: ["size"]
    }
  },
  {
    name: "brand_list_spacing",
    description: "List all available spacing values",
    inputSchema: {
      type: "object",
      properties: {
        theme: {
          type: "string",
          description: "Theme name (default: 'default')",
          enum: ["default", "rpg_8bit"]
        }
      }
    }
  },
  {
    name: "brand_get_typography",
    description: "Get typography values from the design system",
    inputSchema: {
      type: "object",
      properties: {
        property: {
          type: "string",
          description: "Typography property (e.g., 'fontSizes.base', 'fontFamilies.sans')"
        },
        theme: {
          type: "string",
          description: "Theme name (default: 'default')",
          enum: ["default", "rpg_8bit"]
        }
      },
      required: ["property"]
    }
  },
  {
    name: "brand_list_typography",
    description: "List all typography values",
    inputSchema: {
      type: "object",
      properties: {
        theme: {
          type: "string",
          description: "Theme name (default: 'default')",
          enum: ["default", "rpg_8bit"]
        }
      }
    }
  },
  {
    name: "brand_get_radius",
    description: "Get border radius value",
    inputSchema: {
      type: "object",
      properties: {
        size: {
          type: "string",
          description: "Radius size (e.g., 'md', 'lg', 'full')"
        },
        theme: {
          type: "string",
          description: "Theme name (default: 'default')",
          enum: ["default", "rpg_8bit"]
        }
      },
      required: ["size"]
    }
  },
  {
    name: "brand_get_shadow",
    description: "Get shadow value",
    inputSchema: {
      type: "object",
      properties: {
        size: {
          type: "string",
          description: "Shadow size (e.g., 'sm', 'md', 'lg')"
        },
        theme: {
          type: "string",
          description: "Theme name (default: 'default')",
          enum: ["default", "rpg_8bit"]
        }
      },
      required: ["size"]
    }
  },
  {
    name: "brand_get_theme",
    description: "Get complete theme configuration",
    inputSchema: {
      type: "object",
      properties: {
        themeName: {
          type: "string",
          description: "Theme name",
          enum: ["default", "rpg_8bit"]
        }
      },
      required: ["themeName"]
    }
  },
  {
    name: "brand_list_tokens",
    description: "List all available design tokens",
    inputSchema: {
      type: "object",
      properties: {
        theme: {
          type: "string",
          description: "Theme name (default: 'default')",
          enum: ["default", "rpg_8bit"]
        }
      }
    }
  }
];

// Brand System resources
export const brandSystemResources = [
  {
    uri: "brand://colors",
    name: "Color Palette",
    description: "Complete color palette for the design system",
    mimeType: "application/json"
  },
  {
    uri: "brand://spacing",
    name: "Spacing Scale",
    description: "Spacing scale values",
    mimeType: "application/json"
  },
  {
    uri: "brand://typography",
    name: "Typography System",
    description: "Typography system (fonts, sizes, weights, line heights)",
    mimeType: "application/json"
  },
  {
    uri: "brand://radii",
    name: "Border Radii",
    description: "Border radius values",
    mimeType: "application/json"
  },
  {
    uri: "brand://shadows",
    name: "Shadows",
    description: "Shadow values",
    mimeType: "application/json"
  },
  {
    uri: "brand://themes",
    name: "Themes",
    description: "Complete theme configurations",
    mimeType: "application/json"
  }
];

/**
 * Handle Brand System tool calls
 */
export async function handleBrandSystemTool(name, args) {
  const theme = args?.theme || args?.themeName || "default";
  
  switch (name) {
    case "brand_get_color": {
      const { colorName } = args || {};
      if (!colorName) {
        throw new Error("colorName is required");
      }
      
      const colors = loadTokenFile('colors.json');
      const themeColors = colors[theme] || colors.default;
      
      // TODO: Implement nested property access (e.g., "primary.500")
      const color = themeColors[colorName] || null;
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ color, colorName, theme }, null, 2)
          }
        ]
      };
    }
    
    case "brand_list_colors": {
      const colors = loadTokenFile('colors.json');
      const themeColors = colors[theme] || colors.default;
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ colors: themeColors, theme }, null, 2)
          }
        ]
      };
    }
    
    case "brand_get_spacing": {
      const { size } = args || {};
      if (!size) {
        throw new Error("size is required");
      }
      
      const spacing = loadTokenFile('spacing.json');
      const themeSpacing = spacing[theme] || spacing.default;
      
      // Check both scale and semantic
      const value = themeSpacing.scale?.[size] || themeSpacing.semantic?.[size] || null;
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ size, value, theme }, null, 2)
          }
        ]
      };
    }
    
    case "brand_list_spacing": {
      const spacing = loadTokenFile('spacing.json');
      const themeSpacing = spacing[theme] || spacing.default;
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ spacing: themeSpacing, theme }, null, 2)
          }
        ]
      };
    }
    
    case "brand_get_typography": {
      const { property } = args || {};
      if (!property) {
        throw new Error("property is required");
      }
      
      const typography = loadTokenFile('typography.json');
      const themeTypography = typography[theme] || typography.default;
      
      // TODO: Implement nested property access
      const value = themeTypography[property] || null;
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ property, value, theme }, null, 2)
          }
        ]
      };
    }
    
    case "brand_list_typography": {
      const typography = loadTokenFile('typography.json');
      const themeTypography = typography[theme] || typography.default;
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ typography: themeTypography, theme }, null, 2)
          }
        ]
      };
    }
    
    case "brand_get_radius": {
      const { size } = args || {};
      if (!size) {
        throw new Error("size is required");
      }
      
      const radii = loadTokenFile('radii.json');
      const themeRadii = radii[theme] || radii.default;
      
      const value = themeRadii[size] || null;
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ size, value, theme }, null, 2)
          }
        ]
      };
    }
    
    case "brand_get_shadow": {
      const { size } = args || {};
      if (!size) {
        throw new Error("size is required");
      }
      
      const shadows = loadTokenFile('shadows.json');
      const themeShadows = shadows[theme] || shadows.default;
      
      const value = themeShadows[size] || null;
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ size, value, theme }, null, 2)
          }
        ]
      };
    }
    
    case "brand_get_theme": {
      const { themeName } = args || {};
      if (!themeName) {
        throw new Error("themeName is required");
      }
      
      const themes = loadTokenFile('themes.json');
      const themeConfig = themes.themes?.[themeName] || null;
      
      if (!themeConfig) {
        throw new Error(`Theme '${themeName}' not found`);
      }
      
      // Load all token files for the theme
      const colors = loadTokenFile('colors.json');
      const spacing = loadTokenFile('spacing.json');
      const typography = loadTokenFile('typography.json');
      const radii = loadTokenFile('radii.json');
      const shadows = loadTokenFile('shadows.json');
      
      const fullTheme = {
        ...themeConfig,
        tokens: {
          colors: colors[themeName] || colors.default,
          spacing: spacing[themeName] || spacing.default,
          typography: typography[themeName] || typography.default,
          radii: radii[themeName] || radii.default,
          shadows: shadows[themeName] || shadows.default
        }
      };
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(fullTheme, null, 2)
          }
        ]
      };
    }
    
    case "brand_list_tokens": {
      const colors = loadTokenFile('colors.json');
      const spacing = loadTokenFile('spacing.json');
      const typography = loadTokenFile('typography.json');
      const radii = loadTokenFile('radii.json');
      const shadows = loadTokenFile('shadows.json');
      
      const themeTokens = {
        colors: colors[theme] || colors.default,
        spacing: spacing[theme] || spacing.default,
        typography: typography[theme] || typography.default,
        radii: radii[theme] || radii.default,
        shadows: shadows[theme] || shadows.default
      };
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ tokens: themeTokens, theme }, null, 2)
          }
        ]
      };
    }
    
    default:
      throw new Error(`Unknown Brand System tool: ${name}`);
  }
}

/**
 * Handle Brand System resource reads
 */
export async function handleBrandSystemResource(uri) {
  if (!uri.startsWith("brand://")) {
    return null;
  }
  
  const resourceName = uri.replace("brand://", "");
  
  const tokenFiles = {
    colors: 'colors.json',
    spacing: 'spacing.json',
    typography: 'typography.json',
    radii: 'radii.json',
    shadows: 'shadows.json',
    themes: 'themes.json'
  };
  
  if (tokenFiles[resourceName]) {
    const data = loadTokenFile(tokenFiles[resourceName]);
    
    return {
      contents: [
        {
          uri,
          mimeType: "application/json",
          text: JSON.stringify(data, null, 2)
        }
      ]
    };
  }
  
  return null;
}

