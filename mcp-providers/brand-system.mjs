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

/**
 * Get nested property from object using dot notation
 * Handles paths like "primary.500" or "fontSizes.base"
 * @param {object} obj - Object to traverse
 * @param {string} path - Dot-notation path (e.g., "primary.500", "fontSizes.base")
 * @returns {{value: any, found: boolean, path: string}} - Result with value, found flag, and resolved path
 */
function getNestedProperty(obj, path) {
  if (!obj || typeof obj !== 'object') {
    return { value: null, found: false, path };
  }
  
  // If no dots, try simple property access
  if (!path.includes('.')) {
    const value = obj[path];
    return {
      value: value !== undefined ? value : null,
      found: value !== undefined,
      path
    };
  }
  
  // Split path by dots and traverse
  const parts = path.split('.');
  let current = obj;
  let resolvedPath = '';
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    resolvedPath = resolvedPath ? `${resolvedPath}.${part}` : part;
    
    if (current === null || current === undefined || typeof current !== 'object') {
      return { value: null, found: false, path: resolvedPath };
    }
    
    // Check if property exists
    if (!(part in current)) {
      return { value: null, found: false, path: resolvedPath };
    }
    
    current = current[part];
    
    // If this is the last part, return the value
    if (i === parts.length - 1) {
      return {
        value: current,
        found: true,
        path: resolvedPath
      };
    }
  }
  
  return { value: null, found: false, path };
}

/**
 * Validate color value format
 * Supports hex, rgb, rgba, hsl, hsla, and named colors
 * @param {string} value - Color value to validate
 * @returns {boolean} - True if valid color format
 */
function validateColorValue(value) {
  if (typeof value !== 'string') {
    return false;
  }
  
  // Hex color (#rgb, #rrggbb, #rrggbbaa)
  if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(value)) {
    return true;
  }
  
  // RGB/RGBA
  if (/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+)?\s*\)$/.test(value)) {
    return true;
  }
  
  // HSL/HSLA
  if (/^hsla?\(\s*\d+\s*,\s*[\d.]+%\s*,\s*[\d.]+%\s*(,\s*[\d.]+)?\s*\)$/.test(value)) {
    return true;
  }
  
  // Named colors (basic check - could be expanded)
  const namedColors = ['transparent', 'currentColor', 'inherit', 'initial', 'unset'];
  if (namedColors.includes(value.toLowerCase())) {
    return true;
  }
  
  return false;
}

/**
 * Validate CSS value format
 * Checks if value looks like valid CSS (spacing, typography, radius, shadow)
 * @param {string} value - CSS value to validate
 * @returns {boolean} - True if looks like valid CSS
 */
function validateCSSValue(value) {
  if (typeof value !== 'string') {
    return false;
  }
  
  // Empty or 'none' is valid
  if (value === '' || value === 'none') {
    return true;
  }
  
  // Check for common CSS patterns:
  // - Numbers with units (px, rem, em, %, etc.)
  // - CSS functions (calc(), var(), etc.)
  // - Multiple values (for shadows, etc.)
  const cssPattern = /^([\d.]+(px|rem|em|%|vh|vw|ch|ex|cm|mm|in|pt|pc|deg|rad|grad|ms|s|Hz|kHz)|calc\([^)]+\)|var\([^)]+\)|[\w-]+|\s+)+$/;
  
  return cssPattern.test(value.trim()) || value.trim().length > 0;
}

/**
 * Calculate string similarity using Levenshtein distance
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} - Similarity score (lower is more similar)
 */
function stringSimilarity(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  
  if (len1 === 0) return len2;
  if (len2 === 0) return len1;
  
  const matrix = [];
  
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + 1
        );
      }
    }
  }
  
  return matrix[len1][len2];
}

/**
 * Find similar tokens from available list
 * @param {string[]} availableTokens - List of available token paths
 * @param {string} requestedToken - Token that was requested but not found
 * @param {number} maxResults - Maximum number of suggestions (default: 3)
 * @returns {string[]} - Array of similar token paths, sorted by similarity
 */
