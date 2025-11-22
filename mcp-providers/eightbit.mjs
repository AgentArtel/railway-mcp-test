/**
 * 8bitcn Provider
 * 
 * Retro 8-bit pixel-art components for RPG UI projects.
 * Source: https://www.8bitcn.com/docs/components
 * 
 * Style Domain: rpg_8bit
 * Preferred Theme: rpg_8bit
 */

// All 8bitcn components from https://www.8bitcn.com/docs/components
const allEightbitComponents = [
  { name: "accordion", category: "layout", description: "A vertically stacked set of interactive headings" },
  { name: "alert", category: "feedback", description: "Displays a callout for user attention" },
  { name: "alert-dialog", category: "overlay", description: "A modal dialog that interrupts the user" },
  { name: "avatar", category: "display", description: "An image element with a fallback" },
  { name: "badge", category: "display", description: "Displays a badge or a component that looks like a badge" },
  { name: "breadcrumb", category: "navigation", description: "Displays the path to the current resource" },
  { name: "button", category: "form", description: "Displays a button or a component that looks like a button" },
  { name: "calendar", category: "form", description: "A date field component" },
  { name: "card", category: "layout", description: "Displays a card with header, content, and footer" },
  { name: "carousel", category: "display", description: "A carousel with motion and swipe built using Embla" },
  { name: "chart", category: "display", description: "Chart components built with Recharts" },
  { name: "checkbox", category: "form", description: "A control that allows the user to toggle between checked and not checked" },
  { name: "collapsible", category: "layout", description: "An interactive component which expands/collapses a panel" },
  { name: "combo-box", category: "form", description: "Combobox component for autocomplete" },
  { name: "command", category: "navigation", description: "Command palette component" },
  { name: "context-menu", category: "overlay", description: "Displays a menu to the user" },
  { name: "date-picker", category: "form", description: "A date picker component" },
  { name: "dialog", category: "overlay", description: "A window overlaid on either the primary window" },
  { name: "drawer", category: "overlay", description: "A drawer component for mobile" },
  { name: "dropdown-menu", category: "overlay", description: "Displays a menu to the user" },
  { name: "empty", category: "display", description: "Displays an empty state" },
  { name: "enemy-health", category: "rpg", description: "Enemy health bar component for RPG games" },
  { name: "health-bar", category: "rpg", description: "Health bar component for RPG games" },
  { name: "hover-card", category: "overlay", description: "For sighted users to preview content available behind a link" },
  { name: "input", category: "form", description: "Displays a form input field" },
  { name: "input-otp", category: "form", description: "Input component for one-time passwords" },
  { name: "item", category: "display", description: "Item component" },
  { name: "kbd", category: "display", description: "Keyboard key component" },
  { name: "label", category: "form", description: "Renders an accessible label associated with controls" },
  { name: "mana-bar", category: "rpg", description: "Mana bar component for RPG games" },
  { name: "menubar", category: "navigation", description: "A visually persistent menu common in desktop applications" },
  { name: "navigation-menu", category: "navigation", description: "A collection of links for navigating websites" },
  { name: "pagination", category: "navigation", description: "Pagination component" },
  { name: "popover", category: "overlay", description: "Displays rich content in a portal" },
  { name: "progress", category: "feedback", description: "Displays an indicator showing the completion progress of a task" },
  { name: "radio-group", category: "form", description: "A set of checkable buttons—known as radio buttons" },
  { name: "resizable", category: "layout", description: "Accessible resizable panel groups and layouts" },
  { name: "retro-switcher", category: "form", description: "Retro-style switch component" },
  { name: "scroll-area", category: "layout", description: "Augments native scroll functionality for custom styling" },
  { name: "select", category: "form", description: "Displays a list of options for the user to pick from" },
  { name: "separator", category: "layout", description: "Visually or semantically separates content" },
  { name: "sheet", category: "overlay", description: "Extends the Dialog component to display content that complements the main content" },
  { name: "sidebar", category: "layout", description: "Sidebar component" },
  { name: "skeleton", category: "feedback", description: "Use to show a placeholder while content is loading" },
  { name: "slider", category: "form", description: "An input where the user selects a value from within a given range" },
  { name: "spinner", category: "feedback", description: "Spinner loading component" },
  { name: "switch", category: "form", description: "A control that allows the user to toggle between checked and not checked" },
  { name: "table", category: "display", description: "A responsive table component" },
  { name: "tabs", category: "layout", description: "A set of layered sections of content" },
  { name: "textarea", category: "form", description: "Displays a form textarea" },
  { name: "theme-selector", category: "form", description: "Theme selector component" },
  { name: "toast", category: "feedback", description: "A succinct message that is displayed temporarily" },
  { name: "toggle", category: "form", description: "A two-state button that can be either on or off" },
  { name: "toggle-group", category: "form", description: "A set of two-state buttons that can be toggled on or off" },
  { name: "tooltip", category: "overlay", description: "A popup that displays information related to an element" }
];