function findSimilarTokens(availableTokens, requestedToken, maxResults = 3) {
  if (!availableTokens || availableTokens.length === 0) {
    return [];
  }
  
  // Calculate similarity for each token
  const similarities = availableTokens.map(token => ({
    token,
    distance: stringSimilarity(token.toLowerCase(), requestedToken.toLowerCase())
  }));
  
  // Sort by similarity (lower distance = more similar)
  similarities.sort((a, b) => a.distance - b.distance);
  
  // Return top matches (filter out exact matches and very dissimilar ones)
  return similarities
    .filter(item => item.distance < requestedToken.length && item.token !== requestedToken)
    .slice(0, maxResults)
    .map(item => item.token);
}

/**
 * Recursively get all available token paths from an object
 * @param {object} obj - Object to traverse
 * @param {string} prefix - Current path prefix (for recursion)
 * @returns {string[]} - Flat array of all token paths
 */
function getAvailableTokens(obj, prefix = '') {
  if (!obj || typeof obj !== 'object') {
    return [];
  }
  
  const tokens = [];
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const currentPath = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];
      
      // If value is a primitive (string, number, boolean), it's a token
      if (value !== null && typeof value !== 'object') {
        tokens.push(currentPath);
      } else if (typeof value === 'object' && value !== null) {
        // If value is an object, recurse
        tokens.push(...getAvailableTokens(value, currentPath));
      }
    }
  }
  
  return tokens;
}

// Brand System tools
export const brandSystemTools = [
  {
    name: "brand_get_color",
    description: "Get a color value from the design system. Supports nested access (e.g., 'primary.500') and simple access (e.g., 'success')",
    inputSchema: {
      type: "object",
      properties: {
        colorName: {
          type: "string",
          description: "Color name. Examples: 'primary.500' (nested), 'success' (simple), 'secondary.600' (nested)"
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
    description: "Get typography values from the design system. Supports nested access using dot notation",
    inputSchema: {
      type: "object",
      properties: {
        property: {
          type: "string",
          description: "Typography property path. Examples: 'fontSizes.base', 'fontFamilies.sans', 'fontWeights.bold', 'lineHeights.tight'"
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
      
      // Use nested property access
      const result = getNestedProperty(themeColors, colorName);
      
      // If not found, provide helpful error message
      if (!result.found) {
        const availableTokens = getAvailableTokens(themeColors);
        const suggestions = findSimilarTokens(availableTokens, colorName, 3);
        
        let errorMessage = `Color token '${colorName}' not found in theme '${theme}'.`;
        if (suggestions.length > 0) {
          errorMessage += ` Did you mean: ${suggestions.map(s => `'${s}'`).join(', ')}?`;
        }
        if (availableTokens.length > 0) {
          const sampleTokens = availableTokens.slice(0, 10).join(', ');
          const moreText = availableTokens.length > 10 ? ` (and ${availableTokens.length - 10} more)` : '';
          errorMessage += ` Available tokens: ${sampleTokens}${moreText}`;
        }
        
        throw new Error(errorMessage);
      }
      
      // Validate color value
      const isValid = validateColorValue(result.value);
      if (!isValid && typeof result.value === 'string') {
        console.warn(`Warning: Color value '${result.value}' may not be a valid CSS color format.`);
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              color: result.value,
              colorName: result.path,
              theme,
              valid: isValid
            }, null, 2)
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
      
      // Check both scale and semantic using nested property access
      const scaleResult = getNestedProperty(themeSpacing, `scale.${size}`);
      const semanticResult = getNestedProperty(themeSpacing, `semantic.${size}`);
      const directResult = getNestedProperty(themeSpacing, size);
      
      const result = scaleResult.found ? scaleResult : 
                     semanticResult.found ? semanticResult : 
                     directResult.found ? directResult : null;
      
      // If not found, provide helpful error message
      if (!result || !result.found) {
        const availableTokens = getAvailableTokens(themeSpacing);
        const suggestions = findSimilarTokens(availableTokens, size, 3);
        
        let errorMessage = `Spacing token '${size}' not found in theme '${theme}'.`;
        if (suggestions.length > 0) {
          errorMessage += ` Did you mean: ${suggestions.map(s => `'${s}'`).join(', ')}?`;
        }
        if (availableTokens.length > 0) {
          const sampleTokens = availableTokens.slice(0, 10).join(', ');
          const moreText = availableTokens.length > 10 ? ` (and ${availableTokens.length - 10} more)` : '';
          errorMessage += ` Available tokens: ${sampleTokens}${moreText}`;
        }
        
        throw new Error(errorMessage);
      }
      
      // Validate CSS value
      const isValid = validateCSSValue(result.value);
      if (!isValid && typeof result.value === 'string') {
        console.warn(`Warning: Spacing value '${result.value}' may not be a valid CSS format.`);
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              size: result.path,
              value: result.value,
              theme,
              valid: isValid
            }, null, 2)
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
      
      // Use nested property access
      const result = getNestedProperty(themeTypography, property);
      
      // If not found, provide helpful error message
      if (!result.found) {
        const availableTokens = getAvailableTokens(themeTypography);
        const suggestions = findSimilarTokens(availableTokens, property, 3);
        
        let errorMessage = `Typography token '${property}' not found in theme '${theme}'.`;
        if (suggestions.length > 0) {
          errorMessage += ` Did you mean: ${suggestions.map(s => `'${s}'`).join(', ')}?`;
        }
        if (availableTokens.length > 0) {
          const sampleTokens = availableTokens.slice(0, 10).join(', ');
          const moreText = availableTokens.length > 10 ? ` (and ${availableTokens.length - 10} more)` : '';
          errorMessage += ` Available tokens: ${sampleTokens}${moreText}`;
        }
        
        throw new Error(errorMessage);
      }
      
      // Validate CSS value
      const isValid = validateCSSValue(result.value);
      if (!isValid && typeof result.value === 'string') {
        console.warn(`Warning: Typography value '${result.value}' may not be a valid CSS format.`);
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              property: result.path,
              value: result.value,
              theme,
              valid: isValid
            }, null, 2)
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
      
      // Use nested property access
      const result = getNestedProperty(themeRadii, size);
      
      // If not found, provide helpful error message
      if (!result.found) {
        const availableTokens = getAvailableTokens(themeRadii);
        const suggestions = findSimilarTokens(availableTokens, size, 3);
        
        let errorMessage = `Radius token '${size}' not found in theme '${theme}'.`;
        if (suggestions.length > 0) {
          errorMessage += ` Did you mean: ${suggestions.map(s => `'${s}'`).join(', ')}?`;
        }
        if (availableTokens.length > 0) {
          const sampleTokens = availableTokens.slice(0, 10).join(', ');
          const moreText = availableTokens.length > 10 ? ` (and ${availableTokens.length - 10} more)` : '';
          errorMessage += ` Available tokens: ${sampleTokens}${moreText}`;
        }
        
        throw new Error(errorMessage);
      }
      
      // Validate CSS value
      const isValid = validateCSSValue(result.value);
      if (!isValid && typeof result.value === 'string') {
        console.warn(`Warning: Radius value '${result.value}' may not be a valid CSS format.`);
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              size: result.path,
              value: result.value,
              theme,
              valid: isValid
            }, null, 2)
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
      
      // Use nested property access
      const result = getNestedProperty(themeShadows, size);
      
      // If not found, provide helpful error message
      if (!result.found) {
        const availableTokens = getAvailableTokens(themeShadows);
        const suggestions = findSimilarTokens(availableTokens, size, 3);
        
        let errorMessage = `Shadow token '${size}' not found in theme '${theme}'.`;
        if (suggestions.length > 0) {
          errorMessage += ` Did you mean: ${suggestions.map(s => `'${s}'`).join(', ')}?`;
        }
        if (availableTokens.length > 0) {
          const sampleTokens = availableTokens.slice(0, 10).join(', ');
          const moreText = availableTokens.length > 10 ? ` (and ${availableTokens.length - 10} more)` : '';
          errorMessage += ` Available tokens: ${sampleTokens}${moreText}`;
        }
        
        throw new Error(errorMessage);
      }
      
      // Validate CSS value (shadows can be complex, so we're lenient)
      const isValid = validateCSSValue(result.value);
      if (!isValid && typeof result.value === 'string' && result.value !== 'none') {
        console.warn(`Warning: Shadow value '${result.value}' may not be a valid CSS format.`);
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              size: result.path,
              value: result.value,
              theme,
              valid: isValid || result.value === 'none'
            }, null, 2)
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