// Generate resources from all components
export const eightbitResources = allEightbitComponents.map(comp => ({
  uri: `8bit://${comp.name}`,
  name: comp.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  description: comp.description,
  mimeType: "text/plain"
}));

// 8bitcn component tools
export const eightbitTools = [
  {
    name: "eightbit_get_component",
    description: "Get an 8bitcn component by name",
    inputSchema: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the 8bitcn component to retrieve"
        }
      },
      required: ["componentName"]
    }
  },
  {
    name: "eightbit_list_components",
    description: "List all available 8bitcn components",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter (form, layout, overlay, display, feedback, navigation, rpg)"
        }
      }
    }
  },
  {
    name: "eightbit_search_components",
    description: "Search 8bitcn components by keyword",
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

/**
 * Handle 8bitcn tool calls
 */
export async function handleEightbitTool(name, args) {
  switch (name) {
    case "eightbit_get_component": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      return {
        content: [
          {
            type: "text",
            text: `// 8bitcn Component: ${componentName}\n` +
                  `// This component is available from 8bitcn\n` +
                  `// Visit https://www.8bitcn.com/docs/components/${componentName} for documentation\n\n` +
                  `// Style Domain: rpg_8bit\n` +
                  `// Preferred Theme: rpg_8bit\n\n` +
                  `// Installation: pnpm dlx shadcn@latest add @8bitcn/${componentName}@8bitcn/${componentName}`
          }
        ]
      };
    }
    
    case "eightbit_list_components": {
      const category = args?.category;
      const filtered = category 
        ? allEightbitComponents.filter(c => c.category === category)
        : allEightbitComponents;
      
      const categories = [...new Set(allEightbitComponents.map(c => c.category))];
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ 
              components: filtered,
              total: allEightbitComponents.length,
              categories: categories,
              filtered: filtered.length,
              styleDomain: "rpg_8bit",
              preferredTheme: "rpg_8bit"
            }, null, 2)
          }
        ]
      };
    }
    
    case "eightbit_search_components": {
      const query = args?.query?.toLowerCase() || "";
      const results = allEightbitComponents.filter(c => 
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
              total: allEightbitComponents.length
            }, null, 2)
          }
        ]
      };
    }
    
    default:
      throw new Error(`Unknown 8bitcn tool: ${name}`);
  }
}

/**
 * Handle 8bitcn resource reads
 */
export async function handleEightbitResource(uri) {
  if (!uri.startsWith("8bit://")) {
    return null;
  }
  
  const componentName = uri.replace("8bit://", "");
  
  return {
    contents: [
      {
        uri,
        mimeType: "text/plain",
        text: `// 8bitcn Component: ${componentName}\n` +
              `// Documentation: https://www.8bitcn.com/docs/components/${componentName}\n` +
              `// Style Domain: rpg_8bit\n` +
              `// Preferred Theme: rpg_8bit\n\n` +
              `// Installation: pnpm dlx shadcn@latest add @8bitcn/${componentName}@8bitcn/${componentName}`
      }
    ]
  };
}
